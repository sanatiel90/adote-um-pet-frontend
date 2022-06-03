import { Button } from "@mui/material";
import { Picture, ListItem, ListStyled, InfoContainer, Name, Description } from './style';

export default function List() {
    return (
        <ListStyled>
            <ListItem>
                <Picture src="https://www.dci.com.br/wp-content/uploads/2020/09/1300x0_1568662224_5d7fe2d09bccd.jpeg" />
                <InfoContainer>
                    <Name>Spike</Name>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio explicabo cumque ad mollitia quam tempore accusamus hic sed, consectetur facilis harum placeat fugit id quibusdam architecto! Eveniet similique doloribus eum!
                    </Description>
                    <Button variant={'contained'}>
                        Adotar
                    </Button>
                </InfoContainer>
            </ListItem>
        </ListStyled>
    )
}