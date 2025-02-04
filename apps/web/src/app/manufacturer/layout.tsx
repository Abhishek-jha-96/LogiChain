import { getAuth } from '@logichain/network/src/auth/authOptions'
import { fetchGraphqlStatic } from '@logichain/network/src/fetch'
import {
  ManufacturerDocument,
  namedOperations,
} from '@logichain/network/src/queries/generated'
import { CreateRoleAccount } from '@logichain/ui/src/components/organisms/CreateRoleAccount'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default async function ManufacturerLayout({
  children,
}: {
  children: ReactNode
}) {
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
    return <CreateRoleAccount role="manufacturer" uid={session.user.uid} />
  }

  return <div>{children}</div>
}
