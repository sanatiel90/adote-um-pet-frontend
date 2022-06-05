import type { NextPage } from 'next'
import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from "@mui/material";
import List from '../ui/components/List/List';
import Title from '../ui/components/Title/Title';
import styles from '../ui/styles/Home.module.css'
import MyApp from './_app';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {

  const { listPets } = useIndex();

  return (
   <>
     <Title 
      titulo={'Bem vindo'} 
      subtitulo={<span>Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente</strong></span>} 
      />
      <List 
        pets={listPets}
      />   

      <Dialog open={false} fullWidth PaperProps={{ sx: { padding: 5 } }} >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField label={'Email'} fullWidth type={'email'} />
          </Grid>
          <Grid item xs={12} >
            <TextField label={'Quantia por mês'} fullWidth type={'number'} />
          </Grid>
        </Grid>
        <DialogActions sx={ { marginTop: 4 } } >
          <Button color='secondary' >
            Cancelar
          </Button>
          <Button variant='contained' >
            Fazer Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={false} message={'asa qasas as a'} />
      
   </>
  )
}

export default Home
