const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser = require("body-parser");
router.use(bodyparser.json());



router.post("/blog", async (req, res) => {
    try{
        const user = await Blog.create(req.body)
        res.json({
            status: "Success",
            user
        })
    }catch(e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.put('/blog:id',async (req,res)=>{
    console.log(req.params)
    try{
        const user=await Blog.updateMany({"_id":req.params.id},req.body);
        console.log(user)
        res.json({
            status:"success",
            user
        })
        
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.delete('/blog:id',async (req,res)=>{
    console.log(req.params)
    try{
        const delUser=await Blog.find({"_id":req.params.id});
        const user=await Blog.deleteOne({"_id":req.params.id});
        console.log(user)
        res.json({
            status:"success",
            delUser
        })
        
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})





router.get("/blog", async (req, res) => {
   
    try{
        const {page,search}=req.query;
        // Write the code to fetch the data
        console.log(req.query)
        const users = await Blog.find({topic :search}).limit(parseInt(page));
        res.json({
            status: "Success",
            users: users
        })
    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});




module.exports = router;

// const router = require('express').Router();
// const Blog = require('../models/Blog')
// // Your routing code goes here
// router.get('/blog',async (req,res)=>{
//     try{
//         const search=req.url.split("?")[1].split("&")[1].split("=")[1]
//         let user=await Blog.find({topic:search})
//         res.json({status:"success",result:user})
//     }
//     catch(e){
//         res.json({status:"Failed",result:e.message})
//     }
// })
// router.post('/blog',async (req,res)=>{
// //   console.log(req.body)
// try{
//     let user=await Blog.create(req.body)
//     res.json({status:"success",result:user})
// }
// catch(e){
//     res.json({status:"Failed",result:e.message})
// }
// })
// router.put('/blog/:id',async (req,res)=>{
//     try{
//         let user=await Blog.updateOne({_id:req.params.id},{$set:{posted_by:req.body.posted_by}})
//         let particular=await Blog.find({_id:req.params.id})
//         res.json({status:"success",result:particular})
//     }
//     catch(e){
//         res.json({status:"Failed",result:e.message})
//     }
// })
// router.delete('/blog/:id',async (req,res)=>{
//     //   console.log(req.body)
//     try{
//         let particular=await Blog.find({_id:req.params.id})
//         let user=await Blog.deleteOne({_id:req.params.id})
//          res.json({status:"success",result:particular})
//     }
//     catch(e){
//         res.json({status:"Failed",result:e.message})
//     }
// })
// module.exports = router;
