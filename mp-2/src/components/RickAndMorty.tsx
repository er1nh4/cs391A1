import styled from "styled-components";
import type  {Character} from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(being)=>(being.status === "Alive" ? 'green' : (being.status === "Dead") ? 'red' : 'yellow')};
    color: ${(being) => (being.status === "Alive" ? 'green' : (being.status === "Dead") ? 'red' : 'yellow')};
    text-shadow: ${(being) => (being.status === "Alive" ? 'green 0 0 10px;' : (being.status === "Dead") ? 'red 0 0 10px' : 'yellow 0 0 10px')};
    border: 3px saddlebrown solid;
    border-radius: 20px;
    font: normal bold calc(2px + 1vw) "Comic Sans MS", cursive, sans-serif;
    text-align: center;
`;

export default function RickAndMorty(being : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                being.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <p>{char.species !== "Human" ? "(Not Human)" : "Human"} - {char.gender}
                        </p>
                        <img src={char.image} alt={`image of ${char.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}