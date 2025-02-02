'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'
import { BaseComponent } from '@logichain/util/types'

export const SessionProvider = ({ children }: BaseComponent) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
