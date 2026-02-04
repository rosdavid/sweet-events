import { redirect } from "next/navigation";
import { isDashboardAuthenticated } from "@/lib/dashboard-auth";
import { supabaseAdmin } from "@/lib/supabase-server";
import type { ContactRequest } from "@/lib/supabase-server";
import { LogoutButton } from "./logout-button";
import { RequestsTable } from "./requests-table";

const MOCK_REQUESTS: ContactRequest[] = [
  {
    id: "1",
    name: "María García López",
    email: "maria.garcia@email.com",
    phone: "+34 612 111 001",
    service: "weddings",
    event_date: "2025-06-14",
    budget: "5000-10000",
    message:
      "Hola, nos casamos el 14 de junio de 2025 en una finca en Toledo. Buscamos un estilo natural y romántico. La boda será de unas 120 personas.",
    created_at: new Date(Date.now() - 1 * 864e5).toISOString(),
  },
  {
    id: "2",
    name: "Carlos Ruiz Martín",
    email: "carlos.ruiz@empresa.com",
    phone: "+34 633 222 002",
    service: "corporate",
    event_date: "2025-03-20",
    budget: "2000-5000",
    message:
      "Necesitamos cobertura fotográfica para nuestro evento corporativo anual. Serán unas 80 personas en Madrid.",
    created_at: new Date(Date.now() - 2 * 864e5).toISOString(),
  },
  {
    id: "3",
    name: "Ana Belén Fernández",
    email: "ana.fernandez@gmail.com",
    phone: null,
    service: "communions",
    event_date: "2025-05-10",
    budget: "under-2000",
    message:
      "Comunión de mi hija en mayo. Ceremonia en iglesia y almuerzo en casa rural. ¿Podrían darme presupuesto?",
    created_at: new Date(Date.now() - 3 * 864e5).toISOString(),
  },
  {
    id: "4",
    name: "Pablo Sánchez Torres",
    email: "pablo.sanchez@outlook.es",
    phone: "+34 644 444 004",
    service: "weddings",
    event_date: "2025-09-06",
    budget: "over-10000",
    message:
      "Boda destino en Mallorca, 150 invitados. Queremos reportaje completo + video. ¿Hacen bodas fuera de Madrid?",
    created_at: new Date(Date.now() - 4 * 864e5).toISOString(),
  },
  {
    id: "5",
    name: "Laura Martínez Gil",
    email: "laura.martinez@yahoo.es",
    phone: "+34 655 555 005",
    service: "announcements",
    event_date: null,
    budget: "under-2000",
    message:
      "Buscamos sesión de anuncios de embarazo. Preferimos exterior, estilo editorial. Disponibilidad en abril.",
    created_at: new Date(Date.now() - 5 * 864e5).toISOString(),
  },
  {
    id: "6",
    name: "Miguel Ángel Díaz",
    email: "miguel.diaz@email.com",
    phone: "+34 666 666 006",
    service: "dinners",
    event_date: "2025-12-31",
    budget: "5000-10000",
    message:
      "Cena de Nochevieja para 60 personas en hotel de lujo. Necesitamos fotografía discreta durante la cena y el baile.",
    created_at: new Date(Date.now() - 6 * 864e5).toISOString(),
  },
  {
    id: "7",
    name: "Elena Rodríguez Vega",
    email: "elena.rodriguez@gmail.com",
    phone: null,
    service: "weddings",
    event_date: "2025-07-19",
    budget: "2000-5000",
    message:
      "Boda íntima en jardín, 40 personas. Estilo documental, nada posado. Fecha confirmada 19 julio.",
    created_at: new Date(Date.now() - 7 * 864e5).toISOString(),
  },
  {
    id: "8",
    name: "David López Herrera",
    email: "david.lopez@empresa.org",
    phone: "+34 677 777 007",
    service: "corporate",
    event_date: "2025-04-15",
    budget: "2000-5000",
    message:
      "Evento de lanzamiento de producto. Necesitamos fotos para redes y web. Duración aprox 3 horas.",
    created_at: new Date(Date.now() - 8 * 864e5).toISOString(),
  },
  {
    id: "9",
    name: "Isabel Castro Ruiz",
    email: "isabel.castro@hotmail.com",
    phone: "+34 688 888 008",
    service: "communions",
    event_date: "2025-04-26",
    budget: "2000-5000",
    message:
      "Comunión doble (hermanos) en Salamanca. Iglesia + restaurante. ¿Pueden desplazarse?",
    created_at: new Date(Date.now() - 9 * 864e5).toISOString(),
  },
  {
    id: "10",
    name: "Javier Moreno Alonso",
    email: "javier.moreno@email.com",
    phone: "+34 699 999 009",
    service: "other",
    event_date: null,
    budget: null,
    message:
      "Tengo un proyecto artístico y necesito fotografía profesional. ¿Pueden contactarme para explicarles la idea?",
    created_at: new Date(Date.now() - 10 * 864e5).toISOString(),
  },
  {
    id: "11",
    name: "Carmen Serrano Jiménez",
    email: "carmen.serrano@gmail.com",
    phone: "+34 600 100 010",
    service: "weddings",
    event_date: "2025-08-22",
    budget: "5000-10000",
    message:
      "Boda en viñedo, 200 invitados. Queremos reportaje emocional + book de pareja. Presupuesto flexible.",
    created_at: new Date(Date.now() - 11 * 864e5).toISOString(),
  },
  {
    id: "12",
    name: "Alberto Ramos Navarro",
    email: "alberto.ramos@empresa.com",
    phone: null,
    service: "corporate",
    event_date: "2025-05-08",
    budget: "5000-10000",
    message:
      "Conferencia internacional, 300 asistentes. Necesitamos cobertura durante 2 días completos.",
    created_at: new Date(Date.now() - 12 * 864e5).toISOString(),
  },
  {
    id: "13",
    name: "Sandra Iglesias Mora",
    email: "sandra.iglesias@outlook.es",
    phone: "+34 611 111 011",
    service: "dinners",
    event_date: "2025-06-21",
    budget: "2000-5000",
    message:
      "Cena de gala benéfica. Silent auction + baile. Ambiente elegante, fotos para memoria del evento.",
    created_at: new Date(Date.now() - 13 * 864e5).toISOString(),
  },
  {
    id: "14",
    name: "Fernando Domínguez",
    email: "fernando.dominguez@email.com",
    phone: "+34 622 222 012",
    service: "weddings",
    event_date: "2025-10-11",
    budget: "over-10000",
    message:
      "Boda en castillo histórico. 180 invitados, ceremonia civil + cena. Buscamos equipo completo foto+video.",
    created_at: new Date(Date.now() - 14 * 864e5).toISOString(),
  },
  {
    id: "15",
    name: "Patricia Rubio García",
    email: "patricia.rubio@gmail.com",
    phone: "+34 633 333 013",
    service: "announcements",
    event_date: "2025-04-05",
    budget: "under-2000",
    message:
      "Sesión de anuncios para primavera. Queremos parque o jardín, luz natural. Somos pareja esperando primer bebé.",
    created_at: new Date(Date.now() - 15 * 864e5).toISOString(),
  },
  {
    id: "16",
    name: "Ricardo Soto Blanco",
    email: "ricardo.soto@empresa.es",
    phone: "+34 644 444 014",
    service: "corporate",
    event_date: "2025-06-12",
    budget: "2000-5000",
    message:
      "Team building anual. Actividades outdoor + cena. Fotos para comunicación interna y redes.",
    created_at: new Date(Date.now() - 16 * 864e5).toISOString(),
  },
  {
    id: "17",
    name: "Marta Vargas Prieto",
    email: "marta.vargas@yahoo.es",
    phone: null,
    service: "weddings",
    event_date: "2025-11-08",
    budget: "5000-10000",
    message:
      "Boda otoño en Barcelona. Estilo bohemio, 90 personas. Ceremonia al atardecer en terraza con vistas.",
    created_at: new Date(Date.now() - 17 * 864e5).toISOString(),
  },
  {
    id: "18",
    name: "Antonio Molina León",
    email: "antonio.molina@email.com",
    phone: "+34 655 555 015",
    service: "communions",
    event_date: "2025-05-17",
    budget: "under-2000",
    message:
      "Comunión sencilla en Málaga. Solo ceremonia y familia en casa. Presupuesto ajustado.",
    created_at: new Date(Date.now() - 18 * 864e5).toISOString(),
  },
  {
    id: "19",
    name: "Rosa Delgado Cruz",
    email: "rosa.delgado@gmail.com",
    phone: "+34 666 666 016",
    service: "dinners",
    event_date: "2025-09-20",
    budget: "5000-10000",
    message:
      "Cena de aniversario empresarial. 25 años de la empresa, 100 empleados. Ambiente festivo y profesional.",
    created_at: new Date(Date.now() - 19 * 864e5).toISOString(),
  },
  {
    id: "20",
    name: "Francisco Ortiz Marín",
    email: "francisco.ortiz@outlook.com",
    phone: "+34 677 777 017",
    service: "other",
    event_date: "2025-07-01",
    budget: "2000-5000",
    message:
      "Necesitamos fotografía para catálogo de productos artesanales. Sesiones en estudio o ubicación.",
    created_at: new Date(Date.now() - 20 * 864e5).toISOString(),
  },
  {
    id: "21",
    name: "Cristina Núñez Gil",
    email: "cristina.nunez@email.com",
    phone: "+34 688 888 018",
    service: "weddings",
    event_date: "2025-08-02",
    budget: "2000-5000",
    message:
      "Boda rural en Extremadura. Pequeña, 50 personas. Queremos fotos naturales y sin poses forzadas.",
    created_at: new Date(Date.now() - 21 * 864e5).toISOString(),
  },
  {
    id: "22",
    name: "Luis Romero Silva",
    email: "luis.romero@empresa.com",
    phone: null,
    service: "corporate",
    event_date: "2025-04-25",
    budget: "over-10000",
    message:
      "Congreso anual 2 días. Keynotes, networking, gala dinner. Cobertura completa para web y materiales.",
    created_at: new Date(Date.now() - 22 * 864e5).toISOString(),
  },
  {
    id: "23",
    name: "Beatriz Guerrero López",
    email: "beatriz.guerrero@gmail.com",
    phone: "+34 699 999 019",
    service: "announcements",
    event_date: null,
    budget: "under-2000",
    message:
      "Sesión de embarazo en estudio. Preferimos luz suave y estilo íntimo. ¿Tienen estudio propio?",
    created_at: new Date(Date.now() - 23 * 864e5).toISOString(),
  },
  {
    id: "24",
    name: "José Miguel Campos",
    email: "jose.campos@email.com",
    phone: "+34 600 200 020",
    service: "weddings",
    event_date: "2025-09-27",
    budget: "5000-10000",
    message:
      "Boda en bodega Rioja. Vendimia, 120 invitados. Estilo wine country, elegante pero relajado.",
    created_at: new Date(Date.now() - 24 * 864e5).toISOString(),
  },
  {
    id: "25",
    name: "Lucía Reyes Fernández",
    email: "lucia.reyes@hotmail.es",
    phone: "+34 611 222 021",
    service: "communions",
    event_date: "2025-05-24",
    budget: "2000-5000",
    message:
      "Comunión en Sevilla. Iglesia + jardín para recepción. Buscamos alguien con experiencia en eventos religiosos.",
    created_at: new Date(Date.now() - 25 * 864e5).toISOString(),
  },
  {
    id: "26",
    name: "Andrés Carmona Ruiz",
    email: "andres.carmona@empresa.org",
    phone: "+34 622 333 022",
    service: "dinners",
    event_date: "2025-11-15",
    budget: "5000-10000",
    message:
      "Gala de premios sector tecnológico. 150 asistentes, alfombra roja, entrega premios, cóctel y cena.",
    created_at: new Date(Date.now() - 26 * 864e5).toISOString(),
  },
  {
    id: "27",
    name: "Nuria Herrera Castro",
    email: "nuria.herrera@gmail.com",
    phone: null,
    service: "weddings",
    event_date: "2025-07-12",
    budget: "2000-5000",
    message:
      "Boda playa en Valencia. Ceremonia al atardecer, 60 personas. Estilo bohemio mediterráneo.",
    created_at: new Date(Date.now() - 27 * 864e5).toISOString(),
  },
  {
    id: "28",
    name: "Daniel Caballero Soto",
    email: "daniel.caballero@email.com",
    phone: "+34 633 444 023",
    service: "corporate",
    event_date: "2025-05-22",
    budget: "2000-5000",
    message:
      "Inauguración nueva sede. Ribbon cutting, tour, cóctel. Fotos para prensa y redes sociales.",
    created_at: new Date(Date.now() - 28 * 864e5).toISOString(),
  },
  {
    id: "29",
    name: "Paula Gil Domínguez",
    email: "paula.gil@outlook.es",
    phone: "+34 644 555 024",
    service: "other",
    event_date: null,
    budget: null,
    message:
      "Proyecto de libro fotográfico sobre arquitectura local. Busco colaboración con fotógrafo profesional.",
    created_at: new Date(Date.now() - 29 * 864e5).toISOString(),
  },
  {
    id: "30",
    name: "Roberto Medina Vargas",
    email: "roberto.medina@empresa.com",
    phone: "+34 655 666 025",
    service: "weddings",
    event_date: "2025-12-20",
    budget: "over-10000",
    message:
      "Boda de invierno en hotel con jardines iluminados. 200 invitados. Reportaje completo + álbum de lujo.",
    created_at: new Date(Date.now() - 30 * 864e5).toISOString(),
  },
];

export default async function DashboardRequestsPage() {
  const ok = await isDashboardAuthenticated();
  if (!ok) redirect("/dashboard/login");

  let requests: ContactRequest[] = [];
  if (supabaseAdmin) {
    const { data, error } = await supabaseAdmin
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) requests = (data as ContactRequest[]) || [];
  }
  if (requests.length === 0) {
    requests = MOCK_REQUESTS;
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <LogoutButton />
            <h1 className="font-serif text-2xl md:text-3xl font-light">
              Solicitudes de contacto
            </h1>
          </div>
          <span className="text-foreground/50 text-sm">
            {requests.length} solicitud{requests.length !== 1 ? "es" : ""}
          </span>
        </div>

        {requests.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/2 p-12 text-center">
            <p className="text-muted-foreground">
              Aún no hay solicitudes de contacto.
            </p>
          </div>
        ) : (
          <RequestsTable requests={requests} />
        )}
      </div>
    </main>
  );
}
