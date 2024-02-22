import { news } from "@/types";

export const removeDuplicateData = (articles: { articles?: news[] } = {}) => {
  const randomArticle = articles.articles || [];
  const filterArticles = randomArticle.filter((article) => article?.source?.id !== null);
  return filterArticles;
};
