import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "About us - By Association Only's website reproduction",
  description: "About By Association Only",
  keywords: "website, reproduction",
};

export default function About() {
  return (
    <>
      <h2 className="heading-2">About us</h2>
      <h3 className="heading-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
    </>
  );
}
