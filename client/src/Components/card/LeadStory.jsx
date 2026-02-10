// import { useEffect, useRef, useState } from "react";
// import { CustomLink } from "../utlis/tag";
// import Images from "./Images";
// import { ContextFocusBox } from "./../../context/FocusBoxContext";

// export default function LeadStory({ data = {} }) {
//   const { source, author, title, url, urlToImage, publishedAt, content } = data;

//   /* ================= STATE ================= */
//   const [liked, setLiked] = useState(false);
//   const [likes, setLikes] = useState(134400);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const modalRef = useRef()

//   const { setFocusBox, state } = ContextFocusBox()

//   useEffect(() => {

//     modalRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "center", // start | center | end
//     });
//   });
//   /* ============ LOCAL STORAGE ============== */
//   useEffect(() => {
//     setLikes(JSON.parse(localStorage.getItem("likes")) || 134400);
//     setLiked(JSON.parse(localStorage.getItem("liked")) || false);
//     setComments(JSON.parse(localStorage.getItem("comments")) || []);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("likes", JSON.stringify(likes));
//     localStorage.setItem("liked", JSON.stringify(liked));
//     localStorage.setItem("comments", JSON.stringify(comments));
//   }, [likes, liked, comments]);

//   /* ================= HANDLERS ================= */
//   const handleLike = () => {
//     setLiked(prev => {
//       setLikes(l => (prev ? l - 1 : l + 1));
//       return !prev;
//     });
//   };

//   const handleAddComment = () => {
//     if (!commentText.trim()) return;

//     setComments(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         text: commentText,
//         author: "John Doe",
//         time: new Date().toLocaleTimeString()
//       }
//     ]);
//     setCommentText("");
//   };



//   const handleShare = async () => {
//     const shareUrl = url || window.location.href;

//     if (navigator.share) {
//       navigator.share({ title, url: shareUrl });
//     } else {
//       await navigator.clipboard.writeText(shareUrl);
//       alert("Link copied!");
//     }
//   };



//   /* ================= UI ================= */
//   return (
//     <article className="pb-10 max-w-3xl mx-auto px-4 ">

//       {/* Image */}
//       <div className="aspect-video rounded-xl overflow-hidden shadow">
//         <Images src={urlToImage} />
//       </div>

//       {/* Meta */}
//       <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
//         <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
//           {source?.name}
//         </span>
//         <span>{new Date(publishedAt).toLocaleDateString()}</span>
//       </div>

//       {/* Title */}
//       <CustomLink to={url}>
//         <h1 className="text-2xl sm:text-4xl font-bold mt-3 hover:text-blue-600">
//           {title}
//         </h1>
//       </CustomLink>

//       {/* Content */}
//       <p className="text-gray-600 mt-4 leading-relaxed">{content}</p>
//       <span className="block mt-2 text-sm text-gray-500">— {author}</span>

//       {/* Actions */}
//       <div className="flex flex-wrap gap-4 sm:gap-10 mt-6 text-gray-600">
//         <button
//           onClick={handleLike}
//           className={`flex items-center gap-1 ${liked ? "text-blue-600 font-semibold" : ""}`}
//         >
//           👍 {likes.toLocaleString()} Like
//         </button>

//         <button onClick={() => setShowComments(true)}>
//           💬 {comments.length} Comment
//         </button>

//         <button onClick={handleShare}>
//           🔗 Share
//         </button>
//       </div>

//       {/* ================= COMMENTS MODAL ================= */}









//       {showComments && (() => {

//         const element = <div
//           className="  fixed inset-0 z-50 bg-black/40 flex items-center  justify-center "
//           onClick={() => setShowComments(false)} // Overlay click closes modal
//         >
//           <div
//             ref={modalRef}
//             onClick={e => e.stopPropagation()}
//             className="
//                     bg-white
//                     w-[300px]       /* mobile */
//                     sm:w-[500px]    /* small screen ≥ 640px */
//                     md:w-[600px]    /* medium / desktop ≥ 768px */
//                     max-w-[100vw]
//                     rounded-xl
//                     p-4
//                     shadow-2xl
//                     transform scale-95 opacity-0
//                     animate-modalShow
//                   "
//           >


