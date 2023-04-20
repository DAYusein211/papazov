import style from '../styles/Home.module.css'
import arrow from '../../public/arrows.png'
import Image from 'next/image'

export default function Home() 
{
  return (
    
    <div className = {style.background}>
      <main className = {style.main}>
          <div>
             <h1 className = {`${style.center} ${style.h1}`}>Discover polluted areas!</h1>
             <p className = {`${style.center} ${style.p}`}>You can check how polluted somewhere is just by choosing its location!</p>
          </div>
        <Image alt = "arrows" src = {arrow} width = "50" className = {style.arrows}/>
        <div className = {style.div}>
            <div className = {style.container}>
                  <div className = {style.map}>
                  </div>
                  <p className = {style.p1}>Your location: {"denis"}</p>
                  <p className = {style.percentage}>Pollution percentage: {"43.2%"}</p>              
            </div>
        </div>
      </main>
    </div>
   
  )
}
