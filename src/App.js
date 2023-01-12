import React ,{useState}from 'react';
import './App.css';
import Header from './Components/Header';
import InputBox from './Components/InputBox';
import ShowNote from './Components/ShowNote';
import Footer from './Components/Footer';

function App() {
  const [notesData,SetNotesData]=useState([]);
  const delNote=(id)=>{
    console.log(id);
    SetNotesData((oldData)=>{
      return oldData.filter((value,index)=>{
        return index!==id;
      })
    })
  }
  const addNote=(note)=>{
    // console.log(note);
    // console.log("Clicked!");
    SetNotesData((oldData)=>{
      return [...oldData,note]
    })
    // console.log(notesData);
  }
  return (
  <>
  <Header key={0}/>
  <InputBox click={addNote}/>
  <div className="notesSection">
  {notesData.map((value,index)=>{
    return (
      <ShowNote note_title={value.title} note_content={value.content} delfunc={delNote} key={index} id={index}/>
  )
  })
}

  </div>
  <Footer />
  </>
  );
}

export default App;
