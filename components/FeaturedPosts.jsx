// components/FeaturedPosts.js

import React from 'react';
import Link from 'next/link';

const FeaturedPosts = () => {
    // Sample data for demonstration
    const samplePosts = [
        { id: 1, title: 'The Importance of Biodiversity Conservation', slug: 'importance-of-biodiversity-conservation' },
        { id: 2, title: 'Exploring Ecosystem Diversity', slug: 'exploring-ecosystem-diversity' },
        { id: 3, title: 'Protecting Endangered Species: A Global Challenge', slug: 'protecting-endangered-species' }
    ];

    return (
        <div className="featured-posts">
            {samplePosts.map(post => (
                <div key={post.id} className="post">
                    <Link href={`/blog/${post.slug}`}>
                        <span>{post.title}</span>
                    </Link>
                </div>
            ))}
            <style jsx>{`
                .featured-posts {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }

                .post {
                    background-color: #f4f4f4;
                    padding: 10px;
                    border-radius: 5px;
                }

                .post a {
                    color: #333;
                    text-decoration: none;
                }

                .post a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default FeaturedPosts;
