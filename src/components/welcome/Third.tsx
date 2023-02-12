import { RouterLink } from 'vue-router';
import s from './WelcomeLayout.module.scss';
import clock from '../../assets/icons/clock.svg';
import { WelcomeLayout } from './WelcomeLayout'

export const Third = () => {
  return (
    <WelcomeLayout>{{
      icon: () => (<img class={s.icon} src={clock} />),
      title: () => (<h2>clock<br />还要会省钱</h2>),
      actions: () => (<>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/welcome/4">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink></>)
    }}</WelcomeLayout>)
}
Third.displayName = 'Third'
