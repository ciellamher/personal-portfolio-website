import Image from "next/image";

type DeviceMockupProps = {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
};

// Laptop with a phone overlapping its right edge, in the style of easlo.co.
// Sizes use container query units so the frame scales with the card.
export default function DeviceMockup({ desktopSrc, mobileSrc, alt }: DeviceMockupProps) {
  return (
    <div className="@container relative w-full pr-[9%] pb-[3%]">
      {/* Laptop */}
      <div className="relative">
        <div className="rounded-t-[2.2cqw] bg-neutral-900 dark:bg-neutral-800 p-[1.4cqw] pb-[2cqw] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.6cqw] bg-neutral-100">
            <Image src={desktopSrc} alt={`${alt} on desktop`} fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover object-top" />
          </div>
        </div>
        <div className="relative -mx-[5%] h-[2.4cqw] rounded-b-[1.6cqw] bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-neutral-600 dark:to-neutral-700">
          <div className="absolute left-1/2 top-0 h-[0.9cqw] w-[16%] -translate-x-1/2 rounded-b-[1cqw] bg-neutral-400/70 dark:bg-neutral-800/70" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute right-0 bottom-0 w-[24%] rounded-[4cqw] bg-neutral-900 dark:bg-neutral-800 p-[0.9cqw] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]">
        <div className="relative aspect-[390/844] overflow-hidden rounded-[3.2cqw] bg-neutral-100">
          <Image src={mobileSrc} alt={`${alt} on mobile`} fill sizes="(min-width: 1024px) 140px, 25vw" className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
