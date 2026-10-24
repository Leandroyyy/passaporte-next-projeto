'use server'

import { saveTip } from "@/lib/tips"
import { revalidatePath } from "next/cache"


export interface TipFormState {
    error?: string
    sucess?: boolean
    fields?: {author: string, text: string}
}

export async function addTip(_prevState: TipFormState, formData: FormData): Promise<TipFormState> {

    const countryCode = String(formData.get("countryCode"))
    const author = String(formData.get('author'))
    const text = String(formData.get('text'))


    if (author.length < 2) {
        return {error: 'Informe um nome com pelo menos 2 letras.', fields: {author, text}}
    }

    if (text.length < 10) {
        return {error: "A dica precisa ter pelo menos 10 caracteres", fields: {author, text}}
    }

    await saveTip({countryCode, author, text})
    revalidatePath(`/pais/${countryCode}`)

    return {sucess: true}
}