// import { useState } from "react";
// import {
//     Plus,
//     Edit,
//     Trash2,
//     ListOrdered,
//     Tags,
// } from "lucide-react";
// import toast, { Toaster } from "react-hot-toast";


import {
    TextareaAutoResize,
    MediaUpload,
    Select,
    CRUDbutton
} from "./../../../utilities/CommonFuntion";

import { CustomLink } from "./../../../utilities/Element";

// export const Source = ({ handleChange, mediaHandleChange, name, logo, url, type, id }) => {
//     /* ================= ACTIONS ================= */
//     const ACTIONS = {
//         CREATE: "CREATE",
//         EDIT: "EDIT",
//         DELETE: "DELETE",
//         QUEUE: "QUEUE",
//     };

//     const [action, setAction] = useState(ACTIONS.QUEUE);
//     const [loading, setLoading] = useState(false);

//     /* ================= ROLE (Permission) ================= */
//     const [role, setRole] = useState("admin"); // "viewer" | "editor" | "admin"
//     const canCreate = role === "editor" || role === "admin";
//     const canEdit = role === "editor" || role === "admin";
//     const canDelete = role === "admin";
//     const canView = true;

//     /* ================= FORM COMPONENT ================= */
//     const SourceForm = () => (
//         <div className="space-y-2">
//             <MediaUpload
//                 accept="image/*"
//                 typeLabel="Upload Logo"
//                 value={logo}
//                 onChange={mediaHandleChange}
//             />

//             <TextareaAutoResize
//                 name="source.name"
//                 value={name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="w-full p-1 border rounded text-sm"
//             />

//             <TextareaAutoResize
//                 name="source.url"
//                 value={url}
//                 onChange={handleChange}
//                 placeholder="Official link"
//                 className="w-full p-1 border rounded text-sm"
//             />

//             <Select
//                 name="source.type"
//                 options={["newspaper", "tv", "blog", "agency", "social"]}
//                 value={type}
//                 onChange={handleChange}
//                 className="w-full p-1 border rounded text-sm"
//             />
//         </div>
//     );

//     /* ================= DELETE CONFIRM ================= */
//     const DeleteConfirm = () => (
//         <div className="text-center space-y-3">
//             <p className="text-red-600 font-semibold">
//                 Are you sure you want to delete this source?
//             </p>

//             <CRUDbutton
//                 label={loading ? "Deleting..." : "Confirm Delete"}
//                 color="red"
//                 disabled={loading}
//                 onClick={handleDelete}
//             />
//         </div>
//     );

//     /* ================= QUEUE VIEW ================= */
//     const QueueView = () => (
//         <div className="space-y-2">
//             {logo ? (
//                 <img
//                     src={logo}
//                     alt="Logo"
//                     className="w-full h-20 object-cover rounded border"
//                 />
//             ) : (
//                 <div className="h-20 flex items-center justify-center border rounded text-gray-400">
//                     No Logo
//                 </div>
//             )}

//             <div className="border p-1 text-center text-sm">{name}</div>

//             {url ? (
//                 <CustomLink
//                     to={url}
//                     text="Official link"
//                     className="block text-center border p-1 text-sm"
//                 />
//             ) : (
//                 <div className="border p-1 text-center text-sm text-gray-400">
//                     No link
//                 </div>
//             )}

//             <div className="border p-1 text-center text-sm">{type}</div>
//         </div>
//     );

//     /* ================= API HANDLERS ================= */
//     const handleSubmit = async () => {
//         if (!(canCreate && action === ACTIONS.CREATE) && !(canEdit && action === ACTIONS.EDIT)) return;

//         setLoading(true);
//         const payload = { name, logo, url, type };

//         try {
//             const res = await fetch(
//                 action === ACTIONS.CREATE
//                     ? "http://localhost:5173/Config/Source/"
//                     : `http://localhost:5173/Config/Source/${id}`,
//                 {
//                     method: action === ACTIONS.CREATE ? "POST" : "PUT",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                 }
//             );

//             const data = await res.json();
//             if (!res.ok) throw new Error(data?.message || "Request failed");

//             toast.success(action === ACTIONS.CREATE ? "Source created successfully" : "Source updated successfully");
//             setAction(ACTIONS.QUEUE);
//         } catch (err) {
//             toast.error(err.message || "Request failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async () => {
//         if (!canDelete) return;

