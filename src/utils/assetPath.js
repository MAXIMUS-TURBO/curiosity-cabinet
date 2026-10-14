export function assetPath(path) {
  if (!path) return "";

  if (/^(https?:\/\/|data:|blob:)/i.test(path)) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}