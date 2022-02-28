// Import express
import express from "express";

// Import Controller Product
import { 
    getUsers,
    loginUser
 } from "../controllers/User.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua users
router.get('/users', getUsers);
router.post('/login', loginUser)
// // Route get product by id
// router.get('/products/:id', getProductById);
// // Route create product baru
// router.post('/products', createProduct);
// // Route update product by id
// router.put('/products/:id', updateProduct);
// // Route delete product by id
// router.delete('/products/:id', deleteProduct);
 
// export router
export default router;