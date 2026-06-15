// src/api.js  — all backend calls in one place

const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("pm_token");

const headers = () => ({
  "Content-Type": "application/json",
  ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
});

const req = async (method, path, body) => {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: headers(),
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
};

// ── Auth ────────────────────────────────────────────────────
export const register    = (d) => req("POST", "/auth/register", d);
export const login       = (d) => req("POST", "/auth/login", d);
export const getMe       = ()  => req("GET",  "/auth/me");
export const updateProfile   = (d) => req("PUT", "/auth/profile", d);
export const changePassword  = (d) => req("PUT", "/auth/change-password", d);

// ── Products ────────────────────────────────────────────────
export const getProducts    = (q="") => req("GET",    `/products${q}`);
export const createProduct  = (d)    => req("POST",   "/products", d);
export const updateProduct  = (id,d) => req("PUT",    `/products/${id}`, d);
export const deleteProduct  = (id)   => req("DELETE", `/products/${id}`);

// ── Services ────────────────────────────────────────────────
export const getServices    = ()     => req("GET",    "/services");
export const createService  = (d)    => req("POST",   "/services", d);
export const updateService  = (id,d) => req("PUT",    `/services/${id}`, d);
export const deleteService  = (id)   => req("DELETE", `/services/${id}`);

// ── Orders ──────────────────────────────────────────────────
export const placeOrder     = (d)  => req("POST", "/orders", d);
export const getMyOrders    = ()   => req("GET",  "/orders/my");
export const getOrder       = (id) => req("GET",  `/orders/${id}`);
export const cancelOrder    = (id) => req("PUT",  `/orders/${id}/cancel`);
export const updateOrderStatus = (id,s) => req("PUT", `/orders/${id}/status`, { status: s });

// ── Payment ─────────────────────────────────────────────────
export const createRazorpayOrder = (amount) => req("POST", "/payment/create-order", { amount });
export const verifyPayment       = (d)      => req("POST", "/payment/verify", d);

// ── Admin ───────────────────────────────────────────────────
export const getAdminStats  = ()  => req("GET", "/admin/stats");
export const getAdminOrders = (q) => req("GET", `/admin/orders${q||""}`);

// ── Upload image ────────────────────────────────────────────
export const uploadImage = async (file) => {
  const form = new FormData();
  form.append("image", file);
  const res = await fetch(`${BASE}/upload/image`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}` },
    body: form,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Upload failed");
  return data; // { url, publicId }
};