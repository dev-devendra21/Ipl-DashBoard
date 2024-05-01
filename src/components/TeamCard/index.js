// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamCard}) => {
  const {name, teamImageUrl, id} = teamCard

  return (
    <>
      <li className="team-card">
        <Link className="team-card-link" to={`/team-matches/${id}`}>
          <button type="button" className="team-card-btn">
            <div>
              <img className="team-card-logo" src={teamImageUrl} alt={name} />
            </div>
            <div>
              <p className="team-card-name">{name}</p>
            </div>
          </button>
        </Link>
      </li>
    </>
  )
}

export default TeamCard
