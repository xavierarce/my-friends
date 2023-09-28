import React, {Component} from "react";
import './Card.css'

class Card extends Component{
  render(){
    const {name,id,username,email} = this.props;

    return(
      <div>
        <div className="card-container tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img src={`https://robohash.org/${id}?size=250x250&set=set2`} alt="robots"/>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

export default Card;