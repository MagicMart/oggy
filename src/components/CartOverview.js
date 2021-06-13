import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

const cartContainerStyles = {
  display: "flex",
  justifyContent: "flex-end",
}

const cartStyles = {
  border: "2px solid #0e5e83",
  borderRadius: "10%",
  width: "fit-content",
  padding: "1rem",
}

const buttonStyles = {
  fontSize: "1rem",
  textAlign: "center",
  color: "black",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()

  return (
    <div style={cartContainerStyles}>
      <div style={cartStyles}>
        {/* This is where we'll render our cart */}
        <p>
          Number of Items: <span style={{ fontSize: "2rem" }}>{cartCount}</span>
        </p>
        <p>
          Total: <span style={{ fontSize: "2rem" }}>{formattedTotalPrice}</span>
        </p>
        {/* Redirects the user to Stripe */}
        <button
          style={buttonStyles}
          disabled={loading || cartCount === 0}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
        >
          {loading ? "Loading..." : "Checkout"}
        </button>{" "}
        <button style={buttonStyles} onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  )
}

export default Cart
