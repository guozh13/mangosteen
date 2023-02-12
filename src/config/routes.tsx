import { RouteRecordRaw } from "vue-router"
import { Firtst } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { Welcome } from "../views/Welcom";
import { Start } from "../components/Start";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', component: Firtst },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Forth },
    ]
  },
  { path: '/start', component: Start }
]