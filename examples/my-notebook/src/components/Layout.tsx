import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex min-h-screen dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setDark((d) => !d)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {dark ? "🌞 Светлая тема" : "🌙 Тёмная тема"}
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
