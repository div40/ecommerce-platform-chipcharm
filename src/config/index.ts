export const PRODUCT_CATEGORIES = [
    {
        label: "CPU",
        value: "cpu" as const,
        featured: [
            {
                name: "Most popular",
                href: "#",
                imageSrc: "/nav/cpu/12400f.webp"
            },
            {
                name: "Newly Launched",
                href: "#",
                imageSrc: "/nav/cpu/14900k.jpg"
            },
            {
                name: "Our picks",
                href: "#",
                imageSrc: "/nav/cpu/12400f.webp"
            }
        ]
    },
    {
        label: "GPU",
        value: "gpu" as const,
        featured: [
            {
                name: "Most popular",
                href: "#",
                imageSrc: "/nav/gpu/rog3060ti.webp"
            },
            {
                name: "Newly Launched",
                href: "#",
                imageSrc: "/nav/gpu/4090rog.jpg"
            },
            {
                name: "Our picks",
                href: "#",
                imageSrc: "/nav/gpu/4070ti.jpg"
            }
        ]
    }
]