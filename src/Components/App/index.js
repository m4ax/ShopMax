import React from 'react'
import { useState, useEffect } from 'react'
import API from '../API/index'
import Card from '../Card/index'
import SearchAppBar from '../SearchAppBar/index'
import theme from '../ThemeProvider/theme'
import { ThemeProvider } from '@mui/material/styles';


function App() {

const initialState = [{
title: "Searching..",
img: "https://emojis.wiki/thumbs/emojis/magnifying-glass-tilted-right.webp",
description: "Searching for Description..",
price: "Coming soon.."
}]

    //state to store the reply from the API.
    const [ reply, setReply ] = useState(initialState)
    const [ input, setInput ] = useState([])

    useEffect(() => {
        console.log("State Updated", reply)
     }, [reply])

    // reply.map((product) => (Card))

    return (
    <div>
    <ThemeProvider theme={theme}>
    <API setReply={setReply}/>
    <SearchAppBar input={input} setInput={setInput} />
    {reply.filter(product => product.title.toLowerCase().includes(input.toLowerCase())).map((product, index) =>
    
    <Card index={index} product={product}/>
    )}
   </ThemeProvider>
    </div>
)}

export default App