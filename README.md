# We Love Movies

The backend application layer and DB config and communication layer for a frontend web application to provide users with data about movies, theaters, and reviews.

## Installation

1. Run `cp.env.sample .env`.
2. Update your `.env.` file with a connection URL to your Render database instance. The connection URL can be found in your Render database instance details (e.g., `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase"`). Make sure to append `?ssl=true` to the end of the URL to ensure a secure connection (e.g., `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase?ssl=true"`).
3. Run `npm install` to install project dependencies.
4. Run `npm run start:dev` to start your server in development mode.
5. In your browser or Postman, navigate to `localhost:5001/movies`. If your server is running properly, you should get back the following JSON response:

```json
{
    "data": [
        {
            "movie_id": 1,
            "title": "Spirited Away",
            "runtime_in_minutes": 125,
            "rating": "PG",
            "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
            "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
            "true": null
        },
        {
            "movie_id": 2,
            "title": "Interstellar",
            "runtime_in_minutes": 169,
            "rating": "PG-13",
            "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life...",
            "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
            "true": null
        }
        ...
    ]
}
```

## Database setup

1. Set up a new ElephantSQL database instance by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. In your `.env` file, set the `DATABASE_URL` to the database connection url for your new database
1. Run `npx knex migrate:latest` to migrate the database schema
1. Run `npx knex seed:run` to seed some article data into the database

## Routes

- `/movies` List all movies in the database.
- `/movies/:movieId` A specific movie in the database.
- `/movies/:movieId/reviews` List all reviews for the movie.
- `/movies/:movieId/theaters` List all theaters where the movie `is_showing=true`.
- `/theaters` List all movie theaters in the database.

## Technology Stack

- Node.js backend Server with Express JS web framework.
- PostgreSQL database, guidance to host on Render.
- `knex` A flexible SQL query builder with migrations and seed test data.
- `cors` Connect/Express middleware to enable CORS with various options.
