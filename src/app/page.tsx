import StaticCover from "@/components/StaticCover";
import CasesFeatured from "@/components/CasesFeatured";
import Clients from "@/components/Clients";
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
      <Clients />
      <PostsFeatured />
    </>
  );
}
