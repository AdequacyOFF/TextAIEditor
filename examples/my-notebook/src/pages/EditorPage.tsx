import { useParams } from "react-router-dom";
import BlockEditor from "../components/BlockEditor";
import { getNote, saveNote } from "../lib/storage";
import { useEffect, useState } from "react";

export default function EditorPage() {
  const { id } = useParams();
  const note = getNote(id!);
  const [title, setTitle] = useState(note?.title || "Без названия");
  const [content, setContent] = useState<any>(note?.content);

  useEffect(() => {
    saveNote(id!, title, content);
  }, [title, content]);

  return (
    <div className="max-w-4xl mx-auto">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-3xl font-bold w-full mb-4 outline-none border-b dark:bg-transparent"
      />
      <BlockEditor
        noteId={id!}
        initialContent={note?.content}
        onContentChange={(json) => setContent(json)}
      />
    </div>
  );
}
