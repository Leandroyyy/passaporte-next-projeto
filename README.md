# Passaporte — guia de países em Next.js

Projeto da aula "Do zero ao Next.js" (FIAP, 2º semestre). Um guia de países das Américas com App Router, Server Components e dados da [REST Countries](https://restcountries.com), uma API pública e sem chave.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Checkpoints

Cada etapa da aula é uma branch. Se você ficou para trás, salve o que fez e troque de branch:

```bash
git stash
git checkout checkpoint-2-server-client
```

| Branch | O que tem |
| --- | --- |
| `main` | Starter: `create-next-app` (TypeScript, ESLint, App Router, `src/`, sem Tailwind) com o que é React puro já pronto: tipos, dados mockados, `lib/api.ts`, `Header`, `CountryCard`, `CountryDetails` e `VisitButton`. A home já lista os países. |
| `checkpoint-1-rotas` | Header no layout, `/sobre`, `/pais/[codigo]` e os `<a>` trocados por `Link`. |
| `checkpoint-2-server-client` | O `VisitButton` do starter entra no card e ganha `"use client"`. |
| `checkpoint-3-dados` | Páginas usando `lib/api.ts` com `await`, `revalidate`, `loading.tsx` e `error.tsx`. |
| `checkpoint-4-route-handler` | `GET /api/paises` com filtro por `?busca=`. |
| `desafio-resolvido` | Desafio do fim da aula 1: link ativo no header com `usePathname`. |
| `checkpoint-5-server-action` | Aula 2: dicas de viajantes com Server Action e `useActionState`. |

## Observações

- No starter, o `npm run lint` acusa os `<a>` do Header de propósito: o próprio ESLint do Next sugere trocar por `Link`, que é o assunto do checkpoint 1.
- O estilo é CSS puro em `src/app/globals.css`, para a aula focar no Next e não em classes utilitárias.
- As bandeiras usam `<img>`. O ESLint avisa que existe o `next/image`, que fica para outra aula.
- A home é gerada no build e revalidada a cada hora (`revalidate: 3600`), então o `npm run build` precisa de internet para buscar os países.
- As dicas do checkpoint 5 ficam em memória: somem quando o servidor reinicia e não funcionam de forma confiável na Vercel, onde cada requisição pode cair numa instância diferente.
