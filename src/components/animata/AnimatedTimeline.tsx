"use client"

import type React from "react"
import { useRef, useState, useEffect, useCallback } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface TimelineEvent {
  id: string
  title: string
  description?: string
  date?: string
  [key: string]: unknown // Allow additional custom fields
}

interface TimelineItemProps {
  event: TimelineEvent
  isLast: boolean
  index: number
  styles: TimelineStyles
  customRender?: (event: TimelineEvent) => React.ReactNode
  isActive: boolean
  onRegisterRef: (index: number, ref: React.RefObject<HTMLDivElement | null>) => void
}

interface TimelineStyles {
  lineColor: string
  activeLineColor: string
  dotColor: string
  activeDotColor: string
  dotSize: string
  titleColor: string
  descriptionColor: string
  dateColor: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  isLast,
  index,
  styles,
  isActive,
  onRegisterRef,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onRegisterRef(index, ref)
  }, [index, onRegisterRef])

  return (
    <div className="flex last:mb-0  ">
      <div className="relative mr-4 flex flex-col items-center">
        {/* Line container with proper z-index */}
        <div
          className={`absolute ${isLast ? "hidden" : "block"} bottom-0 top-0 w-0.5 overflow-hidden -z-10`}
          style={{ backgroundColor: styles.lineColor }}
        >
          <motion.div
            className="w-full origin-top"
            animate={{ scaleY: isActive ? 1 : 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            style={{
              height: "100%",
              backgroundColor: styles.activeLineColor,
            }}
          />
        </div>

        {/* Dot with higher z-index to appear above the line */}
        <motion.div
          ref={ref}
          className="relative z-0 rounded-full border-4 bg-background"
          style={{
            width: styles.dotSize,
            height: styles.dotSize,
          }}
          animate={{
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
            backgroundColor: isActive ? styles.activeDotColor : "background",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      </div>

      <div className={cn("flex-grow leading-5", !isLast && "mb-3")}>

            <h3 className="text-lg font-medium" style={{ color: styles.titleColor }}>
              {event.title}
            </h3>
            <p style={{ color: styles.descriptionColor }}>{event.description}</p>

      </div>
    </div>
  )
}

interface AnimatedTimelineProps {
  events: TimelineEvent[]
  className?: string
  styles?: Partial<TimelineStyles>
  customEventRender?: (event: TimelineEvent) => React.ReactNode
  onEventClick?: (event: TimelineEvent) => void
}

const defaultStyles: TimelineStyles = {
  lineColor: "#d1d5db",
  activeLineColor: "#FF1010",
  dotColor: "#d1d5db",
  activeDotColor: "#FF1010",
  dotSize: "1rem",
  titleColor: "inherit",
  descriptionColor: "inherit",
  dateColor: "inherit",
}

export function AnimatedTimeline({
  events,
  className = "",
  styles: customStyles = {},
  customEventRender,
  onEventClick,
}: AnimatedTimelineProps) {
  const styles = { ...defaultStyles, ...customStyles }
  const [activeIndex, setActiveIndex] = useState(-1)
  const itemRefs = useRef<Map<number, React.RefObject<HTMLDivElement | null>>>(new Map())

  const onRegisterRef = useCallback((index: number, ref: React.RefObject<HTMLDivElement | null>) => {
    itemRefs.current.set(index, ref)
  }, [])

  const checkActiveItems = useCallback(() => {
    const viewportMiddle = window.innerHeight / 2
    let highestActiveIndex = -1

    // Check each item to see if it's above the middle of the screen
    itemRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2

        // If item center is above the viewport middle, it should be active
        if (itemCenter <= viewportMiddle) {
          highestActiveIndex = Math.max(highestActiveIndex, index)
        }
      }
    })

    setActiveIndex(highestActiveIndex)
  }, [])

  useEffect(() => {
    // Check on mount
    checkActiveItems()

    // Check on scroll
    const handleScroll = () => {
      checkActiveItems()
    }

    // Check on resize
    const handleResize = () => {
      checkActiveItems()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    // Also check periodically to ensure state is maintained
    const interval = setInterval(checkActiveItems, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
    }
  }, [checkActiveItems])

  return (
    <div className={`relative py-4 ${className}`}>
      {events.map((event, index) => (
        <div key={event.id} onClick={() => onEventClick?.(event)}>
          <TimelineItem
            event={event}
            isLast={index === events.length - 1}
            index={index}
            styles={styles}
            customRender={customEventRender}
            isActive={index <= activeIndex}
            onRegisterRef={onRegisterRef}
          />
        </div>
      ))}
    </div>
  )
}

interface AnimatedTimelinePageProps {
  events?: TimelineEvent[]
  title?: string
  containerClassName?: string
  timelineStyles?: Partial<TimelineStyles>
  customEventRender?: (events: TimelineEvent) => React.ReactNode
  onEventClick?: (events: TimelineEvent) => void
}

export default function AnimatedTimelinePage({
  events,
  title,
  containerClassName,
  timelineStyles,
  customEventRender,
  onEventClick,
}: AnimatedTimelinePageProps) {
  const DefaultEvents = [
    { id: "1", title: "Project Started", description: "Initial planning and setup phase", date: "January 2024" },
    { id: "2", title: "Development Phase", description: "Core features implementation", date: "March 2024" },
    { id: "3", title: "Testing & QA", description: "Comprehensive testing and bug fixes", date: "May 2024" },
    { id: "4", title: "Beta Release", description: "Limited release to beta testers", date: "July 2024" },
    { id: "5", title: "Production Launch", description: "Full public release", date: "September 2024" },
    { id: "6", title: "Feature Updates", description: "Ongoing improvements and new features", date: "November 2024" },
    {
      id: "7",
      title: "Mobile App Launch",
      description: "Released companion mobile application",
      date: "December 2024",
    },
    { id: "8", title: "International Expansion", description: "Expanded to European markets", date: "February 2025" },
  ]

  const defaultTitle = "Project Timeline"

  return (
    <div
      className={cn(
        "container mx-auto min-h-screen rounded-lg bg-background px-8 pt-6 text-foreground",
        containerClassName,
      )}
    >
      <h1 className="text-3xl font-bold mb-8">{title || defaultTitle}</h1>
      <div className="mb-96">
        {" "}
        {/* Add space at top to see the effect */}
        <AnimatedTimeline
          events={events || DefaultEvents}
          className="max-w-2xl"
          styles={timelineStyles}
          customEventRender={customEventRender}
          onEventClick={onEventClick}
        />
      </div>
      <div className="h-96"></div> {/* Add space at bottom to see the effect */}
    </div>
  )
}
