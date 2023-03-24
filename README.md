# node-mongoose-prototype
<img src="app/assets/images/node-mongoose-prototype-banner.png">

A simple NodeJS CRUD app that can be used to quickly test MongoDB deployments using Mongoose and Express.

## Instructions:

1. Create a '.env' file to add your Database and PORT variables:
    ```bash
    # App host:port
    HOST="0.0.0.0"
    PORT=3000
    # MongoDB connection string
    CONN_STR="mongodb+srv://username:password@cluster..."
    ```
2. Run the app:
    ```bash
    # Docker v1:
    docker-compose -f docker-compose.yaml up -d

    # Docker v2:
    docker compose -f docker-compose.yaml up -d
    ```

3. Access the app at `0.0.0.0:3000` or `localhost:3000`

That's it!
