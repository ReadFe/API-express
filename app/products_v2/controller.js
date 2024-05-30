const path = require('path');
const fs = require('fs');
const Product = require('./model');
const { Op } = require('sequelize');


const index = async (req, res) => {
    const {search} = req.query;
    if (search) {
        try {
            await Product.sync();
            const result = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                }
            })
            res.send(result);
        } catch(e) {
            res.send(e);
        }
    } else {
        try {
            await Product.sync();
            const result = await Product.findAll();
            res.send(result);
        } catch(e) {
            res.send(e);
        }
    }
}

const view = async (req, res) => {
    const search_id = req.params.id;
    try {
        await Product.sync();
        const result = await Product.findAll({
            where: {
                id: search_id
            }
        })
        res.send(result);
    } catch(e) {
        res.send(e);
    }
}

const destroy = async (req, res) => {
    const search_id = req.params.id;
    try {
        await Product.sync();
        const result = await Product.destroy({
            where: {
                id: search_id
            }
        })
        res.send({
            status: 'success to delete data'
        });
    } catch(e) {
        res.send(e);
    }
}

const store = async (req, res) => {
    const {user_id, name, price, stock, status, createdAt, updatedAt} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.create({user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`, createdAt, updatedAt});
            res.send(result);
        } catch(e) {
            res.send(e);
        }
    }
}

const update = async (req, res) => {
    const {user_id, name, price, stock, status, createdAt, updatedAt} = req.body;
    const image = req.file;
    const search_id = req.params.id;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result = await Product.update(
                {user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`, createdAt, updatedAt}, {where: {
                    id: search_id
                }});
            res.send(result);
        } catch(e) {
            res.send(e);
        }
    }
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}