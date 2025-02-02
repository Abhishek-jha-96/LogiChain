import { authOptions } from '@logichain/network/src/auth/authOptions'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
