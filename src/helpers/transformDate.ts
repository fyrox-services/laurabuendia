export function transformDate(date: Date) {
  const dateFormated = new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return dateFormated;
}
