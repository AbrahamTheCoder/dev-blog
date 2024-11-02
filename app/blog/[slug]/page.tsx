import { notFound } from "next/navigation";
import { posts } from "@/lib/mock-data";
import { formatDistanceToNow } from "date-fns";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      <div className="aspect-[16/9] relative">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-32 relative">
        <div className="bg-background p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>·</span>
              <time>
                {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
              </time>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
}