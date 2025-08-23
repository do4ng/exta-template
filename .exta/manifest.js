export default {  "/index.tsx": () => import("./client/index.js"),

  "/[name].tsx": () => import("./client/[name].js"),

  "[error]": () => import("./client/_error.js"),

  "[layout]": () => import("./client/_layout.js"),
}