import { prisma } from "./index.js";

async function waitForDatabase() {
    for (let i = 0; i < 10; i++) {
        try{
            await prisma.$queryRaw`SELECT 1`;
            console.log("Database is ready");
            return;
        } catch (error) {
            console.log(`Database is not ready, retrying... ${i + 1}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
    throw new Error("Database is not ready");
}

export default waitForDatabase;