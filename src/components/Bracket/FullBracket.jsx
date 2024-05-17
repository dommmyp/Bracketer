import React from 'react';
import BracketGame from './BracketGame';
import BracketPair from './BracketPair';
import './bracket.css'


const FullBracket = ({ teams }) => {
    console.log(teams)
    return (
        <div className="bracket-wrapper">
            <div className="bracket-round">
                <div>Round 1</div>
            {teams.map((team, index) => {
                    if(index%2==0){
                        return <BracketPair key={index} team1={team} team2={teams[index+1]}/>

                    }
                })}
            </div>
            <div className="bracket-round">
                <div>Round 2</div>
            {teams.map((team, index) => {
                    if(index<17){
                        return <BracketGame key={index} team1={team} team2={teams[31-index]}/>

                    }
                })}
            </div>
            <div className="bracket-round">
                <div>Round 3</div>
            {teams.map((team, index) => {
                    if(index<9){
                        return <BracketGame key={index} team1={team} team2={teams[15-index]}/>

                    }
                })}
            </div>
            <div className="bracket-round">
                <div>Round 4</div>
            {teams.map((team, index) => {
                    if(index<5){
                        return <BracketGame key={index} team1={team} team2={teams[7-index]}/>

                    }
                })}
            </div>
        </div>
   );
}
export default FullBracket;
