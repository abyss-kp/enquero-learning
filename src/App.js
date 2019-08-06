import React from 'react';
import './App.css';
import InputField from './components/index'
import Display from './components/display'
function App() {
  return (
   <div style={{marginLeft:'20%',paddingRight:'10%'}}>
<h1>To-Do App</h1>
<InputField/>
<Display/>
   </div>
  );
}

export default App;
