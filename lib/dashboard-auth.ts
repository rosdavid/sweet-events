import { cookies } from "next/headers";
import { createHash } from "crypto";

const COOKIE_NAME = "dashboard_auth";

function getToken(password: string): string {
  return createHash("sha256")
    .update(password + (process.env.DASHBOARD_SECRET_SALT || "sweet-events"))
    .digest("hex");
}

export async function isDashboardAuthenticated(): Promise<boolean> {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;

  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME)?.value;
  if (!cookie) return false;

  return cookie === getToken(password);
}
