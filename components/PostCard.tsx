import Link from "next/link";
import { Post } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'lg:flex' : ''}`}>
        <div className={`relative ${featured ? 'lg:w-2/5' : 'h-48'}`}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={featured ? 'lg:w-3/5' : ''}>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-muted-foreground">{post.author.name}</span>
            </div>
            <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <time>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</time>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}