import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ArticleContext = createContext();

export const ArticleProvider = ({
    children
}) => {
    const [article, setArticle] = useLocalStorage('articleData', {});
    const updateArticle = (data) => {
        setArticle(data);
    }

    return (
        <ArticleContext.Provider value={{ article, updateArticle }}>
            {children}
        </ArticleContext.Provider >
    );
}

export default ArticleContext;