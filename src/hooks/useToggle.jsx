import { useState } from "react";


const useToggle = () => {

const [toggle, setToggle] = useState(false)

let handleToggle = () => {
  setToggle(prevToggle=>!prevToggle)
}

return[toggle, handleToggle]
}

export default useToggle;