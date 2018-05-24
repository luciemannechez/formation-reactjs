import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Composant de type Class  
// Une propriété props est définie dans l'objet (accessible via this.props)  
// Les propriétés de cet objet sont les attributs XML déclarés lorsque le composant est instancié  
class TrainingItem extends React.Component {
    constructor(props) {
        super(props);

        this.showName = this.showName.bind(this);
    }

    componentDidMount() {
        console.log(this.props.name);
    }

    shouldComponentUpdate() {

    }

    showName(e) {
        alert(this.props.name);
        console.log(e.nativeEvent.type);
    }

    render() {
        return (
            <li onClick={(e) => this.showName(e)}>{this.props.name}</li>
        );
    }
}

class TrainingTitle extends React.Component {
    shouldComponentUpdate() {

    }

    render() {
        return (
            <h1>{this.props.name} :</h1>
        );
    }
}

class TrainingList extends React.Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        const trainings = [
            {
                id: 1,
                name : 'React.js'
            },
            {
                id: 2,
                name: 'React Native'
            },
            {
                id: 3,
                name: 'Angular'
            }
        ];
        const trainingItems = trainings.map((training) =>
            <TrainingItem key={training.id} name={training.name}></TrainingItem>
        );
        return (
            <div>
                <TrainingTitle name="Formations"/>
                <ul>{trainingItems}</ul>
            </div>
        );
    }
}

class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {status: navigator.onLine ? null : 'OFFLINE', isOnline : navigator.onLine };

        window.addEventListener("offline", () => {
            this.setState({
                status: navigator.onLine ? null : 'OFFLINE',
                isOnline : navigator.onLine
            });
        }, false)

        window.addEventListener("online", () => {
            this.setState({
                status: navigator.onLine ? null : 'OFFLINE',
                isOnline : navigator.onLine
            });
        }, false)
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const label  = this.state.isOnline ? null : 'OFFLINE';
        return (
            <div>
                {this.state.status}
                {label}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <TrainingList/>
            <Status/>
        </div>
    );
}

export default App;
