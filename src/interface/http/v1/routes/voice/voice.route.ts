import { Router } from "express";
import { voiceContainer } from "../../../../../container/voice/voice.container";
import { authMiddleware } from "../../../../../container/user/user.container";


const router = Router();


router.post('/generate/:documentId',authMiddleware.handle.bind(authMiddleware),voiceContainer.createVoice.bind(voiceContainer));


export default router;