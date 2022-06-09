import type { NextPage } from 'next'
import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from "@mui/material";
import List from '../ui/components/List/List';
import Title from '../ui/components/Title/Title';
import styles from '../ui/styles/Home.module.css'
import MyApp from './_app';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {

  const { listPets, selectedPet, setSelectedPet, email, setEmail, amount, setAmount,
          message, setMessage, adotePet } = useIndex();

  return (
   <>
     <Title 
      titulo={'Bem vindo'} 
      subtitulo={<span>Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente</strong></span>} 
      />
      <List 
        pets={listPets}
        onSelect={(pet) => setSelectedPet(pet)}
      />   

      <Dialog 
        open={selectedPet !== null} 
        fullWidth 
        PaperProps={{ sx: { padding: 5 } }} 
        onClose={() => setSelectedPet(null)} >        
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField 
              label={'Email'} 
              fullWidth 
              type={'email'}
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} >
            <TextField 
              label={'Quantia por mês'} 
              fullWidth 
              type={'number'}
              value={amount}
              onChange={e => setAmount(e.target.value)} />
          </Grid>
        </Grid>
        <DialogActions sx={ { marginTop: 4 } } >
          <Button color='secondary' onClick={() => setSelectedPet(null)} >
            Cancelar
          </Button>
          <Button variant='contained' onClick={() => adotePet()} >
            Fazer Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={message.length > 0} 
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')} />
      
   </>
  )
}

export default Home
