# Comparison Slider

This project provides a clean, embeddable comparison slider widget.

## Features

- **Mobile First**: Fully responsive design that works on all devices.
- **Embeddable**: Easily embed the slider into any website using an `<iframe>`.
- **Dynamic Images**: Customize the before/after images via URL parameters.

## Usage

### Embed the Widget

To embed the slider, use the following iframe code:

```html
<iframe 
  src="https://compare-dun.vercel.app/embed?img1=YOUR_IMAGE_1_URL&img2=YOUR_IMAGE_2_URL" 
  style="width: 100%; height: 600px; border: none;"
  title="Comparison Slider"
></iframe>
```

Replace `YOUR_IMAGE_1_URL` and `YOUR_IMAGE_2_URL` with your actual image URLs.

### Dynamic Preview

Visit the main page to preview your slider and generate the embed code instantly:
[https://compare-dun.vercel.app/](https://compare-dun.vercel.app/)

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
