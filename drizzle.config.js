/**@type {import ("drizzle-kit").Config} */
export default{
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_wQ0BgAsGc2tb@ep-weathered-hall-a4mv7jwk-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
};