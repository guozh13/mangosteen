import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { RouteRecordRaw } from "vue-router"
import { Firtst } from "../components/first";
import { Second } from "../components/second";
import { Third } from "../components/third";
import { Forth } from "../components/forth";
import { Welcome } from "../views/Welcom";

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Bar },
  { path: '/about', component: Foo },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', component: Firtst },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Forth },
    ]
  }
]