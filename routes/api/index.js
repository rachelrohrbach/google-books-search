const router = require(`express`).Router();
const bookRoutes = require(`./books`);
const googleBookRoutes = require('./googleBooks');

router.use(`/books`, bookRoutes);
router.use(`/googleBooks`, googleBookRoutes);

module.exports = router;
