import { getNotes } from "../lib/storage";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Home() {
  const navigate = useNavigate();
  const notes = getNotes();

  const createNote = () => {
    const id = uuid();
    navigate(`/note/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📘 Мои заметки</h1>
      <button
        onClick={createNote}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
      >
        ➕ Новая заметка
      </button>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`} className="text-blue-700 hover:underline">
              {note.title || "Без названия"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
