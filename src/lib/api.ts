import type { Country } from './types';

const API_URL = 'https://restcountries.com/v3.1';
const CARD_FIELDS = 'cca3,name,translations,capital,population,flags';

export async function getCountries(): Promise<Country[]> {
  const res = await fetch(`${API_URL}/region/americas?fields=${CARD_FIELDS}`);

  if (!res.ok) {
    throw new Error('Não foi possível carregar os países.');
  }

  const countries: Country[] = await res.json();

  return countries.sort((a, b) =>
    a.translations.por.common.localeCompare(b.translations.por.common, 'pt-BR'),
  );
}

export async function getCountry(codigo: string): Promise<Country | null> {
  const res = await fetch(`${API_URL}/alpha/${codigo}`);

  if (!res.ok) {
    return null;
  }

  // Mesmo buscando um país só, a API devolve uma lista.
  const [country]: Country[] = await res.json();
  return country ?? null;
}
