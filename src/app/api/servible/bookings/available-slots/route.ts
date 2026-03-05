import { NextRequest, NextResponse } from "next/server";

const SERVIBLE_API_URL =
  process.env.SERVIBLE_API_URL || "http://localhost:3001/api/v1";
const SERVIBLE_API_KEY = process.env.SERVIBLE_API_KEY;

export async function GET(request: NextRequest) {
  if (!SERVIBLE_API_KEY) {
    console.error("SERVIBLE_API_KEY not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const duration = searchParams.get("duration");

  if (!date || !duration) {
    return NextResponse.json(
      { error: "date and duration are required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${SERVIBLE_API_URL}/bookings/available-slots?date=${date}&duration=${duration}`,
      { headers: { Authorization: `Bearer ${SERVIBLE_API_KEY}` } }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to fetch available slots" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Available slots error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
