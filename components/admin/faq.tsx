import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function FAQ (){
    return (
        <section className="bg-muted/30 py-20">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="1">
                        <AccordionTrigger>O serviço atende apenas na Baixada Santista?</AccordionTrigger>
                        <AccordionContent>Sim. Por enquanto, nosso sistema está disponível exclusivamente para restaurantes e bares da Baixada Santista, garantindo um suporte mais próximo, visita presencial e instalação personalizada.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger>O que está incluso na taxa de instalação?</AccordionTrigger>
                        <AccordionContent>A taxa de instalação inclui o Tour Virtual 360° completo do seu estabelecimento, configuração inicial do sistema e suporte para treinamento da sua equipe.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger>Posso atualizar meu cardápio quando quiser?</AccordionTrigger>
                        <AccordionContent>Sim! O dono do restaurante tem acesso total ao painel para adicionar itens, alterar preços, atualizar descrições, trocar fotos e remover pratos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionTrigger>Preciso instalar algum programa?</AccordionTrigger>
                        <AccordionContent>Não. Tudo funciona 100% online — basta acessar pelo navegador, no computador ou celular.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>Como funciona o suporte?</AccordionTrigger>
                        <AccordionContent>Suporte humano e rápido via chat, email e WhatsApp sempre que você precisar.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}