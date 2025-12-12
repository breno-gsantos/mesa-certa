import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function PricingAdmin(){
    const instalationData = [
        "Configuração completa do sistema",
        "Acompanhamento inicial com especialista",
        "Treinamento da sua equipe",
        "Importação de cardápio e dados",
        "Onboarding rápido em até 48h"
    ]

    const monthlyData = [
        "Acesso completo à plataforma",
        "Reservas ilimitadas",
        "Gestão de mesas e clientes",
        "Relatórios e dashboards",
        "Suporte premium"
    ]

    return (
        <section className="bg-background py-24 border-t">
            <div className="container mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Planos simples e transparentes</h2>
                    <p className="text-lg text-muted-foreground">Sem taxas ocultas. Apenas uma estrutura clara para facilitar seu crescimento.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="shadow-md border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Instalação</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-4xl font-bold">
                                R$2.500,00
                                <span className="block text-base text-muted-foreground font-normal">Pagamento Único</span>
                            </p>
                            <ul className="space-y-3 text-left">
                                {instalationData.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="size-5 text-primary " />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size='lg' className="w-full gap-2">
                                Começar Instalação
                                <ArrowRight className="size-5" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Mensalidade</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-4xl font-bold">
                                R$500,00
                                <span className="block text-base text-muted-foreground font-normal">por mês</span>
                            </p>
                            <ul className="space-y-3 text-left">
                                {monthlyData.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="size-5 text-primary " />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size='lg' className="w-full gap-2">
                                Assinar Plano Mensal
                                <ArrowRight className="size-5" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <p className="text-sm text-muted-foreground">
                    Precisa de algo mais avançado? Entre em contato para planos personalizados.
                </p>
            </div>
        </section>
    )
}