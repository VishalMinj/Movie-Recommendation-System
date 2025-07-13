import { SUGGESTION_URL } from "../utils/constants";

export default async function getSuggestions() {
  try {
    const response = await fetch(`${SUGGESTION_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
}