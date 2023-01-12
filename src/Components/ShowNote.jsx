import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './ShowNote.css';
export default function ShowNote(props) {
  const delButton=()=>{
    props.delfunc(props.id);
  }
  return (
    <div className='ShowNote'>
      <h2>{props.note_title}</h2>
      <p>{props.note_content}</p>
      <div className="button">
        <Tooltip title="Delete Note">
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" onClick={delButton}/>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
