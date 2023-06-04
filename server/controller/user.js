const bcrypt = require('bcrypt');
const UserModel = require('../model/user');
const jwt = require('jsonwebtoken')
require("dotenv").config();


//register
exports.registerUser = async (req, res) => {
    try {
        const { fullname,  email, phoneNumber, password, role } = req.body;
        // Check if the phone number already exists
        const existingUser = await UserModel.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        // Hashpassword
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword, // Store hashed password in db
            role,
        });
        await UserModel.create(newUser);
        res.status(201).json({ message: 'Registered successfully' });
    } catch (error) {
        console.error('Error creating register:', error);
        res.status(500).json({ error: 'Failed to create register' });
    }
};

// Login 
exports.loginUser = async (req, res) => {

    const { phoneNumber, password } = req.body;
    // Check if the user exists with the provided phone number
    const user = await UserModel.findOne({ phoneNumber });

    if (user) {
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            // phonenumber,password are valid to  generate JWT token
            const token = jwt.sign({ phoneNumber: phoneNumber }, process.env.JWT_KEY );
            //send any data from db ,you can access from frontend and can use in redux
            res.json({ message: "Login Succcess", success: true, token: token, role: user.role, id: user._id, fullname: user.fullname, phoneNumber: user.phoneNumber }) 

        } else {
            res.json({ message: "Login Failed", success: false })
        }
    } else {
        res.json({ message: "user does not exist", success: false })
    }
};
