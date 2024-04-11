import { useState } from "react"
import data from "./data.js"
import './style.css'


const Accordian = () => {
  const [selection, setSelection] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (getcurrentid) => {
      console.log(getcurrentid)
      setSelection(getcurrentid === selection ? null : getcurrentid)
  }

  const handleMultiSelection = (getcurrentid) => {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getcurrentid)

    if(findIndexOfCurrentId === -1){
        copyMultiple.push(getcurrentid)
    }else{
        copyMultiple.splice(findIndexOfCurrentId, 1)
    }
    setMultiple(copyMultiple)
    // if(multiple.includes(getcurrentid)){
    //     setMultiple(multiple.filter((item) => item !== getcurrentid))
    // }else{
    //     setMultiple([...multiple, getcurrentid])
    // }
  }
  
    return (
    <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
        <div className="accordian">
            {
                data && data.length>0 ?
                data.map((item) => (
                    <div className="item">
                        <div onClick={enableMultiSelection? () => handleMultiSelection(item.id) : () =>handleSingleSelection(item.id)} className="title">
                            <h3>{item.question}</h3>
                            <span>+    </span>
                            <div>
                                {
                                    enableMultiSelection ? 
                                    multiple.indexOf(item.id) !== -1 && <div className="content">{item.answer}</div> : selection === item.id && <div className="content">{item.answer}</div>
                                }
                               
                            </div>
                        
                        </div>
                    </div>
                ))
                : <div>No Data</div>
            }
        </div>
    </div>
  )
}

export default Accordian