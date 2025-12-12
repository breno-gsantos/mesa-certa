import { CheckCircle } from "lucide-react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

export function BenefitsAdmin(){
    const benefitsAdminData = [
        "Maior visibilidade e presença digital",
        "Reservas automatizadas 24/7",
        "Menos cancelamentos e no-shows",
        "Relatórios avançados de desempenho",
        "Experiência mais profissional para o cliente"
    ]
    

    return (
        <section className="container mx-auto py-24 space-y-12">
            <h2 className="text-4xl font-bold text-center">Por que entrar na nossa plataforma?</h2>
            <div className="grid lg:grid-cols-2 gap-12">
                <ul className="space-y-4">
                    {benefitsAdminData.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="size-5 text-primary mt-1" />
                            <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
                <Card className="p-8 border-primary/20 shadow-md">
                    <h3 className="text-2xl font-semibold mb-4">Como funciona?</h3>
                    <p className="text-muted-foreground mb-6">Cadastre seu restaurante, adicione sua disponibilidade e pronto — você estará visível para
                    novos clientes prontos para reservar.</p>
                    <Button size='lg' className="w-full">Cadastrar Meu Restaurante</Button>
                </Card>
            </div>
        </section>
    )
}