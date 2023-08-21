import { formatDate } from '@angular/common';

export function formatTableDate(dateString: string): string {
  const date = new Date(dateString);
  let formatted = formatDate(date, 'dd/MM/yyyy h:mma', 'en');
  formatted = formatted.replace(/AM$/, 'am').replace(/PM$/, 'pm');
  return formatted;
}
