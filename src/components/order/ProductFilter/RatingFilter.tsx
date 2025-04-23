import React from 'react';

const RatingFilter = () => {
    return (
        <div className="mb-4 border-t border-gray-500 pt-3">
            <h3 className="font-semibold mb-4 text-primary text-nowrap mr-3">
                Sắp xếp theo:
            </h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="sortPrice"
                        value="asc"
                        className="accent-primary"
                        // onChange={() => dispatch(setSortOrder('asc'))}
                    />
                    <span className="text-sm text-white80">Giá tăng dần</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="sortPrice"
                        value="desc"
                        // onChange={() => dispatch(setSortOrder('desc'))}
                        className="accent-primary"
                    />
                    <span className="text-sm text-white80">Giá giảm dần</span>
                </label>
            </div>
        </div>
    );
};

export default RatingFilter;
