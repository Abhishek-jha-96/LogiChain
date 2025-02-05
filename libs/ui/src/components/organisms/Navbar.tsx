import Link from 'next/link'
import { Brand } from '../atoms/brand'
import { SheetClose, SheetFooter, SheetHeader } from '../atoms/sheet'
import { DisplayUser } from '../molecules/DisplayUser'

import { Factory, Store, Warehouse } from 'lucide-react'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-12 bg-white/40 backdrop-blur backdrop-filter">
      <div className="flex items-center justify-between">
        <Brand />
        <div>
          <Sidebar>
            <SheetHeader>
              <DisplayUser />
            </SheetHeader>

            <div className="flex flex-col gap-2 mt-4 mb-8">
              <Link href="/myItems">
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4" /> Manufacturers
                </div>
              </Link>
              <Link href="/myItems">
                <div className="flex items-center gap-2">
                  <Warehouse className="w-4 h-4" /> Distributors
                </div>
              </Link>
              <Link href="/myItems">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4" /> Retailers
                </div>
              </Link>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Link href="/api/auth/signout">Signout</Link>
              </SheetClose>
            </SheetFooter>
          </Sidebar>
        </div>
      </div>
    </nav>
  )
}
