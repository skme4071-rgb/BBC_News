import { useCallback, useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const { auto = false } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async ({ method = "GET", body = null, params = {}, headers = {} } = {}) => {
      setLoading(true);
      setError(null);

      try {
        // 🔹 Query params
        const query = new URLSearchParams(params).toString();
        const finalUrl = query ? `${url}?${query}` : url;



        // 🔹 Headers
        const fetchOptions = {
          method,
          headers: {
            ...(body && method !== "GET"
              ? { "Content-Type": "application/json" }
              : {}),
            ...headers,
          },
          ...(body && method !== "GET" ? { body: JSON.stringify(body) } : {}),
        };

        const res = await fetch(finalUrl, fetchOptions);

        const result = await res.json();

        if (!res.ok) {
          throw {
            status: res.status,
            message: result?.message || "Request failed",
          };
        }

        setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [url],
  );

  useEffect(() => {
    if (auto) fetchData();
  }, [auto, fetchData]);

  return { data, error, loading, refetch: fetchData };
}
