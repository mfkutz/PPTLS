import paper from '../assets/images/icon-paper.svg'

const PaperWeapon = () => {
    return (
        <div className='bg-PaperA flex rounded-full absolute lg:h-[200px] h-[130px] lg:w-[200px] w-[130px] justify-center items-center lg:-left-[88px] -left-[50px] lg:top-[74px] top-[110px] hover:cursor-pointer '>
            <div className='bg-PaperB flex rounded-full absolute lg:h-[200px] h-[130px] lg:w-[200px] w-[130px] justify-center items-center -left-0 lg:-top-2 top-[-5px]'>
                <div className='bg-grayShadow lg:h-[156px] h-[101px] lg:w-[156px] w-[101px] rounded-full '>
                    <div className=' bg-bgCard rounded-full lg:h-[152px] h-[95px] lg:w-[156px] w-[100px] flex justify-center items-center absolute lg:top-[29px] top-[21px]'>
                        <img src={paper} alt="paper" className='lg:w-[68px] w-[43px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaperWeapon