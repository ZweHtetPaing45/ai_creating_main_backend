import { Router } from "express";
import { ocrContainer } from "../../../../../container/ocr/ocr.container";
import { authMiddleware } from "../../../../../container/user/user.container";

const router = Router();

//Post Method
router.post('/:documentId/process',authMiddleware.handle.bind(authMiddleware),ocrContainer.process.bind(ocrContainer));
router.post('/process',authMiddleware.handle.bind(authMiddleware),ocrContainer.oneOrMoreProcess.bind(ocrContainer));


export default router;