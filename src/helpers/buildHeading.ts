export function buildHeadings(body: string) {
  const headings = body
    .split("\n")
    .filter((item) => item.startsWith("#"))
    .map((item) => {
      const cleanText = item.trim();
      const [headingType, ...rest] = cleanText.split(" ");
      const headingText = rest.join(" ");

      return {
        type: headingType,
        text: headingText,
      };
    });

  return headings;
}
