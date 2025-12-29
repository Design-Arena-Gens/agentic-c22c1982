import './globals.css'

export const metadata = {
  title: 'Análisis Jurídico Legal - Guía Completa',
  description: 'Guía completa sobre los elementos esenciales de un análisis jurídico legal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
