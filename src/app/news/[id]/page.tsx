'use client'

import Link from "next/link";
import { useParams } from "next/navigation";
import { NEWS } from "@/lib/news";
import StructuredData from "@/components/StructuredData";
import { createArticleSchema } from "@/lib/schema";

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const articleId = params.id;

  const article = NEWS.find((a) => a.id === articleId);
  const currentIndex = NEWS.findIndex((a) => a.id === articleId);

  const prevArticle = currentIndex > 0 ? NEWS[currentIndex - 1] : null;
  const nextArticle = currentIndex < NEWS.length - 1 ? NEWS[currentIndex + 1] : null;

  const articleSchema = article
    ? createArticleSchema(article.title, article.id, article.summary, article.content, article.image)
    : null;

  if (!article) {
    return (
      <div className="bg-background min-h-screen font-sans pt-16">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = article.content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      {articleSchema && <StructuredData data={articleSchema} />}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-3 lg:px-8">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Link href="/news" className="hover:text-accent transition-colors">News</Link>
            <span>&gt;</span>
            <span className="text-foreground/80 truncate">{article.title}</span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              Industry News
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {article.summary}
          </p>
        </header>

        <div className="border-t border-border pt-10">
          <div className="prose prose-slate max-w-none">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="mb-6">
                <p className="text-foreground/80 leading-8 text-base">
                  {paragraph.trim()}
                </p>
                {article.images && article.images[index] && (
                  <figure className="my-8 rounded-lg overflow-hidden border border-border">
                    <img
                      src={article.images[index].url}
                      alt={article.images[index].alt}
                      className="w-full h-auto object-contain"
                    />
                    <figcaption className="px-4 py-3 bg-card text-sm text-muted-foreground">
                      {article.images[index].alt}
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {prevArticle ? (
              <Link
                href={`/news/${prevArticle.id}`}
                className="group flex-1 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Article
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {prevArticle.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
            {nextArticle ? (
              <Link
                href={`/news/${nextArticle.id}`}
                className="group flex-1 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors text-right"
              >
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1 justify-end">
                  Next Article
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {nextArticle.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all news
          </Link>
        </div>

        <div className="mt-16 text-center bg-card rounded-lg p-10 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Interested in learning more?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss how our drone solutions can address your industry challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </div>
  );
}
