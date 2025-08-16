export default {  "/index.tsx": () => import("./client/index.js"),

  "/[params].tsx": () => import("./client/[params].js"),

  "[layout]": () => import("./client/_layout.js"),
}