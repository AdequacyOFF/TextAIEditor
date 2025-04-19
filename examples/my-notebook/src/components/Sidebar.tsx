import { useState } from "react";

export default function Sidebar() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = async () => {
    setResponse("🤖 Ответ на: " + input);
  };

  return (
    <aside className="w-72 border-r dark:border-gray-700 p-4 space-y-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold">🧠 ИИ помощник</h2>
      <textarea
        className="w-full h-24 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        placeholder="Задать вопрос..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAskAI}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Спросить
      </button>
      <div className="text-sm whitespace-pre-wrap p-2 bg-gray-100 dark:bg-gray-700 rounded">
        {response || "Ответ появится здесь..."}
      </div>
    </aside>
  );
}
