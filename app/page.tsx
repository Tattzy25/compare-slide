
"use client";

import { useState } from "react";

export default function Home() {
  const [img1, setImg1] = useState(
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format&fm=webp&q=80"
  );
  const [img2, setImg2] = useState(
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format&fm=webp&q=80&sat=-100"
  );

  // Construct the URL with current parameters
  const origin =
    globalThis.window === undefined
      ? "https://compare-dun.vercel.app"
      : globalThis.window.location.origin;

  const embedUrl = `${origin}/embed?img1=${encodeURIComponent(
    img1
  )}&img2=${encodeURIComponent(img2)}`;

  const embedCode = `<iframe 
  src="${embedUrl}" 
  style="width: 100%; height: 600px; border: none;"
  title="Comparison Slider"
></iframe>`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 pt-12 pb-24 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center gap-12 px-4 sm:px-8">
        {/* Iframe Display */}
        <section className="w-full max-w-[90vw] lg:max-w-400">
          <div className="relative h-[60vh] w-full min-h-125 overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-2xl dark:border-zinc-800 md:h-[80vh]">
            <iframe
              src={`/embed?img1=${encodeURIComponent(
                img1
              )}&img2=${encodeURIComponent(img2)}`}
              title="Comparison Slider Widget"
              className="size-full border-0"
              allowFullScreen
            />
          </div>
        </section>

        {/* Embed Code & Configuration Section */}
        <section className="mt-12 w-full max-w-3xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Embed Code
              </h2>
              <div className="relative overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-6 font-mono text-sm text-zinc-50 shadow-lg">
                <pre className="whitespace-pre-wrap break-all">{embedCode}</pre>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Update Images
              </h2>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="img1-input"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Image 1 URL (Before)
                  </label>
                  <input
                    id="img1-input"
                    type="text"
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                    placeholder="Enter image URL..."
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="img2-input"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Image 2 URL (After)
                  </label>
                  <input
                    id="img2-input"
                    type="text"
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                    placeholder="Enter image URL..."
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


