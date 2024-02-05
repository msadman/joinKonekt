const prisma = require("../utils/prisma");

export async function getRandomMember() {
  const firstRecord = await prisma.member.findFirst()
  const lastRecord = await prisma.member.findLast({
    orderBy: {
      id: 'desc'
    }
  })

  const minVal = firstRecord.id;
  const maxVal = lastRecord.id;

  const randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + min;

  const selectedUser = await prisma.member.findUnique({
    where: {
      id: randomNum
    }
  })

  return selectedUser;
}

export async function getAllMembers() {
  return await prisma.member.findMany();
}