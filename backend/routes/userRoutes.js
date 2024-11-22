import express from "express";
const router = express.Router();
import { authenticate, authorizedAdmin } from "../middlewares/authMiddleware.js";
import  {
    createUser,
    loginUser, 
    logoutCurrentUser, 
    getAllUsers,
    getCurrentUserProfile,
    updateCurretnUserProfile,
} from "../controllers/userController.js";


router.route('/').post(createUser).get(authenticate, authorizedAdmin, getAllUsers)
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);

router
    .route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurretnUserProfile)


export default router;