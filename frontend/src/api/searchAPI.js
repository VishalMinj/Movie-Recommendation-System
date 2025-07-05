export default async function getSearchMovies(query) {
  try {
    const response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Search results:", data);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}
