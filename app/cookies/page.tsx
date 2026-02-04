import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies | Sweet Events",
  description:
    "Información sobre el uso de cookies en el sitio web de Sweet Events y cómo gestionar tus preferencias.",
  openGraph: {
    title: "Cookies | Sweet Events",
    description:
      "Información sobre el uso de cookies y cómo gestionar tus preferencias.",
    url: "/cookies",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events — Cookies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies | Sweet Events",
    description:
      "Información sobre el uso de cookies y cómo gestionar tus preferencias.",
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Cookies
          </h1>
          <p className="text-muted-foreground">
            Información sobre el uso de cookies en este sitio web.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              En Sweet Events utilizamos cookies y tecnologías similares para
              mejorar tu experiencia, entender cómo se usa el sitio y optimizar
              nuestro contenido. Puedes gestionar tus preferencias desde la
              configuración de tu navegador.
            </p>

            <h2 className="font-serif text-2xl font-light text-foreground mt-10 mb-4">
              ¿Qué son las cookies?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Las cookies son pequeños archivos de texto que se guardan en tu
              dispositivo cuando visitas un sitio web. Permiten, por ejemplo,
              recordar tus preferencias y ayudarnos a analizar el rendimiento
              del sitio.
            </p>

            <h2 className="font-serif text-2xl font-light text-foreground mt-10 mb-4">
              Tipos de cookies que podemos usar
            </h2>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>
                <strong>Cookies técnicas</strong>: necesarias para el
                funcionamiento básico del sitio.
              </li>
              <li>
                <strong>Cookies de preferencias</strong>: guardan elecciones
                como idioma o tema.
              </li>
              <li>
                <strong>Cookies analíticas</strong>: nos ayudan a entender qué
                páginas se visitan y cómo mejorar la experiencia.
              </li>
              <li>
                <strong>Cookies de marketing</strong>: se usan para medir
                campañas y personalizar comunicaciones (si aplican).
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-light text-foreground mt-10 mb-4">
              Cómo desactivar o eliminar cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Puedes bloquear o eliminar cookies desde tu navegador. Ten en
              cuenta que algunas funciones del sitio podrían verse afectadas.
            </p>

            <h2 className="font-serif text-2xl font-light text-foreground mt-10 mb-4">
              Más información
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Para conocer cómo tratamos tus datos personales, consulta nuestra{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Política de privacidad
              </Link>{" "}
              o visita nuestra{" "}
              <Link href="/contact" className="text-primary hover:underline">
                página de contacto
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

