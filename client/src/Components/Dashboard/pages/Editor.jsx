import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/CommonHooks";
import { Source } from "./../Card/Source";

import {
    SEO,
    AIWritingAssistant,
    Categories,
    Publish,
    Indicator,
    EditorContent,
    MediaInputPreview,
} from "../Card/AllCard";

export const EMPTY_ARTICLE = {
    category: "",

    source: {
        name: "iqbal",
        logo: "", // File | URL
        url: "",
        type: "",
    },

    author: "",
    title: "",
    description: "",
    summary: "",
    content: "",

    url: "",
    urlToImage: "",
    urlToVideo: "",

    SEO: {
        metaTitle: "",
        metaDescription: "",
        focusKeyword: "",
        score: 0,
    },


};


export Source = {
    name: "iqbal",
    logo: "",
    url: "",
    type: "",
},


export default function Editor() {
    const { res, refetch } = useFetch("http://localhost:3000/Articles");







    useEffect(() => {
        refetch();


    }, []);

    const [index, setIndex] = useState(0);
    // main article state (single source of truth)
    const [article, setArticle] = useState(() => {
        const saved = localStorage.getItem("article");
        return saved ? JSON.parse(saved) : EMPTY_ARTICLE;
    });





    const CreateArticles = async () => {
        const data = await refetch({
            method: "POST",
            body: article
        })



    }
    /* =================== Load article from API ============== */
    useEffect(() => {
        if (res?.success && res.articles.length > 0) {
            setIndex(res.articles.length - 1);
            setArticle(res.articles[res.articles.length - 1]);
        }
    }, [res]);

    /* ================= Auto-save to localStorage ============ */
    useEffect(() => {
        localStorage.setItem("article", JSON.stringify(article));
    }, [article]);

    /* =================== Handlers ===================== */
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setArticle((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setArticle((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handlePrev = () => {
        if (!res?.articles) return;
        setIndex((i) => Math.max(0, i - 1));
        setArticle(res.articles[Math.max(0, index - 1)]);
    };

    const handleNext = () => {
        if (!res?.articles) return;
        setIndex((i) => Math.min(res.articles.length - 1, i + 1));
        setArticle(res.articles[Math.min(res.articles.length - 1, index + 1)]);
    };

    return (
        <>
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">স্মার্ট এডিটর</h2>
                <p className="text-gray-600">AI-সহায়তা সহ উন্নত নিবন্ধ সম্পাদক</p>
            </div>

            {/* Auto save indicator */}
            <Indicator />

            <div className="bg-white rounded-xl shadow-sm border">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                    {/* Main Editor */}
                    <div className="lg:col-span-3 space-y-4">
                        <MediaInputPreview
                            {...{
                                index,
                                handlePrev,
                                handleNext,

                                urlToImage: article?.urlToImage,
                                urlToVideo: article?.urlToVideo,
                            }}
                        />

                        {/* Editor */}
                        <EditorContent metaState={article} CreateArticles={CreateArticles} handleChange={handleChange} />

                        <AIWritingAssistant contentState={article} />

                        <Publish article={article} />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Categories
                            categoryState={article.category}
                            handleChange={handleChange}
                        />
                        {/* <Source {...{ ...article.source, handleChange, mediaHandleChange }} /> */}
                        {/* <Source role="admin" /> */}
                        <SEO {...{ ...article.SEO, handleChange }} />
                    </div>
                </div>
            </div>
        </>
    );
}
