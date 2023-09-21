import { getAllPosts } from "@/lib/posts-util";
import AllPosts from "../../components/posts/all-posts";

// const Dummy_POSTS = [
//     { 
//       slug: 'getting-started-with-nextjs', 
//       title: 'Getting Started with Nextjs', 
//       image: 'getting-started-with-nextjs.jpg', 
//       excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'getting-started-with-nextjs2', 
//       title: 'Getting Started with Nextjs', 
//       image: 'getting-started-with-nextjs.jpg', 
//       excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'getting-started-with-nextjs3', 
//       title: 'Getting Started with Nextjs', 
//       image: 'getting-started-with-nextjs.jpg', 
//       excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'getting-started-with-nextjs4', 
//       title: 'Getting Started with Nextjs', 
//       image: 'getting-started-with-nextjs.jpg', 
//       excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//       date: '2022-02-10' 
//     },
//   ];

function AllPostsPage(){
    return (
        <AllPosts posts={Dummy_POSTS} />
    )
}

export function getStaticProps() {
   const allPosts = getAllPosts(); 

   return {
    props: {
        posts: allPosts
    },
   };
}

export default AllPostsPage;