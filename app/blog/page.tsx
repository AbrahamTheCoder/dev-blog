"use client";

import { useState } from "react";
import { posts } from "@/lib/mock-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

type SortOption = "likes" | "date" | "alpha";

export default function BlogPage() {
  const [sortBy, setSortBy] = useState<SortOption>("date");

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortBy) {
      case "likes":
        return b.likes - a.likes;
      case "date":
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case "alpha":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light mb-6">Journal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, stories and ideas about the world of technology and design
            </p>
          </div>
          
          <div className="flex justify-end mb-12">
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as SortOption)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Most Recent</SelectItem>
                <SelectItem value="likes">Most Popular</SelectItem>
                <SelectItem value="alpha">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-16">
            {sortedPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/9] mb-6 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-light mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
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
    </div>
  );
}