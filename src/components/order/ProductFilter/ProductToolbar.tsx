import React from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';

import SearchBar from './SearchBar';
import SortByPrice from './SortByPrice';

interface ProductToolbarProps {
    viewMode: string;
    setViewMode: (mode: 'grid' | 'list') => void;
}

const ProductToolbar: React.FC<ProductToolbarProps> = ({
    viewMode,
    setViewMode,
}) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-7 mb-4 pb-5 border-b border-gray-500">
            <SearchBar />
            <div className="flex flex-wrap sm:flex-nowrap gap-6 md:gap-3">
                <SortByPrice />
                <div className="flex items-center gap-2">
                    <p>Xem:</p>
                    <LayoutGrid
                        onClick={() => setViewMode('grid')}
                        className={`${
                            viewMode === 'grid' ? 'text-primary' : undefined
                        } cursor-pointer`}
                    />
                    <LayoutList
                        onClick={() => setViewMode('list')}
                        className={`${
                            viewMode === 'list' ? 'text-primary' : undefined
                        } cursor-pointer`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductToolbar;
