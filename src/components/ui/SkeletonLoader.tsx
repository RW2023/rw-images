// components/SkeletonLoader.js
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-60 w-full rounded-md"></div>
      {/* Add more skeleton elements here if needed */}
    </div>
  );
};

export default SkeletonLoader;
