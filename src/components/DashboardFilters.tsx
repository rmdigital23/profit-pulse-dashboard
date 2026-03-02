import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const DashboardFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 px-6 py-4 bg-card border-b border-border">
      <div className="flex flex-wrap items-center gap-3 flex-1">
        <Select defaultValue="7days">
          <SelectTrigger className="w-[180px] bg-background">
            <SelectValue placeholder="Data de cadastro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="7days">Últimos 7 dias</SelectItem>
            <SelectItem value="30days">Últimos 30 dias</SelectItem>
            <SelectItem value="90days">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-background">
            <SelectValue placeholder="Conta de Anúncio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="meta">Meta Ads</SelectItem>
            <SelectItem value="google">Google Ads</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="any">
          <SelectTrigger className="w-[160px] bg-background">
            <SelectValue placeholder="Plataforma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Qualquer</SelectItem>
            <SelectItem value="kiwify">Kiwify</SelectItem>
            <SelectItem value="hotmart">Hotmart</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="any">
          <SelectTrigger className="w-[160px] bg-background">
            <SelectValue placeholder="Produto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Qualquer</SelectItem>
            <SelectItem value="curso1">Curso Principal</SelectItem>
            <SelectItem value="curso2">Mentoria</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground whitespace-nowrap">Atualizado há 1 minuto</span>
        <Button size="sm" className="gap-2">
          <RefreshCw className="h-3.5 w-3.5" />
          Atualizar
        </Button>
      </div>
    </div>
  );
};

export default DashboardFilters;
