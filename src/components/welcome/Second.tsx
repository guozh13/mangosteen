import { RouterLink } from 'vue-router';
import s from './WelcomeLayout.module.scss';
import chart from '../../assets/icons/chart.svg';
import { WelcomeLayout } from './WelcomeLayout'

export const Second = () => {
  return (
    <WelcomeLayout>{{
      icon: () => (<img class={s.icon} src={chart} />),
      title: () => (<h2>提醒<br />还要会省钱</h2>),
      actions: () => (<>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/welcome/3">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink></>)
    }}</WelcomeLayout>)
}
Second.displayName = 'Second'
