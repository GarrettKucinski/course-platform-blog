import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

export default function Container ({ children }: Props) {
  return <div>{children}</div>
}