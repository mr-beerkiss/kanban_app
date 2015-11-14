'use strict';

import AltContainer from 'alt/AltContainer';
import React, { Component } from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class App extends Component {
    render() {
        return (
            <div>
                <button className="addLane" onClick={this.addItem}>+</button>
                <AltContainer stores={[LaneStore]} inject={{items: () => LaneStore.getState().lanes || []}}>
                    <Lanes />
                </AltContainer>
            </div>
        );
    }

    addItem() {
        LaneActions.create({name: 'New lane'});
    }

}
