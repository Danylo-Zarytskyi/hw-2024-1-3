import mongoose from 'mongoose';
// import ProdsModel from './models/product.js';

await mongoose.connect('mongodb://127.0.0.1:27017/hw20243')
    .then(() => console.log('Connected!'));

// const productsData = [
//     { id: '1', name: 'Apple', description: 'Sweet', img: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png' },
//     { id: '2', name: 'Lemon', description: 'Sour', img: 'https://i.pinimg.com/originals/3e/ba/ef/3ebaef77b4de21932f4d33412db17673.png' },
//     { id: '3', name: 'Chili pepper', description: 'Spicy', img: 'https://png.pngtree.com/png-clipart/20230428/ourmid/pngtree-free-vector-red-chili-pepper-realistic-single-object-on-blank-white-png-image_6741302.png' },
// ];
    

// const addProds = async () => {
//     await ProdsModel.insertMany(productsData);

//     console.log('Added!!!');
// }

// addProds();
