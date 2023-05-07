import React from 'react'
// import { useState } from 'react'
import { useEffect } from 'react'


function API(props) {

    console.log("API Rendered")

    
    useEffect(() => { 
   async function callAPI() {


    const apiUrl = "https://fakestoreapi.com/products";

        const reply = await fetch(apiUrl)
        const data =  await reply.json()
        await props.setReply(data)
    }

    callAPI()

    }, [])

    return ( 
        <>
        </>
    )


}



export default API