import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us - By Association Only's website reproduction",
  description: "About By Association Only",
  keywords: "website, reproduction",
};

export default function About() {
  return (
    <>
      <section>
        <h2 className="heading-2">About us</h2>
        <h3 className="heading-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <section className="card-container">
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
        </section>
        <section className="flex--50">
          <div>
            <Image
              className=""
              src="/images/miyu-p-500.avif"
              alt=""
              width={500}
              height={312}
              priority
            />
          </div>
          <div>
            <Image
              className=""
              src="/images/astrid_banner-p-800.avif"
              alt=""
              width={800}
              height={455}
              priority
            />
          </div>
          <div>
            <Image
              className=""
              src="/images/bridal-p-500.avif"
              alt=""
              width={500}
              height={291}
              priority
            />
          </div>
        </section>
        <div className="flex-auto">
          <p className="theme--brand">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin orci leo. Sed posuere, quam eget convallis bibendum,
            arcu dui suscipit purus, eu efficitur nunc mauris a tellus.
            Curabitur eu nisl nec sapien vulputate interdum. Proin risus augue,
            molestie sit amet nibh vitae, ornare porta mi. Curabitur fermentum
            cursus ex.
          </p>
          <p className="theme--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin orci leo. Sed posuere, quam eget convallis bibendum,
            arcu dui suscipit purus, eu efficitur nunc mauris a tellus.
            Curabitur eu nisl nec sapien vulputate interdum. Proin risus augue,
            molestie sit amet nibh vitae, ornare porta mi. Nam luctus est et
            nunc dignissim, et facilisis tortor malesuada. Nullam quis sapien
            vestibulum, tempus nunc non, pulvinar enim. Donec eget lorem
            viverra, placerat erat at, suscipit lectus. Proin eleifend urna
            vestibulum velit vulputate molestie. Curabitur fermentum cursus ex.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin orci leo. Sed posuere, quam eget convallis bibendum,
            arcu dui suscipit purus, eu efficitur nunc mauris a tellus.
            Curabitur eu nisl nec sapien vulputate interdum. Proin risus augue,
            molestie sit amet nibh vitae, ornare porta mi. Nam luctus est et
            nunc dignissim, et facilisis tortor malesuada. Nullam quis sapien
            vestibulum, tempus nunc non, pulvinar enim. Donec eget lorem
            viverra, placerat erat at, suscipit lectus. Proin eleifend urna
            vestibulum velit vulputate molestie. Curabitur fermentum cursus ex.
          </p>
          <p className="theme--brand">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin orci leo. Sed posuere, quam eget convallis bibendum,
            arcu dui suscipit purus, eu efficitur nunc mauris a tellus.
            Curabitur eu nisl nec sapien vulputate interdum. Proin risus augue,
            molestie sit amet nibh vitae, ornare porta mi. Nam luctus est et
            nunc dignissim, et facilisis tortor malesuada. Nullam quis sapien
            vestibulum, tempus nunc non, pulvinar enim. Donec eget lorem
            viverra, placerat erat at, suscipit lectus. Proin eleifend urna
            vestibulum velit vulputate molestie. Curabitur fermentum cursus ex.
          </p>
        </div>
      </section>
    </>
  );
}
