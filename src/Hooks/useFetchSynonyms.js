
import { useEffect, useState } from "react"

const useFetchSynonyms = () => {
    const [similarWords, setSimilarWords] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (value) => {
        setIsLoading(true)
        fetch(`https://api.datamuse.com/words?ml=${value}`)
        .then((data) => { 
            return data.json()
        }).then((data) => {
            console.log(data)
            let tempArray = []
            for (let i=0; i < 7; i++){
                tempArray.push(data[i].word)
            }
            // return tempArray
            setSimilarWords(tempArray);
            setIsLoading(false)
            
        }).catch(() => {
            setIsLoading(false)
        })
    }
    return {fetchData, similarWords, isLoading}
}

export default useFetchSynonyms