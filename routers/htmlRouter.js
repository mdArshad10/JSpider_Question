import express from 'express';

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({
      message: "html ka theory hi padhna hoga ?",
      status:200
    });
})

export default router;