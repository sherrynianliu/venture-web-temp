export function HomeFinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="home-final-cta-title">
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="final-cta__inner">
        <div className="final-cta__text">
          <h2 id="home-final-cta-title" className="final-cta__title">
            Subscribe for PCBA &amp; EMS updates
          </h2>
          <p className="final-cta__desc">
            Get capability updates, new resources, and practical manufacturing insights from Venture
            Electronics — delivered to your inbox.
          </p>
        </div>
        <form className="subscribe" aria-label="Subscribe to Venture Electronics updates">
          <input
            type="email"
            name="email"
            className="subscribe__input"
            placeholder="Email Address"
            autoComplete="email"
            aria-label="Email address"
          />
          <button type="submit" className="subscribe__btn">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
