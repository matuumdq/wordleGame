import { observer } from "mobx-react-lite"

export default observer (function Qwerty({store}) {

    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return (
    <div className="mt-12">
        {qwerty.map((row) => (
                <div className="flex items-center justify-center w-screen">
                    {row.split('').map((char) => {
                        const bgColor = store.exactGuesses.includes(char)
                            ? 'bg-green-400'
                            : store.inexactGuesses.includes(char)
                            ? 'bg-yellow-400'
                            : store.allGuesses.includes(char)
                            ? 'bg-gray-400'
                            : 'bg-gray-200'

                            return (
                                <div className={`m-[1px] md:m-1 flex h-10 w-10 items-center justify-center rounded-sm uppercase ${bgColor} `}>
                                    {char}
                                </div>
                            )
                    })}
                </div>
        ))}
    </div>
  )
})