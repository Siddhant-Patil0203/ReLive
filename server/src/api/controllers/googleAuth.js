import  passport  from 'passport'
import generateToken from "../middlewares/generateToken.js";



/**
 * Route: /auth/google
 * Desc:  Open google consent screen
 */
export const authGoogle = passport.authenticate('google', { scope: [ 'email', 'profile' ]})


/**
 * Route: /auth/google/callback
 * Desc: handle callback from google
 */
export const callbackGoogle = passport.authenticate('google', { successRedirect: '/auth/protected', failureRedirect: '/auth/failed' })




export const  authenticated = (req, res)=>{

  const SECRET = process.env.USER_SECRET
  const token = generateToken(req.user, SECRET);


    res.status(200).json({
      success: true,
      result: req.user,
      token: token
    })
}


export const failed = (req, res)=>{
  res.status(401).send("google authentication failed")
}