# 📝 My Notebook — расширение BlockNote с темами, Markdown и ИИ

Это встроенное приложение в виде полноценного редактора заметок на основе компонентов. Проект построен на основе Vite, React, Tailwind, NX и расширенного BlockNote.

---

## 🚀 Быстрый старт

### 1. Установи зависимости

Из корня проекта BlockNote (в который ты встроил `my-notebook`):

```bash
pnpm install

### 2. Запусти в режиме разработки

```bash
npx nx run @blocknote/my-notebook:dev

### 📁 Структура

blocknote/
│
├── packages/
│   ├── core/                   # Исходники BlockNote Core
│   ├── react/                  # Обёртка React для BlockNote
│   └── my-notebook/           # 💡 Наш кастомный редактор
│       ├── src/
│       │   ├── pages/
│       │   ├── components/
│       │   ├── lib/
│       │   ├── index.css
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── public/
│       ├── project.json        # 📦 Конфиг NX
│       ├── tsconfig.json
│       └── vite.config.ts
├── node_modules/
├── nx.json / workspace.json    # Конфиг монорепозитория
└── package.json                # Главный package.json

### ✨ Особенности

── 📄 Поддержка Markdown: экспорт и импорт.
── 🌙 Переключение темы: светлая / тёмная.
── 🧱 Перетаскивание блоков.
── 🤖 Встроенный AI sidebar (макет под TabNine).
── 🧠 Полная интеграция с @blocknote/core и @blocknote/react напрямую из исходников.

### ⚙️ Команды

Команда | Описание
npm run dev (внутри examples/my-notebook) | Запуск напрямую (без NX, если нужно)
npx nx run @blocknote/my-notebook:dev | ✅ Рекомендуемый запуск из корня
npm run build | Сборка проекта
npm run preview | Просмотр production-сборки
npm run lint | Проверка ESLint