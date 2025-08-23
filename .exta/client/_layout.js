// pages/_layout.tsx
import { Link } from "exta/components";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function layout_default({ children }) {
  return jsxs(Fragment, { children: [
    jsxs("ul", { children: [
      jsx("li", { children: jsx(Link, { href: "/", children: "Main" }) }),
      jsx("li", { children: jsx(Link, { href: "/world", children: "Greet to world!" }) })
    ] }),
    children
  ] });
}
export {
  layout_default as _page
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcGFnZXMvX2xheW91dC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IExpbmsgfSBmcm9tIFwiZXh0YS9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NYWluPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JsZFwiPkdyZWV0IHRvIHdvcmxkITwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLFlBQVk7QUFJakIsbUJBR00sS0FGSixZQURGO0FBRlcsU0FBUixlQUFrQixFQUFFLFNBQVMsR0FBRztBQUNyQyxTQUNFLGlCQUNFO0FBQUEsU0FBQyxRQUNDO0FBQUEsVUFBQyxRQUNDLGNBQUMsUUFBSyxNQUFLLEtBQUksa0JBQUksR0FDckI7QUFBQSxNQUNBLElBQUMsUUFDQyxjQUFDLFFBQUssTUFBSyxVQUFTLDZCQUFlLEdBQ3JDO0FBQUEsT0FDRjtBQUFBLElBRUM7QUFBQSxLQUNIO0FBRUo7IiwKICAibmFtZXMiOiBbXQp9Cg==
