import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface KpiCardProps {
  title: string;
  value: string;
  color?: "default" | "success" | "destructive";
  tooltip?: string;
}

const KpiCard = ({ title, value, color = "default", tooltip }: KpiCardProps) => {
  const colorClass =
    color === "success"
      ? "text-success"
      : color === "destructive"
        ? "text-destructive"
        : "text-foreground";

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {title}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-3.5 w-3.5 text-muted-foreground/50 cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{tooltip || title}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <span className={`text-2xl font-bold ${colorClass}`}>{value}</span>
    </div>
  );
};

export default KpiCard;
