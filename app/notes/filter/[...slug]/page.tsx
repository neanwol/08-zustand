import { fetchNotes } from "@/lib/api";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface NoteListProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function Notelist({
  params,
  searchParams,
}: NoteListProps) {
  const { slug } = await params;
  const { page, query } = await searchParams;

  const tag = slug?.[0];
  const currentPage = Number(page ?? 1);
  const searchQuery = query ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", currentPage, searchQuery, tag],
    queryFn: () =>
      fetchNotes(
        currentPage,
        searchQuery,
        !tag || tag === "all" ? undefined : tag,
      ),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient
        tag={tag}
        />
      </HydrationBoundary>
    </>
  );
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] ?? 'all';
  const title = `Notes — ${slug === 'all' ? 'All' : slug}`;
  const description = `Viewing notes filtered by: ${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://notehub.example.com/notes/filter/${slug}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          alt: 'Notes filter',
        },
      ],
    },
  };
}