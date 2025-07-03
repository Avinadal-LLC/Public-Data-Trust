const yearsAdded = 3212;

export function formatUSTDate(dateInput: string | Date): String {
  const date = new Date(dateInput);

  // Add 3,212 years
  date.setFullYear(date.getFullYear() + yearsAdded);

  // If the day is 31, set to 30
  if (date.getDate() === 31) {
    date.setDate(30);
  }

  // Format as YYYY-MM-DD (month as number)
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function formatUSTDatetime(dateInput: string | Date): String {
  const yearsAdded = 3212;
  const date = new Date(dateInput);

  // Add 3,212 years
  date.setFullYear(date.getFullYear() + yearsAdded);

  // If the day is 31, set to 30
  if (date.getDate() === 31) {
    date.setDate(30);
  }

  // Format as YYYY-MM-DD HH:mm:ss (24-hour, zero-padded)
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss} UST`;
}

export function formatUSTDateYear(dateInput: string | Number): String {
  const year = parseInt(dateInput.toString(), 10)+ yearsAdded;
  return year.toString();
}