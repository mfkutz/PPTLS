import paper from '../assets/images/icon-paper.svg'

const PaperWeapon = () => {
    return (
        <div className='bg-PaperA flex rounded-full absolute lg:h-[145px] h-[130px] lg:w-[145px] w-[130px] justify-center items-center lg:left-[258px] -left-[50px] lg:top-[172px] top-[110px] hover:cursor-pointer '>
            <div className='bg-PaperB flex rounded-full absolute lg:h-[145px] h-[130px] lg:w-[145px] w-[130px] justify-center items-center -left-0 lg:-top-[6px] top-[-5px]'>
                <div className='bg-grayShadow lg:h-[110px] h-[101px] lg:w-[110px] w-[101px] rounded-full '>
                    <div className=' bg-bgCard rounded-full lg:h-[104px] h-[95px] lg:w-[112px] w-[100px] flex justify-center items-center absolute lg:top-[25px] lg:left-[16px] top-[21px]'>
                        <img src={paper} alt="paper" className='lg:w-[52px] w-[43px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaperWeapon