export interface Country {
  cca3: string;
  name: { common: string; official: string };
  translations: { por: { common: string; official: string } };
  capital?: string[];
  subregion?: string;
  population: number;
  flags: { png: string; svg: string };
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
}
