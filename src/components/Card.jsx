import React,{useState} from 'react';

function Card({cart,setCart}) {
    let [toggle,setToggle]= useState(true)
  return  <div className="col mb-5">
  <div className="card h-100"> 
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem; right: 0.5rem"}}>sale</div>
     <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
           
              <h5 className="fw-bolder">Sale Item</h5>
             
              <span className="text-muted text-decoration-line-through">$50.00</span>
              $25.00
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          <div class="bi-star-fill"></div>
          <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
              }} >
          Add to cart</button>:

          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
            setCart(cart-1)
            setCart(true)}} >
        Remove from cart</button>

          
          }
      </div>
      </div>
  </div>
</div>

    
  
  
}

export default Card;
