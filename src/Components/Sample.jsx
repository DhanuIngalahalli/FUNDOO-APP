import React from 'react'

export default function () {
    const [count,setcount] = useState(0);
    return (
        <div>
            <button onClick={()=>setcount(count+1)}</button>
        </div>
    )
}
