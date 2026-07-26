import { NextRequest, NextResponse } from "next/server";
import { RsvpFormData, RsvpApiResponse } from "@/types/wedding";

export async function POST(req: NextRequest): Promise<NextResponse<RsvpApiResponse>> {
  try {
    const body: RsvpFormData = await req.json();

    // Validation
    if (!body.fullName || !body.phoneNumber || !body.attending) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Phone, Attending)." },
        { status: 400 }
      );
    }

    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (googleSheetsWebhookUrl) {
      try {
        await fetch(googleSheetsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            fullName: body.fullName,
            phoneNumber: body.phoneNumber,
            attending: body.attending === "yes" ? "Attending" : "Declined",
            guestCount: body.guestCount || 1,
            specialNote: body.specialNote || "",
          }),
        });
      } catch (webhookError) {
        console.error("Failed to forward RSVP to Google Sheets:", webhookError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your RSVP has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("RSVP API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while processing your response." },
      { status: 500 }
    );
  }
}
