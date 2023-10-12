import userModel from '../models/userModel.js'



/**
 * Route: /user/signup
 * Desc: user sign in
 */
export const signup = async (req, res) => {
        const { email, password, confirmPassword} = req.body;

        //check for already existing user
        const oldUser = await userModel.findOne({email})

        if(oldUser){
            return res.status(400).json({
                msg: "user already exists"
            })
        }

        

        //create user
        const newUser = await userModel.create({
            email,
            password
        })

        if(newUser){
            res.status(201).json({
                msg: "user signed up successfully",
                email: newUser.email
            })
        }
}