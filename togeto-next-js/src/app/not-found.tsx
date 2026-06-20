import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="venture-site">
      <section className="utility-page utility-page--error">
        <div className="utility-page__inner">
          <p className="utility-page__eyebrow">404</p>
          <h1>Page not found.</h1>
          <p>The page you requested is not available on the Venture Electronics website.</p>
          <Link className="it-btn-orange" href="/">
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
