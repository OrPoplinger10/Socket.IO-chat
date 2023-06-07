import express, {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get("/data", async(request: Request, response: Response, next: NextFunction) => {
    try{
        // .......


    }
    catch(err: any){

        next(err)
    }
})









export default router