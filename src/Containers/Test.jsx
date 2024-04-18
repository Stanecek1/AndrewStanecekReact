import { useEffect, useRef, useState } from "react"
import { Button } from "@mui/material"



const Test = () => {

    const [color, setColor] = useState('')
    const [answer, SetAnswer] = useState()
    const [options, setOptions] = useState([])
    const [message, setMessage] = useState('test')


    useEffect(() => {
        SetUp()
    },[])

    const SetUp = () => {

        let firstColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        let secondColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        let thirdColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

        let colorArray = [firstColor, secondColor, thirdColor]
        setOptions(colorArray)
        let correct = Math.floor(Math.random() * (2 - 0));
        SetAnswer(correct)
        setColor(colorArray[correct])
    }

    const CheckAnswer = (option) => {
        if (option === answer){
            //we win
            setMessage('Correct')
        }
        else{
            //loser
            setMessage('Incorrect')
        }
        SetUp()
    }


    return (
        <div className="h-full">
            <div className="flex justify-center align-middle">
                <div style={{backgroundColor: color}} className={`h-[200px] w-[200px]`}></div>
            </div>
            <div className="flex justify-center pt-2">
                <div className=" grid grid-cols-3 gap-2 w-[400px]">
                    <Button variant="contained" onClick={(event) => {CheckAnswer(0)}}>{options[0]}</Button>
                    <Button variant="contained" onClick={(event) => {CheckAnswer(1)}}>{options[1]}</Button>
                    <Button variant="contained" onClick={(event) => {CheckAnswer(2)}}>{options[2]}</Button>
                </div>
            </div>
            <div className="flex justify-center">
                {message === 'Correct' && 
                
                    <h1 className="text-green-500">{message}</h1>
                }
                 {message === 'Incorrect' && 
                
                <h1 className="text-red-500">{message}</h1>
            }
                
            </div>

        </div>
    )
}

export default Test