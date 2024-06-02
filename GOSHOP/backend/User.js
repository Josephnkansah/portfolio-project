const User = require('./UserSchema') 

const Register = async (req, res, next) => {
    console.log(req.body)
    try {
        const user = await User.create({...req.body})
        res.status(200).json({
            email:user.email, 
            userName: user.userName, 
            id: user._id})
    } catch (error) {
        next(error)
    }
}

const Login = async (req, res, next) => {
    try {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(400).json('please enter login details')
        }
        //checks if user exists in the User schema
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json('wrong email or password')
        }
        //compare password with the saved password in the User schema using the ComparePassword methode in the User Schema  
        const isPasswordCorrect = await user.ComparePassword(password)
        if(!isPasswordCorrect) {
            return res.status(400).json('wrong username or password')
        }
        res.status(200).json({ 
            email: user.email, 
            username: user.username,
            id: user._id
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    Login,
    Register
}