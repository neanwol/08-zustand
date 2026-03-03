import type { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from '@/components/NoteForm/NoteForm.module.css';

export const metadata: Metadata = {
  title: 'Create Note | NoteHub',
  description: 'Create a new note in NoteHub. Your progress will be saved as a draft.',
  openGraph: {
    title: 'Create Note | NoteHub',
    description: 'Create a new note in NoteHub. Your progress will be saved as a draft.',
    url: 'https://notehub.example.com/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        alt: 'Create Note',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
