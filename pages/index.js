import { Fragment } from 'react';
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '@/lib/posts-util';

// const Dummy_POSTS = [
//   { 
//     slug: 'getting-started-with-nextjs', 
//     title: 'Getting Started with Nextjs', 
//     image: 'getting-started-with-nextjs.jpg', 
//     excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'getting-started-with-nextjs2', 
//     title: 'Getting Started with Nextjs', 
//     image: 'getting-started-with-nextjs.jpg', 
//     excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'getting-started-with-nextjs3', 
//     title: 'Getting Started with Nextjs', 
//     image: 'getting-started-with-nextjs.jpg', 
//     excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'getting-started-with-nextjs4', 
//     title: 'Getting Started with Nextjs', 
//     image: 'getting-started-with-nextjs.jpg', 
//     excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
//     date: '2022-02-10' 
//   },
// ];

function HomePage(props) {
    return (
        <Fragment>
          <Hero/>
          <FeaturedPosts posts={props.posts}/>
        </Fragment>
    );
    
}

export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: FeaturedPosts
    },
  }
}

export default HomePage;
