const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Loads the member.js file
const memberData = require("../seeds/member.js");
const member = require('../seeds/member.js');

async function createMultipleMembers() {
  // Check if a member already exist
  const existingMembers = await prisma.member.findMany({
    where: {
      OR: memberData.map(member => ({ name: member.name }))
    }
  });

  // Filter out members that already exists
  const filteredMemberData = memberData.filter(member => {
    return !existingMembers.some(existingMember => existingMember.name === member.name)
  });

  // Check if theres no new member
  if (filteredMemberData.length === 0) {
    return;
  }

  // Only executes if theres a new member.
  const members = await prisma.member.createMany({
    data: filteredMemberData,
    skipDuplicates: true
  })

  console.log(members);
}

createMultipleMembers()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

