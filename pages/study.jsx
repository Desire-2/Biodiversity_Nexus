// pages/index.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import FeaturedPosts from '../components/FeaturedPosts';

const Study = () => {
  return (
    <Layout>
        <div className="container">
            <h1>Welcome to Biodiversity Nexus Blog, where we strive to raise awareness about biodiversity and conservation efforts worldwide</h1>
            <p>Explore the latest posts on biodiversity and conservation.</p>
            <Link href="/blog">
                <span className="btn">Read Blog</span>
            </Link>
        </div>

        <div className="featured-posts">
            <h2>Featured Posts</h2>
            <FeaturedPosts />
        </div>

        <div className="newsletter">
            <h2>Subscribe to Our Newsletter</h2>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>


            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1.1rem;
                    margin-bottom: 40px;
                }

                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #0070f3;
                    color: #fff;
                    border-radius: 5px;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }

                .btn:hover {
                    background-color: #0055b3;
                }
            `}</style>
        </Layout>
    );
};

export default Study;
