// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    firstInnings,
    competingTeamLogo,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <>
      <div className="latest-match-card">
        <div className="competing-team-details">
          <div>
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div>
            <img
              className="competing-team-mobile-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div>
          <img
            className="competing-team-desktop-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="ongoing-match-details">
          <h1 className="innings-heading">First Innings</h1>
          <p className="innings-team">{firstInnings}</p>
          <h1 className="innings-heading">Second Innings</h1>
          <p className="innings-team">{secondInnings}</p>
          <h1 className="man-of-the-match">Man Of The Match</h1>
          <p className="player-name">{manOfTheMatch}</p>
          <h1 className="umpires-heading">Umpires</h1>
          <p className="umpire-name">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
