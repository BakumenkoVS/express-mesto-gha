const router = require('express').Router();

// eslint-disable-next-line object-curly-newline
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/card');

router.qet('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);
module.exports = router;
