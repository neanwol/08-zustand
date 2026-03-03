import css from "./sidebar.module.css";
import Link from "next/link";

const tags = ["all", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag === "all" ? "All Notes" : tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}