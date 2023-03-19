import './globals.css'

export const metadata = {
  title: 'Bao Yang',
  description: 'Médecine Traditionnelle Chinoise Massage de Bien-être et Formation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
