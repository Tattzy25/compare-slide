import {
  CompareSlider,
  CompareSliderAfter,
  CompareSliderBefore,
  CompareSliderHandle,
} from "@/components/ui/compare-slider";

export default async function Embed({
  searchParams,
}: {
  searchParams: Promise<Readonly<{ [key: string]: string | string[] | undefined }>>;
}) {
  const params = await searchParams;
  const img1 =
    (params.img1 as string) ||
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format&fm=webp&q=80";
  const img2 =
    (params.img2 as string) ||
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format&fm=webp&q=80&sat=-100";

  return (
    <CompareSlider
      defaultValue={50}
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


