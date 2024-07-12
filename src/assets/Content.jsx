import React,{useEffect, useRef, useState} from "react"

function Content(){
    useEffect(()=>{
        document.title='SELIN'
    },[])
    const[items,setItem]=useState([])
    const [itemType,setItemType]=useState('')
    const [itemNum,setItemNum]=useState('')
    function handleItemNum(event){

        setItemNum(event.target.value)
    }
    function handleItemType(event){
        setItemType(event.target.value)
    }
    const btref=useRef()
    function handlebt(){
        btref.current.style.background='grey';
        const newItem={type:itemType, number:itemNum}
        setItem(i=>[...i,newItem])
    }
    return(
        <>
        <div className="menu">
            <h2>ITEMS IN MARKET</h2>
            <div className="images">
            <p><img src="./images/veges.jpg"height="40px" ></img><br/>vegetables</p>
            <p><img src="./images/meat.jpg"height="40px"></img><br/>meat</p> 
            <p><img src="./images/drinks.jpg"height="40px"></img><br/>drinks</p>
            <p><img src="./images/fruits.jpg"height="40px"></img><br/>fruits</p>
            </div>
            <div className="cart">
            <h3>choose your desired product</h3>
            <ul>
                {items.map((item, index)=><li key={index}> {item.number}-{item.type}</li>)}
            </ul>
            </div>
            <input type="text" placeholder="item"onChange={handleItemType} value={itemType}></input> <br/>
            <input type="number" placeholder="number"onChange={handleItemNum} value={itemNum}></input> <br/>
            <button ref={btref} onClick={handlebt}>add to cart</button>
           
        </div>
        </>
    )
}
export default Content