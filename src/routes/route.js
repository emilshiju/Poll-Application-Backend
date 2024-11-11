import express from "express"
import Register from "../controller/register.js"
import Login from "../controller/login.js"
import { createPoll, getPoll } from "../controller/pollManagement.js"
import { getAllMessaege, setMessage } from "../controller/messageManagement.js"

const router=express()



router.post('/login',Login)

router.post('/register',Register)

router.post('/createPoll',createPoll)

router.get('/getPoll/:id',getPoll)


router.get('/getAllMessaege',getAllMessaege)


export default router