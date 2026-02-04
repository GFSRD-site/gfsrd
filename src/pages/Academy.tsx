import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AcademySidebar } from "@/components/AcademySidebar";
import { ArticleContent } from "@/components/ArticleContent";
import academyData from "@/data/academyArticles.json";

export default function Academy() {
  const [activeArticleId, setActiveArticleId] = useState(academyData.articles[0].id);

  const activeArticle = academyData.articles.find(
    (article) => article.id === activeArticleId
  ) || academyData.articles[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <Link to="/">
            <span className="font-playfair text-lg font-bold text-primary">GFSRD</span>
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AcademySidebar
          articles={academyData.articles}
          activeArticleId={activeArticleId}
          onSelectArticle={setActiveArticleId}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-57px)] p-4 md:p-8 md:ml-0">
          <ArticleContent article={activeArticle} />
        </main>

      </div>
    </div>
  );
}