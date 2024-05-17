import {useEffect, useState} from 'react'
import './team.css'
import PropTypes from 'prop-types';

const Index = ({teams, setTeams, index}) => {
    const [infoOpen, setInfoOpen] = useState(false)
    const [teamInfo, setTeamInfo] = useState({
        teamName: null,
        seed: null 
    })

    const [aa, setAa] = useState(false)

    useEffect(()=>{
        setTeamInfo({
            teamName: teams[index].teamName,
            seed: teams[index].seed 
        })
    }, [])

    useEffect(()=>{
        setTeams(teams.map((team, i)=>{
            if(i == index){
                return teamInfo
            }
            return team
        }))
    }, [teamInfo])

    useEffect(()=>{
        console.log(infoOpen)
    }, [infoOpen])

    return (
        <div className="team-element">
            {!aa && <div onClick={()=>setAa(true)}>{teamInfo.teamName}</div>}
            {aa && <div className="team-info-wrapper">
                        <div onClick={()=>setAa(false)} className="team-element-close">x</div>
                        <input type="text" placeholder="Team Name" value={teamInfo.teamName} onChange={(e)=>setTeamInfo({
                                ...teamInfo,
                            teamName: e.target.value
                        })} />
                        <input type="text" placeholder="Seed" value={teamInfo.seed} onChange={(e)=>setTeamInfo({
                            ...teamInfo,
                            seed: e.target.value
                        })} />
                    </div>
            }
        </div>
    );
}

Index.propTypes = {
    column: PropTypes.shape({
        

    })
};

export default Index;
