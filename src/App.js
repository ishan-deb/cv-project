import { useState } from 'react';
import './App.css';
import EduInfoForm from './components/EduInfoForm';
import GenInfoForm from './components/GenInfoForm';
import WorkExpForm from './components/WorkExpForm';

function App() {
  const [showGenForm, setShowGenForm] = useState(false)
  const [showEduForm, setShowEduForm] = useState(false)
  const [showWorkForm, setShowWorkForm] = useState(false)

  return (
    <div className="App">
      <header>
        <h1>CV CV CV</h1>
      </header>

      <button onClick={() => {
        setShowGenForm(true)
      }}> Gen Button</button>

      {showGenForm && <GenInfoForm />}
      <button onClick={() => {
        setShowEduForm(true)
      }}> Edu Button</button>
      
      {showEduForm && <EduInfoForm />}

      <button onClick={() => {
        setShowWorkForm(true)
      }}> Work Button</button>

      {showWorkForm && <WorkExpForm />}
    
    </div>
  );
}

export default App;
