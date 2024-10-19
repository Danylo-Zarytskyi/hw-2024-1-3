import express, { application } from 'express';
import path from 'node:path';
import logger from 'morgan';
import Info from '../models/Info.js';
import cors from 'cors';
import multer from 'multer';
import createError from 'http-errors';

import mainRouter from '../routes/main.js';

const upload = multer();
const app = express();

app.set('views', path.join(process.cwd(), './views'));
app.set('view engine', 'ejs');

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', upload.none(), async (req, res) => {
    const { info } = req.body;
    console.log(req.body);

    const existingInfo = await Info.findOne();

    if(existingInfo) {
        existingInfo.info += `${info}`;
        await existingInfo.save();
        res.json(existingInfo);
    } else {
        const newInfo = new Info({ info });
        await newInfo.save();
        res.json(newInfo);
    }
})

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', mainRouter);

app.use((req, res, next) => {
    next(createError(404));
})

app.use((err, req, res) => {
    console.log(err);
    res.render('error');
})

export default app;