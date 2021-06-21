import React from "react"
import styled from "styled-components"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

// import { skucard, button, price } from "../../styles/skucard.module.css"

const SkucardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: #fff;
  border-radius: 6px;
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    margin: 0 0 1rem;
  }

  .price {
    font-weight: bold;
  }

  .description {
    font-size: 1.7rem;
  }
`

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()
  return (
    <SkucardStyles>
      <img src={sku.image} alt={sku.description} width="200" height="200" />
      <h2>{sku.name}</h2>
      <p className="price">
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price),
          currency: sku.currency,
        })}
      </p>
      <p className="description">{sku.description}</p>
      <button onClick={() => addItem(sku)}>ADD TO CART</button>
    </SkucardStyles>
  )
}

export default SkuCard
