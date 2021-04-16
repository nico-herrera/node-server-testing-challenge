const router = require('express').Router();
const Users = require('./users-model');

router.get('/', (req, res, next) => {

})

router.post('/', async (req, res, next) => {
    try {
        const user = await Users.insert(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Users.delete(req.params.id);
        res.status(204).json({message: "user has been deleted"})
    } catch (err) {
        next(err)
    }
})
module.exports = router;