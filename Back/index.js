import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from'cors'
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
const productSchema = new Schema({
    icon:String,
    name: String,
    price:Number,
    desc: String
});

const productModel = mongoose.model('product', productSchema);


app.get('/', async (req, res) => {
    try {
        const products = await productModel.find({})
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const products = await productModel.findById(id)
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, desc, icon ,price } = req.body
        const products = new productModel({ name, desc, icon ,price })
        await products.save()
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, desc, icon,price } = req.body
        const products = await productModel.findByIdAndUpdate(id, { name, desc, icon,price })
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const products = await productModel.findByIdAndDelete(id)
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})