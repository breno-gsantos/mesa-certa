import { Calendar, Search, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Features(){
    const featuresData = [
        {icon: <Search className="size-6" />, title: '1. Busque', label: 'Encontre o restaurante perfeito por localização, culinária ou ocasião especial.'},
        {icon: <Calendar className="size-6" />, title: '2. Reserve', label: 'Escolha data, horário e número de pessoas. Confirmação em questão de minutos.'},
        {icon: <UtensilsCrossed className="size-6" />, title: '3. Aproveite', label: 'Compareça no horário marcado e desfrute de uma experiência gastronômica memorável.'}
    ]

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-balance">Como Funciona</h2>
                    <p className='text-muted-foreground text-lg max-w-2xl mx-auto text-pretty'>Reserve sua mesa em 3 passos simples e aproveite experiências gastronômicas incríveis</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {featuresData.map(({icon, label, title}) => (
                        <Card key={title} className="border-2 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground mb-4">
                                    {icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}