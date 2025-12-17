import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export function CTA(){
    const ctaData = [
        {title: '50+', label: 'Restaurantes Parceiros'},
        {title: '5K+', label: 'Reservas por Mês'},
        {title: '4.8', label: 'Avaliação Média'},
        {title: '98%', label: 'Taxa de Sucesso'}
    ]

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto">
                <Card className="bg-primary text-primary-foreground border-0">
                    <CardContent className="p-8 lg:p-12">
                        <div className="grid gap-8 items-center lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-balance">Tem um restaurante? Junte-se a nós!</h2>
                                <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">Aumente sua visibilidade e gerencie reservas de forma eficiente com nossa plataforma completa.</p>
                                <Link href='/saiba-mais'>
                                    <Button size='lg' variant='secondary'>Saiba Mais</Button>
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {ctaData.map(({label, title}) => (
                                    <Card key={title} className="bg-primary-foreground/10 border-primary-foreground/20">
                                        <CardContent className="p-6">
                                            <div className="text-3xl text-white font-bold mb-1">{title}</div>
                                            <div className="text-sm text-primary-foreground/80">{label}</div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}