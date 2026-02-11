import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import mediaCoverageData from "@/data/mediaCoverage.json";

export default function MediaCoverage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <Link to="/">
            <span className="font-playfair text-lg font-bold text-primary">GFSRD</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Newspaper className="h-8 w-8" />
          </div>
          <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground">
            Media Coverage
          </h1>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-10 border border-border shadow-sm">
          <ul className="space-y-2">
            {mediaCoverageData.articles.map((article, i) => (
              <motion.li
                key={article.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <a
                  href={article.url}
                  className="text-[#108615]  hover:underline text-sm md:text-base"
                >
                  • {article.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
