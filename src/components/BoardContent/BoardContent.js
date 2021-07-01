import React from 'react';
import Column from 'components/Column/Column'
import './BoardContent.scss'

function BoardContent() {
    return (
        <div className="board-contents">
          <Column />
          <Column />
      </div>
    );
}

export default BoardContent;