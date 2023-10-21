import React from 'react'

function Home(props) {
  console.log('Home Data', props.data)
  return (
    <div> 
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => 
                    props.addToCartHandler({price: '$1000.00' , name: 'iphone'})}>
                        Add To Cart</button>
                </div>
            </div>
        </div>
  )
}

export default Home