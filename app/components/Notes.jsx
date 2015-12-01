'use strict';

import React, { Component } from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';
import LaneActions from '../actions/LaneActions';

export default class Notes extends Component {
    constructor(props) {
        super(props);

        this.renderNote = this.renderNote.bind(this);
    }

    render () {
        const notes = this.props.items;

        return (
            <ul className="notes">{notes.map(this.renderNote)}</ul>
        )
    }

    renderNote(note) {
        return (
            <Note className="note" id={note.id} key={`note${note.id}`} onMove={LaneActions.move}>
                <Editable value={note.task} onEdit={this.props.onEdit.bind(null, note.id)}
                    onDelete={this.props.onDelete.bind(null, note.id)}/>
            </Note>
        );
    }

}
