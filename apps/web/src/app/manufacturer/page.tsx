import { getAuth } from '@logichain/network/src/auth/authOptions'
import { fetchGraphqlStatic } from '@logichain/network/src/fetch'
import {
  ManufacturerDocument,
  namedOperations,
} from '@logichain/network/src/queries/generated'
import { redirect } from 'next/navigation'

export default async function ManufacturerPage() {
  const session = await getAuth()
  if (!session?.user) {
    redirect('/signIn')
  }

  const { data, error } = await fetchGraphqlStatic({
    document: ManufacturerDocument,
    variables: { where: { uid: session.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.manufacturer],
      },
    },
  })

  if (!data?.manufacturer) {
    return <div>Manufacturer not found.</div>
  }
  return <div>Manufaturer Page</div>
}
