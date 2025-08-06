import StaticCover from "@/components/StaticCover";
import CasesFeatured from "@/components/CasesFeatured";
import Clients from "@/components/Clients";
import PostsFeatured from "@/components/PostsFeatured";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <StaticCover />
      <CasesFeatured />
      <Clients />
      <PostsFeatured />
      <Newsletter />
    </>
  );
}
