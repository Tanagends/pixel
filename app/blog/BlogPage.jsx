"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/BlogHero';

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

//================================================================//
// BlogPage Component - This is the new page content.
//================================================================//
export default function BlogPage() {
    
    // Placeholder data for blog posts
    const blogPosts = [
        {
            featured: true,
            title: "The 5 Core Principles of Modern Web Design in 2025",
            category: "Web Design",
            author: "Tanatswa Gendere",
            date: "June 27, 2025",
            excerpt: "In an ever-evolving digital landscape, staying ahead means understanding the foundational principles that define great web design. We're diving deep into the five core tenets that will make or break user experiences in 2025 and beyond.",
            img: "https://placehold.co/1200x600/1a202c/ff5722?text=Modern+Web+Design"
        },
        {
            title: "Why Your Next Project Should Be a Headless CMS",
            category: "Web Development",
            author: "Tanatswa Gendere",
            date: "June 20, 2025",
            excerpt: "Discover the power and flexibility of headless architecture and why it's becoming the standard for high-performance, scalable websites.",
            img: "https://placehold.co/600x400/1a202c/ffffff?text=Headless+CMS"
        },
        {
            title: "The Psychology of Color in Branding",
            category: "Graphic Design",
            author: "Worship Mugomeza",
            date: "June 14, 2025",
            excerpt: "Color is more than just aesthetics; it's a powerful communication tool. Learn how to leverage color psychology to build a stronger brand identity.",
            img: "https://placehold.co/600x400/ff5722/ffffff?text=Color+Psychology"
        },
        {
            title: "Optimizing for Core Web Vitals: A Developer's Guide",
            category: "Web Development",
            author: "Worship Mugomeza",
            date: "June 5, 2025",
            excerpt: "A technical deep-dive into Google's Core Web Vitals and practical steps you can take to improve your site's performance and SEO ranking.",
            img: "https://placehold.co/600x400/1a202c/ffffff?text=Web+Vitals"
        },
         {
            title: "From Figma to Framer Motion: Creating Fluid Animations",
            category: "UI/UX Design",
            author: "Tanatswa Gendere",
            date: "May 28, 2025",
            excerpt: "Learn our process for designing and implementing beautiful, fluid animations that enhance user experience without sacrificing performance.",
            img: "https://placehold.co/600x400/ff5722/ffffff?text=Figma+to+Framer"
        }
    ];

    const featuredPost = blogPosts.find(p => p.featured);
    const recentPosts = blogPosts.filter(p => !p.featured);

    const categories = ["Web Design", "Web Development", "Graphic Design", "UI/UX Design", "SEO"];
    
    return (
        <div className="bg-gray-50 pt-28">
            {/* Blog Hero Section 
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-800"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        PixelCrafte <span className="text-orange-500">Insights</span>
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        Our thoughts on design, development, and the digital future. A journal for the curious and the creative.
                    </motion.p>
                </div>
            </section> */}
            <Hero />
            
            {/* Main Content Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Post */}
                    {featuredPost && (
                        <motion.div 
                            className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-20 items-center"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.8}}
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl">
                                <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <p className="text-orange-500 font-bold mb-2">{featuredPost.category}</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{featuredPost.title}</h2>
                                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                                <p className="text-sm text-gray-500 mb-6">{featuredPost.date} by {featuredPost.author}</p>
                                <a href="#" className="font-bold text-orange-500 hover:underline flex items-center space-x-2">
                                    <span>Read Full Story</span>
                                    <IconArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                         {recentPosts.map((post, index) => (
                            <motion.div 
                                key={post.title} 
                                className="bg-white rounded-lg overflow-hidden shadow-lg group"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.5}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <div className="overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-6">
                                    <p className="text-orange-500 font-bold text-sm mb-1">{post.category}</p>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 h-14">{post.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 h-20">{post.excerpt}</p>
                                    <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs text-gray-500">
                                        <span>{post.date}</span>
                                        <span>by {post.author}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Categories and Load More */}
                    <div className="mt-20 text-center">
                        <div className="mb-12">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Browse by Category</h3>
                             <div className="flex flex-wrap justify-center items-center gap-3">
                                {categories.map(cat => (
                                     <button key={cat} className="bg-white border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300 font-medium py-2 px-4 rounded-full text-sm">
                                         {cat}
                                     </button>
                                ))}
                            </div>
                        </div>

                        <motion.button
                             className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-base hover:bg-black transition-colors duration-300"
                             whileHover={{ y: -3 }}
                        >
                            Load More Articles
                        </motion.button>
                    </div>
                 </div>
            </section>
        </div>
    );
}

