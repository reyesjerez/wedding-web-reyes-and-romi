function Hero({ claseHero, title, subtitle }) {
  return (
    <section className={claseHero}>
      <h2 className="hero__title"> {title}</h2>
      <h2 className="hero__subtitle">{subtitle}</h2>
    </section>
  );
}

export default Hero;