//         setLoading(true);

//         try {
//             const res = await fetch(`http://localhost:5173/Config/Source/${id}`, {
//                 method: "DELETE",
//             });

//             const data = await res.json();
//             if (!res.ok) throw new Error(data?.message || "Delete failed");

//             toast.success("Source deleted successfully");
//             setAction(ACTIONS.QUEUE);
//         } catch (err) {
//             toast.error(err.message || "Delete failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     /* ================= RENDER CONTENT ================= */
//     const renderContent = () => {
//         switch (action) {
//             case ACTIONS.CREATE:
//             case ACTIONS.EDIT:
//                 return <SourceForm />;
//             case ACTIONS.DELETE:
//                 return <DeleteConfirm />;
//             case ACTIONS.QUEUE:
//             default:
//                 return <QueueView />;
//         }
//     };

//     /* ================= UI ================= */
//     return (
//         <div className="p-4 border rounded-lg space-y-3">
//             <Toaster position="top-right" />

//             <h3 className="flex items-center font-semibold text-gray-800">
//                 <Tags className="mr-2 text-green-500" size={16} />
//                 Source
//             </h3>

//             {renderContent()}

//             {/* Submit Button */}
//             {(action === ACTIONS.CREATE && canCreate) ||
//                 (action === ACTIONS.EDIT && canEdit) ? (
//                 <CRUDbutton
//                     label={loading ? "Saving..." : action === ACTIONS.CREATE ? "Create" : "Update"}
//                     color="green"
//                     disabled={loading}
//                     onClick={handleSubmit}
//                 />
//             ) : null}

//             {/* Action Buttons */}
//             <div className="flex gap-2 pt-2">
//                 {canCreate && (
//                     <CRUDbutton
//                         iconOnly
//                         icon={Plus}
//                         color="green"
//                         onClick={() => setAction(ACTIONS.CREATE)}
//                     />
//                 )}

//                 {canEdit && (
//                     <CRUDbutton
//                         iconOnly
//                         icon={Edit}
//                         color="blue"
//                         onClick={() => setAction(ACTIONS.EDIT)}
//                     />
//                 )}

//                 {canDelete && (
//                     <CRUDbutton
//                         iconOnly
//                         icon={Trash2}
//                         color="red"
//                         onClick={() => setAction(ACTIONS.DELETE)}
//                     />
//                 )}

//                 {canView && (
//                     <CRUDbutton
//                         iconOnly
//                         icon={ListOrdered}
//                         color="purple"
//                         onClick={() => setAction(ACTIONS.QUEUE)}
//                     />
//                 )}
//             </div>

//             {/* Optional Role Switch (for testing) */}
//             <div className="flex gap-2 mt-2">
//                 <button onClick={() => setRole("viewer")} className="px-2 py-1 bg-gray-200 rounded">Viewer</button>
//                 <button onClick={() => setRole("editor")} className="px-2 py-1 bg-gray-300 rounded">Editor</button>
//                 <button onClick={() => setRole("admin")} className="px-2 py-1 bg-gray-400 rounded">Admin</button>
//             </div>
//         </div>
//     );
// };


import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Tags } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "http://localhost:3000/Config/Source/";
const token = localStorage.getItem("token");

