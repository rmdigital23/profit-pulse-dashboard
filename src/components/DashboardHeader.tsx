import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Dashboard - Principal</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-foreground">Administrador</span>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-muted text-muted-foreground text-xs font-semibold">
            AD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default DashboardHeader;
