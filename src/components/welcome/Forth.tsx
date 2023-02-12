import { RouterLink } from 'vue-router';
import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { WelcomeLayout } from './WelcomeLayout'

export const Forth = () => {
  return (
    <WelcomeLayout>{{
      icon: () => (<img class={s.icon} src={cloud} />),
      title: () => (<h2>clock<br />还要会省钱</h2>),
      actions: () => (<>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/start">完成</RouterLink>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink></>)
    }}</WelcomeLayout>)
}
Forth.displayName = 'Forth'
