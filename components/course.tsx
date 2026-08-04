"use client"

import { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation";
import { courseData } from "../lib/course";


const coursesData = courseData

// 3x duplicated dataset for 360° infinite circular loop
const extendedCourses = [...coursesData, ...coursesData, ...coursesData]
const N = coursesData.length

export function Course() {
  // Start at middle set index N (9)
  const [courseIndex, setCourseIndex] = useState(N)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [trackTranslate, setTrackTranslate] = useState(0)
  const router = useRouter();

  const handleNext = useCallback(() => {
    setIsTransitioning(true)
    setCourseIndex((prev) => prev + 1)
  }, [])

  const handlePrev = useCallback(() => {
    setIsTransitioning(true)
    setCourseIndex((prev) => prev - 1)
  }, [])

  // Auto slide interval every 2200ms
  useEffect(() => {
    const interval = window.setInterval(() => {
      handleNext()
    }, 2200)

    return () => window.clearInterval(interval)
  }, [handleNext])

  // Infinite loop snap without jump
  useEffect(() => {
    if (courseIndex >= 2 * N) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCourseIndex(N)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (courseIndex < N) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCourseIndex(2 * N - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [courseIndex])

  // Re-enable transition after snap
  useEffect(() => {
    if (!isTransitioning) {
      const animFrame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
      return () => cancelAnimationFrame(animFrame)
    }
  }, [isTransitioning])

  // Recalculate track position to center active card
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const active = itemRefs.current[courseIndex]

    if (!wrapper || !active) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()

    const center =
      active.offsetLeft +
      activeRect.width / 2 -
      wrapperRect.width / 2

    setTrackTranslate(-center)
  }, [courseIndex])

  // Touch Swipe
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

  const activeRealIndex = courseIndex % N

  return (
    <section id="courses" className="w-full bg-[#120b29] text-white py-16 overflow-hidden relative border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Admissions Badge & Header */}
      <div className="container mx-auto px-4 relative z-10 text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-400/30 text-purple-200 text-xs sm:text-sm font-medium backdrop-blur-md">
          🎓 Admissions Open Now 2026-2027
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Discover <span className="text-orange-500">Our Programs</span>
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed opacity-90">
          Sharp Future Academy Unveils the Palette of Possibilities! - Discover Our Programs – Animation, VFX, Gaming, Interior Design, Fashion Design, Digital Marketing and Photography. Your Canvas Awaits, Your Masterpiece Begins Now!
        </p>
      </div>

      {/* Carousel Track Container */}
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden py-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Nav Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Program"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-2xl group cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Program"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-2xl group cursor-pointer"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* 3D Centered Track with Stepping (Matching Student's Work) */}
        <div className="relative flex items-center overflow-hidden h-[680px] w-full">
          <div
            ref={trackRef}
            className="flex items-center"
            style={{
              transform: `translateX(${trackTranslate}px)`,
              transition: isTransitioning ? "all 1200ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            }}
          >
            {extendedCourses.map((course, index) => {
              const baseIndex = index
              const isCenter = baseIndex === courseIndex

              const relativePosition = baseIndex - courseIndex
              const distance = Math.abs(relativePosition)

              // Stepping & 3D Math matching 1st carousel
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
                    ? 0.95
                    : distance === 2
                      ? 0.88
                      : distance === 3
                        ? 0.78
                        : 0.65

              const zIndex = 100 - distance

              return (
                <div
                  key={`${course.id}-${index}`}
                  ref={(el) => {
                    itemRefs.current[baseIndex] = el
                  }}
                  onClick={() => {
                    if (isCenter) {
                      router.push(`/course/${course.id}`);
                    } else {
                      setIsTransitioning(true);
                      setCourseIndex(baseIndex);
                    }
                  }}
                  className={`flex-shrink-0 px-2 select-none ${
                    !isCenter ? "cursor-pointer" : ""
                  }`}
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
                    <div
                      className={`relative group overflow-hidden rounded-none w-full h-[480px] ${
                        isCenter
                          ? "shadow-[0_20px_80px_rgba(0,0,0,0.95)] ring-1 ring-white/40"
                          : "shadow-2xl"
                      }`}
                    >
                      {/* Full Bleed Edge-to-Edge Image (Same as 1st Carousel) */}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Bottom Title Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-14 pb-4 px-3 text-center z-10">
                        <p className="text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-tight">
                          {course.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {coursesData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true)
                setCourseIndex(N + i)
              }}
              aria-label={`Go to program ${i + 1}`}
              className={`h-2 transition-all duration-300 rounded-none cursor-pointer ${
                i === activeRealIndex
                  ? "w-8 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
