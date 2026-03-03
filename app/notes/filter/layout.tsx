import css from './layout.module.css'

export default function FiltersLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <>
      <div className={css.container}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <main className={css.notesWrapper}>{children}</main>
      </div>
    </>
  );
}