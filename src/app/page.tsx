import StaticCover from "@/components/StaticCover";
import GalleryScroll from "@/components/GalleryScroll";
import Clients from "@/components/Clients";
import GalleryArea from "@/components/GalleryArea";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <StaticCover />
      <GalleryScroll />
      <Clients />
      <GalleryArea />
      <Newsletter />
    </>
  );
}
