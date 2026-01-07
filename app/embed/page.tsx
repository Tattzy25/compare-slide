import {
  CompareSlider,
  CompareSliderAfter,
  CompareSliderBefore,
  CompareSliderHandle,
} from "@/components/ui/compare-slider";

export default async function Embed({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}>) {
  const params = await searchParams;
  const { img1: img1Param, img2: img2Param, orientation: orientationParam } = params;

  const img1 = (img1Param as string) || "";
  const img2 = (img2Param as string) || "";
  const orientation = (orientationParam as "horizontal" | "vertical") || "horizontal";

  return (
    <CompareSlider
      defaultValue={50}
      orientation={orientation}
      className="h-screen w-full overflow-hidden"
    >
      <CompareSliderBefore>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img1} alt="Before" className="size-full object-cover" />
      </CompareSliderBefore>
      <CompareSliderAfter>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img2} alt="After" className="size-full object-cover" />
      </CompareSliderAfter>
      <CompareSliderHandle />
    </CompareSlider>
  );
}


