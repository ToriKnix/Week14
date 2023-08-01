const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
const apiController = require('../controllers/apiController');

const authMiddleware = require('../middleware/authMiddleware');
const isAuthorized = require('../middleware/isAuthorized');

router.get('/', homeController);

router.get('/post/:id', homeController);

router.get('/login', authController);
router.post('/login', authController);
router.get('/signup', authController);
router.post('/signup', authController);
router.get('/logout', authController);

router.get('/dashboard', authMiddleware, dashboardController);
router.get('/dashboard/new', authMiddleware, dashboardController);
router.post('/dashboard/new', authMiddleware, dashboardController);
router.get('/dashboard/edit/:id', authMiddleware, isAuthorized, dashboardController);
router.put('/dashboard/edit/:id', authMiddleware, isAuthorized, dashboardController);
router.delete('/dashboard/edit/:id', authMiddleware, isAuthorized, dashboardController);

router.post('/api/comment/:id', authMiddleware, apiController);
router.delete('/api/comment/:id', authMiddleware, isAuthorized, apiController);

module.exports = router;
