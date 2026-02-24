import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_OWNER_ID = process.env.HUBSPOT_OWNER_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, company } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!HUBSPOT_ACCESS_TOKEN) {
      console.error("HUBSPOT_ACCESS_TOKEN not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: name || "",
            company: company || "",
            lifecyclestage: "subscriber",
            hs_lead_status: "NEW",
            waitlist_signup: true,
            product: "Servible",
            hubspot_owner_id: HUBSPOT_OWNER_ID || "",
          },
        }),
      }
    );

    if (response.status === 409) {
      const searchResponse = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            filterGroups: [
              {
                filters: [
                  {
                    propertyName: "email",
                    operator: "EQ",
                    value: email,
                  },
                ],
              },
            ],
          }),
        }
      );

      const searchData = await searchResponse.json();

      if (searchData.results && searchData.results.length > 0) {
        const contactId = searchData.results[0].id;

        await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({
              properties: {
                hs_lead_status: "NEW",
                waitlist_signup: true,
                product: "Servible",
              },
            }),
          }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Already on waitlist",
      });
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot error:", errorData);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist",
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
