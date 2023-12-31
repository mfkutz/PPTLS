import spock from '../assets/images/icon-spock.svg'

const SpockWeapon = () => {
    return (
        <div className='bg-SpockA flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center lg:left-[-75px] -left-[55px] lg:top-[172px] top-[180px] hover:cursor-pointer '>
            <div className='bg-SpockB flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center -left-0 lg:-top-[6px] top-[-4px]'>
                <div className='bg-grayShadow lg:h-[110px] h-[72px] lg:w-[110px] w-[72px] rounded-full'>
                    <div className=' bg-bgCard rounded-full lg:h-[104px] h-[67px] lg:w-[112px] w-[71px] flex justify-center items-center absolute lg:top-[25px] top-[16px]'>
                        <img src={spock} alt="scissors" className='lg:w-[52px] w-[30px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpockWeapon