export default async function getRecommendations() {
    try {
        const response = await fetch('/recommendation');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
}