const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Something went wrong. Please try again.");
  return data;
}

export const submit = (path, data) => api(path, { method: "POST", body: JSON.stringify(data) });
export const authorized = (path, token, options = {}) => api(path, { ...options, headers: { Authorization: `Bearer ${token}`, ...options.headers } });
