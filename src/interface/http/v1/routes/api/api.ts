import {Router} from 'express';
import AuthRouter from '../user/user.route';
import pdfRouter from '../document/document.route';
import documentPageRouter from '../document-page/document-page.route';
import ocrRouter from "../ocr/ocr.route";
import voiceRouter from "../voice/voice.route";

const router = Router();

router.use('/auth',AuthRouter);
router.use('/pdf',pdfRouter);
router.use('/document_page',documentPageRouter);
router.use('/ocr',ocrRouter);
router.use('/voice',voiceRouter);

export default router;