import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { toast } from "sonner";

interface DailyEntryFormProps {
  date: string;
  faturamento: string;
  gastoMeta: string;
  gastoGoogle: string;
  onDateChange: (v: string) => void;
  onFaturamentoChange: (v: string) => void;
  onGastoMetaChange: (v: string) => void;
  onGastoGoogleChange: (v: string) => void;
}

const DailyEntryForm = ({
  date, faturamento, gastoMeta, gastoGoogle,
  onDateChange, onFaturamentoChange, onGastoMetaChange, onGastoGoogleChange,
}: DailyEntryFormProps) => {
  const handleSave = () => {
    toast.success("Dados salvos com sucesso!");
  };

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Adicionar Resultados do Dia</h2>
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground">Data</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-[160px] bg-background"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground">Faturamento (R$)</Label>
          <Input
            type="number"
            placeholder="0,00"
            value={faturamento}
            onChange={(e) => onFaturamentoChange(e.target.value)}
            className="w-[180px] bg-background"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground">Gasto Meta Ads (R$)</Label>
          <Input
            type="number"
            placeholder="0,00"
            value={gastoMeta}
            onChange={(e) => onGastoMetaChange(e.target.value)}
            className="w-[180px] bg-background"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground">Gasto Google Ads (R$)</Label>
          <Input
            type="number"
            placeholder="0,00"
            value={gastoGoogle}
            onChange={(e) => onGastoGoogleChange(e.target.value)}
            className="w-[180px] bg-background"
          />
        </div>
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Salvar Dados
        </Button>
      </div>
    </div>
  );
};

export default DailyEntryForm;
