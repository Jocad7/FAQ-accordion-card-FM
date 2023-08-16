import { Accordion } from '../component/accordion'
import ilustrationBox from './assets/images/illustration-box-desktop.svg'
import ilustrationWoman from './assets/images/illustration-woman-online-desktop.svg'
import  pattern  from './assets/images/bg-pattern-desktop.svg'
import { data } from './assets/data'
import './App.css'
import { useState } from 'react'

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index)=>{
    openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
  }
  return (
    <>
      <div className='card'>
          <img src={ilustrationBox} className='box' alt="box" />
        <div className='container'>
          <div className='container-image'>
            <img src={ilustrationWoman} className='woman' alt="woman" />
            <img src={pattern} className='bg-pattern' alt="bg-pattern" />
          </div>
          <div className='container-FAQ'>
            <h2>FAQ</h2>
            {data.map((item,key)=>{
              return (
              <Accordion 
              question={item.question}
              answer={item.answer}
              key={key}
              index={key}
              openIndex={openIndex}
              toggleOpen={toggleOpen}
              />)
            })}
          </div>
        </div>
      </div>
      <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by   <a href="https://github.com/Jocad7/" target='_blank'>Jocad7</a>.
      </footer>
    </>
  )
}

export default App
