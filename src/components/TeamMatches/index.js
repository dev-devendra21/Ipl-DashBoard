// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isloader: true}

  componentDidMount() {
    this.team()
  }

  showLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  formatRecentMatches = data => {
    const recentMatches = data.recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    return recentMatches
  }

  formatLatestMatch = data => ({
    date: data.latest_match_details.date,
    result: data.latest_match_details.result,
    competingTeamLogo: data.latest_match_details.competing_team_logo,
    competingTeam: data.latest_match_details.competing_team,
    firstInnings: data.latest_match_details.first_innings,
    manOfTheMatch: data.latest_match_details.man_of_the_match,
    matchStatus: data.latest_match_details.match_status,
    secondInnings: data.latest_match_details.second_innings,
    umpires: data.latest_match_details.umpires,
    venue: data.latest_match_details.venue,
    id: data.latest_match_details.id,
  })

  team = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    if (response.ok) {
      const data = await response.json()

      const formatData = {
        latestMatchDetails: this.formatLatestMatch(data),
        recentMatches: this.formatRecentMatches(data),
        teamBannerUrl: data.team_banner_url,
      }
      this.setState({teamMatchesList: formatData, isloader: false})
    }
  }

  renderTeamMatches = () => {
    const {teamMatchesList} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamMatchesList
    return (
      <>
        <div className="render-team-matches">
          <div>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
          </div>
          <h1 className="heading">Latest Matches</h1>
          <div>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
          </div>
          <ul className="match-card-list">
            {recentMatches.map(eachMatch => (
              <MatchCard matchList={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  setBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb-bg-color'
      case 'KKR':
        return 'kkr-bg-color'
      case 'KXP':
        return 'kxip-bg-color'
      case 'CSK':
        return 'csk-bg-color'
      case 'RR':
        return 'rr-bg-color'
      case 'MI':
        return 'mi-bg-color'
      case 'SH':
        return 'srh-bg-color'
      case 'DC':
        return 'dc-bg-color'
      default:
        return null
    }
  }

  render() {
    const {isloader} = this.state

    return (
      <>
        <div className={`team-matches-bg-color ${this.setBackgroundColor()}`}>
          {isloader ? this.showLoader() : this.renderTeamMatches()}
        </div>
      </>
    )
  }
}

export default TeamMatches
