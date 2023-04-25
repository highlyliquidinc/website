import React, { FC } from 'react'
import Image from 'next/image'

const UtilitySection: FC = () => {
  return (
    <div className="border-t-2 border-b-2 my-16 border-black m-auto xl:flex xl:flex-row">
      <div className="px-5 py-16 border-b-2 border-black xl:border-b-0 xl:border-r-2 xl:w-1/2 xl:flex xl:justify-end xl:py-32">
        <div className="max-w-xl m-auto xl:m-32 xl:my-auto xl:w-96">
          <h2 className="text-4xl neon-glow-text-pink xl:text-5xl">Utility</h2>
          <p className="text-xl xl:text-2xl xl:mt-5">
            In a world where the mainstream has turned its back on web3, we have
            the chance to show everyone what NFTs can do - and how they have the
            potential to completely upend the way brands are built.
          </p>
        </div>
      </div>

      <div className="xl:w-1/2">
        <div className="relative px-2 my-16 xl:w-[700px] xl:m-32 xl:ml-0">
          <div className="shadow-xl max-w-xl m-auto">
            <div className="bg-[#48CBA9]  flex justify-around items-center h-10">
              <Image
                src="/arrow-left.svg"
                alt="arrow icon"
                width={20}
                height={20}
                className="h-6 w-auto -mb-1"
              />
              <p className="text-white uppercase text-lg">
                #utility: read text
              </p>
              <Image
                src="/arrow-right.svg"
                alt="arrow icon"
                width={20}
                height={20}
                className="h-6 w-auto -mb-1"
              />
            </div>
            <div className="bg-[#35AF8F] h-1" />
            <div className="bg-white p-5 xl:p-12 xl:text-xl">
              <p>
                Highly Liquid&apos;s goal is to instill NFTs with newfound
                utility: to start a new wave of digital fashion and art pranks
                that empowers holders to win alongside the project&apos;s
                creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilitySection
