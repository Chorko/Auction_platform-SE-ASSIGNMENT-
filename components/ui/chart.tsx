"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartContainer({
  children,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <div className={cn("chart-container", className)} {...props}>
      {children}
    </div>
  )
}

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Chart({ children, className, ...props }: ChartProps) {
  return (
    <div className={cn("chart h-[350px] w-full", className)} {...props}>
      {children}
    </div>
  )
}

interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartTooltip({
  children,
  className,
  ...props
}: ChartTooltipProps) {
  return (
    <div
      className={cn(
        "chart-tooltip rounded-lg border border-slate-200 bg-white p-2 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ChartTooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartTooltipContent({
  children,
  className,
  ...props
}: ChartTooltipContentProps) {
  return (
    <div className={cn("chart-tooltip-content", className)} {...props}>
      {children}
    </div>
  )
}

interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartLegend({
  children,
  className,
  ...props
}: ChartLegendProps) {
  return (
    <div
      className={cn("chart-legend flex flex-wrap items-center gap-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface ChartLegendItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color: string
}

export function ChartLegendItem({
  name,
  color,
  className,
  ...props
}: ChartLegendItemProps) {
  return (
    <div className={cn("chart-legend-item flex items-center", className)} {...props}>
      <div
        className="mr-2 h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-slate-700">{name}</span>
    </div>
  )
}

