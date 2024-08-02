import DesktopDemo from "@/components/DesktopDemo";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="container flex flex-col gap-4 mb-16">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="flex flex-col gap-12 my-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Case Study Coffee Lounge</h3>
          <p>
            A website for a local coffee shop in Phoenix, Arizona.{" "}
            <Link
              href="/projects/case-study"
              className="underline hover:no-underline text-indigo-500"
            >
              Learn more about the project here.
            </Link>
          </p>
          <DesktopDemo
            className="mt-4"
            src="/images/screenshots/case-study.png"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Purpose After Sports</h3>
          <p>
            A website for ex atheletes to stay fit.{" "}
            <Link
              href="/projects/purpose-after-sports"
              className="underline hover:no-underline text-indigo-500"
            >
              Learn more about the project here.
            </Link>
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
