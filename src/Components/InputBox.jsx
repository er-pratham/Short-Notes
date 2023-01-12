import React,{useState} from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import './InputBox.css'
export default function InputBox(props) {
  const [display,setDisplay]=useState(false);
  const [warn,setWarn]=useState("");
    const [data,setData]=useState({
      title:"",
      content:""
    })
    const addbutton=()=>{
      // let space=spaceCount();
    {if(data.title.length===0)
      {
        setWarn("Title can not be empty.");
      }
      else if(spaceCount())
      {
        setWarn("Entered title consists only spaces");
        setData(()=>{
          return{
            title:"",
            content:"",
          }
        })
        }
      else{
      props.click(data);
      setData(()=>{
        return{
          title:"",
          content:"",
        }
      })
      }
    }
    }
    const displayShow=()=>{
      setDisplay(true);
    }
    const displayNone=()=>
    {
      setDisplay(false);
    }
    const spaceCount=()=>{
      let space=0;
      for(let i=0;i<data.title.length;i++)
      {
          if(data.title[i]===" ")
          {
            space++;
          }
      }
      if(space===data.title.length)
      {
        return true;
      }
    }
    const InputData=(event)=>{
      setWarn("");
      if(event.target.name ==="title")
      {
        // setTitle(event.target.value);
        setData((oldData)=>{
          return{
            ...oldData,
            title:event.target.value
          }
        })
      }
      else
      {
        // setContent(event.target.value);
        setData((oldData)=>{
          return{
            ...oldData,
            content:event.target.value
          }
        })
      }
    }
    return (
    <div className='Input_Box'>
      <div className="input_data">
        {display?<input type="text" name="title" maxLength={15} id="" placeholder='Title (max in 15 Characters)' className='input1' value={data.title} autoComplete='off' onChange={InputData}/>:null}
        <textarea name="content" id="" cols="20" rows="10" placeholder='Write note...' onClick={displayShow} onDoubleClick={displayNone} value={data.content} className='input2' onChange={InputData}></textarea>
        <div className="button">        
        {display?(<Tooltip title="Add Note">
        <Fab color="primary" aria-label="add" onClick={addbutton} style={{height:"40px",width:"40px"}}>
        <AddIcon/>
      </Fab>
      </Tooltip>
      ):null}
      <div className="warnmessage">
          {warn}</div>
      </div>
    </div>
    </div>
  )
}
