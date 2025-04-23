'use client';

import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

const SidebarFilter = () => {
    return (
        <aside className="w-full md:w-60 shrink-0 p-0 md:p-4 rounded-xl shadow space-y-6">
            <h2 className="text-xl font-semibold mb-4">Bộ lọc</h2>
            <div className="flex flex-col">
                <CategoryFilter />
                <PriceRangeFilter />
            </div>
        </aside>
    );
};

export default SidebarFilter;
