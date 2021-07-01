import React from 'react';
import Task from 'components/Task/Task'

import './Column.scss'

function Column() {
    return (
        <div className="column">
          <header>Brainstorm</header>
          <ul className="task-list">
            <Task />
            <Task />


            <li className="task-item">hahahahahahahahha</li>
            <li className="task-item">hahahahahahahahha</li>
            <li className="task-item">hahahahahahahahha</li>
          </ul>
          <footer>Add another card</footer>
        </div>
    );
}

export default Column;