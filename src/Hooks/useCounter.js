import { useCallback, useState } from "react"

const useCounter = (initalCount) => {
    const [count, setCount] = useState(initalCount);

    const incremenet = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])

    const decrement = useCallback(() => {
        setCount((prev) => prev - 1);
    }, [])

    const restart = useCallback(() => {
        setCount(0);
    }, [])

    const switchSigns = useCallback(() => {
        setCount((prev) => prev * -1);
    }, [])

    return{count, incremenet, decrement, restart, switchSigns}
}

export default useCounter