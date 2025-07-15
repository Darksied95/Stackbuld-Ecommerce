"use client";
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart.store';
import OrderSummary from '@/components/cart/orderSummary';
import { CartCard } from '@/components/cart/cartCard';

const CartPage = () => {
    const cartItems = useCartStore(state => state.items);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = Math.random() > 0.5 ? subtotal * 0.01 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-white mt-12">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {cartItems.length === 0
                    ? (
                        <div className="text-center py-20">
                            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-6" />
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
                            <p className="text-gray-600 mb-8">Start shopping to add cartItems to your cart</p>
                            <button className="bg-slate-800 text-white px-8 py-3 rounded font-semibold hover:bg-slate-700 transition-colors">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center justify-between mb-8">
                                    <h1 className="text-3xl font-bold text-slate-800">Shopping Cart</h1>
                                    <span className="text-gray-600">
                                        {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    {cartItems.map((item) => <CartCard key={item.id} item={item} />)}
                                </div>
                            </div>

                            {/* Order Summary */}
                            <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
                        </div>
                    )}
            </main >
        </div >
    );
};

export default CartPage;