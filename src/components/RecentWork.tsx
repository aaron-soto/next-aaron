import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const RecentWork = () => {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center gap-6">
        <h2
          className={cn(
            montserrat.className,
            "text-2xl font-extrabold text-neutral-800"
          )}
        >
          My Recent Work
        </h2>
        <p className="mb-4 md:mb-12 text-center">
          Here are some of my latest projects. Want to see more or have
          questions about a project?{" "}
          <Link href="/contact" className="text-[#4801ff]">
            Email me
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-[#4801ff] w-full relative h-[320px] border rounded-lg overflow-hidden group">
            <Image
              className="object-cover"
              src="/images/projects/case-study/thumbnail.png"
              alt="Case Study Project Thumbnail"
              fill
            />
            <div className="bg-[#4801ff] absolute inset-0 opacity-0 text-white text-lg gap-6 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center p-4 justify-center items-center">
              <p>Coffee shop website for popular YouTuber William Douglas</p>
              <Button
                variant="ghost"
                className="border-2 border-white flex gap-4"
                asChild
              >
                <Link href="https://casestudycoffeelounge.com" target="_blank">
                  View Website <ArrowRight size={24} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-[#4801ff] w-full relative h-[320px] border rounded-lg overflow-hidden group">
            <Image
              className="object-cover"
              src="/images/projects/purpose-after-sports/thumbnail.png"
              alt="Case Study Project Thumbnail"
              fill
            />
            <div className="bg-[#4801ff] absolute inset-0 opacity-0 text-white text-lg gap-6 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center p-4 justify-center items-center">
              <p>
                Website to support former athletes in their transition out of
                sports
              </p>
              <Button
                variant="ghost"
                className="border-2 border-white flex gap-4"
                asChild
              >
                <Link
                  href="https://purpose-after-sports.vercel.app/"
                  target="_blank"
                >
                  View Website <ArrowRight size={24} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
