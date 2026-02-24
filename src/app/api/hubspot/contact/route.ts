import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_OWNER_ID = process.env.HUBSPOT_OWNER_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, subject, message } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
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

    const contactResponse = await fetch(
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
            lifecyclestage: "lead",
            hs_lead_status: "NEW",
            contact_form_submission: true,
            product: "Servible",
            hubspot_owner_id: HUBSPOT_OWNER_ID || "",
          },
        }),
      }
    );

    let contactId: string;

    if (contactResponse.status === 409) {
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
      contactId = searchData.results[0].id;
    } else if (contactResponse.ok) {
      const contactData = await contactResponse.json();
      contactId = contactData.id;
    } else {
      const errorData = await contactResponse.json();
      console.error("HubSpot contact error:", errorData);
      return NextResponse.json(
        { error: "Failed to create contact" },
        { status: 500 }
      );
    }

    // Create a note with the message, including subject
    const noteBody = subject
      ? `Contact form message [${subject}]:\n\n${message}`
      : `Contact form message:\n\n${message}`;

    const noteResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/notes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: noteBody,
            hs_timestamp: Date.now(),
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 202,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!noteResponse.ok) {
      console.error("Failed to create note, but contact was created");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
