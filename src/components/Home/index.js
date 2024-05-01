// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoader: false}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    this.setState({isLoader: true})
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    if (response.ok) {
      const formatData = data.teams.map(eachTeamDetails => ({
        name: eachTeamDetails.name,
        id: eachTeamDetails.id,
        teamImageUrl: eachTeamDetails.team_image_url,
      }))
      this.setState({teamCardList: formatData, isLoader: false})
    }
  }

  renderTeamCard = () => {
    const {teamCardList} = this.state
    return (
      <ul className="team-card-list">
        {teamCardList.map(eachCard => (
          <TeamCard teamCard={eachCard} key={eachCard.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <>
        <div className="home-container">
          <section className="ipl-dashboard-title">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="ipl-title">IPL Dashboard</h1>
          </section>
          {isLoader ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div>{this.renderTeamCard()}</div>
          )}
        </div>
      </>
    )
  }
}

export default Home
