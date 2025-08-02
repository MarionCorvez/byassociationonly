import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <section className="scroll-container">
        <div className="scroll-sticky">
          <div className="scroll-items">
            <h2 className="heading-1 title">
              Shopify Plus <em>Case Studies</em>.
            </h2>
            <div className="scroll-item">
              <Image
                src="/images/miyu-p-500.avif"
                alt="Picture of Astrid & Miyu project"
                width={500}
                height={312}
                priority={true}
              />
            </div>

            <Image
              className="scroll-item"
              src="/images/transcode-poster-00004.avif"
              alt="Picture of Joseph Joseph project"
              width={720}
              height={720}
              priority
            />
            <Image
              className="scroll-item"
              src="/images/astrid_banner-p-800.avif"
              alt="Picture of Self-Portrait project"
              width={800}
              height={455}
              priority
            />
            <Image
              className="scroll-item"
              src="/images/bridal-p-500.avif"
              alt="Picture of Bremont project"
              width={500}
              height={291}
              priority
            />
            <Image
              className="scroll-item"
              src="/images/compressed-poster-00002.avif"
              alt="Picture of Self-Portrait project"
              width={1280}
              height={720}
              priority
            />
            <Image
              className="scroll-item"
              src="/images/transcode-poster-00001.avif"
              alt="Picture of Self-Portrait project"
              width={1280}
              height={720}
            />
            <div>
              <Image
                className="scroll-item--self"
                src="/icons/link-works.png"
                alt="Link to works"
                width={321}
                height={321}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ul className="scroll-container-2">
          <li className="scroll-item-2">UI/UX Design</li>
          <li className="scroll-item-2">Web Development</li>
          <li className="scroll-item-2">Replatforming</li>
          <li className="scroll-item-2">Data Migration</li>
          <li className="scroll-item-2">eCommerce Strategy</li>
          <li className="scroll-item-2">CRO</li>
          <li className="scroll-item-2">SEO</li>
        </ul>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          expedita quidem, totam voluptas aut est dolores nulla, dolorem
          repellat maxime, vel vero sequi similique tempore! Dicta facilis rem
          repellat vitae.
        </p>
      </section>

      {/* <section className="locomotive-scroll-section">
        <div className="locomotive-scroll-container">
          <h2>Shopify Plus Case Studies.</h2>
          <Image
            className=""
            src="/images/miyu-p-500.avif"
            alt=""
            width={500}
            height={312}
            priority
          />
          <Image
            className=""
            src="/images/transcode-poster-00004.avif"
            alt=""
            width={720}
            height={720}
            priority
          />
          <Image
            className=""
            src="/images/astrid_banner-p-800.avif"
            alt=""
            width={800}
            height={455}
            priority
          />
          <Image
            className=""
            src="/images/miyu-p-500.avif"
            alt=""
            width={500}
            height={312}
            priority
          />
          <Image
            className=""
            src="/images/astrid_banner-p-800.avif"
            alt=""
            width={800}
            height={455}
            priority
          />
        </div>
      </section> */}
      <section className="gallery-container">
        <Image
          className=""
          src="/images/miyu-p-500.avif"
          alt=""
          width={500}
          height={312}
          priority
        />
        <Image
          className=""
          src="/images/transcode-poster-00004.avif"
          alt=""
          width={720}
          height={720}
          priority
        />
        <Image
          className=""
          src="/images/astrid_banner-p-800.avif"
          alt=""
          width={800}
          height={455}
          priority
        />
        <Image
          className=""
          src="/images/miyu-p-500.avif"
          alt=""
          width={500}
          height={312}
          priority
        />
        <Image
          className=""
          src="/images/astrid_banner-p-800.avif"
          alt=""
          width={800}
          height={455}
          priority
        />
      </section>
    </>
  );
}
