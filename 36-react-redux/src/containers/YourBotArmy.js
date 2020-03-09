import React from "react";
import BotCard from "../components/BotCard";
import { connect } from "react-redux"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.bots.map(bot => <BotCard bot={bot} handleClick={() => this.props.delistBot(bot)} />)
            }
          </div>
        </div>
      </div>
    );
  }

};

// This component needs to know which bots to render as part of our bot army, so we create a prop called bots and set it to be a filtered version of all of the bots in state - we select only the bots that have ids which are included in the array of botArmyIds also in state i.e. this component's bots prop contains only the bots that we have enlisted into our army. It uses two pieces of state to make a decision about what props it needs to have, but doesn't need to manage either of those pieces of state itself - they both live in the store and all this component needs to do is talk to the store
const mapStateToProps = state => {
  return {
    bots: state.bots.filter(bot => state.botArmyIds.includes(bot.id))
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // This function will dispatch an action to the store of type DELIST_BOT with a payload containing the bot that was clicked on. The reducer will then remove that bot's id from botArmyIds, meaning this component will no longer render that bot's BotCard as part of our bot army
    delistBot: bot => dispatch({ type: "DELIST_BOT", payload: {bot}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourBotArmy);
