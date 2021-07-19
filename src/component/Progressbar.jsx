import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export default function Progressbar({file, setfile}) {


  const {url, progress} = useStorage(file);

  useEffect(() => {
    if(url)
    {
      setfile(null);
    }
  }, [url, setfile])

  return (
    <div className="progress-bar" style={{width: progress + "%"}}>

    </div>
  )
}
