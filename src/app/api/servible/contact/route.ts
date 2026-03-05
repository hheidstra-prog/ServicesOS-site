import { NextRequest, NextResponse } from "next/server";

const SERVIBLE_API_URL =
  process.env.SERVIBLE_API_URL || "http://localhost:3001";
const SERVIBLE_API_KEY = process.env.SERVIBLE_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, preferred_language } =
      body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
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

    // Build the message body, including subject and language if provided
    const fullMessage = [
      subject ? `[${subject}]` : null,
      message,
      preferred_language ? `\n---\nPreferred language: ${preferred_language}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    const response = await fetch(`${SERVIBLE_API_URL}/api/v1/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVIBLE_API_KEY}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        message: fullMessage,
        source: "contact_form",
        title: "Contact form submission",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Servible API error:", data);
      return NextResponse.json(
        { error: data.error || "Failed to submit contact form" },
        { status: response.status }
      );
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
