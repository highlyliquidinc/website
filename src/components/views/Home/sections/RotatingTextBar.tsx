import { FC } from 'react'

const RotatingTextBar: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-[#552A93] neon-glow-box-purple py-1 my-10">
      <div className="flex flex-row overflow-hidden">
        {new Array(10).fill(text).map((t, i) => (
          <span
            className="neon-glow-text-white text-2xl whitespace-nowrap mx-5"
            key={i}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="w-full bg-black neon-glow-box-white" />
    </div>
  )
}

export default RotatingTextBar
