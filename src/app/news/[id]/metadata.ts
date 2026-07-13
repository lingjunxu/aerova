import { NEWS } from "@/lib/news"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const articleId = params.id
  const article = NEWS.find((a) => a.id === articleId)
  
  if (!article) {
    return {
      title: "News Article Not Found | AEROVA",
      description: "The news article you are looking for does not exist.",
    }
  }
  
  return {
    title: `${article.title} | AEROVA News`,
    description: article.summary,
    keywords: ["drone news", "UAV technology", "low-altitude economy", ...article.title.toLowerCase().split(" ").filter(w => w.length > 3)],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  }
}
