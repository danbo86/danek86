export default function manifest() {
  return {
    name: "Danbo86",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/icon-68x95.png",
        sizes: "68x95",
        type: "image/png",
      },
      {
        src: "/icons/icon-91x127.png",
        sizes: "91x127",
        type: "image/png",
      },
      {
        src: "/icons/icon-135x189.png",
        sizes: "135x189",
        type: "image/png",
      },
      {
        src: "/icons/icon-181x253.png",
        sizes: "181x253",
        type: "image/png",
      },
      {
        src: "/icons/icon-271x378.png",
        sizes: "271x378",
        type: "image/png",
      },
      {
        src: "/icons/icon-361x504.png",
        sizes: "361x504",
        type: "image/png",
      },
    ],
  }
}
