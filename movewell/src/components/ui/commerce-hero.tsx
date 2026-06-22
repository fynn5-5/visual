"use client";

import { ArrowUpRight, Menu, Search, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useCart } from "@/components/CartProvider";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Faszienrollen",
    image: "https://images.unsplash.com/photo-1620188526357-ff08e03da266?w=400&h=400&fit=crop&q=80",
    href: "/products?category=foam-rollers",
  },
  {
    title: "Handschuhe",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&q=80",
    href: "/products?category=gloves-wraps",
  },
  {
    title: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&q=80",
    href: "/products?category=yoga-pilates",
  },
  {
    title: "Alle Produkte",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&q=80",
    href: "/products",
  },
];

const navigation = [
  { name: "Shop", href: "/products" },
  { name: "Faszienrollen", href: "/products?category=foam-rollers" },
  { name: "Handschuhe & Wraps", href: "/products?category=gloves-wraps" },
  { name: "Yoga & Pilates", href: "/products?category=yoga-pilates" },
];

export function CommerceHero() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl">
      <div className="mt-6 bg-accent/50 rounded-2xl relative">
        <header className="flex items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
            <Link href="/" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              MOVEWELL
            </Link>

            <nav className="hidden lg:flex items-center justify-between w-full">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="cursor-pointer relative group hover:text-primary transition-colors"
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button variant="ghost" size="icon" className="cursor-pointer relative group hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer relative group hover:text-primary transition-colors"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBasket className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </nav>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
              >
                <SheetHeader className="p-6 text-left border-b border-border/50">
                  <SheetTitle className="flex items-center justify-between">
                    <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      MOVEWELL
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 space-y-1">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/50 hover:text-primary transition-colors"
                      asChild
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="p-6 flex flex-col gap-4">
                  <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors">
                    <Search className="w-4 h-4" />
                    Suche
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors relative"
                    onClick={() => setIsOpen(true)}
                  >
                    <ShoppingBasket className="w-4 h-4" />
                    Warenkorb
                    {totalItems > 0 && (
                      <span className="absolute right-3 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
            <Button
              variant="secondary"
              className="cursor-pointer bg-primary-foreground p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => setIsOpen(true)}
            >
              <span className="pl-4 py-2 text-sm font-medium">Warenkorb</span>
              <div className="rounded-full flex items-center justify-center m-auto bg-background w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBasket className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </header>

        <motion.section
          className="w-full px-4 py-12 sm:py-20 lg:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Dein Fitness-Equipment
              </span>
              <br />
              <span className="text-foreground">
                für bessere Performance.
              </span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Hochwertige Faszienrollen, Trainingshandschuhe und Yoga-Zubehör —
              alles was du brauchst, um dich besser zu bewegen.
            </motion.p>
          </div>
        </motion.section>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto mt-8 sm:mt-12 px-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative bg-muted/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 min-h-[180px] sm:min-h-[300px] w-full overflow-hidden transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link href={category.href} className="absolute inset-0 z-20">
              <h2 className="text-center text-base sm:text-2xl md:text-3xl lg:text-[clamp(1.5rem,4vw,2.5rem)] font-bold relative z-10 text-primary my-1 sm:my-4 group-hover:text-primary/90 transition-colors duration-300">
                {category.title}
              </h2>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={200}
                  height={200}
                  className="w-full max-w-[min(40vw,200px)] sm:max-w-[min(30vw,180px)] md:max-w-[min(25vw,160px)] lg:max-w-[min(20vw,140px)] h-auto object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 right-0 w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-background/95 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10 border-l border-t border-border/50">
                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
