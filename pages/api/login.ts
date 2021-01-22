import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

const KEY = "dkjffjhdbfgdhdfbdhfhjdnnjhfhsfsjkdnjnkj";

export default function (req:NextApiRequest, res: NextApiResponse){
    //use req and res methods
    if(!req.body){
        res.statusCode = 404;
        res.send("error")
        return
    }
    const {username, password} = req.body

    res.json({
        token: jwt.sign({
            username,
            admin: username === "admin" && password === "admin"
        },  KEY)
    })
}