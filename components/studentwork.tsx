"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const studentWorkImages = [
  "Banner-03.jpg",
  "fantasy-game-environment-with-castle.jpg",
  // "/students-learning-animation-and-vfx-in-modern-comp.jpg",
  "3d-animated-character-in-action-scene.jpg",
  // "/modern-animation-studio-with-students-working-on-c.jpg",
  "/vfx-compositing-and-special-effects.jpg",
  "/student1.png",
  "/student2.png",
  "/student3.png",
  // "/professional-male-instructor-web-development-teach.jpg",
]

const extendedImages = [...studentWorkImages, ...studentWorkImages, ...studentWorkImages]
const N = studentWorkImages.length

export function StudentWork() {
  const [imageIndex, setImageIndex] = useState(N)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [trackTranslate, setTrackTranslate] = useState(0)

  const handleNext = useCallback(() => {
    setIsTransitioning(true)
    setImageIndex((prev) => prev + 1)
  }, [])

  const handlePrev = useCallback(() => {
    setIsTransitioning(true)
    setImageIndex((prev) => prev - 1)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      handleNext()
    }, 2800)

    return () => window.clearInterval(interval)
  }, [handleNext])

  useEffect(() => {
    if (imageIndex >= 2 * N) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false)
        setImageIndex(N)
      }, 1000)
      return () => window.clearTimeout(timer)
    }

    if (imageIndex < N) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false)
        setImageIndex(2 * N - 1)
      }, 1000)
      return () => window.clearTimeout(timer)
    }
  }, [imageIndex])

  useEffect(() => {
    if (!isTransitioning) {
      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })

      return () => window.cancelAnimationFrame(frame)
    }
  }, [isTransitioning])

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const active = itemRefs.current[imageIndex]

    if (!wrapper || !active) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()

    const center = active.offsetLeft + activeRect.width / 2 - wrapperRect.width / 2
    setTrackTranslate(-center)
  }, [imageIndex])

  const minSwipeDistance = 40

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd

    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }
  }

  const activeRealIndex = imageIndex % N

  return (
    <section className="w-full overflow-hidden bg-background py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
            ✨ Featured Student Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Student’s <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed opacity-90">
            Explore the outstanding creative work created by our talented students across animation, VFX, design, and digital media.
          </p>
        </div>

        <div
          ref={wrapperRef}
          className="relative w-full overflow-visible py-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={handlePrev}
            aria-label="Previous student work"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black transition-all duration-300 shadow-2xl group cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next student work"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black transition-all duration-300 shadow-2xl group cursor-pointer"
          >
            <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
          </button>

          <div className="relative flex items-center overflow-visible h-[680px] w-full">
            <div
              ref={trackRef}
              className="flex items-center"
              style={{
                transform: `translateX(${trackTranslate}px)`,
                transition: isTransitioning ? "all 1200ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              }}
            >
              {extendedImages.map((image, index) => {
                const isCenter = index === imageIndex
                const relativePosition = index - imageIndex
                const distance = Math.abs(relativePosition)

                const scale =
                  distance === 0
                    ? 1.15
                    : distance === 1
                      ? 1.05
                      : distance === 2
                        ? 0.98
                        : distance === 3
                          ? 0.92
                          : 0.85

                const translateY =
                  distance === 0
                    ? -20
                    : distance === 1
                      ? -10
                      : distance === 2
                        ? 0
                        : distance === 3
                          ? 8
                          : 15

                const opacity =
                  distance === 0
                    ? 1
                    : distance === 1
                      ? 0.92
                      : distance === 2
                        ? 0.78
                        : distance === 3
                          ? 0.64
                          : 0.5

                const zIndex = 100 - distance

                return (
                  <div
                    key={`${image}-${index}`}
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    className="flex-shrink-0 px-2"
                    style={{
                      width: "16.8%",
                      marginLeft: "-2.8%",
                      marginRight: "-2.8%",
                      zIndex,
                    }}
                  >
                    <div
                      style={{
                        transform: `translateY(${translateY}px) scale(${scale})`,
                        transition: isTransitioning
                          ? "all 1200ms cubic-bezier(0.22, 1, 0.36, 1)"
                          : "none",
                        opacity,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <div className={`relative group overflow-hidden rounded-none w-full h-[480px] ${isCenter ? "shadow-[0_20px_80px_rgba(0,0,0,0.95)] ring-1 ring-white/40" : "shadow-2xl"}`}>
                        <img
                          src={image}
                          alt={`Student work ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-14 pb-4 px-3 text-center z-10">
                          <p className="text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-tight">
                            {/* Student Project {index + 1} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {studentWorkImages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true)
                  setImageIndex(N + i)
                }}
                aria-label={`Go to student work ${i + 1}`}
                className={`h-2 transition-all duration-300 rounded-none cursor-pointer ${
                  i === activeRealIndex ? "w-8 bg-primary shadow-[0_0_12px_rgba(249,115,22,0.8)]" : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
