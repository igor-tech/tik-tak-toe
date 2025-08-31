import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const gameData: Prisma.GameCreateInput[] = [
  {
    name: 'Game 1',
  },
  {
    name: 'Game 2',
  },
]

export async function main() {
  for (const g of gameData) {
    await prisma.game.create({ data: g })
  }
}

main()
