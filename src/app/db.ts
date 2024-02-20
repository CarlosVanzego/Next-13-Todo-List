// Importing PrismaClient from the '@prisma/client' package
import { PrismaClient } from "@prisma/client"

// Defining a global variable 'globalForPrisma' to hold PrismaClient instance, casting it as unknown
// This is necessary to access 'global' object, which may not be directly accessible in all environments
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Exporting 'prisma' variable, which is initialized to either an existing instance of PrismaClient or a new one
export const prisma =
  globalForPrisma.prisma ?? // If 'prisma' already exists, use it
  new PrismaClient({ // If not, create a new instance of PrismaClient
    log: ["query"], // Configure logging for queries
  })

// If the environment is not 'production', assign the 'prisma' instance to the global variable 'globalForPrisma.prisma'
// This allows reusing the same PrismaClient instance across the application during development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

