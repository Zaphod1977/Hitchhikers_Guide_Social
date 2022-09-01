const router = require('express').Router();
const apiUserRoutes = require('./api-router/user-routes.js');
const apiThoughtsRoutes = require('./api-router/throught-routes.js');

router.use('/api/users', apiUserRoutes);
router.use('/api/thoughts', apiThoughtsRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
