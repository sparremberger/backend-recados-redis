require("dotenv").config();

module.exports = {
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    entities: ["db/entities/**/*"],
    migrations: ["db/migrations/**/*"],
    cli: {
        entitiesDir: "db/entities",
        migrationsDir: "db/migrations",
    },
};
