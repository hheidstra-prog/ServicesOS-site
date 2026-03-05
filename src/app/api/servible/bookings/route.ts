import { NextRequest, NextResponse } from "next/server";

const SERVIBLE_API_URL =
  process.env.SERVIBLE_API_URL || "http://localhost:3001/api/v1";
const SERVIBLE_API_KEY = process.env.SERVIBLE_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { durationMinutes, date, time, name, email, phone, notes } = body;

    if (!durationMinutes || !date || !time || !name || !email) {
      return NextResponse.json(
        { error: "Duration, date, time, name, and email are required" },
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

    const response = await fetch(`${SERVIBLE_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVIBLE_API_KEY}`,
      },
      body: JSON.stringify({
        durationMinutes,
        date,
        time,
        name,
        email,
        phone: phone || undefined,
        notes: notes || undefined,
        source: "Servible Site",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Servible bookings API error:", data);
      return NextResponse.json(
        { error: data.error || "Failed to create booking" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking created successfully",
    });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
