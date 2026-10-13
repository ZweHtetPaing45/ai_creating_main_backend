import { Router } from "express";
import { documentPageContainer } from "../../../../../container/document-page/document-page.container";
import { authMiddleware } from "../../../../../container/user/user.container";

const router = Router();

//Get Method
router.get('/',authMiddleware.handle.bind(authMiddleware),documentPageContainer.getAllList.bind(documentPageContainer));
router.get("/:documentId",authMiddleware.handle.bind(authMiddleware),documentPageContainer.getDocumentPage.bind(documentPageContainer));

//Patch Method
router.patch('/:page_id',authMiddleware.handle.bind(authMiddleware),documentPageContainer.updateContent.bind(documentPageContainer));

export default router;