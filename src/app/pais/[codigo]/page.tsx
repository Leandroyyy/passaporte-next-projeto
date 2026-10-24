import CountryDetails from "@/components/CountryDetails";
import TipForm from "@/components/TipForm";
import VisitButton from "@/components/VisitButton";
import { getCountries, getCountry } from "@/lib/api";
import { countries } from "@/lib/mock";
import { getTips } from "@/lib/tips";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CountryPageProps {
    params: Promise<{codigo: string}>
}

export default async function CountryPage({params}: CountryPageProps) {

    const { codigo } =  await params;

    const country = countries.find((e) => e.cca3 === codigo.toUpperCase())

    if(!country) {
        notFound()
    }

    const tips = await getTips(country.cca3)

    return (
        <main className="country-page">
            <CountryDetails country={country}>
                <VisitButton />
                <Link href='/'>Voltar para os países</Link>
            </CountryDetails>
            <section className="tips">
                <h3>Dicas de viajantes</h3>
                {/* <p>Ainda não há dicas para este país</p> */}

                <ul>
                    {
                        tips.map((tip) => {
                            return <li key={tip.id} className="tip">
                                <strong>{tip.author}</strong>
                                <p>{tip.text}</p>
                            </li>
                        })
                    }
                </ul>

                <TipForm countryCode={country.cca3} />
            </section>
        </main>
    )
}