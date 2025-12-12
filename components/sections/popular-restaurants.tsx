import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export function PopularRestaurants(){
    return (
        <section className="bg-muted/30 py-16 lg:py-24">
            <div className="container mx-auto ">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Restaurantes Populares</h2>
                        <p className="text-muted-foreground">Os favoritos dos nossos usuários</p>
                    </div>
                    <Link href='/restaurantes'>
                        <Button variant='outline' className="bg-transparent">Ver Todos</Button>
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 w-full">
                                <Image src={`/elegant-restaurant-interior-.jpg`}  alt={`Restaurante ${i}`} fill className="object-cover" />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-semibold mb-2">Restaurante Demo {i}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium text-foreground">4. {8 + i}</span>
                                    <span>(200+ avaliações)</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}