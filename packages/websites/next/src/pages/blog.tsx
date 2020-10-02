import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { PageBlog } from "components/feature/blog";
import { Meta } from "components/feature/meta";
import { IPageBlog, getBlogPage } from "lib/contentful";
import { getAllPosts, getFeaturedPost } from "lib/ghost.api";
import { GetServerSideProps } from "next";

export type BlogPageProps = {
  data: IPageBlog;
  featuredPost: PostOrPage;
  allPosts: PostsOrPages;
};

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  const [data, featuredPost, allPosts] = await Promise.all([
    getBlogPage(),
    getFeaturedPost(),
    getAllPosts()
  ]);

  return {
    props: {
      data,
      featuredPost,
      allPosts
    }
  };
};

export default function BlogPage(props: BlogPageProps) {
  return (
    <>
      <Meta pageTitle="Blog" />
      <PageBlog {...props} />
    </>
  );
}
