export const GetDBSettings = () => {
    const env = process.env.NODE_ENV;
        return {
            host: process.env.host, //'58.84.143.251',
            port: parseInt(process.env.port),
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
        };
};