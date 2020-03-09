import React from "react";
import BotCard from "../components/BotCard";
import { connect } from 'react-redux'

class BotCollection extends React.Component {
	//your code here

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{/* Pass the botClick function - which will dispatch an action to our store in order to change the state of selectedBotId - down as a prop to each BotCard, as well as the bot it needs to render */}
					{
						this.props.bots.map(bot => <BotCard bot={bot} handleClick={() => this.props.botClick(bot)} />)
					}
				</div>
			</div>
		);
	}

};

// The only state this component needs to know is the list of bots it needs to render. We use mapStateToProps to pass it a bots prop that is equal to the array of bots in state, which will have already been set by BotsPage, which fetched them from the server when it mounted
const mapStateToProps = state => {
	return {
		bots: state.bots
	}
}

// This component also needs to give each BotCard it renders a function that will select that bot when it's clicked. We use mapDispatchToProps to pass it a botClick prop that will be a function that dispatches an action to the store with a payload of the bot that was clicked. The reducer will then set selectedBotId in state to be the id of the bot in the payload. We can then pass botClick down to BotCard as a prop the standard way
const mapDispatchToProps = dispatch => {
	return {
		botClick: bot => dispatch({ type: "SELECT_BOT", payload: { bot } })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BotCollection);
