import { createContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ArticleContext = createContext();

export const ArticleProvider = ({
    children
}) => {
    const [article, setArticle] = useLocalStorage('articleData');

    const updateArticle = useCallback((data) => {
        setArticle(data);
    }, [setArticle]);

    return (
        <ArticleContext.Provider value={{ article, updateArticle }}>
            {children}
        </ArticleContext.Provider >
    );
}

export default ArticleContext;