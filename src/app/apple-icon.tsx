import { renderBrandMark } from "@/lib/brand-mark";

// 180x180 is the size iOS asks for on modern retina home screens.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderBrandMark(180);
}
