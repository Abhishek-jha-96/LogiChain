import { Factory, Store, Warehouse } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../../util/variants'
import { HeroLink } from '../molecules/HeroLink'

export const HeroBanner = () => {
  return (
    <div className="flex h-[calc(100vh-3rem)] justify-center">
      <div className="mt-32 text-center flex flex-col items-center">
        <h1 className="max-w-xl mb-4 text-5xl font-semibold">
          Empowering Your{' '}
          <span className="hover:text-blue-600">Supply Chain</span> Journey
        </h1>
        <p className="max-w-md mb-8 text-xl">
          Connect, collaborate, and optimize your supply chain with LogiChain.
        </p>
        <div className="flex gap-4 my-4">
          <HeroLink Icon={Factory} url={'/manufacturer'}>
            Manufacturer
          </HeroLink>
          <HeroLink Icon={Warehouse} url={'/distributor'}>
            Distributer
          </HeroLink>
          <HeroLink Icon={Store} url={'/retailer'}>
            Retailer
          </HeroLink>
        </div>
        <Link
          href="/register"
          className={buttonVariants({ variant: 'outline' })}
        >
          Register
        </Link>
      </div>
    </div>
  )
}
