import { BlogPost } from '@/types/blog';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface BlogState {
    items: BlogPost[];
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchBlogs = createAsyncThunk<BlogPost[]>(
    'blogs/fetchBlogs',
    // async () => {
    //     try {
    //         const res = await fetch(
    //             `${process.env.NEXT_PUBLIC_API_URL}/blogPosts`,
    //         );
    //         if (!res.ok) throw new Error('Failed to fetch BlogPosts');
    //         return await res.json();
    //     } catch (error) {
    //         console.error('Fetch Error: ', error);
    //         throw error;
    //     }
    // },

    async () => {
        try {
            const res = await fetch('/data/db.json');
            if (!res.ok) throw new Error('Failed to fetch BlogPosts');

            const data = await res.json();
            console.log('✅ API fetched data:', data.blogPosts); // ← check data tại đây
            return data.blogPosts;
        } catch (error: any) {
            console.error('❌ Fetch failed:', error.message);
        }
    },
);

async function getData() {
    try {
        const res = await fetch('/data/db.json');
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        console.log('✅ API fetched data:', data.blogPosts); // ← check data tại đây
        return data;
    } catch (error: any) {
        console.error('❌ Fetch failed:', error.message);
    }
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchBlogs.fulfilled,
                (state, action: PayloadAction<BlogPost[]>) => {
                    state.loading = false;
                    state.items = action.payload;
                },
            )
            .addCase(fetchBlogs.rejected, (state) => {
                state.loading = false;
                state.error = 'Something went wrong';
            });
    },
});

export default blogSlice.reducer;

// selectors
export const selectAllBlogs = (state: RootState) => state.blogs.items;
