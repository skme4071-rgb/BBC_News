export const Slice = (list, end, start = 0, ellipsis = "...") => {
    if (!list) return ""; // null বা undefined handle করা

    if (typeof list === "string") {
        // যদি string হয়
        return list.length > end ? list.slice(start, end) + ellipsis : list;
    } else if (Array.isArray(list)) {
        // যদি array হয়
        return list.length > end ? list.slice(start, end) : list;
    } else {
        // অন্য type হলে string বানিয়ে return
        list = String(list);
        return list.length > end ? list.slice(start, end) + ellipsis : list;
    }
};