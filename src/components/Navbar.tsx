"use client";

import { Bebas_Neue, Montserrat } from "next/font/google";
import { Menu, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// const NavLink = ({ href, label }: any) => {
//   return (
//     <Link
//       className="hover:underline underline-offset-2 hover:text-[#4801FF]"
//       href={href}
//     >
//       {label}
//     </Link>
//   );
// };

// function ResumeLink() {
//   return (
//     <Link
//       href="/files/resume.pdf"
//       passHref
//       legacyBehavior
//       className="hover:underline underline-offset-2 hover:text-[#4801FF]"
//     >
//       <a target="_blank" rel="noopener noreferrer">
//         My Resume
//       </a>
//     </Link>
//   );
// }

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-100 bg-white py-4">
//       <div className="container flex justify-between items-center">
//         <Link href="/">
//           <span
//             className={cn(
//               montserrat.className,
//               "text-xl font-black text-[#ff6e41]"
//             )}
//           >
//             Aaron Soto
//           </span>
//         </Link>
//         <div className="flex h-full  gap-4">
//           <NavLink href="/" label="Home" />
//           <NavLink href="/blog" label="Blog" />
//           <NavLink href="/contact" label="Contact" />
//           <ResumeLink />
//         </div>
//       </div>
//     </div>
//   );
// };

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export interface NavLinkProps {
  href: string;
  label: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink = ({ href, label, setIsOpen }: NavLinkProps) => {
  const currentPath = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const normalizePath = (path: string) => path.replace(/\/$/, "");
  const isActive = normalizePath(currentPath) === normalizePath(href);

  if (isMobile) {
    return (
      <Button variant="link" asChild className="text-base font-semibold">
        <Link
          href={href}
          onClick={() => setIsOpen && setIsOpen(false)}
          className={cn(
            "decoration-2 transition-all tracking-wider duration-200",
            isActive && "!text-red-500 underline-offset-2 underline ",
            isMobile && "!text-3xl",
            bebasNeue.className
          )}
        >
          {label}
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="link" asChild className="">
      <Link
        href={href}
        onClick={() => setIsOpen && setIsOpen(false)}
        className={cn(
          "decoration-2 transition-all text-base duration-200",
          isActive && "!text-[#b14626] underline-offset-2 underline "
        )}
      >
        {label}
      </Link>
    </Button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if ("serviceWorker" in navigator && !navigator.serviceWorker.controller) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  const slideInVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.2,
      },
    }),
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full border-b h-[65px] sticky top-0 navbar left-0 right-0 z-40 py-4 px-0 bg-white/60 backdrop-blur-lg transition-all duration-200">
      <div className="container h-full flex justify-between items-center">
        <Link
          href="/"
          className="relative h-full text-xl font-semibold flex items-center"
        >
          Aaron Soto
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 mr-auto ml-8">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              setIsOpen={setIsOpen}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>

        <div className="hidden md:flex">
          <Button
            asChild
            size="sm"
            className="rounded bg-[#4801FF] hover:bg-[#1e38de] text-white"
          >
            <a
              href="/files/resume.pdf"
              target="_blank"
              className="hover:underline underline-offset-2"
            >
              My Resume
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet modal={false} open={isOpen} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="relative ml-4 aspect-square">
                <Menu className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="py-8 flex flex-col justify-start px-2.5 min-w-[350px] max-w-[70vw]"
              autoFocus={false}
            >
              <div className="flex justify-between items-center mb-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-sans font-black pl-4 flex items-center"
                >
                  Aaron Soto
                </Link>
              </div>
              <nav className="flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-4 mt-4 space-y-4">
                  {links.map((link, idx) => (
                    <motion.div
                      key={idx}
                      variants={slideInVariants}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                    >
                      <NavLink
                        setIsOpen={setIsOpen}
                        href={link.href}
                        label={link.label}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex w-full gap-4">
                  <motion.div
                    variants={slideInVariants}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    className="w-full"
                  >
                    <Button
                      asChild
                      className="w-full text-center px-6 py-2 text-base rounded bg-orange-500 hover:bg-orange-400 text-white"
                    >
                      <Link href="/contact">Contact</Link>
                    </Button>
                  </motion.div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
