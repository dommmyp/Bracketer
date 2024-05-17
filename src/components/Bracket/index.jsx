import FourTeamBracket from './FourTeamBracket';
import FullBracket from './FullBracket';
import './bracket.css';

const Index = ({teams}) => {

    return (
        <div className="bracket-wrapper">
            <br/>
            {teams.length == 4 && <FourTeamBracket teams={teams}/>}
        
            {teams.length < 4 && <div>Not enough teams</div>}
            {teams.length > 4 && <FullBracket teams={teams}/>}
        </div>
    );
}

export default Index;
