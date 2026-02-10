import { useState } from "react";
import { Icons } from "./../Config";

import {
    TextareaAutoResize,

    Select,
    CRUDbutton,

} from "./../../../utilities/CommonFuntion";
import { UploadsFile } from "./../../../utilities/MediaUpload";
const {
    Dashboard,
    Clock,
    Robot,
    Bolt,
    History,
    Queue,
    Check,
    Edit,
    Eye,
    Bold,
    Upload,
    Calendar,
    Tasks,
    Italic,
    Underline,
    Heading,
    Users,
    Download,
    QuoteLeft,
    QuoteUp,
    QuoteDown,
    SpellCheck,
    Image,
    Video,
    ArrowDown,
    ArrowUp,
    Share,
    Link,
    Save,
    Tags,
    Exclamation,
    Search,
    Times,
    PaperPlane,
    Rocket,
    Emoji,
    Sun,
    Moon,
    FileText,
    Menu,
    Delete,
    Plus,
} = Icons;

import { NavButton } from "./CardLeyout";
import {
    CustomNavLink,
    CustomLink,
    CustomButton,
} from "./../../../utilities/Element";


// Toolbar Component
export const Toolbar = ({ index, handlePrev, handleNext, uploadMedia }) => {
    return (
        <div className="flex items-center space-x-2 py-3 border-b bg-white">
            {/* Navigation */}
            <div className="flex space-x-1">
                <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded">
                    <i className="fa-solid fa-caret-left"></i>
                </button>
                <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded">
                    <i className="fa-solid fa-caret-right"></i>
                </button>
            </div>

            <div className="w-px h-6 bg-gray-300" />

            {/* Formatting Buttons */}
            <div className="flex space-x-1">
                <button className="p-2 hover:bg-gray-100 rounded">
                    <i className="fas fa-heading" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                    <i className="fas fa-list-ul" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                    <i className="fas fa-quote-left" />
                </button>
            </div>

            <div className="w-px h-6 bg-gray-300" />

            {/* Media Inputs */}
            <div className="flex space-x-1">
                <UploadsFile
                    controlsPreview={(lo, prev) => {
                        console.log(lo, prev);
                    }}
                    accept="image"

                    fetch={{
                        url: "http://localhost:3000/Media/",
                        method: "POST",
                    }}
                    style="w-5 h-5 p-4  rounded"
                />
                <UploadsFile
                    controlsPreview={(lo, prev) => {
                        console.log(lo, prev);
                    }}
                    accept="video"

                    fetch={{
                        url: "http://localhost:3000/Media/",
                        method: "POST",
                    }}
                    style="w-5 h-5 p-4  rounded"
                />
            </div>

            <div className="flex-1" />

            <strong className="text-gray-500">Article: {index}</strong>
        </div>
    );
};

