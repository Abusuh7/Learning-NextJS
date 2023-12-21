/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "users",
  },
};

module.exports = nextConfig;