export const Source = ({ role = "admin" }) => {
  const ACTIONS = { CREATE: "CREATE", EDIT: "EDIT", DELETE: "DELETE", QUEUE: "QUEUE" };

  const [action, setAction] = useState(ACTIONS.QUEUE);
  const [sources, setSources] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const permissions = {
    canCreate: role === "editor" || role === "admin",
    canEdit: role === "editor" || role === "admin",
    canDelete: role === "admin",
    canView: true,
  };

  // ================= API FUNCTIONS =================
  const apiRequest = async (url, method = "GET", body) => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { token: `Bearer ${token}` } : {}),
        },
        body: body ? JSON.stringify(body) : null,
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Request failed");
      return data;
    } catch (err) {
      toast.error(err.message || "API Error");
      throw err;
    }
  };

  const fetchSources = async () => {
    try {
      const data = await apiRequest(API_URL);
      setSources(data);
    } catch {}
  };

  const handleSubmit = async () => {
    if (
      !(permissions.canCreate && action === ACTIONS.CREATE) &&
      !(permissions.canEdit && action === ACTIONS.EDIT)
    )
      return;

    setLoading(true);
    try {
      await apiRequest(
        action === ACTIONS.CREATE ? API_URL : `${API_URL}${selected._id}`,
        action === ACTIONS.CREATE ? "POST" : "PUT",
        selected
      );
      toast.success(action === ACTIONS.CREATE ? "Created successfully" : "Updated successfully");
      setAction(ACTIONS.QUEUE);
      fetchSources();
    } catch {}
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    if (!permissions.canDelete) return;

    setLoading(true);
    try {
      await apiRequest(`${API_URL}${selected._id}`, "DELETE");
      toast.success("Deleted successfully");
      setAction(ACTIONS.QUEUE);
      fetchSources();
    } catch {}
    finally { setLoading(false); }
  };

  // ================= FORM COMPONENT =================
  const SourceForm = () => (
    <div className="space-y-2">
      <MediaUpload
        value={selected.logo || ""}
      
        onChange={(url) => setSelected({ ...selected, logo: url })}
      />
      <TextareaAutoResize
        value={selected.name || ""}
        onChange={(e) => setSelected({ ...selected, name: e.target.value })}
        placeholder="Name"
        className="w-full border p-1 rounded"
      />
      <TextareaAutoResize
        value={selected.url || ""}
        onChange={(e) => setSelected({ ...selected, url: e.target.value })}
        placeholder="Official link"
        className="w-full border p-1 rounded"
      />
      <Select
        value={selected.type || "newspaper"}
        onChange={(e) => setSelected({ ...selected, type: e.target.value })}
        options={["newspaper", "tv", "blog", "agency", "social"]}
        className="w-full border p-1 rounded"
      />
    </div>
  );

  // ================= RENDERING =================
  const renderContent = () => {
    switch (action) {
      case ACTIONS.CREATE:
      case ACTIONS.EDIT:
        return <SourceForm />;

      case ACTIONS.DELETE:
        return (
          <div className="text-center space-y-3">
            <p className="text-red-600 font-semibold">Are you sure you want to delete?</p>
            <CRUDbutton
              label={loading ? "Deleting..." : "Confirm Delete"}
              color="red"
              disabled={loading}
              onClick={handleDelete}
            />
          </div>
        );

      case ACTIONS.QUEUE:
      default:
        return sources.map((src) => (
          <div key={src._id} className="border p-2 rounded space-y-1">
            {src.logo ? (
              <img src={src.logo} className="h-16 w-full object-cover rounded" />
            ) : (
              <div className="h-16 border flex items-center justify-center text-gray-400">
                No Logo
              </div>
            )}
            <div className="text-center">{src.name}</div>
            {src.url && <CustomLink to={src.url} text="Official link" />}
            <div className="text-center">{src.type}</div>
            <div className="flex gap-2 justify-center pt-1">
              {permissions.canEdit && (
                <CRUDbutton
                  iconOnly
                  icon={Edit}
                  color="blue"
                  onClick={() => {
                    setSelected(src);
                    setAction(ACTIONS.EDIT);
                  }}
                />
              )}
              {permissions.canDelete && (
                <CRUDbutton
                  iconOnly
                  icon={Trash2}
                  color="red"
                  onClick={() => {
                    setSelected(src);
                    setAction(ACTIONS.DELETE);
                  }}
                />
              )}
            </div>
          </div>
        ));
    }
  };

  useEffect(() => {
    fetchSources();
  }, []);

  return (
    <div className="p-4 border rounded space-y-3">
      <Toaster position="top-right" />
      <h3 className="flex items-center font-semibold text-gray-800">
        <Tags className="mr-2 text-green-500" size={16} />Sources
      </h3>

      {renderContent()}

      {(action === ACTIONS.CREATE && permissions.canCreate) ||
      (action === ACTIONS.EDIT && permissions.canEdit) ? (
        <CRUDbutton
          label={loading ? "Saving..." : action === ACTIONS.CREATE ? "Create" : "Update"}
          color="green"
          disabled={loading}
          onClick={handleSubmit}
        />
      ) : null}

      {permissions.canCreate && action === ACTIONS.QUEUE && (
        <CRUDbutton
          iconOnly
          icon={Plus}
          color="green"
          onClick={() => {
            setSelected({});
            setAction(ACTIONS.CREATE);
          }}
        />
      )}
    </div>
  );
};
