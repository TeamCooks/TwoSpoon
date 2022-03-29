export const excludeTags = (content: string) => content.replace(/<[^>]*>/g, '');

export const camelCase = (data: string) => data.replace(/\s\w/g, (match) => match.toUpperCase().trim());
