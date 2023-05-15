import React, { useState, useEffect, useRef } from 'react';
import useMousePosition from './useMousePosition';
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const positions = useMousePosition()
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    useEffect( () => {
        //console.log('document title effect is running')
        document.title = `click ${like} times`
    }, [like, on])
    useEffect(() => {
        if(didMountRef.current) {
            //console.log('this is updated')
        } else {
            didMountRef.current = true
        }
    })

    function handleAlertClick() {
        setTimeout(() => {
            //alert('you clicked on' + like)
            alert('you clicked on ' + likeRef.current)
        }, 3000)
    }
    return (
        <>
        <h2>x: {positions.x}, y: {positions.y}</h2>
        <button onClick={() => {setLike(like + 1); likeRef.current++}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        <button onClick={handleAlertClick}>Alert!</button>
        </>
    )
}
export default LikeButton;
