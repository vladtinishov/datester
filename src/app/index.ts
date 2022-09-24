import { createApp } from "vue";
import { router } from "./providers";
import App from "./index.vue";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMoon,
  faEarthAmericas,
  faMagnifyingGlass,
  faPlus,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faMoon,
  faEarthAmericas,
  faMagnifyingGlass,
  faPlus,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCheckCircle,
  faXmarkCircle,
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(createPinia());

export { app };
