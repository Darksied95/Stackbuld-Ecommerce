import { Minus, Plus, X } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { useCartStore } from '@/store/cart.store';


type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: {
        url: string;
        alt: string;
    };
}

export const CartCard = ({ item }: { item: CartItem }) => {
    const { removeItem, decreaseItemQuantity, increaseItemQuantity } = useCartStore(state => state)
    return (
        <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg">
            <Image
                src={item.image.url}
                alt={item.image.alt}
                width={80}
                height={80}
                className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
                <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-slate-800 mb-1">{item.name}</h3>
                    <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4 text-black">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => decreaseItemQuantity(item.id)}
                            className="p-1 hover:bg-gray-200 rounded"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                            onClick={() => increaseItemQuantity(item.id,)}
                            className="p-1 hover:bg-gray-200 rounded"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="text-right">
                        <div className="font-semibold text-slate-800">
                            ₦{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">
                            ₦{item.price.toFixed(2)} each
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
