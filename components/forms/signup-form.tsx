'use client'

import React from "react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { RegisterInput, registerSchema } from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import registerAction from "@/actions/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function RegisterForm({className, ...props}: React.ComponentProps<"form">){
    const router = useRouter();

    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    async function onSubmit(values: RegisterInput){
        try {
            const result = await registerAction(values);

            if(result?.success){
                toast.success("Conta criada com sucesso! Redirecionando...");
                router.push('/login');
                form.reset();
            } else if(result?.error){
                if(typeof result?.error === 'object'){
                    Object.entries(result?.error).forEach(([key, value]) => {
                        form.setError(key as keyof RegisterInput, {
                            type: 'server',
                            message: (value as string[]).join(", ")
                        })
                    })
                }
            } else if(typeof result?.error === 'string'){
                toast.error(result.error)
            }

            form.setValue("password", "")
            form.setValue("confirmPassword", "")

        } catch (error) {
            console.error(error);
            toast.error("Erro inesperado")
        } 
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col gap-6', className)} {...props}>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Crie sua conta</h1>
                    <p className="text-muted-foreground text-sm text-balance">Preencha o formulário abaixo para criar sua conta</p>
                </div>
                <FormField control={form.control} name="name" render={({field}) => (
                    <FormItem>
                        <FormLabel>Nome e Sobrenome</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="John Doe" {...field} disabled={form.formState.isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormDescription>Vamos usar este email apenas para entrar em contato com você.</FormDescription>
                        <FormControl>
                            <Input type="email" placeholder="john.doe@mail.com" {...field} disabled={form.formState.isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="password" render={({field}) => (
                    <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormDescription>Senha deve ter ao menos 6 caracteres.</FormDescription>
                        <FormControl>
                            <Input type="password" placeholder="******" {...field} disabled={form.formState.isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="confirmPassword" render={({field}) => (
                    <FormItem>
                        <FormLabel>Confirme sua Senha</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="******" {...field} disabled={form.formState.isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <Button disabled={form.formState.isSubmitting}>Criar Conta</Button>
                <Separator />
                <p className="px-6 text-center text-sm text-muted-foreground">
                    Já tem uma conta?
                    <Link href='/login'>
                        <Button variant='link' className="text-muted-foreground">Login</Button>
                    </Link>
                </p>
            </form>
        </Form>
    )
}