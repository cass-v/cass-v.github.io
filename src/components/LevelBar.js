import  Skill  from './Skill';

function LevelBar(){
        return (
        <div data-component='LevelBar' className='bg-gray-700 flex flex-col sm:inline-flex rounded-br-lg p-1 sm:p-2 items-end border-2 border-sky-500 shadow-xl'>
            <Skill label="Level." value="28 years" info="[Age]" fontSize="text-md sm:text-xl" width="w-64" bgColor="bg-gray-100" />
            <Skill label="Exp." value="+5 years" info="[Profesionnal Exp]" fontSize="text-xs" mainColor="bg-emerald-500" bgColor="bg-gray-100" />
        </div>
        );
    
}

export default LevelBar;