import React from 'react'
import {Link} from 'react-router-dom'
const DisplayLinks = () => {
  return (
    <>
    <h3>Display Links</h3>

    <Link to="/parent">Parent</Link><br/>
    <Link to="textrender">Text Render</Link><br/>
    <Link to="passingeventargclass">PassingEventargclass</Link><br/>
    <Link to="datarenderbootstraptable">Data Render Bootstrap Table</Link><br/>
    <Link to="/jsonex">Json Example</Link><br/>
    <Link to="/counterapp">counter App Example</Link><br/>
    <Link to="/usememohook">Use Memo Hook Example</Link><br/>
    <Link to="/usecallbackex">UseCallback Example</Link><br/>
    <Link to="/useeffectvsusememo">useeffect vs usememo Example</Link><br/>

   
    <p>-----------------------------</p>
    
    </>
  )
}

export default DisplayLinks