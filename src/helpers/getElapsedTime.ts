export function getElapsedTime(monthName: string, year: number): string {
  const monthMap: Record<string, number> = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  };

  const inputMonth = monthMap[monthName.toLowerCase()];
  if (inputMonth === undefined) {
    return "Mes no válido.";
  }

  const inputDate = new Date(year, inputMonth);
  const today = new Date();

  let years = today.getFullYear() - inputDate.getFullYear();
  let months = today.getMonth() - inputDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} año${years !== 1 ? "s" : ""} ${months} mes${
    months !== 1 ? "es" : ""
  }`;
}
