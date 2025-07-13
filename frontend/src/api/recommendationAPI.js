import { RECOMMENDATION_URL } from "../utils/constants";

export default async function getRecommendations(movieID) {
    try {
        const response = await fetch(`${RECOMMENDATION_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ movie_id: movieID }) // Replace with actual user ID or data as needed
        });
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