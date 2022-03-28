
import React from 'react'
import { Carousel } from 'react-bootstrap'
import Products from './Men/MenProducts'
import { TiNews } from 'react-icons/ti';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
// import { BsFacebook} from 'react-icons/bs';

function Home() {
  return (
    <div className='home'>
<div className='home-carosuel '>
<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assests/home Img1.png"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assests/home Img2.png"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assests/home Img3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
</div>
      
      {/* <Products /> */}

<div className='images mt-5 '>
  <div className='header '>
  <h3>Products</h3>
  <img src="assests/s6.jpeg " alt=""/>

  </div>

</div>

<hr/>
      <div className='row my-5 justify-content-center text-align-center'>
        <div className='col me-2'>
          <b>ONLINE-SHOPPINGG</b>

          <p>Men</p>
          <p>Women</p>
          <p>kids</p>
          <p>Home Living </p>
          <p>Beauty</p>
          <p>Gift Card</p>
          <p>Myntra Insider < TiNews /> </p>

        </div>
        <div className='col me-5'>
          <b>USEFULL LINKS</b>
          <p>Contact-us</p>
          <p>FAQ</p>
          <p>T & C</p>
          <p>Terms of Use</p>
          <p>Tract Order</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Privacy Policy</p>

        </div>
        <div className='col'>
          <b>EXPERIENCE MYNTRA APP ON MOBILE</b>
          <p><img height='50px' width='100px' src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" /></p>

          <p><img height='50px' width='100px' src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" /></p>
          <p>Keep In Touch </p>
          <p>< BsFacebook />    < BsTwitter />    < BsYoutube />   < BsInstagram /></p>


        </div>
        <div className='col'>
          <p><img height='50px' width='60px' src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" /> <b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
          <p><img height='50px' width='60px' src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" /><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>

        </div>
      </div>

    </div>


  )
}

export default Home