//             {/* Header */}
//             <div className="flex items-center justify-between border-b pb-2">
//               <h3 className="text-sm font-semibold">Comments</h3>
//               <button
//                 onClick={() => setShowComments(false)}
//                 className="text-gray-500 text-lg leading-none"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Comments List */}
//             <div className="mt-3 max-h-56 overflow-y-auto">
//               {comments.length === 0 && (
//                 <p className="text-xs text-gray-500 text-center">
//                   No comments yet
//                 </p>
//               )}
//               {comments.map(c => (
//                 <div key={c.id} className="flex gap-2 mt-3">
//                   <img
//                     src="https://i.pravatar.cc/100"
//                     className="w-7 h-7 rounded-full"
//                     alt=""
//                   />
//                   <div className="bg-gray-100 rounded-lg px-2 py-1">
//                     <p className="text-xs font-semibold">{c.author}</p>
//                     <p className="text-xs text-gray-800">{c.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Add Comment */}
//             <div className="flex gap-1 mt-3 ">
//               <input
//                 value={commentText}
//                 onChange={e => setCommentText(e.target.value)}
//                 onKeyDown={e => e.key === "Enter" && handleAddComment()}
//                 className="flex-1 border rounded-full px-3 py-1 text-xs outline-none"
//                 placeholder="Write a comment..."
//               />
//               <button
//                 onClick={handleAddComment}
//                 className="bg-blue-500 text-white px-3 rounded-full text-xs"
//               >
//                 Post
//               </button>
//             </div>
//           </div>
//         </div>
//         setFocusBox(element, true)
//       }







//       )()}

//     </article>
//   );
// }






// // import { useEffect, useState } from "react";
// // import { CustomLink } from "../utlis/tag";
// // import Images from "./Images";
// // import FocusBox from "./../../context/FocusBox"; // Import the FocusBox component

// // export default function LeadStory({ data = {} }) {
// //   const { source, author, title, url, urlToImage, publishedAt, content } = data;

// //   /* ================= STATE ================= */
// //   const [liked, setLiked] = useState(false);
// //   const [likes, setLikes] = useState(134400);
// //   const [showComments, setShowComments] = useState(false);
// //   const [comments, setComments] = useState([]);
// //   const [commentText, setCommentText] = useState("");

// //   /* ============ LOCAL STORAGE ============== */
// //   useEffect(() => {
// //     const savedLikes = JSON.parse(localStorage.getItem("likes"));
// //     const savedLiked = JSON.parse(localStorage.getItem("liked"));
// //     const savedComments = JSON.parse(localStorage.getItem("comments"));

// //     if (savedLikes) setLikes(savedLikes);
// //     if (savedLiked) setLiked(savedLiked);
// //     if (savedComments) setComments(savedComments);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("likes", JSON.stringify(likes));
// //     localStorage.setItem("liked", JSON.stringify(liked));
// //     localStorage.setItem("comments", JSON.stringify(comments));
// //   }, [likes, liked, comments]);

// //   /* ================= HANDLERS ================= */
// //   const handleLike = () => {
// //     setLiked(prev => {
// //       setLikes(l => (prev ? l - 1 : l + 1));
// //       return !prev;
// //     });
// //   };

// //   const handleAddComment = () => {
// //     if (!commentText.trim()) return;

// //     setComments(prev => [
// //       ...prev,
// //       {
// //         id: Date.now(),
// //         text: commentText,
// //         author: "John Doe",
// //         time: new Date().toLocaleTimeString()
// //       }
// //     ]);
// //     setCommentText("");
// //   };

// //   const handleShare = async () => {
// //     const shareUrl = url || window.location.href;

// //     if (navigator.share) {
// //       navigator.share({ title, url: shareUrl });
// //     } else {
// //       await navigator.clipboard.writeText(shareUrl);
// //       alert("Link copied!");
// //     }
// //   };

// //   /* ================= UI ================= */
// //   return (
// //     <article className="pb-10 max-w-3xl mx-auto px-4 relative">

// //       {/* Image */}
// //       <div className="aspect-video rounded-xl overflow-hidden shadow">
// //         <Images src={urlToImage} />
// //       </div>

// //       {/* Meta */}
// //       <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
// //         <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
// //           {source?.name}
// //         </span>
// //         <span>{new Date(publishedAt).toLocaleDateString()}</span>
// //       </div>

// //       {/* Title */}
// //       <CustomLink to={url}>
// //         <h1 className="text-2xl sm:text-4xl font-bold mt-3 hover:text-blue-600">
// //           {title}
// //         </h1>
// //       </CustomLink>

// //       {/* Content */}
// //       <p className="text-gray-600 mt-4 leading-relaxed">{content}</p>
// //       <span className="block mt-2 text-sm text-gray-500">— {author}</span>

// //       {/* Actions */}
// //       <div className="flex flex-wrap gap-4 sm:gap-10 mt-6 text-gray-600">
// //         <button
// //           onClick={handleLike}
// //           className={`flex items-center gap-1 ${liked ? "text-blue-600 font-semibold" : ""}`}
// //         >
// //           👍 {likes.toLocaleString()} Like
// //         </button>

