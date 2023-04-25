import React, { FC } from 'react'
import Image from 'next/image'

const PantyDropSection: FC = () => {
  return (
    <div className="max-w-xl m-auto xl:flex xl:flex-row xl:items-center xl:max-w-7xl xl:my-32">
      <div className="px-4 xl:flex xl:flex-col xl:justify-center xl:pt-10 xl:w-[1000px]">
        <h2 className="text-5xl uppercase neon-glow-text-orange mb-4">
          Roadmap
        </h2>
        <p className="text-xl">
          To date, streetwear has only ever been designed for one archetype:
        </p>
        <p className="uppercase font-body green-underlined-text text-2xl mt-2 mb-8">
          it&apos;s bro-centric, boring, and everything looks the same.
        </p>
      </div>
      <div className="mx-4 p-1 bg-[#FF577F] box-2d-shadow-pink">
        <Image
          src="/model1.png"
          alt="photo of model in highly liquid panties"
          height={1500}
          width={1500}
        />
      </div>
      <div className="text-xl px-4 py-8 xl:w-[1400px]">
        <p className="pb-6">
          Starting with our NFT collection, Highly Liquid aims to build a new
          world and a whole new take on the{' '}
          <span className="uppercase text-[#FF577F]">
            future of digital fashion.
          </span>{' '}
          We&apos;re a streetwear brand and social experiment designed by and
          for troublemakers. We are a community-driven retail experience that
          makes{' '}
          <span className="uppercase text-[#FF577F]">
            limited-edition drops
          </span>{' '}
          and{' '}
          <span className="uppercase text-[#FF577F]">capsule collections.</span>
        </p>
        <p>
          Our goal is to create the funnest community on the internet - a
          Discord that feels like a party that never ends, a secret hideaway for
          weirdos and mischief maxis, and a place where you can fully lean into
          your unhinged self.
        </p>
      </div>
    </div>
  )
}

export default PantyDropSection
