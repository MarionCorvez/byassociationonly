export default function StaticCover() {
  return (
    <>
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
