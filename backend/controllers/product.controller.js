import Product from "../models/product.model.js"
import mongoose from "mongoose"; // Importing mongoose for ObjectId validation


export const getProducts = async (req,res)=> {
    try{
        const products = await Product.find({}); // Fetch all products from the database
        res.status(200).json({success:true, data: products});
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }

};

export const createProduct = async (req,res)=> {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "All fields are required"});
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }

};

export const updateProduct = async (req,res)=> {
    const { id } = req.params; // Extracting id from the URL
    const product = req.body; // user will send this data

    if(!mongoose.Types.ObjectId.isValid(id )){
        return res.status(404).json({success:false, message: "Invalid product id"});
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // Find the product by id and update it
        res.status(200).json({success:true, data: updatedProduct});
    } catch (error) {

        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const deleteProduct = async (req,res)=> {
    const { id } = req.params; // Extracting id from the URL
    
    if(!mongoose.Types.ObjectId.isValid(id )){
        return res.status(404).json({success:false, message: "Invalid product id"});
    }

    try{
        await Product.findByIdAndDelete(id); // Find the product by id and delete it
        res.status(200).json({success:true, message: "Product deleted successfully"});
    } catch (error) {
        console.log("Error in deleting product:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }

};

