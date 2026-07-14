'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { NEWS } from "@/lib/news";
import StructuredData from "@/components/StructuredData";
import { createItemListSchema } from "@/lib/schema";

const PAGE_SIZE = 6;

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = NEWS.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const displayedNews = filteredNews.slice(startIndex, startIndex + PAGE_SIZE);

  const newsSchema = createItemListSchema(
    "AEROVA Industry News",
    NEWS.map((article) => ({ url: `/news/${article.id}`, name: article.title })),
    "Latest news and insights on drone technology, low-altitude economy, and industrial applications."
  );

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      <StructuredData data={newsSchema} />
      <header className="border-b border-border bg-surface relative bg-[url('/images/drone_news.jpg')] bg-cover bg-center min-h-[300px] md:min-h-[600px]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry News
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and analysis on the latest developments in drone technology, low-altitude economy, and industrial applications.
          </p>
        </div>
      </header>

      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="py-4 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="search"
                placeholder="Search articles/keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                aria-label="Search news articles"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {displayedNews.length} articles
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedNews.map((article) => (
            <article key={article.id}>
              <Link
                href={`/news/${article.id}`}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1 block"
              >
                <figure className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="News pagination">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center w-10 h-10 rounded border border-border text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Previous page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {getPageNumbers().map((page, idx) =>
              page === "..." ? (
                <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page as number)}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded border text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border text-foreground hover:border-accent hover:text-accent"
                  }`}
                  aria-label={`Go to page ${page}`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center w-10 h-10 rounded border border-border text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Next page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}

        {displayedNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}


        <aside className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest industry insights and product announcements.
          </p>
          <nav>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}
