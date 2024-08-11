import DesktopDemo from "@/components/DesktopDemo";
import InlineLink from "@/components/InlineLink";
import { Montserrat } from "next/font/google";
import NavigationBackButton from "@/components/NavigationBackButton";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const page = () => {
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
          Projects
        </h1>
      </div>

      <div className="flex flex-col gap-12 my-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-neutral-800">
            Case Study Coffee Lounge
          </h3>
          <p>
            A website for Youtuber and wood worker William Douglas that is local
            to me and started a coffee shop in Phoenix. We got in touch and have
            worked together on building the website the company needs.
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
          <h3 className="text-xl font-semibold text-neutral-800">
            Purpose After Sports
          </h3>
          <p>
            A website that provides resources and a community for former
            athletes by a mutual friend of mine. This website is a great
            resource for former athletes to maintain their fitness and
            well-being even after they are done playing sports.
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
    </main>
  );
};

export default page;
