"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

let notifications = [
  {
    name: "🚀 Traffic Surge",
    description: "Organic visits up 120% this week",
    time: "just now",
    icon: "📈",
    color: "#FF6600", // Pixel Crafte primary orange
  },
  {
    name: "💡 New Lead Captured",
    description: "Form submissions increased by 40%",
    time: "2m ago",
    icon: "📥",
    color: "#FFA04D", // lighter orange accent
  },
  {
    name: "🛒 Sale Completed",
    description: "E‑commerce revenue +25%",
    time: "5m ago",
    icon: "💳",
    color: "#FF8C00", // darker orange accent
  },
  {
    name: "⚡ Site Speed Up",
    description: "Load time dropped to 1.2s",
    time: "10m ago",
    icon: "⏱️",
    color: "#FFC299", // soft peach accent
  },
  {
    name: "⭐ 5‑Star Review",
    description: "Client raves about new design",
    time: "15m ago",
    icon: "🌟",
    color: "#FFD9B3",
  },
];


notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListSection({
  className,
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
