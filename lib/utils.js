import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Dates in this app are stored as 'DD-MM-YYYY' strings (via moment().format('DD-MM-YYYY')).
// new Date('DD-MM-YYYY') parses unreliably (browsers assume MM-DD-YYYY or reject it outright),
// so this parses the parts explicitly before formatting for display.
export function formatStoredDate(dateStr) {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('-');
  if (!day || !month || !year) return dateStr;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}
