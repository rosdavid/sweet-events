import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Sweet Events <onboarding@resend.dev>";
const OWNER_EMAIL = process.env.OWNER_EMAIL || "";
const SITE_NAME = "Sweet Events";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  event_date: string;
  budget: string;
  message: string;
};

function formatLabel(key: string): string {
  const labels: Record<string, string> = {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    service: "Servicio",
    event_date: "Fecha del evento",
    budget: "Presupuesto",
    message: "Mensaje",
  };
  return labels[key] || key;
}

function formatService(value: string): string {
  const map: Record<string, string> = {
    weddings: "Boda · Fotografía y video",
    corporate: "Evento corporativo",
    dinners: "Cena / Gala privada",
    communions: "Comunión · Evento religioso",
    announcements: "Anuncios · Retratos",
    other: "Otro",
  };
  return map[value] || value;
}

function formatBudget(value: string): string {
  const map: Record<string, string> = {
    "under-2000": "Menos de 2.000 €",
    "2000-5000": "2.000 € – 5.000 €",
    "5000-10000": "5.000 € – 10.000 €",
    "over-10000": "Más de 10.000 €",
  };
  return map[value] || value || "—";
}

export async function sendConfirmationEmail(
  payload: ContactPayload
): Promise<boolean> {
  if (!resend || !payload.email) return false;

  const serviceLabel = formatService(payload.service);
  const budgetLabel = payload.budget ? formatBudget(payload.budget) : "—";
  const eventDate = payload.event_date || "—";

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: payload.email,
    subject: `Hemos recibido tu mensaje — ${SITE_NAME}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="font-weight: 600; color: #111;">Hola ${payload.name},</h2>
        <p style="color: #333; line-height: 1.6;">Hemos recibido tu solicitud correctamente. Te responderemos en menos de 24 horas.</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #666;">Resumen de tu mensaje</p>
          <p style="margin: 4px 0;"><strong>${formatLabel(
            "service"
          )}:</strong> ${serviceLabel}</p>
          <p style="margin: 4px 0;"><strong>${formatLabel(
            "event_date"
          )}:</strong> ${eventDate}</p>
          <p style="margin: 4px 0;"><strong>${formatLabel(
            "budget"
          )}:</strong> ${budgetLabel}</p>
          <p style="margin: 12px 0 0; white-space: pre-wrap;">${
            payload.message
          }</p>
        </div>
        <p style="color: #666; font-size: 14px;">Si tienes alguna duda, responde a este email.</p>
        <p style="color: #666; font-size: 14px;">— ${SITE_NAME}</p>
      </div>
    `,
  });

  return !error;
}

export async function sendOwnerNotificationEmail(
  payload: ContactPayload,
  requestId: string
): Promise<boolean> {
  if (!resend || !OWNER_EMAIL) return false;

  const serviceLabel = formatService(payload.service);
  const budgetLabel = payload.budget ? formatBudget(payload.budget) : "—";
  const eventDate = payload.event_date || "—";

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    subject: `Nueva solicitud de contacto — ${payload.name} (${serviceLabel})`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="font-weight: 600; color: #111;">Nueva solicitud de contacto</h2>
        <p style="color: #666; font-size: 14px;">ID: ${requestId}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "name"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
      payload.name
    }</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "email"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${
      payload.email
    }">${payload.email}</a></td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "phone"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
      payload.phone || "—"
    }</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "service"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${serviceLabel}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "event_date"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${eventDate}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${formatLabel(
            "budget"
          )}</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${budgetLabel}</td></tr>
        </table>
        <p style="margin: 8px 0 4px;"><strong>${formatLabel(
          "message"
        )}:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${
          payload.message
        }</p>
      </div>
    `,
  });

  return !error;
}
