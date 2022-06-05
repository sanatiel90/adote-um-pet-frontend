import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${props => props.theme.spacing(2)};    
`;

export const ListItem = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(5)};

    //especie de media query
    ${props => props.theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${props => props.theme.spacing(2)};
        margin-bottom: ${props => props.theme.spacing(10)};
    }
`;

export const Picture = styled('img')`
    width: 100%;    
`;

export const InfoContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing(4)};    
`;

export const Name = styled('h2')`
    margin: 0;
`;

export const Description = styled('p')`
    margin: 0;
    text-align: justify;
    word-break: break-word;
`;