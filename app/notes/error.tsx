'use client';

import { useEffect } from 'react';
import css from './error.module.css';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className={css.container}>
        <p>Could not fetch the list of notes. {error.message}</p>
        <button onClick={() => reset()} className={css.button}>
          Try again
        </button>
      </div>
    </main>
  );
}
