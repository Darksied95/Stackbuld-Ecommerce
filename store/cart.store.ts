import { create } from "zustand";
import { persist } from "zustand/middleware";


interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (newItem: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    removeItem: (itemId: string) => void;
    decreaseItemQuantity: (itemId: string) => void;
    increaseItemQuantity: (itemId: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem, quantity = 1) =>
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (item) => item.id === newItem.id
                    );
                    if (existingItemIndex > -1) {
                        const updatedItems = state.items.map((item, index) =>
                            index === existingItemIndex
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        );
                        return { items: updatedItems };
                    } else {
                        return { items: [...state.items, { ...newItem, quantity: quantity }] };
                    }
                }),
            removeItem: (itemId) =>
                set((state) => {
                    const existingItem = state.items.filter((item) => item.id !== itemId);
                    return { items: existingItem };
                }),

            decreaseItemQuantity: (itemId) => set((state) => {
                const existingItem = state.items.find((item) => item.id === itemId);

                if (existingItem) {
                    if (existingItem.quantity > 1) {
                        const updatedItems = state.items.map((item) =>
                            item.id === itemId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        );
                        return { items: updatedItems };
                    } else {

                        const filteredItems = state.items.filter(
                            (item) => item.id !== itemId
                        );
                        return { items: filteredItems };
                    }
                }
                return state;
            }),

            increaseItemQuantity: (itemId) => set((state) => {
                const existingItem = state.items.find((item) => item.id === itemId);
                if (existingItem) {
                    const updatedItems = state.items.map((item) =>
                        item.id === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    return { items: updatedItems };
                }
                return state;
            }),

            clearCart: () => set({ items: [] }),

            get totalItems() {
                return get().items.reduce((sum, item) => sum + item.quantity, 0);
            },

            get totalPrice() {
                return get().items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                );
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);