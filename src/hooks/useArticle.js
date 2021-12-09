import { useContext } from "react";
import ArticleContext from "../contexts/ArticleContext";

export const useArticle = () => useContext(ArticleContext)