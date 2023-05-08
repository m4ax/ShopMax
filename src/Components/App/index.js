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
    const [ input, setInput ] = useState("")

    const options = ["All Products", "men's clothing", "women's clothing", "electronics", "jewelery"];
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    useEffect(() => {
        console.log("State Updated", reply)
     }, [reply])

    // reply.map((product) => (Card))
     console.log(typeof input)
     console.log(typeof reply.title)
    return (
    <div>
    <ThemeProvider theme={theme}>
    <API setReply={setReply}/>
    <SearchAppBar input={input} setInput={setInput} value={value} setValue={setValue} inputValue={inputValue} setInputValue={setInputValue} options={options}/>
    {reply.filter(product => product.title.toLowerCase().includes(input.toLowerCase()) && product.category === value).map((product) =>
    
    <Card product={product}/>
    )}
   </ThemeProvider>
    </div>
)}

export default App