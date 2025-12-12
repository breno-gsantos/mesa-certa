import { Calendar, Search, Star, UtensilsCrossed } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export function Hero(){
    const heroIcons = [
        {id: 1, icon: <Calendar className="size-5" />, label: 'Reservas Instantâneas'},
        {id: 2, icon: <Star className="size-5" />, label: 'Avaliações Reais'},
        {id: 3, icon: <UtensilsCrossed className="size-5"/>, label: '50+ Restaurantes'}
    ]

    return (
        <section className="relative bg-primary text-primary-foreground">
            <div className="container mx-auto min-h-150 grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-24">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-6xl text-balance">Reserve sua mesa nos melhores restaurantes</h1>
                    <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                        Descubra experiências gastronômicas únicas e faça reservas instantâneas nos restaurantes mais exclusivos da cidade.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Buscar restaurante, culinária..." className="pl-10 h-12 bg-background text-foreground" />
                        </div>
                        <Button size='lg' className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">Buscar</Button>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {heroIcons.map(({id, icon, label}) => (
                            <div key={id} className="flex items-center gap-2 text-sm">
                                <div className="flex size-10 items-center justify-center border rounded-full bg-primary">
                                    {icon}
                                </div>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <div className="relative h-125 w-full overflow-hidden rounded-2xl">
                        <Image src="/hero-restaurant.jpg" alt="Restaurante elegante" fill className="object-cover" priority />
                    </div>
                </div>
            </div>
        </section>
    )
}