import type { Country } from '@/lib/types';
import { formatNumber } from '@/lib/utils';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  const nome = country.translations.por.common;

  return (
    <div className="card">
      <a href={`/pais/${country.cca3}`} className="card-link">
        <img src={country.flags.png} alt={`Bandeira: ${nome}`} className="flag" />
        <h3>{nome}</h3>
        <p className="meta">Capital: {country.capital?.[0] ?? '—'}</p>
        <p className="meta">{formatNumber(country.population)} habitantes</p>
      </a>
    </div>
  );
}
