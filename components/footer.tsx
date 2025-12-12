import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">MC</span>
              </div>
              <span className="text-xl font-semibold">MesaCerta</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando pessoas aos melhores restaurantes e bares da cidade.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sobre" className="hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="hover:text-foreground transition-colors">
                  Seja Parceiro
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="hover:text-foreground transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ajuda" className="hover:text-foreground transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacidade" className="hover:text-foreground transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MesaCerta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}