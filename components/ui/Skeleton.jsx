/**
 * Skeleton — data আসার আগে placeholder দেখানোর জন্য।
 * StackLearner-এর মতো একই প্যাটার্ন:
 *   bg-accent + animate-pulse + rounded-md
 *
 * ব্যবহার:
 *   <Skeleton className="h-5 w-3/4" />
 *   <Skeleton className="aspect-video w-full rounded-lg" />
 */
export default function Skeleton({ className = "", ...props }) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-accent ${className}`}
      {...props}
    />
  );
}
