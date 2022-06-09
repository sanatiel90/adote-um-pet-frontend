import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from 'axios';

export function useIndex() {

    const [ selectedPet, setSelectedPet ] = useState<Pet | null>(null);

    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [listPets, setListPets] = useState<Pet[]>([]);

    function adotePet() {      
      if(selectedPet !== null){
        if(validateData()){
          ApiService.post('/adocoes', {
            pet_id: selectedPet.id,
            email: email,
            valor: amount  
          }).then(response => {
            setSelectedPet(null);
            setMessage('Pet adotado com sucesso!');
            resetForm();
          }).catch((error: AxiosError) => {              
              setMessage(error.response?.data.message);
          });
        } else {
          setMessage('Preencha os campos corretamente');
        }
      }
    }

    function validateData() {
      return email.length > 0 && amount.length > 0;
    }

    function resetForm() {
      setEmail('');
      setAmount('');
    }
       
    useEffect(() => {
      ApiService.get('/pets').then(response => {
        setListPets(response.data);
      })
    }, []);

    return {
        listPets,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        amount,
        setAmount,
        message,
        setMessage,
        adotePet
    }
}

/**
 {
              id: 1,
              nome: 'Spike',
              historia: 'É muito doidinho e possui um frivião no cú, mas também muito amável. Sua melhor skill é não deixar comida sobrar.',
              foto: 'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg'
            },
            {
              id: 2,
              nome: 'Thetheo',
              historia: 'Malvadão por natureza, é muito lindo e formoso. Use sementes de girassol e papa de passarinho rico para domar essa belezura.',
              foto: 'https://s1.static.brasilescola.uol.com.br/be/e/Amazona_aestiva_-pet-6.jpg'
            },
            {
              id: 3,
              nome: 'Valquírio',
              historia: 'Lorde dos gatos, Rei dos Telhados. Abasteça continuamente o estômago dessa linda criatura com ração Super Premium e patê, para que você TALVEZ seja poupado no dia que a revolução começar...',
              foto: 'https://c.pxhere.com/photos/5a/59/cat_black_white_portrait_domestic_cute_pet_feline-709883.jpg!d'
            },     
 */