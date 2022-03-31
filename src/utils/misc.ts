export const excludeTags = (content: string) => content.replace(/<[^>]*>/g, '');

export const camelCase = <T>(data: string): T =>
  data.replace(/\s\w/g, (match) => match.toUpperCase().trim()) as unknown as T;
