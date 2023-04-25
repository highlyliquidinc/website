import React, { FC, ReactNode, useState } from 'react'
import Image from 'next/image'

const DropdownQuestion: FC<{
  question: string
  children: ReactNode | ReactNode[]
}> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="my-4 border-4 border-white bg-black bg-opacity-20 rounded-2xl">
      <div
        className="hover:cursor-pointer flex justify-between items-center h-14 px-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{question}</p>
        <Image
          src="/black-arrow.svg"
          alt="arrow icon"
          height={25}
          width={25}
          className={`${isOpen ? 'transform rotate-180' : ''}`}
        />
      </div>
      <div className={`p-5 ${isOpen ? 'h-auto' : 'hidden'} mt-1`}>
        {children}
      </div>
    </div>
  )
}

const FaqSection: FC = () => {
  return (
    <div className="px-8 max-w-xl m-auto xl:max-w-6xl">
      <h2 className="text-5xl uppercase neon-glow-text-orange mb-4">faq</h2>
      <div className="text-xl py-8">
        <DropdownQuestion question="Wtf is Highly Liquid?">
          <p className="pb-5">
            Highly Liquid - formerly known as PussyDAO - is a next-generation
            apparel and product brand backed by emerging technologies. In the
            coming months, we&apos;ll be releasing a series of limited-edition
            drops across different mediums: fashion, software, games, food, and
            CPG. You can think of us like a girly Mr. Beast: a project
            that&apos;s set to wreak havoc while bringing a vibe that&apos;s
            both punk rock and hyper-feminine.
          </p>
          <p className="pb-5">
            For our genesis drop, aka, The Panty Drop, we&apos;re doing a
            collection of 3,000 IRL panties backed by NFTs. And yes - every pair
            of panties says “highly liquid” on the crotch. 😘
          </p>
          <p className="pb-5">
            After minting, holders will be able to redeem their NFTs for IRL
            panties made by some of the top ateliers in the USA. Every pair
            comes in a collector&apos;s box designed by the same packaging
            company that creates custom work for MSCHF. Plus, we have a few
            surprises for you to look forward to after the mint...
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How does the minting process work?">
          <p className="pb-5">
            The Panty Drop mint will go down in 3 phases: the pre-mint, the
            mint, and the redemption process.
          </p>
          <p className="pb-5">
            Our pre-minters were our earliest supporters - which is why they got
            to mint before everyone else and got extra NFTs in the process.
            Every pre-mint NFT looks the same, and no rarity traits will be
            revealed until mint day. On mint day, pre-minters will be given
            their official Highly Liquid NFTs and rarity traits will be
            revealed.
          </p>
          <p className="pb-5">
            If you missed out on the pre-mint, you can still make it onto the
            Pink List: this will allow you to mint on our official mint day, and
            you&apos;ll get an NFT with rarity traits that will be revealed as
            soon as you mint. Once our official mint day is over, we&apos;ll
            start our redemption period - the six-month period where holders
            have the chance to redeem their NFTs for IRL panties. After you
            redeem your NFT, your metadata will change once again. But
            don&apos;t worry - it&apos;ll still look dope AF.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="What's included in the mint price?">
          <p className="pb-5">
            Whether you&apos;re pre-minting or taking part in minting on our
            official mint date, you&apos;ll become 1 of 3,000 holders who can
            redeem their NFTs for IRL panties. That means, for the price of one
            NFT, you&apos;re getting your Highly Liquid PFP that gives you
            exclusive access to our community, IRL panties made by hand in Los
            Angeles, a collector&apos;s box, and international shipping.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How does utility work?">
          <p className="pb-5">
            Utility, utility, utility…don&apos;t worry - we&apos;ve got you
            covered. Once you redeem your NFT for your panties, you&apos;ll get
            your official Highly Liquid PFP. As a holder of this PFP, you are
            one of 3,000 individuals who are foundational members of the next
            generation of streetwear. Highly Liquid does not stop after the
            panty drop. We are an artist collective that will be releasing drops
            of fashion, software, games, tech, and music. Plus, we have some
            exciting partnerships lined up for this year that we&apos;ll be able
            to talk about soon. 👀 As one of our holders, you&apos;ll be the
            first to know about everything we do, get exclusive access to
            private channels in our Discord and IRL events that we&apos;re
            hosting in some of the top locations in NYC, give input directly to
            our artists and designers, get exclusive AMAs with our celebrity and
            influencer partners, and get the first chance to participate in our
            games, drops, and giveaways.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="What is the Pink List?">
          <p className="pb-5">
            Instead of a white list, we&apos;re doing a Pink List. If
            you&apos;re lucky enough to get on it, you&apos;ll be given priority
            on mint day and get your panties before they sell out.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How do rarity traits come into play?">
          <p className="pb-5">
            Our rarity traits work a little bit differently than your typical
            NFT collection.
          </p>
          <p className="pb-5">
            We have different color combinations when it comes to the IRL
            panties - and even a few super rare ones that we know you&apos;ll be
            dying to get your hands on. All rarity is distributed randomly, so
            good luck. 😘
          </p>
          <p className="pb-5">
            If you were part of our pre-mint, you will receive an NFT that looks
            just like every other pre-mint NFT - in other words, you won&apos;t
            know how rare your official PussyDAO NFT is until mint day when your
            metadata is updated and your rarity traits are revealed. Similarly,
            if you&apos;re minting with us for the first time on mint day,
            you&apos;ll find out how lucky you got once you mint - and how rare
            your panties are compared to everyone else&apos;s.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How do I get my panties?">
          <p className="pb-5">
            After minting your NFT, there will be a brief period of time before
            our redemption process goes live. Once the redemption period is
            open, you can come to our website, click “redeem,” and be directed
            to our redemption page. The redemption period is a six-month period
            that allows holders to redeem their NFTs for IRL panties. Once the
            redemption period closes, holders will no longer be eligible for the
            redemption process. Please keep in mind that all panties are final
            sale, and once you redeem your NFT for your panties, no refunds or
            returns can be made.
          </p>
          <p className="pb-5">
            Here, you&apos;ll be prompted to enter your name, shipping address,
            phone number, and other information required to ensure your panties
            are shipped to wherever you are in the world. Once you redeem your
            NFT for your panties, the metadata and art of your NFT will change,
            but don&apos;t worry - you&apos;ll get something new that still
            looks sick AF and entitles you to some cool shit in the future. 👀
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="Where does Highly Liquid ship?">
          <p className="pb-5">Worldwide, baby! 🌎</p>
        </DropdownQuestion>
        <DropdownQuestion question="What is the redemption period?">
          <p className="pb-5">
            The redemption period is the six-month period that will start
            shortly after the official mint date. This is the time period where
            holders have the opportunity to redeem their NFTs for their IRL
            panties and have their panties shipped to them anywhere in the
            world.
          </p>
          <p className="pb-5">
            Once the redemption period closes, holders will no longer be able to
            redeem their NFTs for IRL panties.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="Where are Highly Liquid panties made?">
          <p className="pb-5">
            Our panties were designed by our founder and made in Los Angeles by
            ateliers that work with leading luxury brands like Rodarte and
            Marchesa. We wanted our panties to represent what we stand for as a
            business and brand, and we&apos;re grateful to be working with a
            factory that&apos;s truly aligned with our mission and purpose.
          </p>
          <p className="pb-5">
            Additionally, one of our ateliers has deep ties to luxury
            manufacturing, meaning our panties are produced by experts in the
            field. Some of the materials used to produce our panties include
            elastic imported from Japan and premium satin sourced by specialists
            in Los Angeles.
          </p>
          <p className="pb-5">
            The manufacturer we partnered with to produce the packaging that our
            panties come in is also based in Los Angeles, and they have a long
            history of working with some of our favorite brands, including
            MSCHF. They custom-created our collector&apos;s box so you can keep
            your panties preserved forever like the piece of art they are.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How does sizing work?">
          <p className="pb-5">
            We think you&apos;re perfect just the way you are, which is why our
            panties are designed to be one-size-fits-most. The waistband is
            adjustable, so they can be worn low-rise or high-rise, and they fit
            most body types across a range of traditional small, medium, and
            large sizing standards.
          </p>
          <p className="pb-5">
            The cut of our panties is extremely skimpy - that&apos;s because
            Highly Liquid is giving Y2K vibes and bimbocore. If you&apos;ve got
            it, flaunt it (and we know you do). 🤷‍♀️
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="How do I care for my panties?">
          <p className="pb-5">
            We know you like it rough, but your panties must be hand-washed,
            hang-dried, and handled with extreme care. They are a handmade
            collector&apos;s item created with love in Los Angeles.
          </p>
        </DropdownQuestion>
        <DropdownQuestion question="Why are you launching an NFT project in 2023?">
          <p className="pb-5">
            Some might think that crypto is dead, but we&apos;ve never been the
            type to listen to what other people have to say. 😈 That&apos;s
            because we believe that web3 is powerful - and that you&apos;re
            powerful for choosing to participate in an ecosystem that is still
            too new for most people to even wrap their heads around.
          </p>
          <p className="pb-5">
            Highly Liquid isn&apos;t just about building something new:
            it&apos;s about burning down the status quo and creating a universe
            from scratch. For the first time ever, we&apos;re making it possible
            for our community to build a brand alongside its project creators;
            NFTs aren&apos;t just decentralizing finance - they&apos;re
            decentralizing culture, and empowering holders to make the kind of
            societal impact that can change our generation. The bottom line? We
            believe that web3 and crypto puts power and access back into the
            hands of the people.
          </p>
          <p className="pb-5">
            And the fact that you&apos;re still here means that you do, too.
          </p>
        </DropdownQuestion>
      </div>
    </div>
  )
}

export default FaqSection
