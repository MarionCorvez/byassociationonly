import HeroSplit from "@/components/HeroSplit";
import CardStat from "@/components/CardStat";
import PostContent from "@/components/PostContent";

const data = {
  theme: "theme--dark",
  title: "Join the world’s most design-led Shopify Plus agency.",
  image: "/images/cover-careers.avif",
  alt: "Picture of green plants",
  width: 1600,
  height: 1600,
  link: {
    href: "https://ecologi.com/byassociationonly",
    label: "View our Ecologi profile",
  },
};
export default function Careers() {
  return (
    <>
      <HeroSplit
        theme={data.theme}
        title={data.title}
        image={data.image}
        alt={data.alt}
        width={data.width}
        height={data.height}
        link={data.link}
        href={data.link.href}
        label={data.link.label}
      />
      <PostContent isValue={false} isPartners={false} />
      <CardStat />
    </>
  );
}
