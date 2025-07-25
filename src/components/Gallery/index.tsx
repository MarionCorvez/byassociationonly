import Image from "next/image";

export default function Gallery() {
  return (
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
  );
}
