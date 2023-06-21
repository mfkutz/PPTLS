import lizard from '../assets/images/icon-lizard.svg'

const LizardWeapon = () => {
    return (
        <div className='bg-LizardA flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center lg:left-[-75px] -left-[10px] lg:top-[172px] top-[301px] hover:cursor-pointer '>
            <div className='bg-LizardB flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center -left-0 lg:-top-[6px] top-[-4px]'>
                <div className='bg-grayShadow lg:h-[110px] h-[72px] lg:w-[110px] w-[72px] rounded-full '>
                    <div className=' bg-bgCard rounded-full lg:h-[104px] h-[67px] lg:w-[112px] w-[71px] flex justify-center items-center absolute lg:top-[25px] lg:left-[16px] top-[16px]'>
                        <img src={lizard} alt="paper" className='lg:w-[52px] w-[40px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LizardWeapon