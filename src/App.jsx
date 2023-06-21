import { useEffect, useState } from 'react'
import Header from './components/Header'
import PaperWeapon from './components/PaperWeapon'
import ScissorsWeapon from './components/ScissorsWeapon'
import RockWeapon from './components/RockWeapon'
import TriangleBase from './components/TriangleBase'
import ScissorsWeaponBig from './components/ScissorsWeaponBig'
import PaperWeaponBig from './components/PaperWeaponBig'
import RockWeaponBig from './components/RockWeaponBig'
import Rules from './components/Rules'

function App() {
  const [score, setScore] = useState(0)
  const [scoreComputer, setScoreComputer] = useState(0)
  const [rules, setRules] = useState(false)
  const [selectedWeapon, setSelectedWeapon] = useState('')

  const [firstStep, setFirstStep] = useState(true)
  const [secondStep, setSecondStep] = useState(false)
  const [thirdStep, setThirdStep] = useState(false)


  const [showPaper, setShowPaper] = useState(false)
  const [showScissors, setShowScissors] = useState(false)
  const [showRock, setShowRock] = useState(false)

  const [showPaperComputer, setShowPaperComputer] = useState(false)
  const [showScissorsComputer, setShowScissorsComputer] = useState(false)
  const [showRockComputer, setShowRockComputer] = useState(false)

  const [userWinner, setUserWinner] = useState(false)
  const [computerWinner, setComputerWinner] = useState(false)
  const [resultTie, setResultTie] = useState(false)

  const [gameInProgress, setGameInProgress] = useState(false);

  const [auraRight, setAuraRight] = useState(false)
  const [auraLeft, setAuraLeft] = useState(false)

  function playAgain() {
    setSelectedWeapon('')

    setFirstStep(true)
    setSecondStep(false)
    setThirdStep(false)

    setShowPaper(false)
    setShowScissors(false)
    setShowRock(false)

    setShowPaperComputer()
    setShowScissorsComputer()
    setShowRockComputer()

    setUserWinner(false)
    setComputerWinner(false)
    setResultTie(false)

    setGameInProgress(false)
    setAuraRight(false)
    setAuraLeft(false)

  }

  const selectWeapon = (weapon) => {
    setSelectedWeapon(weapon)
    setFirstStep(false)
    setSecondStep(true)
    setGameInProgress(true)
    computerChoice()
  }

  useEffect(() => {
    showWeapon()
  }, [selectedWeapon])


  function showWeapon() {

    if (selectedWeapon === 'Paper') {
      setShowPaper(true)
    }
    if (selectedWeapon === 'Scissor') {
      setShowScissors(true)
    }
    if (selectedWeapon === 'Rock') {
      setShowRock(true)
    }

  }


  function computerChoice() {
    let choicePc = Math.floor(Math.random() * 3)

    if (choicePc === 0) {
      setShowPaperComputer(true)
    } else if (choicePc === 1) {
      setShowScissorsComputer(true)
    } else if (choicePc === 2) {
      setShowRockComputer(true)
    }
    console.log('computer elige', choicePc)
  }

  useEffect(() => {
    if (gameInProgress) {
      determineWinner()
    }
  }, [
    showRock,
    showScissors,
    showPaper,
    showScissorsComputer,
    showPaperComputer,
    showRockComputer,
  ]);


  function determineWinner() {
    if (!gameInProgress) {
      return; // Si el juego no está en curso, no hagas nada
    }

    // Resto de tu lógica para determinar al ganador
    if (showRock && showScissorsComputer ||
      showScissors && showPaperComputer ||
      showPaper && showRockComputer) {
      userWin();

      setTimeout(() => {
        setAuraLeft(true);

      }, 2000);
    } else if (showRockComputer && showScissors ||
      showScissorsComputer && showPaper ||
      showPaperComputer && showRock) {
      computerWin();

      setTimeout(() => {
        setAuraRight(true);

      }, 2000);




    } else {
      tie();
    }
  }



  function userWin() {
    setTimeout(() => {
      setResultTie(false)
      setSecondStep(false)
      setThirdStep(true)
      setUserWinner(true)
      setScore(score + 1)
      console.log('ganó el usuario');
    }, 1000);
  }
  function computerWin() {


    setTimeout(() => {
      setResultTie(false)
      setSecondStep(false)
      setThirdStep(true)
      setComputerWinner(true)
      setScoreComputer(scoreComputer + 1)

      console.log('ganó la compu');

    }, 1000);
  }
  function tie() {

    setTimeout(() => {
      setSecondStep(false)
      setThirdStep(true)
      setResultTie(true)
    }, 1000);
    console.log('empate');
  }

  function resetCount() {
    setScore(0)
    setScoreComputer(0)
  }


  return (
    <div className='flex flex-col lg:overflow-visible overflow-hidden min-h-screen'>


      <div className="flex flex-col justify-center items-center pt-12">

        {/* //////////////////////////HEADER/////////////////////////// */}
        <Header score={score} scoreComputer={scoreComputer} />




        {/* //////////////////////////GAME START//////////////////////////// */}
        <div className={`pt-[10rem] relative ${firstStep ? '' : 'hidden'}`}>

          {/* ///////////////////TRIANGLE BASE/////////////////// */}
          <TriangleBase />

          {/* /////////////////////PAPER///////////////////// */}
          <div onClick={() => selectWeapon('Paper')}>
            <PaperWeapon />
          </div>

          {/* ///////////////////SCISSORS///////////////////// */}
          <div onClick={() => selectWeapon('Scissor')}>
            <ScissorsWeapon />
          </div>

          {/* /////////////////////ROCK///////////////////// */}
          <div onClick={(() => selectWeapon('Rock'))}>
            <RockWeapon />
          </div>

        </div>





        {/* ///////////////// SECOND STEP - SELECTED WEAPON //////////////////// */}
        <div className={`pt-[4rem] flex min-w-[700px] min-h-[500px] justify-around relative ${secondStep ? '' : 'hidden'}`}>
          <div className='flex flex-col items-center'>
            <div className='lg:text-white text-transparent lg:text-[24px] text-[0px] tracking-[2px] pl-3 '>
              YOU PICKED
            </div>
            {/* ////////////HERE YOUR SELECTED PICKED/////////////////////// */}
            <div className='absolute lg:top-[180px] top-[103px] left-[190px] lg:left-[14px]'>

              <ScissorsWeaponBig disabled={showScissors ? '' : 'hidden'} />

              <PaperWeaponBig disabled={showPaper ? '' : 'hidden'} />

              <RockWeaponBig disabled={showRock ? '' : 'hidden'} />
              <div className='text-white absolute lg:hidden top-[150px] left-[10px] flex w-[150px] text-[18px] tracking-[2px]'>
                YOU PICKED
              </div>
            </div>

          </div>

          <div>
            <div className='lg:text-white text-transparent lg:text-[24px] text-[0px] tracking-[2px] pl-4 relative'>
              THE HOUSE PICKED
            </div>

            <div className=' bg-transparent rounded-full h-[218px] w-[224px] flex justify-center items-center absolute top-[205px]'>
              {/* ////////////HERE  SELECTED PICKED/////////////////////// */}
              <div className='lg:top-[-23px] top-[-101px] lg:left-[-20px] left-[-121px]  absolute'>


                <ScissorsWeaponBig disabled={showScissorsComputer ? '' : 'hidden'} />

                <PaperWeaponBig disabled={showPaperComputer ? '' : 'hidden'} />

                <RockWeaponBig disabled={showRockComputer ? '' : 'hidden'} />
                <div className='text-white absolute lg:hidden top-[150px] left-[-20px] flex w-[200px] text-[18px] tracking-[2px]'>
                  THE HOUSE PICKED
                </div>
              </div>

            </div>
          </div>
        </div>





        {/* ////////////////////////  THIRD STEP - WINNER / LOOSE //////////////////////// */}

        <div className={`pt-[4rem] flex min-w-[700px] min-h-[500px] justify-around relative ${thirdStep ? '' : 'hidden'}`}>
          <div className='flex flex-col items-center'>
            <div className='lg:text-white text-transparent lg:text-[24px] text-[0px] tracking-[2px] pl-3 moving-elementL'>
              YOU PICKED
            </div>
            {/* ////////////HERE YOUR SELECTED PICKED/////////////////////// */}
            <div className='absolute lg:top-[180px] top-[103px] left-[190px] lg:left-[14px]'>

              <div className='absolute moving-elementL z-10'>
                <ScissorsWeaponBig disabled={showScissors ? '' : 'hidden'} />
              </div>

              <div className='absolute moving-elementL z-10'>
                <PaperWeaponBig disabled={showPaper ? '' : 'hidden'} />
              </div>

              <div className='absolute moving-elementL z-10 '>
                <RockWeaponBig disabled={showRock ? '' : 'hidden'} />
              </div>

              <div className='text-white absolute lg:hidden top-[150px] left-[10px] flex w-[150px] text-[18px] tracking-[2px]'>
                YOU PICKED
              </div>
            </div>
          </div>


          {/* ///////////////////////////////  CASE WIN   /////////////////////// */}
          <div className={`flex flex-col justify-center items-center lg:ml-0 ml-4 lg:pt-0 pt-[76px] absolute top-[16rem] left-[11.4rem] z-20 w-[300px] ${userWinner ? '' : 'hidden'} `}>
            <div className='text-white text-[64px] font-bold '>
              YOU WIN
            </div>
            <button
              className='bg-scoreBg lg:py-[14px] lg:px-[80px] py-[12px] px-[62px] lg:rounded-xl rounded-[7px] uppercase text-textScore text-[18px] tracking-[2px] hover:text-red-600  '
              onClick={playAgain}
            >

              Play Again
            </button>
          </div>

          {/* ///////////////////////////////  CASE LOOSE   /////////////////////// */}
          <div className={`flex flex-col justify-center items-center lg:ml-0 ml-4 lg:pt-0 pt-[76px] absolute top-[16rem] left-[11.4rem] z-20 w-[300px] ${computerWinner ? '' : 'hidden'} `}>
            <div className='text-white lg:text-[64px] text-[57px] lg:pt-0 font-bold '>
              YOU LOSE
            </div>
            <button
              className='bg-scoreBg lg:py-[14px] lg:px-[80px] py-[12px] px-[62px] lg:rounded-xl rounded-[7px] uppercase text-textScore text-[18px] tracking-[2px] hover:text-red-600  '
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>

          {/* ///////////////////////////////  CASE TIE   /////////////////////// */}
          <div className={`flex flex-col justify-center items-center lg:ml-0 ml-4 lg:pt-0 pt-[76px] absolute top-[16rem] left-[11.4rem] z-20 w-[300px] ${resultTie ? '' : 'hidden'}`}>
            <div className='text-white text-[64px] font-bold '>
              TIE!
            </div>
            <button
              className='bg-scoreBg lg:py-[14px] lg:px-[80px] py-[12px] px-[62px] lg:rounded-xl rounded-[7px] uppercase text-textScore text-[18px] tracking-[2px] hover:text-red-600  '
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>



          <div>

            <div className='lg:text-white text-transparent lg:text-[24px] text-[0px] tracking-[2px] pl-4 moving-elementR relative'>
              THE HOUSE PICKED
            </div>
            <div className='bg-transparent rounded-full h-[218px] w-[224px] flex justify-center items-center absolute top-[205px]'>
              {/* ////////////HERE COMPUTER SELECTED PICKED/////////////////////// */}
              <div className='lg:top-[-23px] top-[-101px] lg:left-[-20px] left-[-121px] absolute'>

                <div className='absolute moving-elementR z-10'>
                  <ScissorsWeaponBig disabled={showScissorsComputer ? '' : 'hidden'} />
                </div>

                <div className='absolute moving-elementR z-10'>
                  <PaperWeaponBig disabled={showPaperComputer ? '' : 'hidden'} />
                </div>

                <div className='absolute moving-elementR z-10'>
                  <RockWeaponBig disabled={showRockComputer ? '' : 'hidden'} />
                </div>



                {/* /////////////////////////////AURA COMPPUTER////////////////////////// */}
                <div className={`absolute lg:left-[280px] left-[66px] top-[60px] lg:top-[140px] ${auraRight ? '' : 'hidden'}  `}>
                  <div className='relative flex items-center justify-center'>
                    <div className=' absolute lg:w-[423px] w-[163px] h-[163px] lg:h-[423px] -z-0 rounded-full colorOne aura-1'>


                    </div>
                    <div className='absolute lg:w-[564px] w-[220px] h-[220px] lg:h-[564px] -z-10 rounded-full colorTwo aura-2'>


                    </div>
                    <div className=' absolute lg:w-[729px] w-[280px] h-[280px] lg:h-[729px] -z-20  rounded-full colorThree aura-3'>


                    </div>

                  </div>

                </div>
                {/* /////////////////////////////AURA USER////////////////////////// */}
                <div className={`absolute lg:left-[-346px] left-[-122px] top-[60px] lg:top-[140px] ${auraLeft ? '' : 'hidden'}`}>
                  <div className='relative flex items-center justify-center'>
                    <div className=' absolute lg:w-[423px] w-[163px] h-[163px] lg:h-[423px] -z-0 rounded-full colorOne aura-1'>


                    </div>
                    <div className='absolute lg:w-[564px] w-[220px] h-[220px] lg:h-[564px] -z-10 rounded-full colorTwo aura-2'>


                    </div>
                    <div className=' absolute lg:w-[729px] w-[280px] h-[280px] lg:h-[729px] -z-20  rounded-full colorThree aura-3'>


                    </div>

                  </div>

                </div>

                <div className='text-white absolute lg:hidden top-[150px] left-[-20px] flex w-[200px] text-[18px] tracking-[2px]'>
                  THE HOUSE PICKED
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className='flex flex-col lg:items-end lg:justify-end lg:min-w-full lg:pt-[62px] pt-[90px] absolute lg:top-[40rem] top-[36rem]'>

          {/* ////////////////////////////  RESET COUNT /////////////////////////////////*/}
          <div className='flex justify-end px-12 lg:pt-[58px] relative z-20'>
            <button
              className='text-gray-300 border-[2px] border-Header-Outline rounded-lg px-9 py-[7px] tracking-[2px] cursor-pointer'
              onClick={resetCount}
            >
              RESET
            </button>
          </div>


          {/* //////////////////////////////////Rules/////////////////////////////////// */}
          <div className='z-50' >
            <Rules rules={rules} setRules={setRules} />
          </div>

        </div>

      </div>





    </div >

  )
}

export default App
