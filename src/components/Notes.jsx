import React, { useContext, useEffect, useRef,useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })


  useEffect(() => {
    getNotes();
    // eslint-disable-next-line 
  }, [])

  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const ref = useRef(null);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log('upadting a note ...', note)
  }



  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>

                <div className="mb-3">
                  <label className="form-label">tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick} >Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className='row my-3'>
        <h2> Your Notes</h2>
        {notes.map((note) => {

          return <NoteItem key={note._id} updateNote={updatenote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes