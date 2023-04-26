import React, { FC } from 'react'
import Image from 'next/image'

const LandingSection: FC = () => {
  return (
    <div
      id="landing"
      className="max-w-xl m-auto lg:max-w-4xl xl:max-w-7xl xl:mt-20 xl:mb-32"
    >
      <div className="relative">
        <h1 className="absolute welcome-header-text neon-glow-text-orange">
          <span className="first">Welcome to</span>{' '}
          <span className="second">Highly Liquid</span>
        </h1>
        <h1 className="welcome-header-text relative opacity-0">
          <span>Welcome to</span> <span>Highly Liquid</span>
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="px-5 lg:w-1/2 lg:mt-auto">
          <p className="text-2xl py-3 green-underlined-text uppercase xl:pr-14">
            You may have heard about a little web3 project called PussyDAO...
          </p>
          <p className="text-xl py-2 xl:pr-14">
            Well, what started out as a side hustle selling NFT-backed panties
            on the internet has turned into something much bigger. Now,
            we&apos;re building a global brand: the first feminized and totally
            feral take on the streetwear industry.
          </p>
        </div>
        <div className="flex lg:w-1/2">
          <Image
            src="/nft1.png"
            width={1080}
            height={1080}
            quality={100}
            alt="highly liquid pfp nft"
            className="welcome-header-img"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingSection
