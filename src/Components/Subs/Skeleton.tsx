const Skeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 p-4 space-y-4 animate-pulse">
      {/* Image */}
      <div className="h-40 bg-white/10 rounded-lg flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-white/20" />
      </div>

      {/* Title */}
      <div className="h-4 bg-white/10 rounded w-3/4" />

      {/* Text lines */}
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
        <div className="h-3 bg-white/10 rounded w-2/3" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-full" />
          <div className="h-3 bg-white/10 rounded w-20" />
        </div>
        <div className="h-3 bg-white/10 rounded w-12" />
      </div>
    </div>
  );
};

export default Skeleton;
