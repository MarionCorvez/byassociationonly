export default function StaticCover() {
  return (
    <>
      <section className="intro-container theme--thamar-black">
        <h1 className="heading-1">
          The Shopify Plus agency for the world’s most design-conscious luxury
          brands.
        </h1>
      </section>
      <section className="static-container">
        <img
          srcSet="/images/maria-tarasova-400.avif 400w,
         /images/maria-tarasova-600.avif 600w, 
         /images/maria-tarasova-900.avif 900w, 
         /images/maria-tarasova-1200.avif 1200w, 
         /images/maria-tarasova-1600.avif 1600w"
          sizes="100vw"
          src="/images/maria-tarasova-900.avif"
          alt="Picture of Maria Tarasova"
          loading="lazy"
        />
      </section>
    </>
  );
}
