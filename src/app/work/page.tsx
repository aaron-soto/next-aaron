import InlineLink from "@/components/InlineLink";
import { Montserrat } from "next/font/google";
import NavigationBackButton from "@/components/NavigationBackButton";
import React from "react";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const Page = () => {
  return (
    <main className="container flex flex-col gap-8 mb-16 text-neutral-500">
      <div className="flex gap-4 items-center">
        <NavigationBackButton />
        <h1
          className={cn(
            "text-3xl font-bold text-neutral-800",
            montserrat.className
          )}
        >
          Work
        </h1>
      </div>

      <p>
        After graduating high school in 2013, I joined the Army and went through
        the necessary training to become an Army Ranger. Following my military
        service, I worked as a carpenter building custom toy haulers and RVs. I
        soon realized I wanted a more challenging and rewarding career, so I
        began learning how to code. Starting with HTML and CSS, I quickly moved
        on to JavaScript and React. Once I felt confident in my skills, I
        enrolled in{" "}
        <InlineLink
          target="_blank"
          href="https://www.codingdojo.com/"
          label="Coding Dojo Bootcamp"
        />
        . I&apos;ve been working as a developer for the past three years,
        contributing to a variety of projects ranging from small websites to
        large enterprise applications. I&apos;m always eager to learn and keep
        up with the latest tech trends.
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-neutral-800">
              Senior Developer -{" "}
              <InlineLink href="https://allata.com" label="Allata" />
            </h2>
            <span className="text-sm font-normal">2020 - 2024</span>
          </div>

          <p>
            At Allata, I worked on multiple projects that often lasted only a
            few months. I developed reusable components for React and Angular
            applications and created documentation to help future developers
            understand and use the new design system.
          </p>

          <ul className="flex flex-wrap gap-2 text-sm">
            <li>Angular</li>
            <li>.NET</li>
            <li>MySQL</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-neutral-800">
              Front End Engineer -{" "}
              <InlineLink
                href="https://ayezeewebdesigns.com"
                label="Freelance"
              />
            </h2>
            <span className="text-sm font-normal">2023 - Current</span>
          </div>
          <p>
            I worked with clients to build and maintain websites for their
            businesses, focusing on improving their workflows and online
            presence. By collaborating closely with clients, I ensured that the
            websites met their specific needs and streamlined their operations.
          </p>
          <p>
            One example involved a client who needed a website to showcase
            upcoming events at their venue. To simplify the process, I set up a
            Google Docs template that they could fill out and import to the
            website. This approach allowed events to be automatically uploaded
            to the site without requiring the client to learn a new system.
            Instead, they could use a tool they were already familiar with to
            manage their data efficiently.
          </p>

          <ul className="flex flex-wrap gap-2 text-sm">
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Page;
