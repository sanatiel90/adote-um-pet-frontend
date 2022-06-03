import type { NextPage } from 'next'
import List from '../ui/components/List/List';
import Title from '../ui/components/Title/Title';
import styles from '../ui/styles/Home.module.css'
import MyApp from './_app';

const Home: NextPage = () => {

  const subtituloData = ''

  return (
   <>
     <Title 
      titulo={'Bem vindo'} 
      subtitulo={<span>Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente</strong></span>} 
      />
      <List />
   </>
  )
}

export default Home
