export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head >
        <title>Raj Sahu</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
