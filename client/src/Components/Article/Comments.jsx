import { useEffect, useRef, useState } from "react";
import { ContextFocusBox } from "./../../context/FocusBoxContext";
import useFetch from "./../../hooks/useFetch";
import Signin from "./../Authentication/Signin";
import { useAuth } from "./../../context/AuthContext";

function CommentFuntion({ prodactId }) {
  const {  user } = useAuth();
  const { closeFocusBox, setFocusBox } = ContextFocusBox();

  const [comment, setComment] = useState("");
  const commentsEndRef = useRef(null);
  const ranOnce = useRef(false);
  // useFetch hook for GET and POST
  const { data, refetch, error, loading } = useFetch(
    "http://localhost:3000/comments",
    { auto: false }
  );


  // 🔹 API call on mount
  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;
    refetch({ params: { prodactId } });
  }, [refetch]);


  // 🔹 Scroll to bottom whenever data changes
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  const handleChange = (e) => setComment(e.target.value);

  const handleClick = async () => {
    if (!comment.trim()) return;

    if (!user?.loggedIn) {
      setFocusBox(<Signin />);
      return;
    }

    try {
      // ১️⃣ POST comment
      await refetch({
        method: "POST",
        body: {
          productId: prodactId,
          text: comment,
          userId: user.id,
          name: user.name,
          avatar: user.avatar,
        },
      });

      setComment(""); // Clear input

      // ২️⃣ GET fresh comments immediately
      await refetch({ params: { prodactId } });
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };




  const comments = Array.isArray(data) ? data : [];
  return (
    <div className="bg-white flex flex-col w-full h-full
      min-[441px]:w-[410px]
      min-[441px]:h-[520px]     
      min-[441px]:max-h-[90vh] min-[441px]:rounded-xl shadow-xl"
    >
      {/* Header */}
      <div className="h-[50px] shrink-0 flex justify-between items-center border-b px-2">
        <h3 className="font-semibold text-lg">Comments</h3>
        <button onClick={closeFocusBox}>✕</button>
      </div>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto p-2">
        {loading && <p className="text-gray-500 text-sm">Loading comments...</p>}
        {error && <p className="text-red-500 text-sm">Error loading comments.</p>}
        {!loading && data?.length === 0 && <p className="text-gray-500 text-sm">No comments yet.</p>}

        {comments.map((item, i) => (
          <div key={i} className="flex gap-3 mt-4">
            <img
              src={item.avatar || "https://i.pravatar.cc/100"}
              className="w-9 h-9 rounded-full"
            />
            <div className="bg-gray-100 rounded-xl px-4 py-2">
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-gray-800 text-sm">{item.text}</p>
              <span className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString("en-BD", {
                  timeZone: "Asia/Dhaka",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>

            </div>
          </div>
        ))}


        {/* Dummy div to scroll into view */}
        <div ref={commentsEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="h-[50px] z-[100] shrink-0 flex gap-2 border-t px-2 items-center">
        <input
          value={comment}
          onChange={handleChange}
          className="flex-1 border rounded-full px-4 py-2 text-sm"
          placeholder="Write a comment..."
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Post
        </button>
      </div>
    </div>
  );



}

function ShareFuntion() {

}





export function Likes({ prodactId, isLikes, totalLikes }) {

  const [state, setState] = useState({ isLikes, totalLikes });

  const { refetch , loading} = useFetch(
      "http://localhost:3000/Likes",
      { auto: false }
    );
    
    async function likesFuntion() {
    

 try {
      const response = await refetch({
        method: "PUT",
        params: {
          likes: !state.isLikes,
          prodactId,
        }
      });

      if (!response?.success) return;

      
      // 🔥 force state change
      setState({
        isLikes: response.likes,
        totalLikes: response.totalLikes
      });
      

    } catch (err) {
      console.error("Like error:", err);
    }







   
  }

  return (
    <button
    disabled={loading}
      onClick={likesFuntion}
      className={`flex items-center text-[12px] cursor-pointer ${state.isLikes ? "text-blue-600 font-semibold" : ""
        }`}
    >
      <span className="text-[15px]">👍</span>
      {state.totalLikes} Like
    </button>
  );
}






export function Comments({ prodactId }) {
  const { setFocusBox } = ContextFocusBox();
  return (
    <button className="text-[12px] flex  cursor-pointer hover:text-blue-600 items-center"
      onClick={() => setFocusBox(<CommentFuntion prodactId={prodactId} />)}>
      <span className="text-[18px]">💬</span>
      {454} Comment
    </button>
  )
}

export function Share({ prodactId, userId, length }) {

  return (
    <button className="text-[12px] flex  cursor-pointer hover:text-blue-600 items-center"
      onClick={() => ShareFuntion(userId, prodactId)}>
      <span className="text-[15px]"> 🔗</span>
      {length}Share
    </button>
  )
}


// async function likesFuntion() {
//     try {
//       const response = await refetch({
//         method: "PUT",
//         params: {
//           likes: !state.isLikes,
//           prodactId,
//         }
//       });

//       if (!response?.success) return;

      
//       // 🔥 force state change
//       setState({
//         isLikes: response.likes,
//         length: response.length
//       });

//     } catch (err) {
//       console.error("Like error:", err);
//     }
//   }