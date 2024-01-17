import Table from "../Component/Table"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Dashboard(){
    const [artikel, setArtikel] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8080/article')
        .then(response => {
            setArtikel(response.data.data)
        })
        
    },[])

    return(
        <>
     <div className="card">
     <div className="card-header">
    Dashboard
    </div>
    <div className="card-body">
      <Table data={artikel}/>
    </div>
    </div>
        </>
    )
}