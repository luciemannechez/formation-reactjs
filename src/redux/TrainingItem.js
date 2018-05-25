// Composant de type Class
// Une propriété props est définie dans l'objet (accessible via this.props)
// Les propriétés de cet objet sont les attributs XML déclarés lorsque le composant est instancié
import React from 'react';
import PropTypes from 'prop-types';

export default class TrainingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.name);
  }

  render() {
    return (
        <li>{this.props.name}</li>
    );
  }
}

TrainingItem.propTypes = {
  name: PropTypes.string.isRequired,
};
