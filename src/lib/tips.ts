

export interface Tip {
    id: number
    countryCode: string;
    author: string
    text: string
}


const tips:Tip[] = []

export async function getTips(countryCode: string) {
    const teste = tips.filter((data) => data.countryCode === countryCode).reverse()

    return teste
}

export async function saveTip(data: Omit<Tip, 'id'>) {
    tips.push({id: Date.now(), ...data})
}