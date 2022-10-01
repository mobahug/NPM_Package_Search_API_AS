import SearchBrews from "./components/SearchBrews.vue";
import Package from "./components/Package.vue";

const routes = [
  { path: "/", component: SearchBrews, name: "searchbrews" },
  { path: "/package", component: Package, name: "package" }
];

export default routes;
