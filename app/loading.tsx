import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4 animate-pulse">
          <Image src="/logo.png" alt="Core Brim Tech Logo" width={96} height={96} className="w-24 h-24" />
        </div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
