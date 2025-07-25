import Image from "next/image"
import LoginForm from "@/components/auth/loginform"

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="flex-1 bg-white" />
        <div className="relative h-[50vh] overflow-hidden">
          {/* Background image under purple */}
          <Image
            src="/assets/bg-image.jpg"
            alt="Background"
            fill
            className="object-cover pointer-events-none select-none"
            priority
            style={{ zIndex: 1 }}
          />
          {/* Purple overlay */}
          <div className="absolute inset-0 bg-[#623CEA] opacity-90 z-10" />
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
            <span className="text-white text-7xl font-bold tracking-widest opacity-60 whitespace-nowrap select-none" style={{ letterSpacing: '0.1em' }}>
              TAKE CONTROL — TAKE CONTROL — TAKE CONTROL —
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-12 h-[294px] bg-[#623CEA] opacity-90 z-10" />
        <div className="h-12 bg-[#00D293] w-full" />

      </div>

      {/* Logo */}
      <div className="absolute inset-x-0 top-12 flex justify-center z-20">
        <Image
          src="/assets/info-snap.svg"
          alt="Infosnap"
          width={140}
          height={32}
        />
      </div>

      {/* Centered form and dots */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full min-h-screen">
        <LoginForm />
        {/* Dots SVG below the card */}
        <div className="absolute left-[700px] bottom-[235px] z-20">
          <Image
            src="/assets/dots.svg"
            alt="dots"
            width={120}
            height={93}
            className="object-contain h-[93px]"
            priority
          />
        </div>
      </div>
    </main>
  )
}
