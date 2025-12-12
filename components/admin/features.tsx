import { Settings, TrendingUp, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function FeaturesAdmin(){
    const featuresAdminData = [
        {icon: <UtensilsCrossed className="size-6 text-primary" />, title: "Gestão Completa do Restaurante", label: "Organize mesas, horários, disponibilidade e equipe de forma fácil."},
        {icon: <Settings className="size-6 text-primary" />, title: "Controle e Automação", label: "Reduza erros e automatize processos importantes, como confirmações e lembretes."},
        {icon: <TrendingUp className="size-6 text-primary" />, title: "Relatórios e Insights", label: "Veja métricas de ocupação, horários mais fortes e desempenho geral."}
    ]

    return (
        <section className="bg-muted/30">
            <div className="container mx-auto space-y-16">
                <h2 className="text-4xl lg:text-6xl font-bold text-center">Tudo o que você precisa em uma única plataforma</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {featuresAdminData.map(({icon, label, title}) => (
                        <Card key={title}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {icon} {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                {label}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}