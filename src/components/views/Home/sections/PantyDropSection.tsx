import React, { FC } from 'react'
import Image from 'next/image'

const PantyDropSection: FC = () => {
  return (
    <div className="max-w-xl m-auto xl:max-w-7xl xl:flex xl:flex-row xl:my-32">
      <div className="relative xl:w-1/2">
        <Image
          src="/og-nft.png"
          alt="pussydao og nft"
          height={800}
          width={800}
          className="w-9/12 shadow-md ml-5"
        />
        <div className="absolute -bottom-20 right-0 mr-10">
          <p className="bg-white border-2 border-[#552a93] p-5 pr-14 box-2d-shadow-purple text-xl underline underline-offset-4 uppercase xl:p-10 xl:pr-20 xl:text-2xl">
            1 message <br /> received
          </p>
          <p className="text-right uppercase underline underline-offset-2 text-xl xl:mt-3">
            read
          </p>
        </div>
      </div>
      <div className="mt-20 px-5 xl:w-1/2 xl:flex xl:flex-col xl:justify-center">
        <h3 className="font-body text-2xl">Meet Drop #001</h3>
        <h2 className="font-body green-underlined-text leading-5 text-3xl mt-2 mb-8">
          The Panty Drop
        </h2>
        <p className="text-xl">
          The Panty Drop is our genesis drop - each NFT is redeemable for 1 pair
          of limited-edition panties that say (you guessed it) Highly Liquid 😉
          and acts as your access pass to our exclusive drops, IRL events, and
          artist collective.
        </p>
      </div>
    </div>
  )
}

export default PantyDropSection
