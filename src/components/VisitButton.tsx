import { useState } from 'react';

export default function VisitButton() {
  const [wantToVisit, setWantToVisit] = useState(false);

  return (
    <button
      onClick={() => setWantToVisit(!wantToVisit)}
      className={wantToVisit ? 'visit active' : 'visit'}
      aria-pressed={wantToVisit}
    >
      {wantToVisit ? '★ Quero visitar' : '☆ Quero visitar'}
    </button>
  );
}
