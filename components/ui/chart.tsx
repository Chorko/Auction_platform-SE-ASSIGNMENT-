export const Chart = ({ children }) => {
  return <div className="relative">{children}</div>
}

export const ChartContainer = ({ children }) => {
  return <div className="relative">{children}</div>
}

export const ChartTooltip = ({ children }) => {
  return (
    <div className="absolute z-10 bg-white border border-slate-200 rounded-md p-2 text-sm text-slate-800 shadow-md">
      {children}
    </div>
  )
}

export const ChartTooltipContent = ({ children }) => {
  return <div>{children}</div>
}

export const ChartLegend = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>
}

export const ChartLegendItem = ({ name, color }) => {
  return (
    <div className="flex items-center gap-2 mr-4">
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-sm text-slate-600">{name}</span>
    </div>
  )
}

