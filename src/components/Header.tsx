import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/gfsrd-logo.png";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Academy", href: "/academy", isRoute: true },
  { name: "Media Coverage", href: "/media-coverage"},
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
              <img
                src={logo}
                alt="GFSRD Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-display text-lg font-bold transition-colors duration-300 ${isScrolled
                    ? "text-[oklch(52.7%_0.154_150.069)]"
                    : "text-[oklch(97.1%_0.013_17.38)]"
                  }`}
              >
                GFSRD
              </span>

              <span className="block text-xs text-[oklch(76.8%_0.233_130.85)]">
                Sustainable Rural Development
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) =>
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="px-4 py-2 text-m font-medium text-[oklch(76.8%_0.233_130.85)] hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-[oklch(89.7%_0.196_126.665)]">
              EN <ChevronDown className="ml-1 w-3 h-3" />
            </Button>
            <Button variant="hero">Join Us</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block py-3 text-foreground font-medium border-b border-border/50 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button variant="hero" className="w-full mt-4">
                Join Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
