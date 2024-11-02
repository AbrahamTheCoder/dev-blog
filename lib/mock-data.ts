export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  likes: number;
  coverImage: string;
  author: Author;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Mindful Programming",
    slug: "the-art-of-mindful-programming",
    excerpt: "Discover how mindfulness can improve your coding practice and lead to better software.",
    content: "In the fast-paced world of software development, taking a mindful approach to programming can significantly improve both code quality and developer well-being...",
    publishedAt: "2024-03-20T09:00:00Z",
    likes: 42,
    coverImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60"
    }
  },
  {
    id: "2",
    title: "Building Scalable Systems",
    slug: "building-scalable-systems",
    excerpt: "Learn the key principles behind building systems that can handle massive growth.",
    content: "Scalability is not just about handling more users or data. It's about building systems that can adapt and grow efficiently...",
    publishedAt: "2024-03-18T10:30:00Z",
    likes: 38,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3540&auto=format&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    }
  }
];