import './../index.css';
import React from 'react'

function MainForm({onHexChange, form}) {
  return (
      <form className="form" onSubmit={e => e.preventDefault()}>
        <input className="input" id="hex" name="hex" value={form.hex} maxLength="7" onChange={onHexChange}/>
        <span className="label rgb" hidden={form.rgb===''}>{form.rgb}</span>
      </form>
  )
}

export default MainForm;
