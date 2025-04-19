import {
  BlockNoteView,
  useBlockNote,
  getDefaultReactSlashMenuItems,
  BlockNoteEditor,
  markdownSerializer,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect } from "react";

export default function BlockEditor({
  noteId,
  initialContent,
  onContentChange,
}: {
  noteId: string;
  initialContent?: any;
  onContentChange?: (json: any) => void;
}) {
  const editor: BlockNoteEditor = useBlockNote({
    initialContent,
    onEditorContentChange: (editor) => {
      const json = editor.document;
      onContentChange?.(json);
    },
    slashMenuItems: getDefaultReactSlashMenuItems(),
    dragAndDrop: true,
    dragHandle: true,
  });

  useEffect(() => {
    if (initialContent) {
      editor.replaceDocument(initialContent);
    }
  }, [initialContent]);

  const exportMarkdown = async () => {
    const md = await markdownSerializer.serializeToMarkdown(editor.document);
    navigator.clipboard.writeText(md);
    alert("Содержимое скопировано в Markdown!");
  };

  const importMarkdown = async () => {
    const md = prompt("Вставьте Markdown");
    if (md) {
      const blocks = await markdownSerializer.deserializeMarkdown(md);
      editor.replaceDocument(blocks);
    }
  };

  return (
    <div className="prose max-w-none dark:prose-invert">
      <div className="flex justify-end gap-2 mb-2">
        <button
          onClick={importMarkdown}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          📥 Импорт MD
        </button>
        <button
          onClick={exportMarkdown}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          📤 Экспорт MD
        </button>
      </div>
      <BlockNoteView editor={editor} />
    </div>
  );
}
