import { ArrowRight, BookOpen, CalendarClock, TrendingUp, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function HeroAdmin(){
    const heroAdminData = [
        {icon: <CalendarClock className="size-8 text-primary" />, title: "Reservas Inteligentes", label: "Sistema automatizado e integrado para evitar conflitos"},
        {icon: <TrendingUp className="size-8 text-primary" />, title: "Mais Visibilidade", label: "Coloque o seu restaurante na frente de novos clientes."},
        {icon: <Users className="size-8 text-primary" />, title: "Gestão de Clientes", label: "Fidelize clientes, visualize histórico e acompanhe métricas."},
        {icon: <BookOpen className="size-8 text-primary" />, title: "Cardápio Digital", label: "Transforme seu cardápio em uma experiência digital."}
    ]

    return (
        <section className="container mx-auto grid lg:grid-cols-2 gap-12 py-24 items-center">
            <div className="space-y-6">
                <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary w-fit">Para Restaurantes</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Aumente a visibilidade e gerencie reservas sem complicação</h1>
                <p className="text-lg text-muted-foreground">Conecte seu restaurante a milhares de clientes e automatize suas reservas, filas e operações com nossa plataforma completa e intuitiva.</p>
                <Button size='lg' className="gap-2">
                    Começar Agora <ArrowRight className="size-5" />
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {heroAdminData.map(({icon, label, title}) => (
                    <Card key={title} className="shadow-sm">
                        <CardContent className="p-6 flex flex-col items-start space-y-4">
                            {icon}
                            <h1 className="font-semibold">{title}</h1>
                            <p className="text-sm text-muted-foreground">{label}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}