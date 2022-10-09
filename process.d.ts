declare namespace NodeJs {
    export interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        NEXTAUTH_SECRET: string;
        MONGODB_URI: string;
        DB_NAME: string;
    }
}