import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from 'src/products';

interface CartItem extends Product {
  quantity: number
}

interface Cart {
  cartItems: CartItem[]
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1
  }))
})

const getProduct = (index: number): Product => products[index]


@Controller('cart')
export class CartController {

  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3])
  }

  constructor() { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async addItem(@Request() req, @Body() { id }): Promise<Cart> {
    const userCart = this.carts[req.user.userId];
    const cartItem = userCart.cartItems.find(
      cartItem => cartItem.id === parseInt(id)
    )
    if (cartItem)
      cartItem.quantity += 1
    else
      userCart.cartItems.push({
        ...products.find(product => product.id === parseInt(id)),
        quantity: 1
      })
    return userCart
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async emptyCart(@Request() req): Promise<Cart> {
    this.carts[req.user.userId].cartItems = []
    return this.carts[req.user.userId]
  }
}
