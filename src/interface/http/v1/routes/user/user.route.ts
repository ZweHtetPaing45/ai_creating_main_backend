import { Router } from "express";
import { userContainer } from "../../../../../container/user/user.container";


const router = Router();

//Post Method
router.post('/register',userContainer.register.bind(userContainer));
router.post('/login',userContainer.login.bind(userContainer));
 

export default router;