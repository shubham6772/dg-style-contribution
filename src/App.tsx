// import { useState, useEffect  } from 'react'
import ColorSpinner from './components/Loaders/Spinner/ColorSpinner/ColorSpinner'
// import ThreeSpinner from './components/Loaders/Spinner/ThreeSpinner/ThreeSpinner'
// import ProgressBar from './components/Loaders/ProgressBar/ProgressBar'
// import CheckBox from './components/Basic/CheckBox/CheckBox'
import { useState } from 'react'
import List from './components/Basic/List/List'


const App = () => {

  const [list, setList] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13]);
  const[end, setend] = useState(false);

  return (
    <>
    {/* <ColorSpinner size='medium' color='blue' />
    <ThreeSpinner size='medium'/>
    <ProgressBar value={10} max={100} color='black' backgroundColor='blue' borderRadius={10} />
    <CheckBox isChecked={(status:boolean)=>{console.log(status)}} color={"red"} /> */}
      <List 
        data={list}
        dataRequired={()=>{
          setList((prev)=>[...prev, 35,3,4,5,6,10000000000])
          setend(true);
        }}
        renderItem={(item : any, index : any)=>{
              return(
                  <div key={index}>
                    <h1>heyyyyyyyy{item}</h1>
                     <u></u>
                  </div>
              )
        }}
        loadingSize={5}
        isDataEnded={end}
        loaderComponent={()=><div><ColorSpinner/></div>}
      />
    </>
  )
}
  

export default App

//is data ended need to be fixed