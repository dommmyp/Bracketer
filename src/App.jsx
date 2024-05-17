import { useState } from 'react'
import './App.css'
import Team from './components/Team'
import Bracket from './components/Bracket'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

let tempTeams = [{teamName: 'Team 1', seed: 1}, {teamName: 'Team 2', seed: 2}, {teamName: 'Team 3', seed: 3}, {teamName: 'Team 4', seed: 4},
{teamName: 'Team 5', seed: 5}, {teamName: 'Team 6', seed: 6}, {teamName: 'Team 7', seed: 7}, {teamName: 'Team 8', seed: 8},
{teamName: 'Team 9', seed: 9}, {teamName: 'Team 10', seed: 10}, {teamName: 'Team 11', seed: 11}, {teamName: 'Team 12', seed: 12},
{teamName: 'Team 13', seed: 13}, {teamName: 'Team 14', seed: 14}, {teamName: 'Team 15', seed: 15}, {teamName: 'Team 16', seed: 16},
{teamName: 'Team 17', seed: 17}, {teamName: 'Team 18', seed: 18}, {teamName: 'Team 19', seed: 19}, {teamName: 'Team 20', seed: 20},
{teamName: 'Team 21', seed: 21}, {teamName: 'Team 22', seed: 22}, {teamName: 'Team 23', seed: 23}, {teamName: 'Team 24', seed: 24},
{teamName: 'Team 25', seed: 25}, {teamName: 'Team 26', seed: 26}, {teamName: 'Team 27', seed: 27}, {teamName: 'Team 28', seed: 28},
{teamName: 'Team 29', seed: 29}, {teamName: 'Team 30', seed: 30}, {teamName: 'Team 31', seed: 31}, {teamName: 'Team 32', seed: 32}, 
{teamName: 'Team 33', seed: 33}, {teamName: 'Team 34', seed: 34}, {teamName: 'Team 35', seed: 35}, {teamName: 'Team 36', seed: 36},
{teamName: 'Team 37', seed: 37}, {teamName: 'Team 38', seed: 38}, {teamName: 'Team 39', seed: 39}, {teamName: 'Team 40', seed: 40},
{teamName: 'Team 41', seed: 41}, {teamName: 'Team 42', seed: 42}, {teamName: 'Team 43', seed: 43}, {teamName: 'Team 44', seed: 44},
{teamName: 'Team 45', seed: 45}, {teamName: 'Team 46', seed: 46}, {teamName: 'Team 47', seed: 47}, {teamName: 'Team 48', seed: 48},
{teamName: 'Team 49', seed: 49}, {teamName: 'Team 50', seed: 50}, {teamName: 'Team 51', seed: 51}, {teamName: 'Team 52', seed: 52},
{teamName: 'Team 53', seed: 53}, {teamName: 'Team 54', seed: 54}, {teamName: 'Team 55', seed: 55}, {teamName: 'Team 56', seed: 56},
{teamName: 'Team 57', seed: 57}, {teamName: 'Team 58', seed: 58}, {teamName: 'Team 59', seed: 59}, {teamName: 'Team 60', seed: 60},
{teamName: 'Team 61', seed: 61}, {teamName: 'Team 62', seed: 62}, {teamName: 'Team 63', seed: 63}, {teamName: 'Team 64', seed: 64}]


function App() {
    const [teams, setTeams] = useState([])
    const [tempName, setTempName] = useState('')

    function addTeam() {
        let word = tempName;
        if(!word) return
        while(word[0] == ' '){
            word = word.substring(1, word.length)
            console.log(word)
            if(!word) return setTempName('')
        }
        if(!tempName) return
        setTeams([...teams, {teamName: tempName, seed: teams.length+1}])
        setTempName('')
    }

    return (
        <div className="primary-wrapper">
            <Sidebar />
            <div className="main-page">
            <Navbar />
            <Bracket teams={tempTeams}/>

</div>
        </div>
    )
}

export default App
