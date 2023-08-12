import React from 'react'

function card() {
  return (
    <div>
      <div className="card m-2" id='card'>
  <img className="card-img-top" src="https://source.unsplash.com/random/900x700/?books" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default card
