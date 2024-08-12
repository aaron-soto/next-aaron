import DesktopDemo from "@/components/DesktopDemo";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="container flex flex-col gap-4 mb-16 text-muted-foreground">
      <DesktopDemo className="mt-4" src="/images/screenshots/case-study.png" />
      <p className="text-muted-foreground text-sm">July 2024 - Aaron Soto</p>
      <h1 className="text-3xl font-bold text-white">
        Case Study Coffee Lounge
      </h1>

      <p>
        I had the opportunity to collaborate with renowned woodworker and
        YouTuber
        <InlineLink
          href="https://www.youtube.com/@WilliamDouglasCo"
          label="William Douglas"
        />
        on creating a website for his local coffee shop. Our goal was to design
        a site that not only attracted new customers but also streamlined the
        day-to-day operations of his business.
      </p>

      <p>
        The website was crafted using Next.js and Tailwind CSS. Next.js was
        chosen for its powerful server-side rendering capabilities and versatile
        app router setup, ensuring a fast and smooth user experience. Tailwind
        CSS was used for its flexible utility classes, allowing for rapid
        styling and customization of components.
      </p>

      <p>
        We adopted a mobile-first approach to make sure the site is accessible
        on all devices, using Flexbox and Grid layouts to achieve a responsive
        design. This ensures the website looks great whether viewed on a
        smartphone, tablet, or desktop.
      </p>

      <p>
        To empower William and his team, I developed an admin dashboard that
        allows them to log in and update the site&apos;s content easily. This
        feature reduces the need for frequent updates on my end and keeps the
        site fresh. In the image below, you can see how the top bar message
        dynamically updates based on the input field&apos;s content. If left
        empty, it automatically cycles through default business details like
        address, phone number, and email.
      </p>

      <div className="image-wrapper mb-2">
        <Image
          src="/images/projects/case-study/topbar-content.png"
          alt="Case Study Coffee Lounge"
          layout="responsive"
          width={1600}
          height={900}
          objectFit="cover"
          className="rounded-lg"
        />
        <p className="text-muted-foreground text-center mt-2 text-sm">
          Dynamicly editable content
        </p>
      </div>

      <p>
        I also implemented an events management system, enabling William to
        showcase upcoming events at the coffee shop. The admin panel includes
        features to toggle event visibility on the website using eye icons, as
        shown below. William can add, edit, or delete events, and thanks to a
        Google Sheets integration, he can bulk upload events without manually
        entering each one.
      </p>
      <div className="image-wrapper mb-2">
        <Image
          src="/images/projects/case-study/events-admin.png"
          alt="Case Study Coffee Lounge"
          layout="responsive"
          width={1600}
          height={900}
          objectFit="cover"
          className="rounded-lg"
        />
        <p className="text-muted-foreground text-center mt-2 text-sm">
          Admin panel for managing events
        </p>
      </div>
      <p>
        Another key feature is the form submissions dashboard, where William can
        view and export data from contact forms, newsletter sign-ups, and venue
        requests. This helps him track customer interest and tailor his
        marketing efforts accordingly.
      </p>

      <p>
        This project highlights my ability to build functional, user-friendly
        websites that enhance business operations while delivering a seamless
        user experience. The combination of technical skills and collaborative
        effort made this project a success, and I look forward to bringing the
        same level of dedication and expertise to future projects.
      </p>
    </main>
  );
};

export default page;
