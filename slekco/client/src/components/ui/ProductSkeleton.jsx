import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="group animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden mb-4 rounded-card"></div>
      
      {/* Details Skeleton */}
      <div className="flex justify-between items-start">
        <div className="w-2/3">
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
