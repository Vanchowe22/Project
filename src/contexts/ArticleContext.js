import { createContext, useState } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({
    children
}) => {
    const [article, setArticle] = useState({});

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