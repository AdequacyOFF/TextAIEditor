const STORAGE_KEY = "blocknote-docs";

export function getNotes(): { id: string; title: string; content: any }[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function saveNote(id: string, title: string, content: any) {
  const notes = getNotes();
  const idx = notes.findIndex((n) => n.id === id);
  if (idx !== -1) notes[idx] = { id, title, content };
  else notes.push({ id, title, content });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function getNote(id: string) {
  return getNotes().find((n) => n.id === id);
}
