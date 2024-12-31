import prisma from "../prisma/prisma";
import { faker } from "@faker-js/faker";

const fakeUserData = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
})

async function seedUserData() {
  console.log('Seeding user data 🚀');
  const fakeUsers = Array.from({ length: 400 }, fakeUserData);
  await prisma.user.createMany({ data: fakeUsers });
  console.log('User data seeded ✅');
}

seedUserData().finally(async () => {
  await prisma.$disconnect();
});