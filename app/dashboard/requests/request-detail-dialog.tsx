"use client";

import { useState, useEffect } from "react";
import type { ContactRequest } from "@/lib/supabase-server";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Calendar } from "lucide-react";

const SERVICE_LABELS: Record<string, string> = {
  weddings: "Boda",
  corporate: "Corporativo",
  dinners: "Cena / Gala",
  communions: "Comunión",
  announcements: "Anuncios",
  other: "Otro",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-2000": "Menos de 2.000 €",
  "2000-5000": "2.000 € – 5.000 €",
  "5000-10000": "5.000 € – 10.000 €",
  "over-10000": "Más de 10.000 €",
};

const STATUS_OPTIONS = [
  { value: "nuevo", label: "Nuevo" },
  { value: "en-proceso", label: "En proceso" },
  { value: "respondido", label: "Respondido" },
  { value: "cerrado", label: "Cerrado" },
];

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso ?? "—";
  }
}

type Props = {
  request: ContactRequest | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: (req: ContactRequest) => void;
};

export function RequestDetailDialog({
  request,
  open,
  onOpenChange,
  onSaved,
}: Props) {
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<string>("nuevo");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (request) {
      setNotes(request.notes ?? "");
      setStatus(request.status ?? "nuevo");
    }
  }, [request]);

  const handleSave = async () => {
    if (!request) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/dashboard/requests/${request.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes, status }),
      });
      if (res.ok && onSaved) {
        onSaved({ ...request, notes, status });
      }
    } finally {
      setSaving(false);
    }
  };

  if (!request) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{request.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${request.email}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {request.email}
            </a>
            {request.phone && (
              <span className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                {request.phone}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-foreground/80">
            <span>
              Servicio: {SERVICE_LABELS[request.service] || request.service}
            </span>
            {request.event_date && (
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />
                {request.event_date}
              </span>
            )}
            {request.budget && (
              <span>
                Presupuesto: {BUDGET_LABELS[request.budget] || request.budget}
              </span>
            )}
          </div>
          <p className="text-foreground/60 text-xs">
            Recibido: {formatDate(request.created_at)}
          </p>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">
              Mensaje
            </p>
            <p className="text-foreground/90 whitespace-pre-wrap font-light">
              {request.message}
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t">
            <Label htmlFor="status">Estado</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Añade notas internas sobre esta solicitud..."
              rows={4}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Guardando..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
