import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            <div>Personal Digital Assistants</div>
          </p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa Alexa Alexa Alexa Alexa Alexa Alexa"
              />
            </div>
            <div className="column is-4">
              {" "}
              <ProfileCard
                title="Cortana"
                handle="cortana32"
                image={CortanaImage}
                description="Cortana Cortana Cortana Cortana Cortana"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri Siri Siri Siri Siri Siri"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
