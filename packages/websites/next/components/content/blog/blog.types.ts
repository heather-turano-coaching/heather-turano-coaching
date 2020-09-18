export type BlogType = "featured" | "regular";

export interface BaseBlog {
  blogType: BlogType;
}

export interface BlogSocialOptions {
  social: {
    facebook?: string;
    pinterest?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface BlogAuthor {
  avatarImg?: string;
  authorName: string;
}

export interface BlogMetaInformation {
  datePublished: string;
}
