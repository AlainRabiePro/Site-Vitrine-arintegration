import { setRequestLocale } from 'next-intl/server'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Secteurs from '@/components/Secteurs'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Realisations from '@/components/Realisations'
import Stats from '@/components/Stats'
import Tarifs from '@/components/Tarifs'
import Apropos from '@/components/Apropos'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Secteurs />
        <Services />
        <Process />
        <Stats />
        <Realisations />
        <Tarifs />
        <Apropos />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
