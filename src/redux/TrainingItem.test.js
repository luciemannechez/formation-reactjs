import React from 'react';
import renderer from 'react-test-renderer';
import TrainingItem from './TrainingItem';

describe('TrainingItem.js', () => {
    it('should take a snapshot', () => {
        const tree = renderer.create(<TrainingItem name="Nicolas"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
