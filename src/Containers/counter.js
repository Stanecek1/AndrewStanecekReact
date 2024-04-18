import { Button } from "@mui/material";
import useCounter from "../Hooks/useCounter"

const Counter = ({initalCount}) => {
    const {count, incremenet, decrement, restart, switchSigns} = useCounter(initalCount)

    return (
        <div>
            <div>
            <h1 className="flex">
                Count: <p className="pl-2" data-testid='count'>{count}</p>
            </h1>
            </div>
            <div className="flex gap-5">
                <Button color="secondary" variant={'contained'} onClick={incremenet}>Increment</Button>
                <Button className="" variant={'contained'} onClick={decrement}>Decrement</Button>
                <Button className="" variant={'contained'} onClick={restart}>Restart</Button>
                <Button className="" variant={'contained'} onClick={switchSigns}>Switch Signs</Button>
            </div>
        </div>
    ) 
}

export default Counter