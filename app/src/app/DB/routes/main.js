import { Router } from 'express';
import Info from '../models/Info.js';

const router = Router();

router.get('/', async (req, res) => {

    res.render('index')
})

export default router;