import React, { useState } from "react"
// import "./App.css"

function App() {
  const [fprice, setFprice] = useState(0)

  const handleChangeFprice = e => {
    setFprice(
      e.target.value
    )
  }

  const [sprice, setSprice] = useState(0)

  const handleChangeSprice = e => {
    setSprice(
      e.target.value
    )
  }

  const [ship, setShip] = useState(0)

  const handleChangeShip = e => {
    setShip(
      e.target.value
    )
  }

  const [nacen, setNacen] = useState(0)

  const handleChangeNacen = e => {
    setNacen(
      Number(e.target.value)
    )
  }

  const [com, setCom] = useState(0)
  const [strah, setStrah] = useState(0)
  const [posh, setPosh] = useState(0)
  const [endPrice, setEndPrice] = useState(0)

  const clearFprice = (e) => {
    setFprice(e.target.value = '')
    setPosh(0)
    setEndPrice(0)
    setStrah(0)
    setCom(0)
  }

  const clearSprice = (e) => {
    setSprice(e.target.value = '')
  }

  const clearShip = (e) => {
    setShip(e.target.value = '')
  }

  const clearNac = (e) => {
    setNacen(e.target.value = '')
  }

  const calcul = () => {
    let commis = Number(fprice) * 0.1;
    // console.log(commis)
    setCom(parseFloat(commis).toFixed(2))

    let strahovka = (Number(fprice) + Number(ship)) * 0.02;
    if (strahovka < 3) {
      strahovka = 3
    }
    setStrah(parseFloat(strahovka).toFixed(2))

    if (fprice > 1000) {
      setPosh((Number(fprice) - 1000) * 0.15)//+500p.
    }
  }

  const calculNac = () => {
    console.log(nacen/100)
    console.log(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))
    console.log((Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))*(nacen/100))
    console.log(Number(parseFloat((Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))*(nacen/100)+(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))).toFixed(2)))
    // setNacen(Number(parseFloat((Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))*(nacen/100)+(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))).toFixed(2)))
  }




  // const [check, setCheck] = useState({
  //   isChecked: false,
  //   price: 0
  // });

  // const handleChangeCheck = (e) => {
  //   const value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //     setCheck({
  //     ...check,
  //     [e.target.name]: value,
  //   });
  // };

  return (
    <div>
      <h1>Расчет стоимости товара</h1>
      <form>
        <label>
          Изначальная цена:{" "}
          <input
            type="text"
            name="fname"
            value={fprice}
            onClick={clearFprice}
            onChange={handleChangeFprice}
          />
        </label>{" "}<br></br><br></br>
        <label>
          Конечная цена (с учетом проверки и доставки по США, например на Stockx и GOAT):{" "}
          <input
            type="text"
            name="lname"
            value={sprice}
            onClick={clearSprice}
            onChange={handleChangeSprice}
          />
        </label><br></br><br></br>
        <label>
          Ориентировочная цена доставки от LiteMF:{" "}
          <input
            type="text"
            name="fname"
            value={ship}
            onClick={clearShip}
            onChange={handleChangeShip}
          />
        </label>{" "}
      </form>
      <br></br>
      <button onClick={calcul}>
        Расчитать
      </button>
      <h5>
        Изначальная цена: {fprice} $<br></br>
        Конечная цена: {sprice} $<br></br>
        Ориентировочная цена доставки: {ship} $<br></br>
        Комиссия за выкуп: {com} $<br></br>
        Страховка: {strah} $<br></br>
        Пошлина: {posh} $ {posh > 0 ? "+500p" : ""}<br></br>
      </h5>
      <h3>
      {/* {parseFloat(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh)).toFixed(2)} */}
        Примерная окончательная цена: {parseFloat(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh)).toFixed(2)} $ 
      </h3><br></br>
      <label>
          Размер своей наценки (в процентах):{" "}
          <input
            type="text"
            name="nacname"
            onClick={clearNac}
            value={nacen}
            onChange={handleChangeNacen}
          />
        </label>{" "}
        <br></br>
      {/* <button onClick={calculNac}>
        Расчитать с наценкой
      </button> */}
      <h3>
        Примерная окончательная цена с учетом наценки: {Number(parseFloat((Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))*(nacen/100)+(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))).toFixed(2))} $  ({Number(parseFloat(((Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh))*(nacen/100)+(Number(sprice)+Number(ship)+Number(com)+Number(strah)+Number(posh)))*75).toFixed(2))} руб.) (при курсе 1$ = 75р.)
      </h3>
        {/* <label>
        Sdelat svou nacenku?
          <input
            type="checkbox"
            name="isChecked"
            checked={check.isChecked}
            onChange={handleChangeCheck}
          />{" "}
          ({check.isChecked ? "Yes" : "No"})
        </label> */}
    </div>
  )
}

export default App
