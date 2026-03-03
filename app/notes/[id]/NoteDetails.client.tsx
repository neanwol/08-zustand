'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css';

interface NoteDetailsClientProps {
  noteId: string;
}

export default function NoteDetailsClient({
  noteId,
}: NoteDetailsClientProps) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div className={css.container}>
      <p>Loading, please wait...</p>
    </div>;
  }

  if (error || !note) {
    return <div className={css.container}>
      <p>Something went wrong.</p>
      <Link href="/notes" className={css.backLink}>
        Back to notes
      </Link>
    </div>;
  }

  return (
    <div className={css.container}>
      <Link href="/notes" className={css.backLink}>
        ← Back to notes
      </Link>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.tag}>{note.tag}</p>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
