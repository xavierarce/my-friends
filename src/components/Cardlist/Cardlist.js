import React, { Component } from "react";
import Card from "../Card/Card";
import './cardList.css'

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;


    return (
      <div className="card-list">
        {filteredMonsters.map((monster,i) => (
          <Card
            key={i}
            id={filteredMonsters[i].id}
            name={monster.name}
            username={monster.username}
            email={monster.email}
          />
        ))}
      </div>
    );
  }
}

export default CardList;

// import React from "react";

// function CardList(props) {
//   const filteredMonsters = props.monsters.filter((monster) =>
//     monster.name.toLowerCase().includes(props.searchInput.toLowerCase())
//   );
//   console.log(filteredMonsters);

//   return (
//     <div>
//       {filteredMonsters.map((monster) => (
//         <div key={monster.id}>
//           <h1>{monster.name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardList;