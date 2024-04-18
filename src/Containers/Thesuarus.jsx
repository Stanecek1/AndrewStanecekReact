import { useEffect, useState } from "react"
import { TextField, Button } from "@mui/material"
import useFetchSynonyms from "../Hooks/useFetchSynonyms";



const Thesuarus = () => {
    const [value, setValue] = useState();
    const {fetchData, similarWords, isLoading} = useFetchSynonyms()

    return (
        <div className="w-[400px] m-2">
            <div className="flex justify-center" ><h1>Synonmy Finder</h1></div>
            <div className="flex ">
                <TextField onChange={(event) => {setValue(event.target.value)}}></TextField>
                <div  className="my-auto pl-2">
                <Button variant="contained" onClick={() => {fetchData(value)}}>Sumbit</Button>
                </div>
            </div>
            <div>
                {isLoading ?  <h1>Loading</h1> :
                <>
                {similarWords.length > 0 && 
                <ul>
                    
                    {similarWords.map((word) => {
                        return(<li>{word}</li>)
                    })}
                </ul>
                }
                </>
                }
            </div>
        </div>
    )
}

export default Thesuarus