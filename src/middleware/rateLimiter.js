import rateLimit from 'express-rate-limit'

const oneHour = 60 * 60 * 1000
let limiter = rateLimit({
    max: 1000,
    windowMs: oneHour,
    message: "We have received too many requests from this device."
})

export default limiter