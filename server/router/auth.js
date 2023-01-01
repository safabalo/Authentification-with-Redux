const router = require('express').Router();

const authController = require('../controller/authentification');
const tryCatch = require('../middleware/tryCatch');
const errorHandller = require('../middleware/errorHandler');


router.post('/login', tryCatch(authController.login));
router.post('/register', tryCatch(authController.register));
router.get('/verify-email/:token', tryCatch(authController.verifyEmail));
router.post('/forgot-password', tryCatch(authController.forgetPassword));
router.get('/verify-forgot-password/:token', tryCatch(authController.verifyForgetPassword));
router.post('/form-forgot-password', tryCatch(authController.formForgetPassword));
router.get('/logout', tryCatch(authController.logout));

router.use(errorHandller)


module.exports = router;