import rock from '../assets/images/icon-rock.svg'

const RockWeapon = () => {
    return (
        <div className='bg-RockA flex rounded-full absolute lg:h-[200px] h-[130px] lg:w-[200px] w-[130px] justify-center items-center lg:left-[56px] left-[40px] lg:top-[301px] top-[255px] hover:cursor-pointer '>
            <div className='bg-RockB flex rounded-full absolute lg:h-[200px] h-[130px] lg:w-[200px] w-[130px] justify-center items-center -left-0 lg:-top-2 top-[-5px]'>
                <div className='bg-grayShadow lg:h-[156px] h-[101px] lg:w-[156px] w-[101px] rounded-full'>
                    <div className=' bg-bgCard rounded-full lg:h-[152px] h-[95px] lg:w-[156px] w-[100px] flex justify-center items-center absolute lg:top-[29px] top-[21px]'>
                        <img src={rock} alt="scissors" className='lg:w-[68px] w-[43px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RockWeapon