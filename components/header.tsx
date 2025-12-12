'use client'

import Link from "next/link";
import { useState } from "react"
import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";

export function Header(){
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const navLinks = [
        {href: '/restaurantes', label: 'Restaurantes'},
        {href: '/minhas-reservas', label: 'Minhas Reservas'},
        {href: '/perfil', label: 'Perfil'}
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link href='/' className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-lg font-bold text-primary-foreground">MC</span>
                    </div>
                    <span className="text-xl font-semibold">MesaCerta</span>
                </Link>
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map(({href, label}) => (
                        <Link key={label} href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <Button variant='ghost' size='icon' className="hidden md:flex">
                        <User className="size-5"/>
                    </Button>
                    <Button className="hidden md:flex">Fazer reserva</Button>
                    <Button variant='ghost' size='icon' className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                        <Menu className="size-5" />
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="container flex flex-col gap-4 py-4">
                        {navLinks.map(({href, label}) => (
                            <Link key={label} href={href} className="text-sm font-medium">
                                {label}
                            </Link>
                        ))}
                        <Button className="w-full ">Fazer Reserva</Button>
                    </nav>
                </div>
            )}
        </header>
    )
}