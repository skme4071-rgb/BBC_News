import { useEffect, useRef, useState } from "react";


import { FaImage, FaVideo, FaTimes, FaMusic, FaPlus, FaEdit, FaTrash, FaTasks } from "react-icons/fa";
import { useFetch } from "./../hooks/CommonHooks";

export const TextareaAutoResize = ({
    value,
    onChange,
    placeholder,
    className,
    ...rest
}) => {
    const textareaRef = useRef(null);

    // Function to auto resize
    const autoResize = () => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    };

    // Run on value change
    useEffect(() => {
        autoResize();
    }, [value]);

    return (
        <textarea
            {...rest}
            ref={textareaRef}
            value={value}
            onChange={(e) => {
                onChange(e);
                autoResize(); // resize as user types
            }}
            placeholder={placeholder}
            className={`w-full resize-none overflow-hidden ${className}`}
            rows={1}
        />
    );
};

export const CRUDbutton = ({
    icon: Icon,
    label,
    color = "green",
    iconOnly = false,
    ...rest
}) => {
    const colors = {
        green: "bg-green-600 hover:bg-green-700",
        blue: "bg-blue-600 hover:bg-blue-700",
        red: "bg-red-600 hover:bg-red-700",
        purple: "bg-purple-600 hover:bg-purple-700",
    };

    return (
        <button
            {...rest}
            className={`w-full h-8 ${colors[color]} rounded flex items-center justify-center gap-2 text-white font-semibold text-sm transition`}
        >
            {Icon && <Icon size={18} />}
            {!iconOnly && label}
        </button>
    );
};

