import lizard from '../assets/images/icon-lizard.svg'

const LizardWeaponBig = ({ disabled }) => {
    return (
        <div className={`bg-LizardA flex rounded-full absolute lg:h-[294px] h-[130px] lg:w-[294px] w-[130px] justify-center items-center ${disabled}`}>
            <div className='bg-LizardB flex rounded-full absolute lg:h-[294px] h-[130px] lg:w-[294px] w-[130px] justify-center items-center -left-0 lg:-top-3 top-[-5px]'>
                <div className='bg-grayShadow lg:h-[224px] h-[101px] lg:w-[224px] w-[101px] rounded-full'>
                    <div className=' bg-bgCard rounded-full lg:h-[218px] h-[95px] lg:w-[224px] w-[100px] flex justify-center items-center absolute lg:top-[45px] top-[21px]'>
                        <img src={lizard} alt="scissors" className='lg:w-[103px] w-[43px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LizardWeaponBig