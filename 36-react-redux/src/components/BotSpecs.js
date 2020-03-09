import React from "react";
import { connect } from "react-redux"

const BotSpecs = props => {
  // We can still destructure our props, even when some of them are coming from the parent component and some from Redux. In this case, bot is an object passed down as a prop by BotsPage, while back and enlistBot are functions that will dispatch actions to the store, passed down by mapDispatchToProps
  let { bot, back, enlistBot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon plus circle" />;
      break;
    case "Medic":
      botType = <i className="icon ambulance" />;
      break;
    case "Witch":
      botType = <i className="icon magic" />;
      break;
    case "Captain":
      botType = <i className="icon star" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={back}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => enlistBot(bot)}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

const mapDispatchToProps = dispatch => {
  // We pass down two functions as props
  return {
    // back will dispatch an action of type CLEAR_SELECTED_BOT. The reducer will then set the state of selectedBotId to null, meaning BotsPage will then render the BotCollection instead of this component
    back: () => dispatch({ type: "CLEAR_SELECTED_BOT"}),
    // enlistBot will dispatch an action of type ENLIST_BOT, with a payload containing the bot this component is rendering the specs for. The reducer will then add the bot's id to the list of botArmyIds in state, so that when YourBotArmy accesses the bots it needs to render, it will not include this one
    enlistBot: bot => dispatch({ type: "ENLIST_BOT", payload: { bot }})
  }
}

// If we don't need to map anything from state to one of this component's props, we can just pass in null for mapStateToProps
export default connect(null, mapDispatchToProps)(BotSpecs);
