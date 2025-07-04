import requests 
from dotenv import load_dotenv
import os
from concurrent.futures import ThreadPoolExecutor

load_dotenv()

request_url = f"{os.getenv('OMDB_API_URL')}?apikey={os.getenv('OMDB_API_KEY')}"


def get_movie_details(movie_id):
    try:
        url = f"{request_url}&i={movie_id}"
        response = requests.get(url)
        if response.status_code != 200:
            return {}
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching movie details: {e}")
        return {}
    
def get_movies(movies_ids):
    details = []
    with ThreadPoolExecutor(max_workers=6) as executor:
        details = list(executor.map(get_movie_details, movies_ids))
    
    return details