import { FunctionalComponent } from 'vue';
import s from './WelcomeLayout.module.scss';

export const WelcomeLayout: FunctionalComponent = (props, { slots: { icon, title, actions } }) => {
  return (<div class={s.wrapper}>
    <div class={s.card}>
      {icon?.()}
      {title?.()}
    </div>
    <div class={s.actions}>
      {actions?.()}
    </div>
  </div>)
}