import { Router } from "express";
import { documentContainer } from "../../../../../container/document/document.container";
import { upload } from "../../middlewares/upload.middleware";
import { authMiddleware } from "../../../../../container/user/user.container";

const router = Router();

//Post Method
router.post('/upload',authMiddleware.handle.bind(authMiddleware),upload.single('pdf'),documentContainer.create.bind(documentContainer));


export default router;