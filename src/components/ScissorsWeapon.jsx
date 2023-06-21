import scissors from '../assets/images/icon-scissors.svg'

const ScissorsWeapon = () => {
  return (
    <div className='bg-ScissorsA flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center lg:left-[93px] left-[53px] lg:top-[47px] top-[95px] hover:cursor-pointer'>
      <div className='bg-ScissorsB flex rounded-full absolute lg:h-[145px] h-[96px] lg:w-[145px] w-[96px] justify-center items-center -left-0 lg:-top-[6px] top-[-4px]'>
        <div className='bg-grayShadow lg:h-[110px] h-[72px] lg:w-[110px] w-[72px] rounded-full'>
          <div className=' bg-bgCard rounded-full lg:h-[104px] h-[67px] lg:w-[112px] w-[71px] flex justify-center items-center absolute lg:top-[25px] lg:left-[16px] top-[16px]'>
            <img src={scissors} alt="scissors" className='lg:w-[52px] w-[32px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScissorsWeapon