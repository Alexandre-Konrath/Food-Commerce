import { SkeletonElement } from "./styles"

export interface SkeletonProps {  // valores textuais que o Skeleton podem assumir no type = tipo
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }:SkeletonProps) {
  return <SkeletonElement type={type}/>
}
