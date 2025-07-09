from channels.generic.websocket import AsyncWebsocketConsumer
import json
from model import search_movies
import asyncio

class MovieSearchConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        await self.accept()

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        query = text_data_json['query']
        movies = await asyncio.to_thread(search_movies, query)
        await self.send(text_data=json.dumps(movies))
