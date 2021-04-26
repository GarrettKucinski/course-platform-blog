import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}
 
export default function CoverImage ({ title, src, slug }: Props) {
  const image = <img src={src} alt={`Cover Image for ${title}`} />

  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image        
      )}
    </div>
  )
}