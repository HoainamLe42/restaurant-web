import { Product } from '@/types/product';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ProductState {
    items: Product[];
    filteredItems: Product[];
    loading: boolean;
    error: string | null;
    selectedCategory: string;
    priceRange: [number, number];
    sortOrder: 'asc' | 'desc';
    searchKeyword: string;

    currentPage: number;
    itemsPerPage: number;
    visibleItems: Product[];
}

const initialState: ProductState = {
    items: [],
    filteredItems: [],
    visibleItems: [],

    loading: false,
    error: null,
    selectedCategory: 'all',
    priceRange: [0, Infinity],
    sortOrder: 'asc',
    searchKeyword: '',

    currentPage: 1,
    itemsPerPage: 9,
};

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products`,
            );
            if (!res.ok) throw new Error('Failed to fetch products');
            return await res.json();
        } catch (error) {
            console.error('Fetch Error: ', error);
            throw error;
        }
    },
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
            productSlice.caseReducers.filteredProducts(state);
        },
        setPriceRange(state, action: PayloadAction<[number, number]>) {
            state.priceRange = action.payload;
            productSlice.caseReducers.filteredProducts(state);
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
            state.sortOrder = action.payload;
            productSlice.caseReducers.filteredProducts(state);
        },
        setSearchKeyword(state, action: PayloadAction<string>) {
            state.searchKeyword = action.payload;
            productSlice.caseReducers.filteredProducts(state);
        },

        loadMoreProducts(state) {
            const nextPage = state.currentPage + 1;
            const end = state.itemsPerPage * nextPage;
            state.visibleItems = state.filteredItems.slice(0, end);
            state.currentPage = nextPage;
        },

        filteredProducts(state) {
            const filtered = state.items.filter((item) => {
                // 1.
                const matchesCategory =
                    state.selectedCategory.toLocaleLowerCase() === 'all' ||
                    item.category
                        .map((c) => c.toLowerCase())
                        .includes(state.selectedCategory.toLowerCase());

                // 2.
                const price = item.price;
                const [min, max] = state.priceRange;
                const matchesPrice = price >= min && price <= max;

                const matchesSearch = item.name
                    .toLowerCase()
                    .includes(state.searchKeyword.toLowerCase());

                return matchesCategory && matchesPrice && matchesSearch;
            });

            filtered.sort((a, b) => {
                if (state.sortOrder === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });

            state.filteredItems = filtered;
            state.visibleItems = filtered.slice(0, state.itemsPerPage);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.loading = false;
                    state.items = action.payload;
                    productSlice.caseReducers.filteredProducts(state);
                },
            )
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.error = 'Something went wrong';
            });
    },
});

export const {
    setCategory,
    setPriceRange,
    setSortOrder,
    setSearchKeyword,
    loadMoreProducts,
} = productSlice.actions;

export default productSlice.reducer;

// selectors
export const selectAllProducts = (state: RootState) => state.products.items;
export const selectFilteredProducts = (state: RootState) =>
    state.products.filteredItems;
export const selectVisibleProducts = (state: RootState) =>
    state.products.visibleItems;

export const selectProductLoading = (state: RootState) =>
    state.products.loading;
export const selectSelectedCategory = (state: RootState) =>
    state.products.selectedCategory;
export const selectSearchKeyWord = (state: RootState) =>
    state.products.searchKeyword;
export const selectSortOrder = (state: RootState) => state.products.sortOrder;

export const selectProductBySlug = (slug: string) => (state: RootState) =>
    state.products.items.filter((item) => item.slug === slug);
