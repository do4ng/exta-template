// pages/[name].tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function getStaticParams() {
  return [{ name: "world" }];
}
function getStaticProps({ params }) {
  return {
    message: `Hello ${params.name}`
  };
}
export {
  getStaticParams,
  getStaticProps
};
