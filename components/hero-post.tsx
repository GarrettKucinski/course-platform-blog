import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export default function HeroPost (props: Props) {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  } = props;

  return (
    <section>
      <CoverImage title={title} src={coverImage} slug={slug} />
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <DateFormatter dateString={date} />
      <p>{excerpt}</p>
      <Avatar {...author} />
    </section>
  )
}