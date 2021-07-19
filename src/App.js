import { useState } from 'react';
import './App.css';
import ImageGrid from './component/ImageGrid';
import Modal from './component/Modal';
import UploadForm from './component/UploadForm';

function App() {
  const [selectedImg, setselectedImg] = useState(null)
  return (
    <div className="App">
      <h1>Images</h1>
      <UploadForm/>  
      <ImageGrid setSelectedImg={setselectedImg}/>
     {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setselectedImg}/>} 
    </div>
  );
}

export default App;
