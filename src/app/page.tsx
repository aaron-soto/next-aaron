import { Brain, MessageCircleCode } from "lucide-react";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center my-16 md:my-24">
          <h1
            className={cn(
              montserrat.className,
              "text-[#4801FF] font-extrabold text-4xl mb-4"
            )}
          >
            Frontend Developer & Lifelong Learner
          </h1>
          <p>
            I love to develop websites that are both visually appealing and user
            friendly.
          </p>

          <Image
            className="rounded-full mt-16 hover:shadow-lg transition-all hover:scale-105 duration-200"
            src="/images/aaron-headshot.png"
            alt="aaron headshot"
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className="w-full bg-[#4801FF] text-lg text-white pt-16 md:pt-24 pb-32">
        <div className="container">
          <div className="flex flex-col justify-center items-center text-center">
            <h2
              className={cn(
                montserrat.className,
                "text-2xl font-semibold mb-4"
              )}
            >
              Hi, I am Aaron. Nice to meet you.
            </h2>

            <p className="mb-4">
              I’m an ex Army Ranger turned passionate frontend developer and
              designer who is always eager to learn. Keeping up with the latest
              tech trends is my forte. Currently, I’m on the lookout for a new
              opportunity as a frontend developer.
            </p>
            <p className="">
              With experience as a consultant, I’ve developed and designed
              websites using a variety of technologies, including Next.js,
              Angular, Node.js, and .NET. My adaptability and quick learning
              ability have been key in mastering new tech stacks when needed.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-16">
          <div className="border rounded w-full px-4 py-8 md:py-16 flex flex-col items-center text-center bg-white">
            <div className="bg-[#ff6e41] text-white p-6 rounded-full mb-4 flex justify-center items-center">
              <MessageCircleCode
                size={56}
                absoluteStrokeWidth
                strokeWidth={3.5}
              />
            </div>
            <h3 className={cn(montserrat.className, "font-bold text-xl mb-4")}>
              Frontend Developer
            </h3>
            <p>
              I live to code things from scratch, and develop websites that are
              engaging and user-friendly.
            </p>

            <div className="flex flex-col items center gap-2">
              <span className="text-[#4801ff] mt-8">Languages I speak:</span>
              <span>HTML, CSS, SCSS, GIT, JavaScript, Typescipt</span>
            </div>
            <div className="flex flex-col items center gap-2">
              <span className="text-[#4801ff] mt-8">Dev Tools:</span>
              <ul className="flex flex-col items center gap-2">
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
                <li>Github</li>
                <li>VSCode</li>
                <li>Jira</li>
              </ul>
            </div>
          </div>
          <div className="border rounded w-full px-4 py-16 flex flex-col items-center text-center bg-white">
            <div className="bg-[#ff6e41] text-white p-6 rounded-full mb-4 flex justify-center items-center">
              <Brain size={56} absoluteStrokeWidth strokeWidth={3.5} />
            </div>
            <h3 className={cn(montserrat.className, "font-bold text-xl mb-4")}>
              Lifelong Learner
            </h3>
            <p>
              I am always eager to learn new technologies and keep up with the
              latest tech trends.
            </p>

            <div className="flex flex-col items center gap-2">
              <span className="text-[#4801ff] mt-8">
                Topics I stay up to date on:
              </span>
              <span>NextJS, UI/UX trends and best practices</span>
            </div>
            <div className="flex flex-col items center gap-2">
              <span className="text-[#4801ff] mt-8">What I use:</span>
              <ul className="flex flex-col items center gap-2">
                <li>daily.dev</li>
                <li>reddit</li>
                <li>Medium</li>
                <li>Dev.to</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <RecentWork />

      <Testimonials />
    </>
  );
}
