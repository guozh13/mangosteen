import { RouterLink } from 'vue-router';
import s from './WelcomeLayout.module.scss';
import pig from '../../assets/icons/pig.svg';
import { WelcomeLayout } from './WelcomeLayout'

export const Firtst = () => {
  return (
    <WelcomeLayout>{{
      icon: () => (<img class={s.pig} src={pig} />),
      title: () => (<h2>会挣钱<br />还要会省钱</h2>),
      actions: () => (<>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/welcome/2">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink></>)
    }}</WelcomeLayout>)
}
Firtst.displayName = 'Firtst'
