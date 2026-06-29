'use client';

import Link from 'next/link';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="venture-site">
      <section className="utility-page utility-page--error">
        <div className="utility-page__inner">
          <p className="utility-page__eyebrow">Page error</p>
          <h1>Something went wrong.</h1>
          <p>{error.message || 'The page could not be loaded. Please retry or return home.'}</p>
          <div className="utility-page__actions">
            <button className="cta-button cta-button--primary" type="button" onClick={reset}>
              <span>Try Again</span>
            </button>
            <Link className="utility-page__link" href="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
