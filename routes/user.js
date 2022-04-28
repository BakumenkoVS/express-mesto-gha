const router = require('express').Router();

// eslint-disable-next-line object-curly-newline
const { getUsers, getUser, createUser, updateProfile, updateAvatar } = require('../controllers/user');

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
