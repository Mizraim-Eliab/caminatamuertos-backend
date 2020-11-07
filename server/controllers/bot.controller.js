
const userController = {};


// /GET all users

userController.getUsers = async (req, res) =>{
    console.log("Hola Node");
//    const users =  await user.find();
//    res.json(users);
} 
// /GET only one user
userController.getUser = async (req , res) =>{
    // const getUs = await user.findById(req.params.id);
    // res.json(getUs);
}
// /POST new user
userController.createUser = async (req, res) => {
    // const newUser = new user(req.body);
    // await newUser.save();
    // res.json({
    //     status: "User saved"
    // });
}
// /PUT update user
userController.editUser = async (req, res) =>{
    // const {id} = req.params;
    // const oneUser = {
    //     email: req.params.email,
    //     password: req.params.password
    // };
    // await user.findByIdAndUpdate(id, {$set: oneUser}, {new:true} );
    // res.json({
    //     status: "User Updated"
    // })
}

// /DELETE user
userController.deleteUser = async (req, res) =>{
    // await user.findByIdAndRemove(req.params.id);
    // res.json({
    //     status: "User Deleted"
    // })
}
 
module.exports = userController;