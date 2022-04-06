import {Component} from 'react';
import { Skill } from './Skill';

export class LevelBar extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
        <div data-component='LevelBar' className='bg-black flex flex-col sm:inline-flex rounded p-1 sm:p-2 items-end'>
            <Skill label="Level." value="28 years" info="[Age]" fontSize="text-xl" width="w-64" />
            <Skill label="Exp." value="+5 years" info="[Profesionnal Exp]" fontSize="text-xs" mainColor="bg-emerald-500" bgColor="bg-emerald-300" />
        </div>
        );
    } 
}