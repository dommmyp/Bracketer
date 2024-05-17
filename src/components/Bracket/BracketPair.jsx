import BracketGame from './BracketGame';

const BracketPair = ({team1, team2, round}) => {
    return (
        <div className="bracket-pair">
            <div className="bracket-pair-teams">
                <BracketGame team1={team1} team2={team2}/>
            </div>
            <div className="bracket-pair-line">
            </div>
        </div>
    );
}
 export default BracketPair;
