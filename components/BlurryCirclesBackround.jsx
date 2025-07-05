// components/BlurryCirclesBackground.tsx

'use client'

export default function BlurryCirclesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-orange-400 opacity-30 rounded-full blur-3xl animate-spinSlow" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-300 opacity-25 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orange-500 opacity-20 rounded-full blur-3xl animate-spinSlow" />
    </div>
  );
}
