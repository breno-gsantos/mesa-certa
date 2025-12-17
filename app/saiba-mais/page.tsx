import { BenefitsAdmin } from "@/components/admin/benefits";
import { FAQ } from "@/components/admin/faq";
import { FeaturesAdmin } from "@/components/admin/features";
import { HeroAdmin } from "@/components/admin/hero";
import { PricingAdmin } from "@/components/admin/pricing";

export default function Page(){
    return (
        <main className="min-h-screen bg-background text-foreground">
            <HeroAdmin />
            <FeaturesAdmin />
            <BenefitsAdmin />
            <PricingAdmin />
            <FAQ />
        </main>
    )
}