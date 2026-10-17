const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatRange({ start, end }) {
  const fmt = ([y, m]) => `${MONTHS[m - 1]} ${y}`;
  return `${fmt(start)} - ${end ? fmt(end) : "Present"}`;
}

export function countMonths({ start, end }, today = new Date()) {
  const [ey, em] = end ?? [today.getFullYear(), today.getMonth() + 1];
  return (ey - start[0]) * 12 + (em - start[1]) + 1;
}

export function formatMonths(total) {
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months || !years) parts.push(`${months} month${months === 1 ? "" : "s"}`);
  return parts.join(" ");
}
