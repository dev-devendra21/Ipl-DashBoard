// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchList} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchList
  const matchStatusClass = matchStatus === 'Won' ? 'match-won' : 'match-loss'
  return (
    <>
      <li className="match-card">
        <div className="match-card-details">
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <p className="competing-team">{competingTeam}</p>
          <p className="result">{result}</p>
          <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
        </div>
      </li>
    </>
  )
}

export default MatchCard
