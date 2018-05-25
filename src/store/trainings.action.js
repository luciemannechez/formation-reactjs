export const ADD_TRAINING = 'ADD_TRAINING';
export const REMOVE_TRAINING = 'REMOVE_TRAINING';
export const TRAININGS_LOADED = 'TRAININGS_LOADED';
export const LOAD_TRAININGS = 'LOAD_TRAININGS';

const data = [{
    id: 1,  
    name: 'React.js'
}, {  
    id: 2,  
    name: 'React Native'
}, {  
    id: 3,  
    name: 'Angular'
}, {  
    id: 4,  
    name: 'Typescript'
}];

const mockFetch = () => {  
    return new Promise((resolve) => {  
        setTimeout(() => resolve(data), 2000)  
    })
};

export function addTraining(name) {
    return {
        type: ADD_TRAINING,
        name
    }
}

export function removeTraining() {
    return {
        type: REMOVE_TRAINING,
    }
}

export function trainingLoaded (datas) {  
    return {  
        type : TRAININGS_LOADED,  
        trainings : datas,  
    }
}

export function loadTrainings () {  
    return (dispatch) => {
    // Dispatch load trainings start  
        dispatch({type: LOAD_TRAININGS});
        return mockFetch()  
            .then((datas) => dispatch(trainingLoaded(datas)));  
    }
}
