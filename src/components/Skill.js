import {Component} from 'react';

export class Skill extends Component{ 
    render(){

        return (
            <div className='flex m-1'>
                <span className={`text-white ${this.props.fontSize ?? 'text-base'}  font-extrabold`}>{this.props.label}</span>
                <div className={`w-60 sm:w-96 ${this.props.bgColor ?? 'bg-yellow-100' } ${this.props.fontSize ?? 'text-base'} rounded p-0 m-0 flex  items-stretch`}>
                    <span className={` ${this.props.mainColor ?? 'bg-yellow-300' } rounded-l font-bold m-0 p-0 inline-flex ${this.props.width ?? 'w-30 sm:w-40'}  pl-5`}>{this.props.value}</span>
                    <span className='font-thin pr-2 text-xs p-auto ml-auto my-auto'>{this.props.info}</span>
                </div>
            </div>
        );
    }
}