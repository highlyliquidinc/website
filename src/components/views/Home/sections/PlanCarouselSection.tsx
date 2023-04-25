import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

const CarouselItem: FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="flex flex-col shadow-lg bg-white h-48 w-52 mx-5 p-4 text-md xl:h-80 xl:w-80 xl:px-10">
      <h3 className="text-center font-body xl:text-2xl">{title}</h3>
      <div className="flex items-center justify-center xl:text-xl xl:mt-14">
        <p className="text-center mt-4">{text}</p>
      </div>
    </div>
  )
}

const PlanCarouselSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="mb-20">
      <h2 className="font-body text-2xl text-center green-underlined-text mb-8 mt-5">
        Here&apos;s the plan
      </h2>
      <div className="grid grid-cols-5 overflow-x-scroll gap-x-60">
        <CarouselItem
          title="Drop #002"
          text="The first-ever art prank involving payments and panties (we can't say much more rn)"
        />
        <CarouselItem
          title="Drop #003"
          text="We're dropping a dating app - Highly Liquid style ❤️‍🔥"
        />
        <CarouselItem
          title="Drop #004"
          text="Meet our first official influencer collab 👑"
        />
        <CarouselItem
          title="Drop #005"
          text="Our capsule collection is set to go live in fall of 2023"
        />
        <CarouselItem
          title="Drop #006"
          text="Get ready for total world-domination 😈🌎"
        />
      </div>
      {/* <Carousel
        selectedItem={currentSlide}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        centerMode
      >
        <CarouselItem
          title="Drop #002"
          text="The first-ever art prank involving payments and panties (we can't say much more rn)"
        />
        <CarouselItem
          title="Drop #003"
          text="We're dropping a dating app - Highly Liquid style ❤️‍🔥"
        />
        <CarouselItem
          title="Drop #004"
          text="Meet our first official influencer collab 👑"
        />
        <CarouselItem
          title="Drop #005"
          text="Our capsule collection is set to go live in fall of 2023"
        />
        <CarouselItem
          title="Drop #006"
          text="Get ready for total world-domination 😈🌎"
        />
      </Carousel> */}
      {/* <div>
        <div>
          <button onClick={() => setCurrentSlide(currentSlide - 1)}>
            <Image
              src="/pink-arrow-left.svg"
              alt="arrow icon"
              height={35}
              width={35}
            />
          </button>
          <button onClick={() => setCurrentSlide(currentSlide + 1)}>
            <Image
              src="/pink-arrow-right.svg"
              alt="arrow icon"
              height={35}
              width={35}
            />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default PlanCarouselSection
