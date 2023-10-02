import React, {useState} from "react";
import bgMobile from "./imagess/bg-main-mobile.png";
import bgDesktop from "./imagess/bg-main-desktop.png";
import logo from "./imagess/card-logo.svg";
import tick from "./imagess/icon-complete.svg";
// import {format} from "date-fns";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const[cardNumber, setCardNumber] = useState("");
  const[date, setDate] = useState("");
  const[cvc, setCvc] = useState("");


  return (
    <>
    <section>
      <div className="absolute -z-10 w-full">
        <picture><source media="(min-width:1024px)" srcSet={bgDesktop}/>
        <img src={bgMobile} alt="" className="w-full lg:w-1/3"></img>
        </picture>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="mt-10 mx-5 lg:grid lg:grid-cols-1 lg:gap-8">
          <article className="front-card p-5 flex flex-col justify-between">
            <img src={logo} alt="" className="w-20 lg:w-25"/>
            <div>
              <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">
                {cardNumber}
              </h2>
              <ul className="flex items-center justify-between">
                <li className="text-white uppercase text-base lg:text-xl tracking-widest ">{name}</li>
                <li className="text-white text-base lg:text-xl tracking-widest ">{date} </li>
              </ul>
            </div>


          </article>
          <article className="back-card relative lg:ml-20">
            <p className="absolute right-10 top-32 text-xl text-white tracking-widest ">{cvc}</p> 
          </article>
        </div>
        <div className="rside">
          {!confirmed && <form className="flex flex-col justify-center gap-8 max-w-lg lg:h-screen">
            <div>
              <label htmlFor="cardholder_name">Cardholder Name</label>
              <input type="text" name="cardholder_name" id="cardholder_name" placeholder="E.g Jane Appleseed" required

              value={name}
              onChange={(e) => setName(e.target.value)} 
              
              ></input>
            </div>
            
            <div>
              <label htmlFor="card_number">Card Number</label>
              <input type="text" name="card_number" id="card_number" placeholder="E.g 1234 5678 9012 3456" maxLength={19} required

              value={cardNumber
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
              onChange={(e) => setCardNumber(e.target.value)}
              
              ></input>
            </div>

            <article className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <label htmlFor="expiry_date">Exp. Date(MM , YY)</label>
                <input type="date" name="expiry_date" id="expiry_date" placeholder="MM YY" required

                value={date}
              onChange={(e) => setDate(e.target.value)}
                
                ></input>
              </div>

              <div className="flex-1">
                <label htmlFor="cvc">CVC</label>
                <input type="number" name="cvc" id="cvc" placeholder="e.g .123" maxlength={3} required

                value={cvc}
              onChange={(e) => setCvc(e.target.value)}
                
                
                ></input>
              </div>
            </article>
          <button onClick={()=>setConfirmed(true)} className="btn">Confirm</button>  
          </form>}

          {confirmed && <ThankYou setConfirmed={setConfirmed} />}
        </div>
      </div>
    </section>



    </>
  )
}

function ThankYou({ setConfirmed }){
  return(
    <>
    <div className="flex flex-col items-center justify-center lg:h-screen h-screen max-w-lg mx-auto">
      <img src={tick} alt="" className="block mx-auto"/>
      <h1 className="text-slate-800 text-center text-3xl my-6 uppercase">Thank You !</h1>
      <p className="text-slate-400 text-center">We have added your Card Details.</p>
      <button onClick={()=>setConfirmed(false)}  className="btn block mx-auto mt-10 w-full">Continue</button>
    </div>
    </>
  )
}