export const Select = ({ options, onChange, value, ...rest }) => {
    return (
        <div className="common-select">
            <select {...rest} value={value} onChange={(e) => onChange(e)}>
                {options.map((option) => {
                    const val = typeof option === "string" ? option : option.value;
                    const label = typeof option === "string" ? option : option.label;
                    return (
                        <option key={val} value={val}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

/* =======================
   Editor Page
// ======================= */
// export default function Editor() {
//   const [article, setArticle] = useState({
//     title: "",
//     content: "",
//     coverMedia: null,
//   });

//   // 🔥 Universal handleChange
//   const handleChange = (eOrData) => {
//     // input / textarea
//     if (eOrData?.target) {
//       const { name, value } = eOrData.target;
//       setArticle((prev) => ({ ...prev, [name]: value }));
//     }
//     // MediaUpload
//     else {
//       const { name, value } = eOrData;
//       setArticle((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   return (
//     <div className="p-6 space-y-4 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold">News Editor</h2>

//       <input
//         name="title"
//         value={article.title}
//         onChange={handleChange}
//         placeholder="News title"
//         className="w-full border p-2 rounded"
//       />

//       <textarea
//         name="content"
//         value={article.content}
//         onChange={handleChange}
//         placeholder="News content"
//         className="w-full border p-2 rounded"
//       />

//       <MediaUpload
//         name="coverMedia"
//         accept="image/*,video/*"
//         typeLabel="Upload Cover Media"
//         onChange={handleChange}
//       />

//       {/* Debug */}
//       <pre className="text-xs bg-gray-100 p-2 rounded">
//         {JSON.stringify(article, null, 2)}
//       </pre>
//     </div>
//   );
// }

// export const MediaUpload = ({
//     isControlsPreview = false,
//     typeLabel = "Upload Media",
//     accept = "image/*,video/*,audio/*",
//     // previewBack,
//     fetch = { method: "GET" },
// }) => {
//     const { view, setView } = useState();
//     const { refetch,error } = useFetch(fetch.url);
//     const [mediaType, setMediaType] = useState(null);

//     const viewImage = (preview) => {
//         return (<div className="relative mt-1">
//             {mediaType === "image" && (
//                 <img src={preview} className="w-full h-16 object-cover rounded" />
//             )}

//             {mediaType === "video" && (
//                 <video src={preview} controls className="w-40 h-12 rounded border" />
//             )}

//             {mediaType === "audio" && (
//                 <audio src={preview} controls className="w-40 h-12" />
//             )}

//             <button
//                 onClick={removeMedia}
//                 className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//             >
//                 <FaTimes size={10} />
//             </button>
//         </div>);
//     };

//     const serverCall = async (file) => {
//         if (fetch.method === "GET") {
//             const img = await refetch({ method: fetch.method, });
//             // await setView(viewImage(img));
//             // previewBack(view)
//             console.log(error);

//             console.log(img);

//         }

//         if (fetch.method === "POST") {
//             const img = await refetch({
//                  method: fetch.method,
//                    headers: {
//                     "Content-Type":  "application/json"
//                    },
//                 body: file});
//             // await setView(viewImage(img));
//             // previewBack(view)
//             console.log(error);

//             console.log(img);

//         }
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         if (file.type.startsWith("video")) setMediaType("video");
//         else if (file.type.startsWith("audio")) setMediaType("audio");
//         else setMediaType("image");
//         serverCall(file);

//     };

//     const removeMedia = () => {
//         viewImage(null);
//         setMediaType(null);
//     };

//     return (
//         <div>
//             {!isControlsPreview && (
//                 <div className="border border-dashed rounded-lg p-3 h-full">
//                     <label className="cursor-pointer flex flex-col items-center gap-1">
//                         {accept.includes("image") && (
//                             <FaImage className="text-gray-500 text-xl" />
//                         )}

//                         {accept.includes("video") && (
//                             <FaVideo className="text-gray-500 text-xl" />
//                         )}

//                         {accept.includes("audio") && (
//                             <FaVideo className="text-gray-500 text-xl" />
//                         )}

//                         <span className="text-xs text-gray-600">{typeLabel}</span>

//                         <input
//                             type="file"
//                             accept={accept}
//                             className="hidden"
//                             onChange={handleFileChange}
//                         />

//                         {view}
//                     </label>
//                 </div>
//             )}

//             {isControlsPreview && (
//                 <label>
//                     <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
//                         {accept.includes("image") && <FaImage />}

//                         {accept.includes("video") && <FaVideo />}

//                         {accept.includes("audio") && <FaVideo />}
//                     </div>
//                     <input
//                         type="file"
//                         accept={accept}
//                         className="hidden"
//                         onChange={handleFileChange}
//                     />
//                 </label>
//             )}
//         </div>
//     );
// };

// export const MediaUpload = ({
//     isControlsPreview = false,
//     typeLabel = "Upload Media",
//     accept = "image/*,video/*,audio/*",
//     fetch = { method: "GET", url: "" },
// }) => {
//     const [preview, setPreview] = useState(null);
//     const [mediaType, setMediaType] = useState(null);
//     const { refetch  , loading ,error} = useFetch(fetch.url);

//     /* ===============================
//         SERVER CALL
//     =============================== */
//     const serverCall = async (file) => {
//         try {
//             if (fetch.method === "GET") {
//                 const data = await refetch();
//                 console.log("GET Response:", data);
//             }

//             if (fetch.method === "POST") {
//                 const formData = new FormData();
//                 formData.append("file", file);

//                 const data = await refetch({
//                     method: "POST",
//                     body: formData, // ✅ send as FormData
//                 });

//                 console.log("POST Response:", data);
//             }
//         } catch (err) {
//             console.error("Upload error:", err);
//         }
//     };

//     /* ===============================
//         FILE CHANGE HANDLER
//     =============================== */
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         if (file.type.startsWith("video")) setMediaType("video");
//         else if (file.type.startsWith("audio")) setMediaType("audio");
//         else setMediaType("image");

//         const previewUrl = URL.createObjectURL(file);
//         setPreview(previewUrl);

//         serverCall(file);
//     };

//     /* ===============================
//         REMOVE MEDIA
//     =============================== */
//     const removeMedia = () => {
//         if (preview) URL.revokeObjectURL(preview);
//         setPreview(null);
//         setMediaType(null);
//     };

//     /* ===============================
//         CLEANUP
//     =============================== */
//     useEffect(() => {
//         return () => {
//             if (preview) URL.revokeObjectURL(preview);
//         };
//     }, [preview]);

//     /* ===============================
//         PREVIEW VIEW
//     =============================== */
//     const MediaPreview = () => (
//         <div className="relative mt-2">
//             {mediaType === "image" && (
//                 <img src={preview} className="w-full h-24 object-cover rounded" />
//             )}
//             {mediaType === "video" && (
//                 <video src={preview} controls className="w-full h-24 rounded" />
//             )}
//             {mediaType === "audio" && (
//                 <audio src={preview} controls className="w-full" />
//             )}

//             <button
//                 onClick={removeMedia}
//                 className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//             >
//                 <FaTimes size={10} />
//             </button>
//         </div>
//     );

//     /* ===============================
//         UI
//     =============================== */
//     return (
//         <div>
//             {!isControlsPreview && (
//                 <div className="border border-dashed rounded-lg p-3">
//                     <label className="cursor-pointer flex flex-col items-center gap-2">
//                         {accept.includes("image") && <FaImage />}
//                         {accept.includes("video") && <FaVideo />}
//                         <span className="text-xs text-gray-600">{typeLabel}</span>

//                         <input
//                             type="file"
//                             accept={accept}
//                             className="hidden"
//                             onChange={handleFileChange}
//                         />

//                         {preview && <MediaPreview />}
//                     </label>
//                 </div>
//             )}

//             {isControlsPreview && (
//                 <label className="cursor-pointer">
//                     <div className="p-2 hover:bg-gray-100 rounded">
//                         {accept.includes("image") && <FaImage />}
//                         {accept.includes("video") && <FaVideo />}
//                         {accept.includes("audio") && <FaVideo />}
//                     </div>

//                     <input
//                         type="file"
//                         accept={accept}
//                         className="hidden"
//                         onChange={handleFileChange}
//                     />
//                 </label>
//             )}
//         </div>
//     );
// };

/* =======================  MediaUpload Component ====================== */

export const MediaUpload = ({
    isControlsPreview = false,
    typeLabel,
    accept = "image/*,video/*,audio/*",
    fetch = { method: "GET", url: "" },
}) => {
    const [preview, setPreview] = useState(null);
    const [mediaType, setMediaType] = useState(null);
    const { refetch, loading, error } = useFetch(fetch.url);

    /* ===============================
            SERVER CALL
        =============================== */
    const serverCall = async (file) => {
        try {
            if (fetch.method === "GET") {
                const data = await refetch();
                console.log("GET Response:", data);
            }

            if (fetch.method === "POST") {
                const formData = new FormData();
                formData.append("file", file);

                const data = await refetch({
                    method: "POST",
                    body: formData,
                });

                // যদি server URL return করে, সেটাকে preview এ রাখো
                if (data?.url) {
                    setPreview(data?.url);
                    setMediaType(data.type || "image");
                }
            }
        } catch (err) {
            console.error("Upload error:", err);
        }
    };
    /* ===============================
            FILE CHANGE HANDLER
        =============================== */
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type.startsWith("video")) setMediaType("video");
        else if (file.type.startsWith("audio")) setMediaType("audio");
        else setMediaType("image");

        // local preview while uploading
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        serverCall(file);
    };

    /* ===============================
            REMOVE MEDIA
        =============================== */
    const removeMedia = () => {
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
        setMediaType(null);
    };

    /* ===============================
            CLEANUP
        =============================== */
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    /* ===============================
            PREVIEW VIEW
        =============================== */
    const MediaPreview = () => (
        <div className="relative mt-2">
            {mediaType === "image" && (
                <img src={preview} className="w-full h-24 object-cover rounded" />
            )}
            {mediaType === "video" && (
                <video src={preview} controls className="w-full h-24 rounded" />
            )}
            {mediaType === "audio" && (
                <audio src={preview} controls className="w-full" />
            )}

            <button
                onClick={removeMedia}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
                <FaTimes size={10} />
            </button>
        </div>
    );

    /* ===============================
            UI
        =============================== */
    return (
        <div>
            {!isControlsPreview && (
                <div className="border border-dashed rounded-lg p-3 relative">
                    <label className="cursor-pointer flex flex-col items-center gap-2">
                        {accept.includes("image") && <FaImage />}
                        {accept.includes("video") && <FaVideo />}
                        <span className="text-xs text-gray-600">{typeLabel}</span>

                        <input
                            type="file"
                            accept={accept}
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {/* Preview */}
                        {preview && <MediaPreview />}

                        {loading && <span className="loading-spinner "></span>}
                        {error && (
                            <CustomNotification
                                type="error"
                                message={error.message || "Upload failed"}
                            />
                        )}
                    </label>
                </div>
            )}

            {isControlsPreview && (
                <label className="cursor-pointer">
                    <div className="p-2 hover:bg-gray-100 rounded">
                        {accept.includes("image") && <FaImage />}
                        {accept.includes("video") && <FaVideo />}
                        {accept.includes("audio") && <FaVideo />}
                    </div>

                    <input
                        type="file"
                        accept={accept}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            )}
        </div>
    );
};


export const UploadsFile = ({
    controlsPreview = null,
    label = null,
    icon = null,
    style = "h-20 w-full",
    accept = "image",
    purpose = "gallery",
    fetch = { method: "GET", url: "" },
}) => {
    const [preview, setPreview] = useState(null);
    const localPreviewRef = useRef(null);
    const called = useRef(false);

    const { refetch, loading, error } = useFetch(fetch.url);

    /* ---------------- helpers ---------------- */
    const isImage = accept.startsWith("image");
    const isVideo = accept.startsWith("video");
    const isAudio = accept.startsWith("audio");

    const IconMap = {
        image: FaImage,
        video: FaVideo,
        audio: FaMusic,
        create: FaPlus,
        edit: FaEdit,
        delete: FaTrash,
        queue: FaTasks
    };
    const IconComponent = IconMap[icon || accept];

    /* ---------------- GET preview ---------------- */
    useEffect(() => {
        if (
            fetch.method === "GET" &&
            fetch.url &&
            !called.current
        ) {
            called.current = true;
            setPreview(fetch.url);
        }
    }, [fetch.method, fetch.url]);

    /* ---------------- POST upload ---------------- */
    const uploadToServer = async (file) => {
        if (fetch.method !== "POST") return;

        try {

            const formData = new FormData();
            formData.append("file", file);
            formData.append("purpose", purpose);
            const data = await refetch({
                method: "POST",
                body: formData,
            });

            if (data?.url) {
                setPreview(data.url)
                typeof controlsPreview === "function" && controlsPreview(false, data.url)
            };
        } catch {
            setPreview(null);
        }
    };

    /* ---------------- file change ---------------- */
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // cleanup old preview
        if (localPreviewRef.current) {
            URL.revokeObjectURL(localPreviewRef.current);
        }

        const previewUrl = URL.createObjectURL(file);
        localPreviewRef.current = previewUrl;
        setPreview(previewUrl);
        uploadToServer(file);
        typeof controlsPreview === "function" && controlsPreview(true, previewUrl)

    };

    /* ---------------- cleanup ---------------- */
    useEffect(() => {
        return () => {
            if (localPreviewRef.current) {
                URL.revokeObjectURL(localPreviewRef.current);
            }
        };
    }, []);

    /* ---------------- UI ---------------- */
    const DefaultPreview = () => (
        <>
            {!loading && !preview && (
                <div className="flex flex-col items-center gap-2">
                    {IconComponent && <IconComponent />}
                    {label && (
                        <span className="text-xs text-gray-600">
                            {label}
                        </span>
                    )}
                </div>
            )}


            {preview && isImage && (
                <img
                    src={preview}
                    className="w-full h-full "
                    alt="preview"
                />
            )}

            {preview && isVideo && (
                <video src={preview} controls className="w-full h-full" />
            )}

            {preview && isAudio && (
                <audio src={preview} controls className="w-full h-full" />
            )}

            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                    <span className="loading-spinner" />
                </div>
            )}
        </>
    );


    const isDisabled =
        loading || (fetch.method === "GET" && !controlsPreview);


    return (
        <label
            className={`relative flex items-center justify-center cursor-pointer hover:bg-gray-200 ${style} ${loading ? "pointer-events-none" : ""
                }`}
        >
            {typeof controlsPreview === "function" ? (
                <div className="flex flex-col items-center gap-2">
                    {IconComponent && <IconComponent />}
                </div>
            ) : (
                <DefaultPreview />
            )}


            <input
                type="file"
                className="hidden"
                accept={accept ? `${accept}/*` : undefined}
                disabled={isDisabled}
                onChange={handleFileChange}
            />

            {error && (
                <CustomNotification
                    type="error"
                    message={`Upload error: ${error}`}
                />
            )}
        </label>
    );
};
