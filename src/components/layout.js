import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Nav from "./nav";
import Hero from "./heroes/coded"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
  query SiteInfoQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
  `);
  const { title, menuLinks } = data.site.siteMetadata;
  return (
    <>
      {/*
    This example requires updating your template:
    
    ```
    <html class="h-full">
    <body class="h-full">
    ```
  */}
      <div className="min-h-full">
        <Nav location={location || ""} title={title} menuLinks={menuLinks} />

        <div>{location == "home" ? <Hero></Hero> : ""}</div>

        <div className="container pt-10 px-10 flex flex-col min-h-screen min-w-full max-w-full">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                DASHB
              </h1>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Layout