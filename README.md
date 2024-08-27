# We Love Movies

The backend application layer and DB config and communication layer for a frontend web application to provide users with data about movies, theaters, and reviews.

## Installation

1. Run `cp.env.sample .env`.
2. Update your `.env.` file with a connection URL to your Render database instance. The connection URL can be found in your Render database instance details (e.g., `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase"`). Make sure to append `?ssl=true` to the end of the URL to ensure a secure connection (e.g., `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase?ssl=true"`).
3. Run `npm install` to install project dependencies.
4. Run `npm run start:dev` to start your server in development mode.
5. In your browser or Postman, navigate to `localhost:5001`. If your server is running properly, you should get back the following JSON response:

```json
HTTP/1.1 404 Not Found
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 140
Date: Tue, 27 Aug 2024 12:47:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

// TODO update JSON response once properly setup.

## Technology Stack

- Node.js backend Server with Express JS web framework.
- PostgreSQL database, guidance to host on Render.
- `knex` A flexible SQL query builder with migrations and seed test data.
- `cors` Connect/Express middleware to enable CORS with various options.
