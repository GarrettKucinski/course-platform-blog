import { ReactNode } from 'react'
import Footer from './footer'
import Meta from './meta'

type Props = {
  children: ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  )
}
