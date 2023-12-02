const cartService = require("../services/cart.service");

const getUserCart = async (req, res) => {
    try {
        const cart = await cartService.findUserCart(req.body.userId);
        if (!cart) {
            return res.status(204).send("No Cart Data");
        }
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCart = async (req, res) => {
    //If cart already exists for user,
    const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
    //check if product exists or not
    if (itemIndex > -1) {
        let product = cart.items[itemIndex];
        product.quantity += quantity;
        cart.bill = cart.items.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
        }, 0)
        cart.items[itemIndex] = product;
        await cart.save();
        res.status(200).send(cart);
    } else {
        cart.items.push({ itemId, name, quantity, price });
        cart.bill = cart.items.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
        }, 0)
        await cart.save();
        res.status(200).send(cart);
    }
}

const deleteCart = async (req, res) => {
    const owner = req.user._id;
    const itemId = req.query.itemId;
    try {
        let cart = await Cart.findOne({ owner });
        const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
        if (itemIndex > -1) {
            let item = cart.items[itemIndex];
            cart.bill -= item.quantity * item.price;
            if (cart.bill < 0) {
                cart.bill = 0
            }
            cart.items.splice(itemIndex, 1);
            cart.bill = cart.items.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            }, 0)
            cart = await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send("item not found");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }

}

//export module with getAllProducts
module.exports = { getUserCart }