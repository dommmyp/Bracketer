import './BracketGame.css';


const BracketGame= ({team1, team2}) => {
    return (
        <div className="bracket-game">
            <div className="team1">
                {team1.seed} {team1.teamName}
            </div>
            <div className="team2">
                {team2.seed} {team2.teamName}
            </div>
        </div>
    );
    }

export default BracketGame;
