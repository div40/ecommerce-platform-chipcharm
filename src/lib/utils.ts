import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice (
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "INR",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "USD", notation = "compact"} = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price ;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    notation: notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}

export function constructMetadata({
  title = 'Chipcharm - Your one stop destination to build your Dream PC',
  description = 'Chipcharm is your one stop destination to build your Dream PC.',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
      ],
    },
    icons,
    metadataBase: new URL('https://div-chipcharm.up.railway.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
