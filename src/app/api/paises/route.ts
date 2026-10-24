import { countries } from "@/lib/mock";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const busca = request.nextUrl.searchParams.get('busca')?.toLocaleLowerCase() ?? ''; // <- BRA

    const resultado = countries
    .filter((country) => country.translations.por.common.toLocaleLowerCase().includes(busca))
    .map((country) => {
        return { 
            codigo: country.cca3,
            nome: country.translations.por.common,
            capital: country.capital?.[0] ?? null 
        }
    })

    return NextResponse.json(resultado)
}