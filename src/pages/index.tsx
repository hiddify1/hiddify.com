import React, { HTMLProps, ReactElement, ReactNode } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

import AndroidSVG from "@site/static/icons/Android.svg";
import LinuxSVG from "@site/static/icons/linux.svg";
import MacosSVG from "@site/static/icons/MacOS-Finder.svg";
import WindowsSVG from "@site/static/icons/microsoft-windows.svg";
import AppleSVG from "@site/static/icons/Apple.svg";
import UbuntuSVG from "@site/static/icons/ubuntu.svg";
import MinusSVG from "@site/static/icons/Minus.svg";
import PlusSVG from "@site/static/icons/Plus.svg";

import Container from "../components/container";

const stats = [
  { id: 1, name: "Panel download", value: "8,000+" },
  { id: 2, name: "App Download", value: "3%" },
  { id: 3, name: "Advantage", value: "99.9%" },
  { id: 3, name: "Contributors", value: "199" },
];

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function Hero() {
  return (
    <header>
      <Container className="my-36 flex flex-col items-center lg:my-52 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
          <Translate id="homepage.main_heading_title" />
        </h1>
        <h4 className="mx-auto mt-4 max-w-2xl text-center text-xl font-medium tracking-wide text-gray-700 rtl:tracking-normal dark:text-gray-200">
          <Translate id="homepage.main_heading_subtitle" />
        </h4>
      </Container>
    </header>
  );
}

type IconWrapperProps = {
  title: string;
  children: ReactElement;
};
const IconWrapper = ({ title, children }: IconWrapperProps) => {
  return (
    <div className="flex flex-col items-center transition-colors hover:text-indigo-600 dark:hover:text-indigo-500">
      {children}
      <span className="mt-1.5 select-none font-normal">{title}</span>
    </div>
  );
};

type ButtonProps = HTMLProps<HTMLButtonElement>;
const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={twMerge(
        "bg-indigo-600  hover:bg-indigo-500 focus-visible:outline-indigo-600 active:bg-indigo-600/80",
        "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "rounded-md border-none px-8 py-3 text-base font-semibold text-white shadow-sm ",
        className,
      )}
    />
  );
};

function HiddifyClient() {
  return (
    <Sections
      title="Hiddify Client"
      subtitle="A Client for every environment"
      footer={
        <>
          <Link tabIndex={-1} to="https://app.hiddify.com">
            <Button>Download</Button>
          </Link>
          <Link tabIndex={-1} to="#">
            <Button>Read More</Button>
          </Link>
        </>
      }
    >
      <>
        <div className="mt-6 flex w-full justify-between gap-6 sm:justify-center sm:gap-10 lg:gap-10">
          <IconWrapper title="Android">
            <AndroidSVG className="h-12 w-12" aria-hidden="true" />
          </IconWrapper>
          <IconWrapper title="IOS">
            <AppleSVG className="h-12 w-12" aria-hidden="true" />
          </IconWrapper>
          <IconWrapper title="Windows">
            <WindowsSVG className="h-12 w-12" aria-hidden="true" />
          </IconWrapper>
          <IconWrapper title="Linux">
            <LinuxSVG className="h-12 w-12" aria-hidden="true" />
          </IconWrapper>
          <IconWrapper title="MacOS">
            <MacosSVG className="h-12 w-12" aria-hidden="true" />
          </IconWrapper>
        </div>

        <h4 className="mt-10 text-center text-xl font-normal text-gray-800 dark:text-gray-300 lg:text-start">
          Uses latest protocols:
          <br />
          <span className="mt-2 inline-block">Hysteria2, TUICv5, SSH, Reality, VMess and more</span>
        </h4>
      </>
    </Sections>
  );
}

type SectionsProps = {
  title: string;
  subtitle: string;
  footer?: ReactElement;
  children?: ReactElement;
};
function Sections({ title, subtitle, footer, children }: SectionsProps) {
  return (
    <section className="my-24 lg:my-40">
      <Container className="flex flex-col lg:flex-row lg:gap-2">
        <div className="flex-1 shrink-0 grow self-center lg:rounded-md">
          <div className="relative ">
            <img
              className=" relative max-h-96 object-contain lg:max-h-fit"
              src={useBaseUrl("/img/landing/hiddify-client.png")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-4 lg:items-start lg:ps-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-2xl text-gray-800 dark:text-gray-300">{subtitle}</p>
          {children}

          {footer ? (
            <div className="mt-10 flex w-full justify-between gap-10 sm:w-auto sm:gap-32 lg:gap-12">
              {footer}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function HiddifyServer() {
  return (
    <Sections
      title="Hiddify Manager"
      subtitle="Build your own VPN Server"
      footer={
        <>
          <Link className={"hover:no-underline"} tabIndex={-1} to="#">
            <Button className="flex items-center gap-2">
              Set UP <UbuntuSVG />
            </Button>
          </Link>
          <Link tabIndex={-1} to="#">
            <Button>Read More</Button>
          </Link>
        </>
      }
    >
      <>
        <p className="text-2xl text-gray-800 dark:text-gray-300">
          Provide VPN services for your group
        </p>

        <h4 className="mt-8 text-center text-xl font-normal text-gray-800 dark:text-gray-300 lg:text-start">
          Support latest protocols:
          <br />
          <span className="mt-2 inline-block">Hysteria2, TUICv5, SSH, Reality, VMess and more</span>
        </h4>
      </>
    </Sections>
  );
}

function WhatIsHiddify() {
  return (
    <div className="bg-indigo-700">
      <Container className="py-24 sm:py-32">
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What is Hiddify?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-start text-lg leading-8 text-indigo-100">
              Hiddify-Manager is a powerful and professional anti-censorship toolbox, which is a
              multi-user panel with an effortless installation and supporting more than 20 protocols
              including Reality and Telegram proxy to circumvent filtering. It's optimized for
              censorship circumvention in China, Russia and Iran and Recommended by Xray. It's a
              great replacement of X-Ul panel.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Impact() {
  return (
    <section className="border-0 border-t-2 border-solid border-t-indigo-50 py-24 dark:border-t-indigo-300/10 lg:py-32 ">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Hiddify impact in numbers
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1 bg-gray-400/20 p-8">
                <dt className="text-base font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  {stat.name}
                </dt>
                <dd className="order-first m-0 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <Container>
      <div className="mx-auto max-w-7xl  py-24 sm:py-32  lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-50">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900 dark:divide-gray-400">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="box-border flex w-full  items-start justify-between border-0 bg-transparent p-0 text-left text-inherit ">
                        <span className="text-lg/7 font-medium ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSVG className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSVG className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>

                    <Disclosure.Panel as="dd" className="m-0 mt-2 pr-12">
                      <p className="text-base/7 text-gray-700 dark:text-gray-200">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="dark:bg-gray-950">
        <Hero />
        <HiddifyClient />
        <HiddifyServer />
        <Impact />
        <WhatIsHiddify />
        <FAQ />
      </main>
    </Layout>
  );
}
