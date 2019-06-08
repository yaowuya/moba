module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category")

    router.post("/category/create", async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.get("/category/list",async (req,res)=>{
        const items=await Category.find().limit(10)
        res.send(items)
    })

    router.get("/category/list/:id",async (req,res)=>{
        const items=await Category.findById(req.params.id)
        res.send(items)
    })

    router.put("/category/update/:id",async (req,res)=>{
        const model=await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete("/category/delete/:id",async (req,res)=>{
        await Category.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })

    app.use("/admin/api", router)

}