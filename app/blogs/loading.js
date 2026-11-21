import Skeleton from "../../components/ui/Skeleton";

/**
 * /blogs route লোড হওয়া পর্যন্ত দেখানো হয় (Next.js route-level loading UI)।
 * লেআউট ঠিক থাকে বলে layout shift হয় না।
 */
export default function BlogsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
        <Skeleton className="mx-auto h-6 w-40 rounded-full" />
        <Skeleton className="mx-auto h-12 w-2/3" />
        <Skeleton className="mx-auto h-5 w-full max-w-lg" />
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border bg-card shadow-md"
          >
            {/* Thumbnail */}
            <Skeleton className="aspect-video w-full rounded-none" />
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24 rounded-full" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
