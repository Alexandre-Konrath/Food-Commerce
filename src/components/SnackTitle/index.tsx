import { ReactNode } from 'react'
import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}

export function SnackTitle({ children }: TitleProps) {
  // children = conteudo de um elemento
  return <Title>{children}</Title>
}
