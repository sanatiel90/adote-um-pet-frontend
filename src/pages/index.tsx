import type { NextPage } from 'next'
import styles from '../ui/styles/Home.module.css'

function MeuComp() {
  return <div>Olá Mundo</div>;
}

const Home: NextPage = () => {
  return (
    <MeuComp />
  )
}

export default Home
