import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createHash } from "crypto";
import { DashboardLoginForm } from "./login-form";

const COOKIE_NAME = "dashboard_auth";

function getToken(password: string): string {
  return createHash("sha256")
    .update(password + (process.env.DASHBOARD_SECRET_SALT || "sweet-events"))
    .digest("hex");
}

export default async function DashboardLoginPage() {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="rounded-2xl border border-white/10 bg-white/2 p-8 max-w-md text-center">
          <h1 className="font-serif text-xl font-light mb-4">
            Dashboard no configurado
          </h1>
          <p className="text-muted-foreground text-sm">
            Añade <code className="text-foreground/80">DASHBOARD_PASSWORD</code>{" "}
            en tu archivo .env para activar el acceso.
          </p>
        </div>
      </main>
    );
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME)?.value;
  if (cookie === getToken(password)) {
    redirect("/dashboard/requests");
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-sm">
        <h1 className="font-serif text-2xl font-light text-foreground mb-2">
          Acceso al dashboard
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Introduce la contraseña para ver las solicitudes de contacto.
        </p>
        <DashboardLoginForm />
      </div>
    </main>
  );
}
