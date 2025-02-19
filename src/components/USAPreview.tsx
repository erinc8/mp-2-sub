//import { USA} from "../interfaces/type.ts";
import { styled } from "styled-components";

const USAPreviewDiv = styled.div`
margin: 3rem;
padding: 1rem;
width: 20rem;
background-color: lightblue;
`

interface USA {
    Nation: string;
    Population: number;
    Year: string;
}
export function USAPreview ({usa}: {usa: USA}) {
    return (
        <USAPreviewDiv>
            <h3>{usa.Nation}</h3>
            <p>Population: {usa.Population.toLocaleString()}</p>
            <p>Year: {usa.Year}</p>
        </USAPreviewDiv>
    )
}