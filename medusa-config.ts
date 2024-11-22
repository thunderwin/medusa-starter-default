import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    store_cors: process.env.STORE_CORS!,
    admin_cors: process.env.ADMIN_CORS!,
    auth_cors: process.env.AUTH_CORS!,
    jwt_secret: process.env.JWT_SECRET || "supersecret",
    cookie_secret: process.env.COOKIE_SECRET || "supersecret"
  },
  // admin 配置应该是顶级配置
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    backendUrl: process.env.MEDUSA_BACKEND_URL,
    path: process.env.MEDUSA_ADMIN_PATH
  }
})
