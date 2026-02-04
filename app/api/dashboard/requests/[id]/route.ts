import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import { createHash } from "crypto";

const COOKIE_NAME = "dashboard_auth";
const STATUS_VALUES = ["nuevo", "en-proceso", "respondido", "cerrado"];

function getToken(password: string): string {
  return createHash("sha256")
    .update(password + (process.env.DASHBOARD_SECRET_SALT || "sweet-events"))
    .digest("hex");
}

async function requireDashboardAuth(): Promise<boolean> {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME)?.value;
  if (!cookie) return false;
  return cookie === getToken(password);
}

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireDashboardAuth())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  try {
    const body = await _request.json();
    const { notes, status } = body;
    const updates: Record<string, unknown> = {};
    if (notes !== undefined) {
      updates.notes = typeof notes === "string" ? notes : null;
    }
    if (status !== undefined) {
      if (status !== null && !STATUS_VALUES.includes(status)) {
        return NextResponse.json(
          { error: "Estado no válido" },
          { status: 400 }
        );
      }
      updates.status = status ?? null;
    }
    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ success: true });
    }
    if (!supabaseAdmin) {
      return NextResponse.json({ success: true });
    }
    const { error } = await supabaseAdmin
      .from("contact_requests")
      .update(updates)
      .eq("id", id);
    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json(
        { error: "Error al actualizar" },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("PATCH request error:", e);
    return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireDashboardAuth())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ success: true });
    }
    const { error } = await supabaseAdmin
      .from("contact_requests")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE request error:", e);
    return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
  }
}
