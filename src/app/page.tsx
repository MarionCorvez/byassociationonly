import StaticCover from "@/components/StaticCover";
import CasesFeatured from "@/components/CasesFeatured";
import LogoClouds from "@/components/LogoClouds";
import PostsFeatured from "@/components/PostsFeatured";
import Hero from "@/components/Hero";

export default function Home() {
  const data = {
    title:
      "The Shopify Plus agency for the world’s most design-conscious luxury brands.",
  };

  return (
    <>
      <Hero title={data.title} content={undefined} active={""} txt={""} />
      <StaticCover />
      <CasesFeatured />
      <LogoClouds />
      <PostsFeatured />
    </>
  );
}
