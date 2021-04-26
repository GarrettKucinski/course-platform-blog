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

export default function PostPreview (props: Props) {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  } = props;

  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}