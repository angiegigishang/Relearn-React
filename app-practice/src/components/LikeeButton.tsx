import React, { useState, useEffect } from 'react';
import useMousePosition from './useMousePosition';
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const positions = useMousePosition()
    useEffect( () => {
        console.log('document title effect is running')
        document.title = `click ${like} times`
    }, [like, on])
    return (
        <>
        <h2>x: {positions.x}, y: {positions.y}</h2>
        <button onClick={() => {setLike(like + 1)}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        </>
    )
}
export default LikeButton;
