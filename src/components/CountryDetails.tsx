import type { Country } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import React from "react";

interface CountryDetailsProps {
  country: Country;
  children?: React.ReactNode;
}

export default function CountryDetails({
  country,
  children,
}: CountryDetailsProps) {
  const nome = country.translations.por.common;
  const idiomas = Object.values(country.languages ?? {}).join(", ");
  const moedas = Object.values(country.currencies ?? {})
    .map((moeda) => `${moeda.name} (${moeda.symbol})`)
    .join(", ");

  return (
    <>
      <img src={country.flags.svg} alt={`Bandeira: ${nome}`} />
      <div className="country-info">
        <span className="subregion">{country.subregion}</span>
        <h2>{nome}</h2>
        <p className="official">{country.translations.por.official}</p>
        <dl className="facts">
          <dt>Capital</dt>
          <dd>{country.capital?.join(", ") ?? "—"}</dd>
          <dt>População</dt>
          <dd>{formatNumber(country.population)}</dd>
          <dt>Idiomas</dt>
          <dd>{idiomas}</dd>
          <dt>Moeda</dt>
          <dd>{moedas}</dd>
        </dl>
        {children}
      </div>
    </>
  );
}
