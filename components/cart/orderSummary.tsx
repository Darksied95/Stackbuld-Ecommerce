import { ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OrderSummary = ({ subtotal, shipping, tax, total }: { subtotal: number, shipping: number, tax: number, total: number }) => {
    return (
        <div className="lg:col-span-1 text-black">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
                <h3 className="font-semibold text-slate-800 mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₦{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">
                            {shipping === 0 ? 'Free' : `₦${shipping.toFixed(2)}`}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">₦{tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>₦{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <Link
                    href={`/checkout`}
                    className="w-full bg-slate-800 text-white py-3 rounded font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Shield className="w-5 h-5" />
                        <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Truck className="w-5 h-5" />
                        <span>Free shipping on orders over $100</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <RotateCcw className="w-5 h-5" />
                        <span>30-day return policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary