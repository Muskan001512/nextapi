import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'mongodb+srv://rnagalcha:rnagalcha%40123@cluster0.y7fz6.mongodb.net/snap',
    },
  },
});

export default prisma;