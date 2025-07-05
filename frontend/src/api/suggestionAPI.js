export default async function getSuggestions() {
  try {
    const response = await fetch('/suggestion');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    
    return data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
}