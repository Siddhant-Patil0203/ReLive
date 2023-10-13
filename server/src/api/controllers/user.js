import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import generateToken from '../middlewares/generateToken.js'
import sendWelcomeMail from '../services/sendEmail.js';


/**
 * Route: /user/signup
 * Desc: user sign in
 */
export const signup = async (req, res) => {
        const { email, password } = req.body;

        //password regex
        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;

        // const emailDomains = [
        //     "@gmail.com",
        //     "@yahoo.com",
        //     "@hotmail.com"
        // ]

        // //check password
        // if(!regex.test(password)){
        //     return res.status(400).json({
        //         msg: "password must contain at least one uppercase letter one lowercase letter one special character and one number"
        //     })
        // }

        // //check email
        // if (!emailDomains.some((v) => email.indexOf(v) >= 0)) {
        //     return res.status(404).json({
        //         success: false,
        //         msg: "Please enter a valid email address",
        //     });
        // }
        

        const oldUser = await userModel.findOne({ email });
        try {
          if (!oldUser) {
            // hash password with bcrypt
            const hashedPassword = await bcrypt.hash(password, 12);
      
            // create user in database
            const result = await userModel.create({
              email,
              password: hashedPassword,
            });
      
            if (result) {
              const oldUser = await userModel.findOne({ email });
      
              const SECRET = process.env.USER_SECRET;
      
              const token = generateToken(oldUser, SECRET);
      
              req.session.user = {
                token: token,
                user: oldUser,
              };
      
            //   send welcome email
              sendWelcomeMail(email);
      
              res.status(200).json({
                result: oldUser,
                token,
                msg: "User added and logged in successfully",
              });
            }
          } else {
            res.status(403).json({
              success: false,
              msg: "user already exist",
            });
          }
        } catch (err) {
          console.log(err);
        }
}





//Route: /user/signin
//Desc: user sign in
export const signin = async (req, res) => {
        console.log("check");
        const { email, password } = req.body

        //finduser
        const oldUser = await userModel.findOne({email})

        if(oldUser){
            const isPasswordCorrect = bcrypt.compare(password, oldUser.password)

            const token = generateToken(oldUser, process.env.USER_SECRET)
            

            if(isPasswordCorrect){
                return res.status(201).json({
                    oldUser,
                    token
                })
            }
        }
        else{
            console.log("user does not exist");
            return res.status(404).json({
                msg: "user does not exist"
            })
        }

}



export const update = async (req, res) => {
     const id = req.id

     const {
        username,
        age,
        gender,
        weight,
        height,
        planType,
        reminderTime
     } = req.body

     const oldUser = await userModel.findOne(id)

     if(oldUser){
        const result = await oldUser.updateOne({
            username,
            age,
            gender,
            weight,
            height,
            planType,
            reminderTime
        })
        if(result){
            console.log(result)
            return res.send("user updated successfully")
        }
     }
     else{
        return res.send("user does not exist")
     }

}