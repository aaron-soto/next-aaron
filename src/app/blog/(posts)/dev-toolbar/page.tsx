import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const dateAdded = "August 21, 2024";

  return (
    <>
      <div className="w-full relative  min-h-[250px]">
        <div className="inset-0 bg-green-300/30 -z-10 pointer-events-none absolute"></div>
        <header className="mx-auto max-w-xl px-4 md:px-0 pb-4 flex flex-col h-full justify-end">
          <BackButton />
          <h1 className="text-3xl font-[500] mb-8 ">
            Supercharge Your Frontend Development with a Custom DevToolbar
          </h1>
          <div className="text-gray-500 text-sm">
            <p>By Aaron Soto</p>
            <p>{dateAdded}</p>
            <ul className="flex gap-2 mt-2 text-white">
              <li className="bg-black px-2 py-[2px] text-xs rounded">
                Goodies
              </li>
              <li className="bg-black px-2 py-[2px] text-xs rounded">
                Frontend
              </li>
            </ul>
          </div>
        </header>
      </div>
      <article className="max-w-xl mx-auto mb-16 mt-8 text-lg">
        <section>
          <p>
            Streamlining your development workflow can save you countless hours.
            One effective way to do this in{" "}
            <Link href="https://nextjs.org/docs" target="_blank">
              Next.js
            </Link>{" "}
            is by implementing a custom `DevToolbar`. This tool allows you to
            quickly add custom buttons that execute various development
            functions within your application. It can significantly enhance your
            productivity by providing immediate access to essential actions
            during the development process.
          </p>
          <p>
            In this post, we&apos;ll explore the concept of a DevToolbar, guide
            you through its implementation, and highlight how it can simplify
            your frontend development tasks.
          </p>
        </section>

        <section>
          <h2>What is a DevToolbar?</h2>
          <p>
            A DevToolbar is a custom component that sits on your screen,
            typically in a fixed position, and houses a collection of buttons.
            Each button is linked to a specific function that you might need
            while developing your application. These functions could include
            pre-filling forms with test data, toggling UI states, or simulating
            different user roles or scenarios.
          </p>
          <p>
            The purpose of a DevToolbar is to enable real-time interaction with
            your app&apos;s UI without needing to manually trigger these actions
            in your code or rely on external tools like the browser&apos;s
            developer console.
          </p>
        </section>

        <section>
          <h2>Benefits of Using a DevToolbar</h2>
          <ul>
            <li>
              <strong>Accelerated Development:</strong> Set up buttons to
              perform repetitive tasks instantly, like filling in test data or
              navigating to specific UI states.
            </li>
            <li>
              <strong>Improved Testing:</strong> Quickly test different states
              and scenarios of your UI, particularly for forms or complex
              components.
            </li>
            <li>
              <strong>Minimized Errors:</strong> Consistent actions reduce the
              likelihood of human error, leading to more reliable and{" "}
              <Link
                href="https://www.w3schools.com/js/js_best_practices.asp"
                target="_blank"
              >
                error-free code
              </Link>
              .
            </li>
            <li>
              <strong>Enhanced Team Collaboration:</strong> Share a common set
              of tools and testing states with your team, improving
              collaboration and consistency.
            </li>
          </ul>
        </section>

        <section>
          <h2>How to Implement a DevToolbar in Next.js</h2>

          <h3>1. Setting Up the Core DevToolbar Component</h3>
          <p>
            The first step is to create the core DevToolbar component, which
            will house all your custom buttons. This component is designed to be
            simple yet flexible, allowing you to add as many buttons as needed.
          </p>
          <SyntaxHighlighter language="typescript" style={codeStyle}>
            {`"use client";

import { Button } from "@/components/ui/button";
import React, { memo } from "react";
import { cn } from "@/lib/utils";

type DevButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

const DevButton = memo(({ children, onClick, className = "" }: DevButtonProps) => {
  return (
    <Button
      className={cn("rounded-none min-w-[75px]", className)}
      size="sm"
      variant="secondary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

type DevToolbarProps = {
  children: React.ReactNode;
};

const DevToolbar = ({ children }: DevToolbarProps) => {
  return (
    <div className="fixed top-[79px] flex flex-col border gap-2 right-4 p-2">
      {children}
    </div>
  );
};

export default DevToolbar;
export { DevButton };
`}
          </SyntaxHighlighter>
          <p>In this code, we have two main components:</p>
          <ul>
            <li>
              <strong>DevButton:</strong> A reusable button component that
              accepts children (the button label), an <code>onClick</code>{" "}
              handler (what the button should do), and optional styling classes.
            </li>
            <li>
              <strong>DevToolbar:</strong> A container for your buttons,
              positioned at the top right of your screen for easy access.
            </li>
          </ul>
        </section>

        <section>
          <h3>2. Integrating the DevToolbar into Your Components</h3>
          <p>
            After setting up the core DevToolbar component, integrate it into
            your application. Here&apos;s an example of how you might use it:
          </p>
          <SyntaxHighlighter language="typescript" style={codeStyle}>
            {`<DevToolbar>
  <DevButton onClick={() => reset({ email: "johndoe@gmail.com" })}>
    fill
  </DevButton>
  <DevButton onClick={() => reset({ email: "" })}>
    reset
  </DevButton>
  <DevButton
    className={cn(hasSubmittedEmail && "bg-green-500 hover:bg-green-600")}
    onClick={() => setHasSubmittedEmail(!hasSubmittedEmail)}
  >
    hasSubmittedEmail
  </DevButton>
  <DevButton
    className={cn(hasAccount && "bg-green-500 hover:bg-green-600")}
    onClick={() => setHasAccount(!hasAccount)}
  >
    hasAccount
  </DevButton>
</DevToolbar>
`}
          </SyntaxHighlighter>
          <p>
            In this example, the DevToolbar is used to quickly fill the email
            input with test data and reset the form. This is just one of many
            possible uses.
          </p>

          <figure>
            <Image
              src="/images/blog/testing/img-1.png"
              alt="DevToolbar in action"
              width={800}
              height={450}
              className=""
            />
            <figcaption>DevToolbar filling a form with test data</figcaption>
          </figure>

          <p>
            Pressing the `fill` button in the DevToolbar allows you to populate
            the form with data for quick testing. You can then click the `reset`
            button to quickly clear the form.
          </p>

          <figure>
            <Image
              src="/images/blog/testing/img-2.png"
              alt="DevToolbar resetting form"
              width={800}
              height={450}
              className=""
            />
            <figcaption>DevToolbar resetting the form</figcaption>
          </figure>

          <p>
            The DevToolbar is particularly useful when you need to change the UI
            by conditionally rendering elements. In this example, the component
            allows a user to submit their email. If there&apos;s an account with
            that email, it shows a password login; if not, it displays a sign-up
            form. Pressing the `hasSubmittedEmail` button changes the button
            color, allowing you to quickly see and set the current state to true
            for coding purposes. Then, you can click the `hasAccount` button to
            simulate whether the user already has an account, showing the
            appropriate UI.
          </p>

          <figure>
            <Image
              src="/images/blog/testing/img-3.png"
              alt="DevToolbar testing UI states"
              width={800}
              height={450}
              className=""
            />
            <figcaption>
              Testing different UI states with the DevToolbar
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/images/blog/testing/img-4.png"
              alt="DevToolbar testing UI states"
              width={800}
              height={450}
              className=""
            />
            <figcaption>
              Testing different UI states with the DevToolbar
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>How a DevToolbar Can Benefit Other Developers</h2>
          <p>
            Here are a few scenarios where a DevToolbar can be particularly
            useful:
          </p>
          <ul>
            <li>
              <strong>Prefilling Forms:</strong> When working on forms,
              especially those with multiple fields or validation rules, a
              button to prefill them with test data can save a lot of time.
            </li>
            <li>
              <strong>Toggling UI States:</strong> If your app has different UI
              states (e.g., loading, error, success), a DevToolbar button can
              toggle these states, letting you test various scenarios with a
              single click.
            </li>
            <li>
              <strong>Simulating User Roles:</strong> If your app involves
              different user roles (e.g., admin, user, guest), you can create
              buttons to switch between these roles and see how the UI responds.
            </li>
            <li>
              <strong>Testing API Responses:</strong> You can create buttons to
              simulate different API responses or errors, ensuring your app
              handles them correctly without waiting for real API responses.
            </li>
          </ul>
        </section>

        <footer>
          <h2>Conclusion</h2>
          <p>
            Adding a DevToolbar to your Next.js development process can greatly
            enhance your workflow. It allows you to interact with your
            application in real-time, making testing and debugging faster and
            more efficient. This concept isn&apos;t limited to
            Next.js—developers working with other frameworks or plain React can
            adopt similar approaches.
          </p>
          <p>
            Experiment with creating your own DevToolbar and discover how it can
            improve your development experience. Once you start using it,
            you&apos;ll wonder how you ever developed without it.
          </p>
        </footer>

        <section>
          <h2>Further Reading</h2>
          <p>
            If you&apos;re interested in exploring more about DevToolbars and
            how they can be implemented in other frameworks, check out these
            resources:
          </p>
          <ul>
            <li>
              <Link
                href="https://reactjs.org/docs/hooks-reference.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official React Hooks Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Guide - MDN Web Docs
              </Link>
            </li>
            <li>
              <Link
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Official Documentation
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default BlogPost;
