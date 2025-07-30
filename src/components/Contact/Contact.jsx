import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contactBox}>
      <div className={css.infoWrapper}>
        <p className={css.name}>
          <HiUser />
          {name}
        </p>
        <p className={css.number}>
          <HiPhone />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => onDelete(id)} // Artık doğru çalışacak
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
