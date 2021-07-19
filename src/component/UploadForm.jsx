import React, { useState } from 'react'
import Progressbar from './Progressbar';

function UploadForm() {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

  const changeHandeler=(e)=>
{
  let selected= e.target.files[0];
  const types=['image/png','image/jpeg'];
  

  if(selected && types.includes(selected.type))
  {
   setfile(selected);
   seterror('');
  }
  else
  {
    setfile(null);
    seterror('Please select an image file (png or jpeg)');

  }

}


  return (
    <div>
      <form>
        <input type="file" onChange={changeHandeler}/>
        <div className='output'>
          { error &&  <div className='error'>{error}</div> }
          {file && <div> {file.name} </div>  }
          {file && <Progressbar file={file} setfile={setfile}/>}
        </div>
      </form>
      
    </div> 
  ) 
}

export default UploadForm;
