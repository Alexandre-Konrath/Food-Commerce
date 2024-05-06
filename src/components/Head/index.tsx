interface HeadProps {
  title: string;
}

export function Head({ title }: HeadProps) {
  document.title = `Food Commerce | ${title}` // muda o titulo da página

  return null
}
