export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  likes: number;
  author: {
    name: string;
    avatar: string;
  };
}

export interface MusicTrack {
  title: string;
  artist: string;
  albumArt: string;
}