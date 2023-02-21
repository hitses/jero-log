import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";
import { Post } from "../types.d.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts: Post[] = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;

  return (
    <main className="p-4">
      <h1 class="text-4xl">Jero.logs</h1>
      {posts.map((post: Post) => (
        <article class="p-4">
          <h2 class="text-2xl font-bold">
            <a class="hover:text-blue-600" href={`/log/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}
