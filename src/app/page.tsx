import CountryCard from '@/components/CountryCard';
import { countries } from '@/lib/mock';

export default function Home() {
  return (
    <main>
      <div className="toolbar">
        <h2>Países das Américas</h2>
      </div>
      <div className="grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
