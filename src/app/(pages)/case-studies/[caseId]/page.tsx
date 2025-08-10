import { notFound } from "next/navigation";
import PostNext from "@/components/PostNext";
import StaticCover from "@/components/StaticCover";
import PanelPartners from "@/components/PanelPartners";

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
      <PanelPartners />
      <PostNext />
    </>
  );
}
