import DesktopDemo from "@/components/DesktopDemo";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className="container -mt-4 md:mt-0">
        <h1 className={cn("text-3xl font-bold mb-4", montserrat.className)}>
          Hello, I’m <span className="text-indigo-500">Aaron Soto</span>
        </h1>
        <div className="w-full h-[40vh] md:h-[600px] mb-4 rounded-lg relative overflow-hidden group">
          <Image
            src="/images/aaronsoto.jpg"
            className="  group-hover:scale-105 transition-transform duration-300"
            alt="Aaron Soto"
            fill
            objectFit="cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          ></Image>
        </div>
        <p className="text-muted-foreground">
          I’m an ex Army Ranger turned passionate frontend developer and
          designer who is always eager to learn. Keeping up with the latest tech
          trends is my forte. Currently, I’m on the lookout for a new
          opportunity as a frontend developer.
        </p>
        <p className="text-muted-foreground">
          With experience as a consultant, I’ve developed and designed websites
          using a variety of technologies, including Next.js, Angular, Node.js,
          and .NET. My adaptability and quick learning ability have been key in
          mastering new tech stacks when needed.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Latest Projects</h2>
        <p className="text-muted-foreground">
          Here are my two latest projects, both built using Next.js 14. The App
          Router configuration in Next.js allowed me to efficiently develop
          client-side components and manage server-side rendering for enhanced
          performance.
        </p>

        <div className="flex flex-col gap-12 my-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">
              Case Study Coffee Lounge
            </h3>
            <p className="text-muted-foreground">
              I created a dynamic website for a local coffee shop in Phoenix,
              Arizona, helping them to enhance their online presence and
              streamline business operations.{" "}
              <InlineLink
                href="/projects/case-study"
                label="Learn more about the project here."
              />
            </p>
            <DesktopDemo
              className="mt-4"
              src="/images/screenshots/case-study.png"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Purpose After Sports</h3>
            <p className="text-muted-foreground">
              This website provides resources and a community for former
              athletes to maintain their fitness and well-being.{" "}
              <InlineLink
                href="/projects/purpose-after-sports"
                label="Learn more about the project here."
              />
            </p>
            <DesktopDemo
              className="mt-4"
              src="/images/screenshots/purpose-after-sports.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
