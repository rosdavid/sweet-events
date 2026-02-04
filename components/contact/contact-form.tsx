"use client";

import { useState } from "react";
import { Send, CheckCircle, ArrowUpRight } from "lucide-react";

const services = [
  { value: "weddings", label: "Boda · Fotografía y video" },
  { value: "corporate", label: "Evento corporativo" },
  { value: "dinners", label: "Cena / Gala privada" },
  { value: "communions", label: "Comunión · Evento religioso" },
  { value: "announcements", label: "Anuncios · Retratos" },
  { value: "other", label: "Otro" },
];

const inputBase =
  "w-full bg-transparent border-b border-white/15 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-white/40 transition-colors duration-200 font-light";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          date: formData.date || undefined,
          budget: formData.budget || undefined,
          message: formData.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setIsSubmitting(false);
        setSubmitError(data.error || "Error al enviar. Inténtalo de nuevo.");
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/2 p-8 md:p-10 text-center backdrop-blur-sm">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-7 w-7 text-foreground/90" />
        </div>
        <h3 className="font-serif text-2xl font-light text-foreground mb-2">
          Mensaje enviado
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8">
          Te responderemos en menos de 24 horas. Revisa tu bandeja de entrada.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-foreground/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-xs uppercase tracking-[0.15em] font-medium"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8 space-y-8 backdrop-blur-sm"
    >
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="name"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Nombre <span className="text-foreground/40">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Email <span className="text-foreground/40">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="phone"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputBase}
            placeholder="+34 612 345 678"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Servicio <span className="text-foreground/40">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={`${inputBase} cursor-pointer appearance-none bg-background border-white/15 border-b py-3.5 pr-8 focus:border-white/40`}
          >
            <option value="" className="bg-background text-foreground/40">
              Elige un servicio
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value} className="bg-background">
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="date"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Fecha del evento
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
          >
            Presupuesto orientativo
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer appearance-none bg-background border-white/15 border-b py-3.5 pr-8 focus:border-white/40`}
          >
            <option value="" className="bg-background text-foreground/40">
              Seleccionar
            </option>
            <option value="under-2000" className="bg-background">
              Menos de 2.000 €
            </option>
            <option value="2000-5000" className="bg-background">
              2.000 € – 5.000 €
            </option>
            <option value="5000-10000" className="bg-background">
              5.000 € – 10.000 €
            </option>
            <option value="over-10000" className="bg-background">
              Más de 10.000 €
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
        >
          Cuéntanos tu proyecto <span className="text-foreground/40">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputBase} resize-none border-b border-white/15 min-h-[100px]`}
          placeholder="Idea, ubicación, estilo que buscas..."
        />
      </div>

      {submitError && <p className="text-sm text-red-400/90">{submitError}</p>}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-black px-8 py-4 rounded-full font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            <>
              Enviar mensaje
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] text-foreground/40 uppercase tracking-wider max-w-sm">
        Al enviar aceptas nuestra política de privacidad. No compartimos tus
        datos.
      </p>
    </form>
  );
}
