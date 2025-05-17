export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-auto bg-[#0A0A0A] p-4">
      {children}
    </div>
  )
}
