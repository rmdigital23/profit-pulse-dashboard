import { useState, useMemo, useEffect, useCallback } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardFilters from "@/components/DashboardFilters";
import KpiCard from "@/components/KpiCard";
import DailyEntryForm from "@/components/DailyEntryForm";
import { supabase } from "@/integrations/supabase/client";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatPercent = (value: number) =>
  `${value.toFixed(1)}%`;

const Index = () => {
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [faturamento, setFaturamento] = useState("0");
  const [gastoMeta, setGastoMeta] = useState("0");
  const [gastoGoogle, setGastoGoogle] = useState("0");

  const loadEntry = useCallback(async (selectedDate: string) => {
    const { data } = await supabase
      .from("daily_entries")
      .select("*")
      .eq("date", selectedDate)
      .maybeSingle();

    if (data) {
      setFaturamento(String(data.faturamento));
      setGastoMeta(String(data.gasto_meta));
      setGastoGoogle(String(data.gasto_google));
    } else {
      setFaturamento("0");
      setGastoMeta("0");
      setGastoGoogle("0");
    }
  }, []);

  useEffect(() => {
    loadEntry(date);
  }, [date, loadEntry]);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const metrics = useMemo(() => {
    const fat = parseFloat(faturamento) || 0;
    const meta = parseFloat(gastoMeta) || 0;
    const google = parseFloat(gastoGoogle) || 0;
    const gastos = meta + google;
    const lucro = fat - gastos;
    const roas = gastos > 0 ? fat / gastos : 0;
    const roi = gastos > 0 ? ((fat - gastos) / gastos) * 100 : 0;
    const margem = fat > 0 ? (lucro / fat) * 100 : 0;

    return { fat, gastos, lucro, roas, roi, margem };
  }, [faturamento, gastoMeta, gastoGoogle]);

  const vendasPendentes = 1850;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardFilters />

      <main className="p-6 space-y-6 max-w-[1400px] mx-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Faturamento Líquido"
            value={formatCurrency(metrics.fat)}
            tooltip="Total de faturamento líquido no período"
          />
          <KpiCard
            title="Gastos com Anúncios"
            value={formatCurrency(metrics.gastos)}
            tooltip="Soma dos gastos com Meta Ads e Google Ads"
          />
          <KpiCard
            title="ROAS"
            value={metrics.roas.toFixed(2)}
            color={metrics.roas > 1.5 ? "success" : "destructive"}
            tooltip="Return on Ad Spend (Faturamento / Gastos)"
          />
          <KpiCard
            title="Lucro"
            value={formatCurrency(metrics.lucro)}
            color={metrics.lucro >= 0 ? "success" : "destructive"}
            tooltip="Faturamento - Gastos com Anúncios"
          />
          <KpiCard
            title="Vendas Pendentes"
            value={formatCurrency(vendasPendentes)}
            tooltip="Vendas aguardando confirmação"
          />
          <KpiCard
            title="ROI"
            value={formatPercent(metrics.roi)}
            color={metrics.roi >= 0 ? "success" : "destructive"}
            tooltip="Retorno sobre o investimento"
          />
          <KpiCard
            title="Margem de Lucro"
            value={formatPercent(metrics.margem)}
            color={metrics.margem >= 0 ? "success" : "destructive"}
            tooltip="Percentual de lucro sobre faturamento"
          />
        </div>

        {/* Daily Entry Form */}
        <DailyEntryForm
          date={date}
          faturamento={faturamento}
          gastoMeta={gastoMeta}
          gastoGoogle={gastoGoogle}
          onDateChange={handleDateChange}
          onFaturamentoChange={setFaturamento}
          onGastoMetaChange={setGastoMeta}
          onGastoGoogleChange={setGastoGoogle}
          onSaved={() => loadEntry(date)}
        />
      </main>
    </div>
  );
};

export default Index;
