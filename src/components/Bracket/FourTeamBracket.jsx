
const FourTeamBracket = ({teams}) => {
    return (
        <div className="bracket-wrapper-four">
            <div className="bracket-rd4">
                {teams.map((team, index) => (
                    <div className="team-element" key={index}>{team.teamName}</div>
                ))}
            </div>
            <div className="bracket-rd2">
            </div>
            <div className="bracket-rd1">
            </div>
        </div>
    );
}

export default FourTeamBracket;