// //         <button onClick={() => setShowComments(true)}>
// //           💬 {comments.length} Comment
// //         </button>

// //         <button onClick={handleShare}>
// //           🔗 Share
// //         </button>
// //       </div>

// //       {/* ================= FocusBox ================= */}
// //       <FocusBox
// //         show={showComments}
// //         setShow={setShowComments}
// //         comments={comments}
// //         handleAddComment={handleAddComment}
// //         commentText={commentText}
// //         setCommentText={setCommentText}
// //       />
// //     </article>
// //   );
// // }


import { useEffect, useRef, useState } from "react";
import { CustomLink } from "../utlis/tag";
import {Images} from "./../utlis/tag";
import { ContextFocusBox } from "./../../context/FocusBoxContext";

export default function LeadStory({ data = {} }) {
  const { source, author, title, url, urlToImage, publishedAt, content } = data;

  /* ================= STATE ================= */
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(134400);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const modalRef = useRef();

  const { setFocusBox } = ContextFocusBox();

  /* ============ LOCAL STORAGE ============== */
  useEffect(() => {
    setLikes(JSON.parse(localStorage.getItem("likes")) || 134400);
    setLiked(JSON.parse(localStorage.getItem("liked")) || false);
    setComments(JSON.parse(localStorage.getItem("comments")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
    localStorage.setItem("liked", JSON.stringify(liked));
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [likes, liked, comments]);

  /* ================= HANDLERS ================= */
  const handleLike = () => {
    setLiked(prev => {
      setLikes(l => (prev ? l - 1 : l + 1));
      return !prev;
    });
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        text: commentText,
        author: "John Doe",
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setCommentText("");
  };

  const handleShare = async () => {
    const shareUrl = url || window.location.href;

    if (navigator.share) {
      navigator.share({ title, url: shareUrl });
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
    }
  };

  /* ================= MODAL CONTEXT ================= */
  useEffect(() => {
    if (showComments) {
      const element = (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          onClick={() => setShowComments(false)}
        >
          <div
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            className="
              bg-white
              w-[300px] sm:w-[500px] md:w-[600px]
              max-w-[100vw]
              rounded-xl p-4 shadow-2xl
              transform scale-95 opacity-0 animate-modalShow
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-semibold">Comments</h3>
              <button
                onClick={() => setShowComments(false)}
                className="text-gray-500 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Comments List */}
            <div className="mt-3 max-h-56 overflow-y-auto">
              {comments.length === 0 && (
                <p className="text-xs text-gray-500 text-center">No comments yet</p>
              )}
              {comments.map(c => (
                <div key={c.id} className="flex gap-2 mt-3">
                  <img
                    src="https://i.pravatar.cc/100"
                    className="w-7 h-7 rounded-full"
                    alt=""
                  />
                  <div className="bg-gray-100 rounded-lg px-2 py-1">
                    <p className="text-xs font-semibold">{c.author}</p>
                    <p className="text-xs text-gray-800">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="flex gap-1 mt-3">
              <input
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAddComment()}
                className="flex-1 border rounded-full px-3 py-1 text-xs outline-none"
                placeholder="Write a comment..."
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-500 text-white px-3 rounded-full text-xs"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      );

      setFocusBox(element, true);

      // Scroll to modal
      modalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setFocusBox(null, false);
    }
  }, [setFocusBox]);
  /* ================= UI ================= */
  return (
    <article className="pb-10 max-w-3xl mx-auto px-4">
      {/* Image */}
      <div className="aspect-video rounded-xl overflow-hidden shadow">
        <Images src={urlToImage} />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {source?.name}
        </span>
        <span>{new Date(publishedAt).toLocaleDateString()}</span>
      </div>

      {/* Title */}
      <CustomLink to={url}>
        <h1 className="text-2xl sm:text-4xl font-bold mt-3 hover:text-blue-600">{title}</h1>
      </CustomLink>

      {/* Content */}
      <p className="text-gray-600 mt-4 leading-relaxed">{content}</p>
      <span className="block mt-2 text-sm text-gray-500">— {author}</span>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 sm:gap-10 mt-6 text-gray-600">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${liked ? "text-blue-600 font-semibold" : ""}`}
        >
          👍 {likes.toLocaleString()} Like
        </button>

        <button onClick={() => setShowComments(true)}>
          💬 {comments.length} Comment
        </button>

        <button onClick={handleShare}>🔗 Share</button>
      </div>
    </article>
  );
}
