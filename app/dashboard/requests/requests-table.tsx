"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { ContactRequest } from "@/lib/supabase-server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RequestDetailDialog } from "./request-detail-dialog";
import { Eye, Trash2, Filter } from "lucide-react";

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

const STATUS_LABELS: Record<string, string> = {
  nuevo: "Nuevo",
  "en-proceso": "En proceso",
  respondido: "Respondido",
  cerrado: "Cerrado",
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso ?? "—";
  }
}

type Props = {
  requests: ContactRequest[];
};

export function RequestsTable({ requests: initialRequests }: Props) {
  const router = useRouter();
  const [requests, setRequests] = useState<ContactRequest[]>(initialRequests);
  const [filterService, setFilterService] = useState<string>("all");
  const [filterBudget, setFilterBudget] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ContactRequest | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filtered = useMemo(() => {
    return requests.filter((r) => {
      if (filterService !== "all" && r.service !== filterService) return false;
      if (filterBudget !== "all" && r.budget !== filterBudget) return false;
      if (filterStatus !== "all" && (r.status ?? "nuevo") !== filterStatus)
        return false;
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        return (
          r.name.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q) ||
          (r.message?.toLowerCase().includes(q) ?? false)
        );
      }
      return true;
    });
  }, [requests, filterService, filterBudget, filterStatus, search]);

  const handleView = (req: ContactRequest) => {
    setSelected(req);
    setDialogOpen(true);
  };

  const handleSaved = (req: ContactRequest) => {
    setRequests((prev) => prev.map((r) => (r.id === req.id ? req : r)));
    setSelected(req);
  };

  const handleDelete = async (req: ContactRequest) => {
    if (!confirm("¿Eliminar esta solicitud?")) return;
    const res = await fetch(`/api/dashboard/requests/${req.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setRequests((prev) => prev.filter((r) => r.id !== req.id));
      if (selected?.id === req.id) {
        setDialogOpen(false);
        setSelected(null);
      }
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data.error ?? "Error al eliminar");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/2">
        <Filter className="h-4 w-4 text-foreground/50 shrink-0" />
        <Input
          placeholder="Buscar por nombre, email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-[200px] h-8 text-sm"
        />
        <Select value={filterService} onValueChange={setFilterService}>
          <SelectTrigger className="h-8 w-[140px]">
            <SelectValue placeholder="Servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los servicios</SelectItem>
            {Object.entries(SERVICE_LABELS).map(([k, v]) => (
              <SelectItem key={k} value={k}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterBudget} onValueChange={setFilterBudget}>
          <SelectTrigger className="h-8 w-[160px]">
            <SelectValue placeholder="Presupuesto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los presupuestos</SelectItem>
            {Object.entries(BUDGET_LABELS).map(([k, v]) => (
              <SelectItem key={k} value={k}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="h-8 w-[130px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            {Object.entries(STATUS_LABELS).map(([k, v]) => (
              <SelectItem key={k} value={k}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-white/10 overflow-hidden bg-white/2">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-foreground/70 font-medium">
                Fecha
              </TableHead>
              <TableHead className="text-foreground/70 font-medium">
                Nombre
              </TableHead>
              <TableHead className="text-foreground/70 font-medium">
                Email
              </TableHead>
              <TableHead className="text-foreground/70 font-medium">
                Servicio
              </TableHead>
              <TableHead className="text-foreground/70 font-medium">
                Presupuesto
              </TableHead>
              <TableHead className="text-foreground/70 font-medium">
                Estado
              </TableHead>
              <TableHead className="text-foreground/70 font-medium w-[200px] text-right">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((req) => (
              <TableRow
                key={req.id}
                className="border-white/10 hover:bg-white/5"
              >
                <TableCell className="text-foreground/80 text-sm">
                  {formatDate(req.created_at)}
                </TableCell>
                <TableCell className="text-foreground/90 font-medium">
                  {req.name}
                </TableCell>
                <TableCell className="text-foreground/70 text-sm">
                  {req.email}
                </TableCell>
                <TableCell className="text-foreground/70 text-sm">
                  {SERVICE_LABELS[req.service] || req.service}
                </TableCell>
                <TableCell className="text-foreground/70 text-sm">
                  {req.budget ? BUDGET_LABELS[req.budget] || req.budget : "—"}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                      (req.status ?? "nuevo") === "nuevo"
                        ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        : (req.status ?? "") === "en-proceso"
                        ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                        : (req.status ?? "") === "respondido"
                        ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : (req.status ?? "") === "cerrado"
                        ? "bg-foreground/10 text-foreground/70"
                        : "bg-foreground/10 text-foreground/70"
                    }`}
                  >
                    {STATUS_LABELS[req.status ?? "nuevo"] ?? "Nuevo"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1.5"
                      onClick={() => handleView(req)}
                    >
                      <Eye className="h-4 w-4" />
                      Ver
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1.5 text-destructive border-destructive/50 hover:bg-destructive/10 hover:border-destructive"
                      onClick={() => handleDelete(req)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Borrar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground/50 py-8 text-sm">
          No hay solicitudes que coincidan con los filtros.
        </p>
      )}

      <RequestDetailDialog
        request={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSaved={handleSaved}
      />
    </div>
  );
}
