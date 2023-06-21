import closeIcon from '../assets/images/icon-close.svg'
import rulesImg from '../assets/images/image-rules.svg'


const Rules = ({ rules, setRules }) => {
    return (
        <div className='flex justify-end px-12 pt-[5px] z-50 '>
            <button onClick={() => setRules(!rules)} className='text-gray-300 border-[2px] border-Header-Outline rounded-lg px-9 py-[7px] tracking-[2px] cursor-pointer'>
                RULES
            </button>
            <div className={`${rules ? 'block' : 'hidden'} absolute lg:top-[4rem]  top-[-10px] left-[-100px] lg:left-1/2 lg:transform lg:-translate-x-1/2 -translate-x-[-40px] -translate-y-[32rem] `}>
                <div className='flex justify-between lg:p-4 p-5 lg:px-8 items-center bg-gray-200 rounded-t-lg specialShadow min-w-[350px] '>
                    <div className='text-[30px] font-bold text-textScore '>RULES</div>
                    <div className='cursor-pointer' onClick={() => setRules(!rules)}>
                        <img src={closeIcon} alt="close icon" className='z-40' />
                    </div>
                </div>
                <div className=''>
                    <img src={rulesImg} alt="rules" className='bg-gray-200 lg:p-12 p-3 pb-8 lg:pt-4 rounded-b-lg min-w-[350px] ' />
                </div>
            </div>
        </div>
    )
}

export default Rules