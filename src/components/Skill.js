
function Skill(props){ 
  

        return (
            <div className='flex m-1'>
                <span className={`text-white ${props.fontSize ?? 'text-base'}  font-extrabold`}>{props.label}</span>
                <div className={`w-60 sm:w-96 ${props.bgColor ?? 'bg-yellow-100' } ${props.fontSize ?? 'text-base'} rounded p-0 m-0 flex  items-stretch`}>
                    <span className={` ${props.mainColor ?? 'bg-yellow-300' } rounded-l font-bold m-0 p-0 inline-flex ${props.width ?? 'w-30 sm:w-40'}  pl-5`}>{props.value}</span>
                    <span className='font-thin pr-2 text-xs p-auto ml-auto my-auto'>{props.info}</span>
                </div>
            </div>
        );
    
}


export default Skill;