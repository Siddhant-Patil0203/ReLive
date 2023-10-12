import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'


/**
 * Route: /user/signup
 * Desc: user sign in
 */
export const signup = async (req, res) => {
        const { email, password, confirmPassword } = req.body;

        //check for already existing user
        const oldUser = await userModel.findOne({email})

        if(oldUser){
            return res.status(400).json({
                msg: "user already exists"
            })
        }


        //check confirm password
        if(password !== confirmPassword){
            res.status(400).json({
                msg: "confirm password doesn't match"
            })
        }

        //password regex
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;

        const emailDomains = [
            "@gmail.com",
            "@yahoo.com",
            "@hotmail.com"
        ]


        //check password
        if(!regex.test(password)){
            return res.status(400).json({
                msg: "password must contain at least one uppercase letter one lowercase letter one special character and one number"
            })
        }


        //check email
        if (!emailDomains.some((v) => email.indexOf(v) >= 0)) {
            return res.status(404).json({
                success: false,
                msg: "Please enter a valid email address",
            });
        }

        
        const hashedPassword = await bcrypt.hash(password, 12)
        //create user
        const newUser = await userModel.create({
            email,
            password: hashedPassword
        })

        if(newUser){
            res.status(201).json({
                msg: "user signed up successfully",
                email: newUser.email
            })
        }
}