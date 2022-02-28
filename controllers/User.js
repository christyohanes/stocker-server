// Import model Product
import User from "../models/User.js";
 
// Get semua user
export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}

//Login
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(400).send({
                status: "400",
                message: "Failed! Email doesn't exist!"
            })
        } else {
            const userLogin = await User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
            console.log(userLogin)
            if(userLogin){
                return res.status(200).send({
                    status: "200",
                    message: "Login Successful"
                })
            } else {
                return res.status(400).send({
                    status: "400",
                    message: "Login Failed"
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}
 
// // Get product berdasarkan id
// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.send(product[0]);
//     } catch (err) {
//         console.log(err);
//     }
// }
 
// // Create product baru
// export const createProduct = async (req, res) => {
//     try {
//         await Product.create(req.body);
//         res.json({
//             "message": "Product Created"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
 
// // Update product berdasarkan id
// export const updateProduct = async (req, res) => {
//     try {
//         await Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Updated"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
 
// // Delete product berdasarkan id
// export const deleteProduct = async (req, res) => {
//     try {
//         await Product.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Deleted"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }