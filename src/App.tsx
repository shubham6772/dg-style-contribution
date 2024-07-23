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
  const[datCompleted, setDataCompleted] = useState(false)

  return (
    <>
    {/* <ColorSpinner size='medium' color='blue' />
    <ThreeSpinner size='medium'/>
    <ProgressBar value={10} max={100} color='black' backgroundColor='blue' borderRadius={10} />
    <CheckBox isChecked={(status:boolean)=>{console.log(status)}} color={"red"} /> */}
      <List 
        data={list}
        dataRequired={()=>{
          setTimeout(()=>{
            if(!datCompleted){
              setList((prev)=>[...prev, 14, 15,16,17,18,19])
              setDataCompleted(true)
            }else{
               setend(true)
            }
          },2000)

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
        hideEndMessageComponent={false}
        loaderComponent={()=><div><ColorSpinner/></div>}
      />
    </>
  )
}
  

export default App
