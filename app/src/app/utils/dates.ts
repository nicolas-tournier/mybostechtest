export function formatTableDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'pm' : 'am';
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}${ampm}`;
  return formattedDate;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: undefined, month: 'short', day: 'numeric', weekday: 'short' };
  return date.toLocaleDateString('en-US', options);
}
