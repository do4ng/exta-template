// pages/[params].tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function params_default({ params }) {
  return jsx(Fragment, { children: jsxs("h1", { children: [
    "Hello, ",
    params.params,
    "!"
  ] }) });
}
export {
  params_default as _page
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcGFnZXMvJTVCcGFyYW1zJTVELnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgcGFyYW1zIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkhlbGxvLCB7cGFyYW1zLnBhcmFtc30hPC9oMT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFSSx3QkFDRSxZQURGO0FBRlcsU0FBUixlQUFrQixFQUFFLE9BQU8sR0FBRztBQUNuQyxTQUNFLGdCQUNFLGVBQUMsUUFBRztBQUFBO0FBQUEsSUFBUSxPQUFPO0FBQUEsSUFBTztBQUFBLEtBQUMsR0FDN0I7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
