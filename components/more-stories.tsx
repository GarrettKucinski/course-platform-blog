import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

export default function MoreStories ({ posts }: Props) {
  return (
    <section>
      <h2>More Stories</h2>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}