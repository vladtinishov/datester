import Routing from "./index.vue";
import { Main } from "./main";
import { Test } from "./test";

export const routes = [
  { path: "/", component: Main },
  { path: "/test", component: Test },
];

export { Routing };
