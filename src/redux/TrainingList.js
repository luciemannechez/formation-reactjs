import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {addTraining} from "../store/trainings.action";
import TrainingItem from "./TrainingItem";

export class TrainingList extends React.Component {
    render() {
        return (
            <div> Formation :
                {
                    this.props.trainings.map((item) => <TrainingItem key={item.id} name={item.name}></TrainingItem>)
                }
            <div>
                <button onClick={() => this.props.addTraining('formation ajoutée via redux')}> Add training</button>
            </div>
        </div>)
    }
}

TrainingList.propTypes = {
    addTraining: PropTypes.func.isRequired,
    trainings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({
    trainings: state.trainings.list,
});

const mapDispatchToProps = dispatch => ({
    addTraining: name => dispatch(addTraining(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingList);
