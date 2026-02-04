import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";
import { sendConfirmationEmail, sendOwnerNotificationEmail } from "@/lib/email";

const BUDGET_VALUES = ["under-2000", "2000-5000", "5000-10000", "over-10000"];
const SERVICE_VALUES = [
  "weddings",
  "corporate",
  "dinners",
  "communions",
  "announcements",
  "other",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone = "",
      service,
      date: event_date = "",
      budget = "",
      message,
    } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Nombre es obligatorio" },
        { status: 400 }
      );
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Email válido es obligatorio" },
        { status: 400 }
      );
    }
    if (!service || !SERVICE_VALUES.includes(service)) {
      return NextResponse.json(
        { error: "Servicio es obligatorio" },
        { status: 400 }
      );
    }
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Mensaje es obligatorio" },
        { status: 400 }
      );
    }
    if (budget && !BUDGET_VALUES.includes(budget)) {
      return NextResponse.json(
        { error: "Presupuesto no válido" },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim() : "",
      service,
      event_date: typeof event_date === "string" ? event_date.trim() : "",
      budget: budget || "",
      message: message.trim(),
    };

    let requestId: string | null = null;

    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin
        .from("contact_requests")
        .insert({
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          service: payload.service,
          event_date: payload.event_date || null,
          budget: payload.budget || null,
          message: payload.message,
        })
        .select("id")
        .single();

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Error al guardar la solicitud" },
          { status: 500 }
        );
      }
      requestId = data?.id ?? null;
    }

    const [confirmationOk, ownerOk] = await Promise.all([
      sendConfirmationEmail(payload),
      sendOwnerNotificationEmail(payload, requestId || "no-id"),
    ]);

    if (!confirmationOk && process.env.RESEND_API_KEY) {
      console.warn("Confirmation email failed to send");
    }
    if (!ownerOk && process.env.OWNER_EMAIL) {
      console.warn("Owner notification email failed to send");
    }

    return NextResponse.json({
      success: true,
      id: requestId,
    });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
