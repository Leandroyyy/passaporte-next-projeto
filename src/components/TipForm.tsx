'use client'
import { addTip, TipFormState } from "@/app/action"
import { useActionState } from "react"

const initialState: TipFormState = {}

interface TipFormProps {
    countryCode: string
}

export default function TipForm({countryCode}: TipFormProps) {

    const [ state, formAction, isPeding ] = useActionState(addTip, initialState)

    return (
        <form action={formAction} className="tip-form">
            <h3>Deixe uma dica de viagem</h3>
            <input type="hidden" name="countryCode" value={countryCode} />

            <label htmlFor="author">Nome</label>
            <input name="author" defaultValue={state.fields?.author}/>

            <label htmlFor="text">Dica</label>
            <textarea name="text" rows={3} defaultValue={state.fields?.text}></textarea>

            {state.error && <p className="form-error">{state.error}</p>}
            {state.sucess && <p className="form-sucess">Dica enviada</p>}
            <button type="submit" disabled={isPeding}>
                {isPeding ? 'Enviando...' : 'Enviar dicas'}
            </button>
        </form>
    )

}