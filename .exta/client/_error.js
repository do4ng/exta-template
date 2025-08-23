// pages/_error.tsx
import { useLocation } from "$exta-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function error_default() {
  return jsx(Fragment, { children: jsxs("h1", { children: [
    "Cannot find page - ",
    useLocation()
  ] }) });
}
export {
  error_default as _page
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcGFnZXMvX2Vycm9yLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwiJGV4dGEtcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkNhbm5vdCBmaW5kIHBhZ2UgLSB7dXNlTG9jYXRpb24oKX08L2gxPlxuICAgIDwvPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsbUJBQW1CO0FBSXhCLHdCQUNFLFlBREY7QUFGVyxTQUFSLGdCQUFvQjtBQUN6QixTQUNFLGdCQUNFLGVBQUMsUUFBRztBQUFBO0FBQUEsSUFBb0IsWUFBWTtBQUFBLEtBQUUsR0FDeEM7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
