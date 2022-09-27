import Routing from "./index.vue";
import { Main } from "./main";
import { Test } from "./test";

export const routes = [
  { path: "/", component: Main, name: 'main' },
  { path: "/test/:id", component: Test, name: 'test' },
];

export { Routing };
