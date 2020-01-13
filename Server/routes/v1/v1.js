import express from 'express'
import * as API from './api'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        code: 200,
        v: 'v1',
        status: 'OK'
    })
})

router.post('/auth/signup', API.signUp)

router.post('/auth/signin', API.signIn)

export default router