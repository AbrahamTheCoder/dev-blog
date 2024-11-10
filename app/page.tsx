import { posts } from "@/lib/mock-data";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  return (
    <main>
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=2400&auto=format&fit=crop&q=80"
            alt="Hero background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 max-w-4xl text-white">
          <h1 className="text-7xl font-light mb-6">Thoughts on Technology</h1>
          <p className="text-xl font-light mb-8 max-w-2xl">
            Exploring the intersection of design, development, and digital innovation
          </p>
          <Button 
            asChild 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/40 border hover:border-white/60 transition-all"
          >
            <Link href="/blog">
              Read Latest Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-4xl font-light mb-16 text-center">Recent Writing</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-auto max-w-6xl px-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/9] mb-6 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-[30vh] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-light mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <time>
                        {formatDistanceToNow(new Date(post.publishedAt), {
                          addSuffix: true,
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}