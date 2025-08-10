import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function StaticCover() {
  return (
    <>
      <section className="static-container">
        <article
          key="9222"
          className="card card--highlighted gallery-background"
        >
          <Link href="" className="container">
            <div className="media-wrapper">
              <Image
                className="media"
                src="/images/cases/veynd.avif"
                alt="Picture of VEYND project"
                width="1280"
                height="720"
              />
            </div>
            <div className="txt-wrapper">
              <h2 className="head heading-3">VEYND</h2>

              <p className="details">
                A bespoke design and build for new sportswear brand from
                founders of The Kooples.
              </p>

              <div className="link-wrapper">
                <p className="link">View case study</p>
                <ArrowIcon cls="icon-wrapper icon--sm" />
              </div>
            </div>
          </Link>
        </article>

        {/*         <img
          srcSet="/images/maria-tarasova-400.avif 400w,
         /images/maria-tarasova-600.avif 600w, 
         /images/maria-tarasova-900.avif 900w, 
         /images/maria-tarasova-1200.avif 1200w, 
         /images/maria-tarasova-1600.avif 1600w"
          sizes="100vw"
          src="/images/maria-tarasova-900.avif"
          alt="Picture of Maria Tarasova"
          loading="lazy"
        /> */}
      </section>
    </>
  );
}
