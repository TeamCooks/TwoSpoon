export const excludeTags = (content: string) => content.replace(/<[^>]*>/g, '');
