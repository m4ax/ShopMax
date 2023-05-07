import React from 'react'
import { useState, useEffect } from 'react'
import API from '../API/index'
import Card from '../Card/index'

function App() {

const initialState = [{
title: "Searching..",
img: "https://emojis.wiki/thumbs/emojis/magnifying-glass-tilted-right.webp",
description: "Searching for Description..",
price: "Coming soon.."
}]

    //state to store the reply from the API.
    const [ reply, setReply ] = useState(initialState)

    useEffect(() => {
        console.log("State Updated", reply)
     }, [reply])

    // reply.map((product) => (Card))

    return (
    <div>
    <API setReply={setReply}/>
    {reply.map((product, index) =>
    
    <Card index={index} product={product}/>
    )}
    </div>
)}

export default App