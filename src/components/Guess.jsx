import React from 'react'

const Guess = ({isGuessed, guess, word}) => {
  return (
        <div className='grid grid-cols-5 gap-2 md:gap-4 mb-3'>
            {new Array(5).fill(0).map((_ , i )=> {
                const bgColor = !isGuessed
                    ? 'bg-gray-900'
                    : guess[i] === word[i]
                        ? 'bg-green-400' 
                        : word.includes(guess[i])
                        ? 'bg-yellow-400'
                        : 'bg-gray-400'

                return(
                    <div className={`w-12 h-12 md:w-16 md:h-16 border border-gray-200 text-white uppercase font-bold text-4xl flex items-center justify-center ${bgColor} `}>
                        { guess[i]}
                    </div>
                )
            })}
        </div>
  )
}

export default Guess