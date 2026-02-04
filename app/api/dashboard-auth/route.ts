import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHash } from "crypto";

const COOKIE_NAME = "dashboard_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getToken(password: string): string {
  return createHash("sha256")
    .update(password + (process.env.DASHBOARD_SECRET_SALT || "sweet-events"))
    .digest("hex");
}

export async function POST(request: Request) {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return NextResponse.json(
      { error: "Dashboard no configurado" },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const { password: submitted } = body;

  if (submitted === password) {
    const token = getToken(password);
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return NextResponse.json({ success: true });
}
