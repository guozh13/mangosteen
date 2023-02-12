import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { RouteRecordRaw } from "vue-router"
import { Firtst } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
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