import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
  setup() {
    return () => (<div class={s.wrapper}>
      <header></header>
      <RouterView></RouterView>
      <footer></footer>
    </div>)
  }
})