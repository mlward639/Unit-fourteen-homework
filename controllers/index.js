const router = require('express').Router();

const apiRoutes = require('./api');
const ___Routes = require('./___Routes');

router.use('/', __Routes);
router.use('/api', apiRoutes);

module.exports = router;

/*
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
*/