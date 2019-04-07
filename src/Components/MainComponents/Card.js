import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const exercises = require('../../utils/exercises.json').exercises;

class Card extends Component {
  state = {
    exercises,
}
// handleSrc = (name) => {
//   const title = name
//   const result = exercises.find(object => object.name === title);
//   console.log(result);
//   return (result.src);
  
// }
render() {
  const {name, cardClass} = this.props;
  return (
    <div className={cardClass}>
      <span className="card--heading">{name}</span>
      <img alt={name} src={'https://www.mensjournal.com/wp-content/uploads/2018/03/wide-grip-push-up-chest-main.jpg'} />
      <FontAwesomeIcon  className='delete' icon='trash-alt' id={name} />
    </div>
  );
}
}

export default Card;


