import profile from './assets/react.svg'
import './card.css'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profile} alt="React symbole"></img>
            <h2 className="card-title">React Card</h2>
            <p className="card-text">This is react card. Hope you will use it! </p>
        </div>
    );
}

export default Card