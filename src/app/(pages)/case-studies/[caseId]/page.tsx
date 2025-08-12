import { notFound } from "next/navigation";
import StaticCover from "@/components/StaticCover";
import PostContent from "@/components/PostContent";
import Testimonial from "@/components/Testimonial";
import PostImage from "@/components/PostImage";
import PostNext from "@/components/PostNext";

async function fetchCases(id: string) {
  const response = await fetch(
    `https://688f1a90f21ab1769f8839d2.mockapi.io/cases/${id}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

export default async function CasePage({
  params,
}: {
  params: Promise<{
    caseId: string;
    id: number;
    title: string;
    content: string;
  }>;
}) {
  const { caseId } = await params;
  const data = await fetchCases(caseId);

  if (!data) {
    notFound();
  }

  return (
    <>
      <StaticCover />
      <article key={data.id}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </article>
      <PostContent isValue={false} isPartners={false} />
      <PostContent isValue={false} isPartners={true} />
      <PostContent isValue={true} isPartners={false} />
      <PostImage
        src="/images/cases/case-study-veynd-1.avif"
        alt="Picture of a woman running"
        width={1600}
        height={1111}
      />
      <Testimonial />
      <PostImage
        src="/images/cases/case-study-veynd-2.avif"
        alt="Picture of two people dressed with Veyn clothes"
        width={1600}
        height={1110}
      />
      <PostNext />
    </>
  );
}
