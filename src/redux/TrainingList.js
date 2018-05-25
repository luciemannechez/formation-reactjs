import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTraining, loadTrainings, removeTraining } from '../store/trainings.action';
import TrainingItem from './TrainingItem';
import Placeholder from './Placeholder';

export class TrainingList extends React.Component {
  componentDidMount() {
    this.props.loadTrainings();
  }

  displayTrainings() {
    if (this.props.loading) {
      return <p>Loading ....</p>;
    }
    return this.props.trainings.map((item, index) =>
      (item !== null ? <TrainingItem key={item.id} name={item.name} /> : <Placeholder key={index} />));
  }

  render() {
    return (
      <div> Formation :
                {
                    this.displayTrainings()
                }
        <div>
          <button onClick={() => this.props.addTraining('formation ajoutée via redux')}> Add training</button>
          <button onClick={() => this.props.removeTraining()}> Remove trainings</button>
        </div>
      </div>);
  }
}

TrainingList.propTypes = {
  addTraining: PropTypes.func.isRequired,
  loadTraining: PropTypes.func.isRequired,
  removeTraining: PropTypes.func.isRequired,
  trainings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  trainings: state.trainings.list,
  loading: state.trainings.loading,
});

const mapDispatchToProps = dispatch => ({
  addTraining: name => dispatch(addTraining(name)),
  removeTraining: () => dispatch(removeTraining()),
  loadTrainings: () => dispatch(loadTrainings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingList);
