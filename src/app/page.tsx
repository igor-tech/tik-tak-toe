import { prisma } from '@/shared/db'
import { Game } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export default async function Home() {
  const games = await prisma.game.findMany()
  console.log(games)
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        {games.map((game: Game) => (
          <Card key={game.id}>
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{game.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
