import { getAuth } from '@logichain/network/src/auth/authOptions'
import { add } from '@logichain/sample-lib'
import { HomePage } from '@logichain/ui/src/components/templates/HomePage'

export default async function Home() {
  const user = await getAuth()
  console.log('user ', user)
  return (
    <main>
      <HomePage />
    </main>
  )
}
