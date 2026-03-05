import { NextRequest, NextResponse } from "next/server";

const SERVIBLE_API_URL =
  process.env.SERVIBLE_API_URL || "http://localhost:3001/api/v1";
const SERVIBLE_API_KEY = process.env.SERVIBLE_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!SERVIBLE_API_KEY) {
      console.error("SERVIBLE_API_KEY not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(`${SERVIBLE_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVIBLE_API_KEY}`,
      },
      body: JSON.stringify({
        name,
        email,
        company: company || undefined,
        source: "early_bird",
        title: "Early bird signup",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Servible API error:", data);
      return NextResponse.json(
        { error: data.error || "Failed to join waitlist" },
        { status: response.status }
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
