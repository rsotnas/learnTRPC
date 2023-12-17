import { PrismaClient } from '@prisma/client';
import {faker } from '@faker-js/faker';
const prisma = new PrismaClient()
async function main() {
  const fakeArray = Array.from({length: 30}).map((_, idx) => idx);
  for await (const _ of fakeArray) {
    console.log(_)
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        // username: faker.internet.userName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
      },
    })
    const postsFakeArray = Array.from({length: faker.number.int({max:30, min: 5})}).map((_, idx) => idx);
    for await (const _ of postsFakeArray) {
      const post = await prisma.post.create({
        data: {
          title: faker.lorem.sentence(5),
          description: faker.lorem.lines(2),
          text: faker.lorem.paragraphs(5),
          html: faker.lorem.paragraphs(5),
          slug: faker.lorem.slug(5),
          createdBy:{
            connect: {
              id: user.id
            }
          },
          featuredImage: faker.image.url(),
          tags: {
            connectOrCreate: {
              where: {
               id: faker.number.int({max: 30, min: 1})
              },
              create: {
                name: faker.lorem.word(),
                slug: faker.lorem.slug(5),
                description: faker.lorem.lines(2),
              }
            }
          },
        },
      })
    }
  }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })