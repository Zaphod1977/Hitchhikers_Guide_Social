const router = require('express').Router();
const apiUserRoutes = require('./api-router/user-routes');
const apiThoughtsRoutes = require('./api-router/thought-routes');

router.use('/api/users', apiUserRoutes);
router.use('/api/thoughts', apiThoughtsRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
