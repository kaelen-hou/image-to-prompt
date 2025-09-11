import { cn } from '@/shared/lib/utils'

interface SkeletonProps {
  className?: string
}

function Skeleton({ className, ...props }: SkeletonProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...props}
    />
  )
}

// Common skeleton patterns
export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton 
      className={cn('aspect-square w-full', className)} 
    />
  )
}

export function TextSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-3/4' : 'w-full'
          )} 
        />
      ))}
    </div>
  )
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <div className="space-y-3">
        <Skeleton className="h-4 w-1/2" />
        <TextSkeleton lines={2} />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  )
}

export function PromptSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-16" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}

export function GallerySkeleton({ items = 6, className }: { items?: number; className?: string }) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-4', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="space-y-2">
          <ImageSkeleton />
          <TextSkeleton lines={1} />
        </div>
      ))}
    </div>
  )
}

export { Skeleton }