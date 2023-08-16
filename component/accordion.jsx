import { useState } from "react";
import ArrowDown from '../src/assets/images/icon-arrow-down.svg'



const Accordion = (props)=>{
    const isOpen = props.openIndex === props.index;
    const arrowDirection = isOpen ? 'arrowUp' : 'arrowDown';
    const handleClick =()=>{
        props.toggleOpen(props.index)
    }
    return(
        <>
            <div className="accordion">
                <article 
                className={`question ${isOpen && 'activeQuestion'}`}
                onClick={handleClick}
                >
                <p>{props.question}</p>
                <img 
                src={ArrowDown} 
                onClick={handleClick}
                className={arrowDirection} 
                alt={arrowDirection} />
                </article>
                <article className={isOpen ? 'active' : 'inactive'}>
                    <p className="answer">{props.answer}</p>
                </article>
            </div>
        </>
    )
}

export { Accordion }