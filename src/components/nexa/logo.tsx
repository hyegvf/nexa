import logo from "@/assets/nexa-logo.png";

/**
 * The provided Nexa logo is the authoritative brand asset.
 * It is rendered inside a rounded tile, never distorted
 * (object-cover on its natural 3:2 frame keeps the wordmark intact).
 */
export function NexaLogo({
  className = "h-9",
  rounded = "rounded-xl",
}: {
  className?: string;
  rounded?: string;
}) {
  return (
    <span
      className={`inline-block overflow-hidden ${className ?? ""} ${rounded} ring-1 ring-white/15 shadow-[0_0_28px_rgba(106,13,242,0.35)] bg-[#4a10f0] align-middle`}
      style={{ aspectRatio: "3 / 2" }}
    >
      <img
        src={logo.src}
        alt="Nexa logo"
        className="h-full w-full object-cover object-center select-none"
        draggable={false}
      />
    </span>
  );
}
