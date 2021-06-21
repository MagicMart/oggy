import React, { useState } from "react"
import styled from "styled-components"

import { useShoppingCart } from "use-shopping-cart"

const CartStyles = styled.div`
  border: 2px solid #0e5e83;
  border-radius: 10%;
  width: fit-content;
  padding: 2rem;
  p {
    margin: 0 0 1rem;
  }
`

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
    <CartStyles>
      {/* This is where we'll render our cart */}
      <p>
        Number of Items: <span style={{ fontSize: "3rem" }}>{cartCount}</span>
      </p>
      <p>
        Total: <span style={{ fontSize: "3rem" }}>{formattedTotalPrice}</span>
      </p>
      {/* Redirects the user to Stripe */}
      <button
        disabled={loading || cartCount === 0}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "Checkout"}
      </button>{" "}
      <button onClick={clearCart}>Clear cart</button>
    </CartStyles>
  )
}

export default Cart
