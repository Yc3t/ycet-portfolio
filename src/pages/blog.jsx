"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Tag, Bookmark } from 'lucide-react';
import NavigationBar from '@/components/navbar';
import RadialGraph from '@/components/graph';
import styles from './blog.module.css';
import '@/app/globals.css';
import SocialLine from '@/components/SocialLine';

const BlogEntry = ({ title, tags, onClick }) => (
  <div
    className={`w-full p-4 mb-4 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors ${styles.projectTrigger}`}
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className={styles.glowingChevron}>
          <ChevronRight size={18} />
        </div>
        <span>{title}</span>
      </div>
      <div className={styles.blogIcon}>
        <Bookmark size={18} />
      </div>
    </div>
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded-md flex items-center">
          <Tag className="w-3 h-3 mr-1" />
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Blog = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries([
      {
        id: 1,
        title: "The Art of Minimalism in Web Design",
        tags: ["Design", "Web", "UX"],
        url: "/blog/minimalism-in-web-design",
      },
      {
        id: 2,
        title: "Implementing RadialGraph with React",
        tags: ["React", "D3", "Visualization"],
        url: "/blog/radial-graph-react",
      },
      {
        id: 3,
        title: "The Future of Web Development",
        tags: ["Web", "Technology", "Trends"],
        url: "/blog/future-of-web-development",
      },
    ]);
  }, []);

  const cardStyle =
    "shadow-[0_4px_10px_rgba(138,43,226,0.2)] border border-purple-300/20 rounded-xl p-4";

  const handleEntryClick = (url) => {
    console.log(`Navigating to: ${url}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavigationBar />
      <div className="flex-grow flex flex-col items-center px-4">
        {/* Reduced side padding */}
        <div className="bg-black text-white py-8 w-full max-w-7xl">
          {/* Adjusted max-width */}
          <h1 className="text-4xl mb-8 font-bold text-center">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            {/* Reduced gap */}
            <div className="mb-16">
              {entries.map((entry) => (
                <BlogEntry
                  key={entry.id}
                  title={entry.title}
                  tags={entry.tags}
                  onClick={() => handleEntryClick(entry.url)}
                />
              ))}
            </div>
            <div
              className={`${cardStyle} flex flex-col gap-4 w-full`}
              style={{ height: '400px' }} // Fixed height for the box
            >
              {/* RadialGraph Box with Title */}
              <h2 className="text-xl font-bold mb-2 text-center text-purple-400">Relationships</h2>
              <RadialGraph />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <SocialLine />
      </div>
    </div>
  );
};

export default Blog;


