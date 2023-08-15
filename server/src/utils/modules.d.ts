type DataBaseType = 'postgres'

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /* SERVER */
            PORT: number;
            CLIENT_URL: string;
            /* DB */
            POSTGRES_TYPE: DataBaseType;
            POSTGRES_HOST: string;
            POSTGRES_PORT: number;
            POSTGRES_USER: string;
            POSTGRES_PASSWORD: string;
            POSTGRES_DATABASE: string;
            /* JWT */
            ACCESS_TOKEN_KEY: string
            ACCESS_TOKEN_EXPIRES_IN: string
            REFRESH_TOKEN_KEY: string
            REFRESH_TOKEN_EXPIRES_IN: string
            COOKIE_EXPIRES_TIME: Date
            COOKIE_MAX_AGE: number
            /* HASH */
            SALT_ROUNDS: number
        }
    }
}

export { };
