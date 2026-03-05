import { NextResponse } from "next/server";

const SERVIBLE_API_URL =
  process.env.SERVIBLE_API_URL || "http://localhost:3001";
const SERVIBLE_API_KEY = process.env.SERVIBLE_API_KEY;

export async function GET() {
  if (!SERVIBLE_API_KEY) {
    console.error("SERVIBLE_API_KEY not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${SERVIBLE_API_URL}/api/v1/bookings/config`, {
      headers: { Authorization: `Bearer ${SERVIBLE_API_KEY}` },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to fetch config" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Booking config error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
