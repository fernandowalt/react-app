import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/components/pages/NoLazy";



// import {
//   LazyPage1,
//   LazyPage2,
//   LazyPage3,
// } from "../01-lazyload/components/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"
    )
);
// const Lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyPage2"*/ "../01-lazyload/components/pages/LazyPage2"
//     )
// );
// const Lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyPage3"*/ "../01-lazyload/components/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  }

];
