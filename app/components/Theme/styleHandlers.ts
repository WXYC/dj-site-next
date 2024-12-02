export const fetchViewMode = async () => {
  const response = await fetch("/api/view", {
    method: "GET",
  });
  const { viewMode } = await response.json();
  return viewMode;
};

export const saveViewMode = async (viewMode: "modern" | "classic") => {
  await fetch("/api/view", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ viewMode }),
  });
};
