import { SubTitleStyled, TitleStyled } from "./style";

interface TituloProps {
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Title ({ titulo, subtitulo }: TituloProps) {
    return (
        <>
            <TitleStyled>{titulo}</TitleStyled>
            <SubTitleStyled>{subtitulo}</SubTitleStyled>
        </>
    );
}
