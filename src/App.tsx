// import { useState, useEffect  } from 'react'
import ColorSpinner from './components/Loaders/Spinner/ColorSpinner/ColorSpinner'
import ThreeSpinner from './components/Loaders/Spinner/ThreeSpinner/ThreeSpinner'
import ProgressBar from './components/Loaders/ProgressBar/ProgressBar'


const App = () => {


  return (
    <>
    <ColorSpinner size='medium' color='blue' />
    <ThreeSpinner size='medium'/>
    <ProgressBar value={10} max={100} color='black' backgroundColor='blue' borderRadius={10} />

    </>
  )
}
  

export default App