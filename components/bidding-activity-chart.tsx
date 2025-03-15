"use client"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface BiddingActivityChartProps {
  chartType?: 'area' | 'bar' | 'line' | 'pie';
}

export default function BiddingActivityChart({ chartType = "area" }: BiddingActivityChartProps) {
  // Synthetic data for the chart
  const areaData = [
    { date: "Apr 01", bids: 4, wins: 1, amount: 1200 },
    { date: "Apr 05", bids: 3, wins: 0, amount: 0 },
    { date: "Apr 10", bids: 7, wins: 2, amount: 2400 },
    { date: "Apr 15", bids: 5, wins: 1, amount: 1800 },
    { date: "Apr 20", bids: 8, wins: 2, amount: 3200 },
    { date: "Apr 25", bids: 12, wins: 1, amount: 1500 },
    { date: "Apr 30", bids: 9, wins: 1, amount: 2300 },
  ]

  const barData = [
    { category: "Watches", bids: 32, wins: 5 },
    { category: "Art", bids: 24, wins: 3 },
    { category: "Jewelry", bids: 18, wins: 2 },
    { category: "Collectibles", bids: 15, wins: 1 },
    { category: "Fashion", bids: 10, wins: 0 },
  ]

  const lineData = [
    { month: "Jan", avgBid: 2100, marketAvg: 2300 },
    { month: "Feb", avgBid: 2400, marketAvg: 2200 },
    { month: "Mar", avgBid: 2200, marketAvg: 2400 },
    { month: "Apr", avgBid: 2500, marketAvg: 2600 },
    { month: "May", avgBid: 2800, marketAvg: 2700 },
    { month: "Jun", avgBid: 3000, marketAvg: 2900 },
  ]

  const pieData = [
    { name: "Watches", value: 35 },
    { name: "Art", value: 25 },
    { name: "Jewelry", value: 20 },
    { name: "Collectibles", value: 15 },
    { name: "Fashion", value: 5 },
  ]

  const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#10b981"]

  if (chartType === "area") {
    return (
      <div className="w-full aspect-[16/9] min-h-[300px]">
        <ChartContainer className="w-full h-full">
          <ChartLegend className="justify-center mb-4">
            <ChartLegendItem name="Bids Placed" color="#3b82f6" />
            <ChartLegendItem name="Auctions Won" color="#6366f1" />
            <ChartLegendItem name="Amount Spent ($)" color="#10b981" />
          </ChartLegend>

          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={areaData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="date"
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
                <Area
                  type="monotone"
                  dataKey="bids"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                  activeDot={{ r: 8 }}
                />
                <Area type="monotone" dataKey="wins" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                <Area type="monotone" dataKey="amount" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </Chart>
        </ChartContainer>
      </div>
    )
  }

  if (chartType === "bar") {
    return (
      <div className="w-full aspect-[16/9] min-h-[300px]">
        <ChartContainer className="w-full h-full">
          <ChartLegend className="justify-center mb-4">
            <ChartLegendItem name="Bids Placed" color="#3b82f6" />
            <ChartLegendItem name="Auctions Won" color="#6366f1" />
          </ChartLegend>

          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={barData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="category"
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <Tooltip content={<CustomBarTooltip active={undefined} payload={undefined} label={undefined} />} />
                <Bar dataKey="bids" fill="#3b82f6" />
                <Bar dataKey="wins" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </Chart>
        </ChartContainer>
      </div>
    )
  }

  if (chartType === "line") {
    return (
      <div className="w-full aspect-[16/9] min-h-[300px]">
        <ChartContainer className="w-full h-full">
          <ChartLegend className="justify-center mb-4">
            <ChartLegendItem name="Your Average Bid" color="#3b82f6" />
            <ChartLegendItem name="Market Average" color="#ef4444" />
          </ChartLegend>

          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={lineData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#64748b" }}
                  tickLine={{ stroke: "#cbd5e1" }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <Tooltip content={<CustomLineTooltip active={undefined} payload={undefined} label={undefined} />} />
                <Line type="monotone" dataKey="avgBid" stroke="#3b82f6" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="marketAvg" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Chart>
        </ChartContainer>
      </div>
    )
  }

  if (chartType === "pie") {
    return (
      <div className="w-full aspect-[16/9] min-h-[300px]">
        <ChartContainer className="w-full h-full">
          <ChartLegend className="justify-center mb-4">
            {pieData.map((entry, index) => (
              <ChartLegendItem key={`legend-${index}`} name={entry.name} color={COLORS[index % COLORS.length]} />
            ))}
          </ChartLegend>

          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip active={undefined} payload={undefined} />} />
              </PieChart>
            </ResponsiveContainer>
          </Chart>
        </ChartContainer>
      </div>
    )
  }

  return null
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ChartTooltip>
      <ChartTooltipContent>
        <div className="font-medium text-slate-900">{label}</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-slate-700">Bids: {payload[0].value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
          <span className="text-slate-700">Wins: {payload[1].value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-slate-700">Amount: ${payload[2].value}</span>
        </div>
      </ChartTooltipContent>
    </ChartTooltip>
  )
}

function CustomBarTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ChartTooltip>
      <ChartTooltipContent>
        <div className="font-medium text-slate-900">{label}</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-slate-700">Bids: {payload[0].value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
          <span className="text-slate-700">Wins: {payload[1].value}</span>
        </div>
      </ChartTooltipContent>
    </ChartTooltip>
  )
}

function CustomLineTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ChartTooltip>
      <ChartTooltipContent>
        <div className="font-medium text-slate-900">{label}</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-slate-700">Your Avg: ${payload[0].value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <span className="text-slate-700">Market Avg: ${payload[1].value}</span>
        </div>
      </ChartTooltipContent>
    </ChartTooltip>
  )
}

function CustomPieTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ChartTooltip>
      <ChartTooltipContent>
        <div className="font-medium text-slate-900">{payload[0].name}</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: payload[0].payload.fill }}></div>
          <span className="text-slate-700">{payload[0].value}%</span>
        </div>
      </ChartTooltipContent>
    </ChartTooltip>
  )
}

