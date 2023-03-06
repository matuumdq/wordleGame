import {  useLocalObservable } from 'mobx-react'
import { observer } from "mobx-react-lite"
import { useEffect} from 'react'
import Guess from './components/Guess'
import Qwerty from './components/Qwerty'
import PuzzleStore from './stores/PuzzleStore'
import { AiOutlinePlayCircle, AiOutlineMeh, AiOutlineSmile } from 'react-icons/ai'
import { ImSad2 } from 'react-icons/im'
import { ParticlesComponent, run } from './components/Particles'

export default observer(function App() {
    const store = useLocalObservable(()=> PuzzleStore)

    useEffect(() => {
        store.init()
        window.addEventListener('keyup', store.handleKyeUp)

        return () => {
        window.removeEventListener('keyup', store.handleKyeUp)
        }

    }, [])
    
    return (
    <div className='h-[100vh] flex flex-col justify-between '>
        <div className="flex flex-col h-[85vh] items-center justify-center cursor-default mt-15">
            <h1 className='text-5xl md:text-8xl w-screen text-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 mb-8 md:mt-12'>Wordle</h1>
            {store.guesses.map((_, i) => (
                <Guess
                    key={i}
                    word={store.word} 
                    guess={store.guesses[i]} 
                    isGuessed={i < store.currentGuess}
                />
            ))}

            { store.won && (
                <div className='text-center'>
                    {run()}
                    <div 
                        className=' bg-black p-5 rounded-lg m-5 hover:scale-105 ease-in duration-300 shadow-lg shadow-[#3ebd53]'>
                        <div
                            className="flex justify-center gap-2 items-center text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-green-800 to-green-400 uppercase"
                        > 
                            You win
                            <AiOutlineSmile color='green' size={25} className='hover:scale-110' />
                        </div>
                    </div >
                    
                    <button  
                        onClick={store.init}
                        className=' bg-black p-5 rounded-lg m-4 hover:scale-105 ease-in duration-300 shadow-lg hover:shadow-[#13e7e4]'>
                        <div
                            className="flex justify-center gap-2 items-center text-transparent font-bold text-3xl bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 "
                        > 
                            Play Again
                            <AiOutlinePlayCircle color='#13e7e4' size={25}/>
                        </div>
                    </button >
                </div>
            )}
            
            { store.lost && (
                <div className='text-center'>
                    <div 
                        className=' bg-black p-5 rounded-lg m-3 hover:scale-105 ease-in duration-300 shadow-lg hover:shadow-[#9e2f2f]'>
                        <div
                            className="flex justify-center gap-2 items-center text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-red-600 to-pink-400 uppercase"
                        > 
                            You Lost
                            <AiOutlineMeh color='#dc2626' size={25} className='hover:scale-110' />
                        </div>
                    </div >
                    
                        <div className='flex text-center justify-center items-center gap-2 m-2'>
                            <h2 className='uppercase font-bold text-2xl text-white'>Better Luck next time! </h2>
                            <ImSad2 color='#DAB88B' size={30}/>
                        </div>

                    <h3 className='m-1 font-bold text-lg uppercase'>The word was: <span className='pl-2 text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 mb-8'>{store.word}</span></h3>
                    <button  
                        onClick={store.init}
                        className=' bg-black p-3 rounded-lg m-2 hover:scale-105 ease-in duration-300 shadow-lg hover:shadow-[#13e7e4]'>
                        <div
                            className="flex justify-center gap-2 items-center text-transparent font-bold text-xl bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 "
                        > 
                            Play Again
                            <AiOutlinePlayCircle color='#13e7e4' size={25}/>
                        </div>
                    </button >
                </div>
            )}

            {(store.won || store.lost) 
                ? <div></div>
                : <Qwerty store={store}/>

            
            }
        </div>
        <ParticlesComponent id="tsparticles" />
        <div className='bg-[#3a3939] bg-opacity-50 w-full h-[5vh] flex items-center justify-center'>
            <h1 className='text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400'>Created By Mateo Salinas</h1>
        </div>
    </div>
  )
})