export const MediaInputPreview = ({
    index,
    handlePrev,
    handleNext,
    uploadMedia,
    urlToImage = null,
    urlToVideo = null,
}) => {
    const [files, setFiles] = useState({
        image: {
            loading: false,
            url: null,
        },
        video: {
            loading: false,
            url: null,
        },
        audio: {
            loading: false,
            url: null,
        },
    });


    return (
        <div className="space-y-4">


            <div className="flex items-center space-x-2 py-3 border-b bg-white">
                {/* Navigation */}
                <div className="flex space-x-1">
                    <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded">
                        <i className="fa-solid fa-caret-left"></i>
                    </button>
                    <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded">
                        <i className="fa-solid fa-caret-right"></i>
                    </button>
                </div>

                <div className="w-px h-6 bg-gray-300" />

                {/* Formatting Buttons */}
                <div className="flex space-x-1">
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-heading" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-list-ul" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <i className="fas fa-quote-left" />
                    </button>
                </div>

                <div className="w-px h-6 bg-gray-300" />

                {/* Media Inputs */}
                <div className="flex space-x-1">
                    <UploadsFile
                        controlsPreview={(lo, pre) => {


                            setFiles(prev => ({
                                ...prev,
                                image: {
                                    loading: lo,
                                    url: pre,
                                },
                            }));


                        }}
                        accept="image"

                        fetch={{
                            url: "http://localhost:3000/Media/",
                            method: "POST",
                        }}
                        style="w-5 h-5 p-4  rounded"
                    />
                    <UploadsFile
                        controlsPreview={(lo, pre) => {


                            setFiles(prev => ({
                                ...prev,
                                video: {
                                    loading: lo,
                                    url: pre,
                                },
                            }));
                        }}
                        accept="video"

                        fetch={{
                            url: "http://localhost:3000/Media/",
                            method: "POST",
                        }}
                        style="w-5 h-5 p-4  rounded"
                    />
                </div>

                <div className="flex-1" />

                <strong className="text-gray-500">Article: {index}</strong>
            </div>







            {/* Preview */}
            {(files.image.url || files.video.url) && (
                <div className="flex gap-3 h-36">

                    {files.image.url && (
                        <div className="relative w-full overflow-hidden rounded">
                            {files.image.loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                                    <span className="loading-spinner" />
                                </div>
                            )}
                            <img
                                src={files.image.url}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {files.video.url && (
                        <div className="relative w-full overflow-hidden rounded">
                            {files.video.loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                                    <span className="loading-spinner" />
                                </div>
                            )}
                            <video
                                src={files.video.url}
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                </div>
            )}

        </div>
    );
};

export const Nav = ({ datas = [], badge = [] }) => {
    return (
        <aside className="w-64 bg-white shadow-lg  sticky top-16 transition-all duration-300">
            <nav className="p-4 space-y-1">
                {datas.map(({ name, icon, ...rest }, i) => {
                    const Icon = icon;
                    return (
                        <CustomNavLink
                            state={{ ...rest }}
                            key={`${name}-${i}`}
                            to={name === "Dashboard" ? "" : name}
                            rel="noopener noreferrer"
                        >
                            <NavButton name={name} Icon={Icon} badge={badge[i]} />
                        </CustomNavLink>
                    );
                })}
            </nav>
        </aside>
    );
};

export const Publish = () => {
    return (
        <div className=" border-gray-200  ">
            <h3 className="font-semibold mb-3 flex items-center">
                <i className="fas fa-rocket text-blue-500 mr-2"></i>
                প্রকাশনা
            </h3>
            <div className="space-y-3">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>খসড়া হিসেবে সংরক্ষণ</option>
                    <option>পর্যালোচনার জন্য পাঠান</option>
                    <option>তাৎক্ষণিক প্রকাশ</option>
                    <option>নির্ধারিত সময়ে প্রকাশ</option>
                </select>

                <div className="flex space-x-2">
                    <button className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center">
                        <i className="fas fa-save mr-2"></i>সংরক্ষণ
                    </button>
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>প্রকাশ
                    </button>
                </div>
            </div>
        </div>
    );
};

export const SEO = ({
    handleChange,
    metaTitle,
    metaDescription,
    focusKeyword,
    score,
} = {}) => {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            {/* Header */}
            <h3 className="font-semibold mb-3 flex items-center text-gray-800">
                <Search className="text-purple-500 mr-2" />
                SEO Optimization
            </h3>

            <div className="space-y-3">
                {/* Meta Title */}
                <TextareaAutoResize
                    placeholder="Meta Title..."
                    value={metaTitle || ""}
                    name="SEO.metaTitle"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none resize-none overflow-hidden"
                />

                {/* Meta Description */}
                <TextareaAutoResize
                    placeholder="Meta Description..."
                    value={metaDescription || ""}
                    name="SEO.metaDescription"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none resize-none overflow-hidden"
                />

                {/* Focus Keyword */}
                <TextareaAutoResize
                    placeholder="Focus Keyword..."
                    value={focusKeyword || ""}
                    name="SEO.focusKeyword"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none resize-none overflow-hidden"
                />

                {/* SEO Score */}
                <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">SEO Score</span>
                        <span className="text-sm font-bold text-green-600">
                            {score || 0}/100
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${score || 0}%` }}
                        ></div>
                    </div>

                    <div className="mt-2 space-y-1 text-xs">
                        <div className="flex items-center">
                            <Check className="text-green-500 mr-2" />
                            <span>Title length is appropriate</span>
                        </div>
                        <div className="flex items-center">
                            <Check className="text-green-500 mr-2" />
                            <span>Meta description optimized</span>
                        </div>
                        <div className="flex items-center">
                            <Exclamation className="text-yellow-500 mr-2" />
                            <span>Add more keywords</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Indicator = () => {
    return (
        <div className="flex items-center justify-between text-sm my-5 text-gray-500">
            <div className="flex items-center space-x-2">
                <i className="fas fa-save text-green-500"></i>
                <span>স্বয়ংক্রিয় সংরক্ষণ: ২ সেকেন্ড আগে</span>
            </div>
            <div className="flex items-center space-x-2">
                <i className="fas fa-users text-blue-500"></i>
                <span>২ জন সহযোগী অনলাইন</span>
            </div>
        </div>
    );
};

export const EditorContent = ({
    metaState: { title, summary, description, content },
    handleChange,
    CreateArticles
}) => {
    return (
        <div className="p-5 border border-gray-200 rounded-xl mb-3 bg-white space-y-3 shadow-sm">
            {/* Title */}
            <TextareaAutoResize
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                placeholder="Enter title"
                className="w-full resize-none overflow-hidden text-3xl font-bold text-blue-700 outline-none focus:bg-blue-50 rounded-md px-2"
            />

            {/* Description */}
            <TextareaAutoResize
                name="description"
                value={description}
                onChange={(e) => handleChange(e)}
                placeholder="Enter description"
                className="w-full resize-none overflow-hidden text-xl text-gray-700 outline-none focus:bg-gray-100 rounded-md px-2"
            />

            {/* Summary */}
            <TextareaAutoResize
                name="summary"
                value={summary}
                onChange={(e) => handleChange(e)}
                placeholder="Enter summary"
                className="w-full resize-none overflow-hidden text-base text-blue-500 outline-none focus:bg-blue-50 rounded-md px-2"
            />

            {/* Content */}
            <TextareaAutoResize
                name="content"
                value={content}
                onChange={(e) => handleChange(e)}
                placeholder="Write your content..."
                className="w-full resize-none overflow-hidden text-sm text-gray-600 outline-none focus:bg-gray-50 rounded-md px-2"
            />

            <div className="flex gap-3 flex-wrap-none pt-2">
                <CRUDbutton
                    icon={Plus}
                    color="green"
                    label="Create"
                    onClick={() => {
                        alert("ghgghg")
                        CreateArticles()
                    }}
                />

                <CRUDbutton icon={Edit} label="Edit" color="blue" />

                <CRUDbutton icon={Delete} label="Delete" color="red" />

                <CRUDbutton icon={Queue} label="Queue" color="purple" />
            </div>
        </div>
    );
};

export const AIWritingAssistant = ({ contentState: { content } }) => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [loading, setLoading] = useState(false);

    const callAI = async (action, text) => {
        setLoading(true);
        try {
            const promptMap = {
                "Title Suggestion": `Create 3 creative titles for this text:\n${text}`,
                "Grammar Check": `Check the grammar of this text and correct it:\n${text}`,
                Summary: `Summarize this text in 2-3 sentences:\n${text}`,
                "Tone Improvement": `Improve the tone of this text:\n${text}`,
            };

            const prompt = promptMap[action];

            const res = await fetch("http://localhost:3000/OpenAI/ai-suggestion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action,
                    content: prompt,
                }),
            });

            const data = await res.json();
            if (res.status === 429) {
                setOutputText("Quota exceeded. Please check your OpenAI plan.");
            } else if (data.suggestion) {
                setOutputText(data.suggestion);
            } else {
                setOutputText("Error: Could not get AI response");
            }
        } catch (err) {
            console.error(err);
            setOutputText("Error: Could not get AI response");
        }
        setLoading(false);
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center">
                <i className="fas fa-robot text-blue-500 mr-2"></i> AI Assistant
            </h3>
            {loading ? (
                <p className="text-gray-500 my-2">Processing...</p>
            ) : (
                outputText && (
                    <div className="p-3 bg-gray-50 border rounded mb-2">{outputText}</div>
                )
            )}
            <div className="flex gap-2   ">
                <TextareaAutoResize
                    type="text"
                    className="w-full border p-2 h-10 rounded mb-3"
                    rows={4}
                    placeholder="Enter your qution"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="  min-w-20 h-10 bg-purple-500 rounded hover:bg-blue-100 text-blue-700">
                    Send
                </button>
            </div>
            <div className="flex gap-3  flex-wrap mb-3">
                {[
                    "Mas",
                    "Title Suggestion",
                    "Grammar Check",
                    "Summary",
                    "Tone Improvement",
                ].map((action) => (
                    <button
                        key={action}
                        className={` px-3 py-1 rounded-lg text-sm flex items-center justify-center ${action === "Title Suggestion"
                            ? "bg-blue-50 hover:bg-blue-100 text-blue-700"
                            : action === "Grammar Check"
                                ? "bg-green-50 hover:bg-green-100 text-green-700"
                                : action === "Summary"
                                    ? "bg-purple-50 hover:bg-purple-100 text-purple-700"
                                    : "bg-orange-50 hover:bg-orange-100 text-orange-700"
                            }`}
                        onClick={() => callAI(action, content)}
                    >
                        <i className="fas fa-robot mr-2"></i>
                        {action}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const Categories = ({ handleChange, categoryState }) => {

    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center">
                <i className="fas fa-tags text-green-500 mr-2"></i>
                Categories
            </h3>

            <div className="space-y-3 ">

                <Select
                    name="category"
                    options={[
                        "UK",
                        "World",
                        "Health",
                        "Business",
                        "Politice",
                        "Technology",
                        "Science",
                        "Sport",
                    ]}
                    value={categoryState}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <p className="text-sm text-gray-500">Selected: {categoryState}</p>
            </div>
        </div>
    );
};

export const Source = ({
    handleChange,
    mediaHandleChange,
    name,
    logo,
    url,
    type,
}) => {
    /* ================= ACTIONS ================= */
    const ACTIONS = {
        CREATE: "CREATE",
        EDIT: "EDIT",
        DELETE: "DELETE",
        QUEUE: "QUEUE",
    };

    const [action, setAction] = useState(ACTIONS.QUEUE);

    /* ================= FORM ================= */
    const SourceForm = () => (
        <>
            {/* <MediaUpload
                isControlsPreview="true"
                accept="image/*"
                typeLabel="Upload Logo"
                value={logo}
                onChange={mediaHandleChange}
            /> */}

            <TextareaAutoResize
                name="source.name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-1 border rounded text-sm"
            />

            <TextareaAutoResize
                name="source.url"
                value={url}
                onChange={handleChange}
                placeholder="Official link"
                className="w-full p-1 border rounded text-sm"
            />

            <Select
                name="source.type"
                options={["newspaper", "tv", "blog", "agency", "social"]}
                value={type}
                onChange={handleChange}
                className="w-full p-1 border rounded text-sm"
            />
        </>
    );

    /* ================= DELETE ================= */
    const DeleteConfirm = () => (
        <div className="text-center space-y-3">
            <p className="text-red-600 font-semibold">
                Are you sure you want to delete this source?
            </p>

            <CRUDbutton
                label="Confirm Delete"
                color="red"
                onClick={() => console.log("DELETE API")}
            />
        </div>
    );

    /* ================= QUEUE VIEW ================= */
    const QueueView = () => (
        <>
            {logo ? (
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-20 object-cover rounded border"
                />
            ) : (
                <div className="h-20 flex items-center justify-center border rounded text-gray-400">
                    No Logo
                </div>
            )}

            <div className="border p-1 text-center text-sm">{name}</div>

            {url ? (
                <CustomLink
                    to={url}
                    text="Official link"
                    className="block text-center border p-1 text-sm"
                />
            ) : (
                <div className="border p-1 text-center text-sm text-gray-400">
                    No link
                </div>
            )}

            <div className="border p-1 text-center text-sm">{type}</div>
        </>
    );

    /* ================= SWITCH ================= */
    const renderContent = () => {
        switch (action) {
            case ACTIONS.CREATE:
            case ACTIONS.EDIT:
                return <SourceForm />;
            case ACTIONS.DELETE:
                return <DeleteConfirm />;
            case ACTIONS.QUEUE:
            default:
                return <QueueView />;
        }
    };

    /* ================= UI ================= */
    return (
        <div className="p-4 border rounded-lg space-y-3">
            <h3 className="flex items-center font-semibold text-gray-800">
                <Tags className="mr-2 text-green-500" size={16} />
                Source
            </h3>

            {/* Dynamic Content */}
            {renderContent()}

            {/* Submit Button */}
            {(action === ACTIONS.CREATE || action === ACTIONS.EDIT) && (
                <CRUDbutton
                    label={action === ACTIONS.CREATE ? "Create" : "Update"}
                    color="green"
                    onClick={() => console.log(action, "SUBMIT")}
                />
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
                <CRUDbutton
                    iconOnly
                    icon={Plus}
                    color="green"
                    onClick={() => setAction(ACTIONS.CREATE)}
                />

                <CRUDbutton
                    iconOnly
                    icon={Edit}
                    color="blue"
                    onClick={() => setAction(ACTIONS.EDIT)}
                />

                <CRUDbutton
                    iconOnly
                    icon={Delete}
                    color="red"
                    onClick={() => setAction(ACTIONS.DELETE)}
                />

                <CRUDbutton
                    iconOnly
                    icon={Queue}
                    color="purple"
                    onClick={() => setAction(ACTIONS.QUEUE)}
                />
            </div>
        </div>
    );
};
