import React from "react";

import { useIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import { ChevronRightIcon } from "@heroicons/react/20/solid";


const ExampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

export default function Hero() {
    const intl = useIntl();
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-orange-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                {/* <img
                  className="h-11"
                  src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                  alt="Your Company"
                />  */}
                {/* what's new - latest  */}
                <div className="">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-orange-400/10 px-3 py-1 text-sm font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-400/10">
                      {intl.formatMessage({ id: "whats-new"})}
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <IntlContextConsumer>
                    {({ language: currentLocale }) => {
                      if (currentLocale == "en") {
                        return "We're renovating...";
                      } else {
                        return "Радови у току...";
                      }
                    }}
                  </IntlContextConsumer>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <IntlContextConsumer>
                    {({ language: currentLocale }) => {
                      if (currentLocale == "en") {
                        return "Our old website was quite old. Not that we're trying to be ageist about it. But it was high time to spruce things up. We're working on it, and we'll be back soon.";
                      } else {
                        return "Мада не волимо да будемо ејџисти, морамо признати да је наш стари сајт баш оматорио. Дошло је крајње време за велико спремање. Видимо се ускоро.";
                      }
                    }}
                  </IntlContextConsumer>
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                  >
                    {intl.formatMessage({ id: "contact" })}
                  </a>
                  <a
                    href="https://github.com/BCDH"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {intl.formatMessage({ id: "view-bcdh-on-github" })}{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-orange-400/10 ring-1 ring-orange-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-orange-400 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-orange-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6">
                        {/* Your code example */}
                         {/* <Highlight language="jsx" code={ExampleCode} theme={themes.dracula}></Highlight> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
