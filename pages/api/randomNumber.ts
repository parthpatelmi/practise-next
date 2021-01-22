import {NextApiRequest, NextApiResponse} from 'next'

export default function (req:NextApiRequest, res: NextApiResponse){
    //use req and res methods
    res.json({num: Math.floor(Math.random() *10)})
}