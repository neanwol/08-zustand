import type { Metadata } from "next";
import css from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 - Not Found | NoteHub',
  description: 'The requested page does not exist on NoteHub.',
  openGraph: {
    title: '404 - Not Found | NoteHub',
    description: 'The requested page does not exist on NoteHub.',
    url: 'https://notehub.example.com/404',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        alt: 'NoteHub Not Found',
      },
    ],
  },
};

export default function NotFoundPage() {
  return (
    <main>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
