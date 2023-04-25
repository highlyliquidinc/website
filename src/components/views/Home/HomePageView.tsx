import React from 'react'
import { PageLayout } from '@components/layout'
import LandingSection from './sections/LandingSection'
import RotatingTextBar from './sections/RotatingTextBar'
import PantyDropSection from './sections/PantyDropSection'
import UtilitySection from './sections/UtilitySection'
import RoadmapSection from './sections/RoadmapSection'
import FaqSection from './sections/FaqSection'
import PlanCarouselSection from './sections/PlanCarouselSection'

const HomePageView = () => {
  return (
    <PageLayout>
      <LandingSection />
      <RotatingTextBar text="Get Liquid - Instantly!" />
      <PantyDropSection />
      <UtilitySection />
      <RoadmapSection />
      <PlanCarouselSection />
      <FaqSection />
    </PageLayout>
  )
}

export default HomePageView
