'use client'
import { Role } from '@logichain/util/types'
import { useEffect, useState } from 'react'
import { createManufacturer } from '@logichain/network/src/actions/createManufacturer'
// import { createDistributor } from '@logichain/network/src/actions/createDistributor'
// import { createRetailer } from '@logichain/network/src/actions/createRetailer'

export const CreateRoleAccount = ({
  role,
  uid,
}: {
  role: Role
  uid: string
}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 4000))
        if (role === 'manufacturer') {
          await createManufacturer({ uid })
        }
        // if (role === 'distributor') {
        //   await createDistributor({ uid })
        // }
        // if (role === 'retailer') {
        //   await createRetailer({ uid })
        // }
      } finally {
        setLoading(false)
      }
    })()
  }, [uid, role])

  if (loading) {
    return <div>Creating {role} account...</div>
  }

  return null
}
