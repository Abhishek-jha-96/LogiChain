import { getAuth } from '@logichain/network/src/auth/authOptions'
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
  return <div>{children}</div>
}
