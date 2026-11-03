'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ProjectImageProps = {
  src?: string
  alt: string
  ratio?: '16/9' | '3/2'
  sizes?: string
  priority?: boolean
  overlay?: 'none' | 'soft'
  className?: string
  imageClassName?: string
}

const ratioClassMap: Record<NonNullable<ProjectImageProps['ratio']>, string> = {
  '16/9': 'aspect-[16/9]',
  '3/2': 'aspect-[3/2]',
}

export function ProjectImage({
  src,
  alt,
  ratio = '3/2',
  sizes,
  priority = false,
  overlay = 'none',
  className,
  imageClassName,
}: ProjectImageProps) {
  const ratioClass = ratioClassMap[ratio]
  const showOverlay = overlay !== 'none'
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        className={cn('w-full overflow-hidden bg-muted', ratioClass, className)}
        aria-label={alt}
        role="img"
      />
    )
  }

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-muted ring-1 ring-border ring-inset',
        ratioClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        onError={() => setHasError(true)}
      />
      {showOverlay ? (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.64)_30%,rgba(0,0,0,0.76)_70%,rgba(0,0,0,0.82)_100%)]" />
      ) : null}
    </div>
  )
}

