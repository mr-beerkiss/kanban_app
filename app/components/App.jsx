'use strict';

import AltContainer from 'alt/AltContainer';
import React, { Component } from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
    render() {
        return (
            <div>
                <button className="addNote" onClick={this.addNote}>+</button>
                <AltContainer stores={[NoteStore]} inject={{items: () => NoteStore.getState().notes}}>
                    <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
                </AltContainer>
            </div>
        );
    }

    addNote() {
        NoteActions.create({task: 'New Task'});
    }

    editNote(id, task) {
        NoteActions.update({id, task});
    }

    deleteNote(id) {
        NoteActions.delete(id);
    }

}
