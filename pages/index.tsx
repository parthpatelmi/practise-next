import Head from 'next/head'
import styles from '../styles/index.module.scss'


import React,{useState} from 'react'
import jwt from 'jsonwebtoken'


export default function Home () {
    const [username, setusername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("You are not logged in");

    const submitForm = async()=> {
        const res = await fetch("/api/login",{
            method:'POST',
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({username, password})
        }).then(t => t.json())

        const token = res.token;
        if(token){
            const json = jwt.decode(token) as {[key: string]:string} ;
            console.log(json)
            setMessage(`welcome ${json.username}and you are ${json.admin ? 'an admin' : 'not an admin'} `)
        }else{
            setMessage("something went wrong")
        }
    }
    return (
       <div>
           <h1>{message}</h1>
           <form>

            <input type="text" name="username" value={username} onChange={e => setusername(e.target.value)}/>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="submit" onSubmit={submitForm}/>
           </form>
       </div>
        
    )
}
