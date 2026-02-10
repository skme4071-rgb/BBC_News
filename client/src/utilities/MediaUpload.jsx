import { useEffect, useRef, useState } from "react";
import { FaImage, FaVideo, FaTimes, FaMusic, FaPlus, FaEdit, FaTrash, FaTasks } from "react-icons/fa";

import { useFetch } from "./../hooks/CommonHooks";






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
                <span className="flex  items-center justify-center">
                    <img
                        src={preview}
                        className="w-full h-full "
                        alt="Preview"
                    />
                </span>


            )}

            {preview && isVideo && (
                <video src={preview} controls className="w-full h-full" />
            )}

            {preview && isAudio && (
                <audio src={preview} controls className="w-full h-full" />
            )}

            {loading && (
                <div className="absolute inset-0 flex  items-center justify-center bg-white/50">
                    <span className="loading-spinner" />
                </div>
            )}







        </>)



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