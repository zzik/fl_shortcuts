export async function fetchData() {
  const res = await fetch('/data.json');
  if (!res.ok) throw new Error('Failed to load shortcuts');
  return res.json();
}
