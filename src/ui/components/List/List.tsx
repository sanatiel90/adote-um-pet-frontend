import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import { Picture, ListItem, ListStyled, InfoContainer, Name, Description } from './style';

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List({ pets, onSelect }: ListProps) {
    const maxSizeText = 200;

    return (
        <ListStyled>
            { pets.map(pet => (
                <ListItem key={pet.id}>
                    <Picture src={pet.foto} />
                    <InfoContainer>
                        <Name>{pet.nome}</Name>
                        <Description>
                        {TextService.limitText(pet.historia, maxSizeText)}
                        </Description>
                        <Button onClick={() => onSelect(pet)} variant={'contained'} fullWidth >
                            Adotar {pet.nome}
                        </Button>
                    </InfoContainer>
                </ListItem>           
            ))}
        </ListStyled>
    )
}