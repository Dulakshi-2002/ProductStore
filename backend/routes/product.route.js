import express from 'express';

import { createProduct, getProducts, updateProduct , deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.get("/",getProducts); // Fetch all products from the database

router.post("/", createProduct); // Create a new product

router.delete("/:id", deleteProduct); // Delete a product by id
      
router.put("/:id", updateProduct); // Update a product by id

export default router;