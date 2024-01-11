import React, { useContext, useEffect, useState } from 'react'
import '../sass/home.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'

const Home = () => {
  const [data, setData] = useState([])
  const {addBasket } = useContext(BasketContext)
  const {toggleWishlist} = useContext(WishlistContext)

  useEffect(() => {
    getAll()
  }, [])


  function getAll(item) {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((api) => setData(api))
  }

  function deleteById(id) {
    fetch('http://localhost:4000/' + id, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then((api) => {getAll()})
  }


  return (
    <div className='home'>
      <div className="two">

        <div className="our">
          <div className="line-write">
            <div className="line"></div>
            <h3>OUR TOP SERVICES</h3>
          </div>
          <h1>Our Best Services</h1>
          <div className="cards">
            {data.map(item => (


              <div className="card" key={item._id}>
                <Link to={`/${item._id}`}> <i className="eye fa-solid fa-eye"></i></Link>
                <i class="heart fa-regular fa-heart" onClick={()=>toggleWishlist(item)}></i>
                <i className="basket fa-solid fa-basket-shopping" onClick={()=>addBasket(item)}></i>
                <i className={`back-icon ${item.icon}`}></i>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <h4>$ {item.price}</h4>
                <div className='absolute'>
                  <button onClick={() => deleteById(item._id)}>delete</button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      <div className="three">
        <img width={600} src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />
        <div className='best'>
          <h1>Our Best Services</h1>
          <h3>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess <br /> cillum dolore egru lofrre dsu quality mollit anim laborumuis au <br /> dolor in voluptate velit cillu.</h3>
          <p>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit <br /> esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non <br /> aute iruxvfg dhjinulpadeserunt moll.</p>
          <div className='button'>
            <h4>MORE ABOUT US</h4>
            <div className='btn-opacity'></div>
          </div>
        </div>
      </div>

      <div className="five">
        <div className="our">
          <div className="line-write">
            <div className="line"></div>
            <h3>OUR PROFESSIONAL MEMBERS</h3>
          </div>
          <h1>Our Team Mambers</h1>
          <div className="cards">
            <div className="card">
              <img width={350} src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="" />
              <h2>Ethan Welch</h2>
              <div className="line-write">
                <div className="line"></div>
                <h3>UX Designer</h3>
              </div>
            </div>

            <div className="card">
              <img width={350} src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="" />
              <h2>Ethan Welch</h2>
              <div className="line-write">
                <div className="line"></div>
                <h3>UX Designer</h3>
              </div>
            </div>

            <div className="card">
              <img width={350} src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="" />
              <h2>Ethan Welch</h2>
              <div className="line-write">
                <div className="line"></div>
                <h3>UX Designer</h3>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div >
  )
}

export default Home