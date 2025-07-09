export interface BlogPostCard {
    id: number;
    title: string;
    content: string;
    category: string;
    images: [];
    author: string;
    createdAt: string;
}

export interface BlogPost {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: string;
    category: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
}
