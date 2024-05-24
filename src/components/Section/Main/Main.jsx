import mainPhoto from '../../../../assets/images/mainphoto.svg'
import visa from '../../../../assets/images/main_sponsor_visa.svg'
import master from '../../../../assets/images/main_sponsor_master.svg'
import paypal from '../../../../assets/images/main_sponsor_paypal.svg'
import { useState } from 'react'
import Button from '../../../Button'
const Main = () => {
  const [mainImage, setMainImage] = useState(mainPhoto)
  const [count, setCount] = useState(0)
  function changeImage() {
    setMainImage((prevImage) => (prevImage === mainPhoto ? master : mainPhoto))
  }
  function counterClick() {
    setCount(count + 1)
  }
  return (
    <div className="main_sec">
      <div className="main_head">
        <div className="main_title">
          <h1 className="main_h1">
            Always Track &
            <br />
            Analyze Your Business
            <br />
            Statistics To Succeed.
          </h1>
          <p
            className={
              mainImage === master
                ? 'main_paragraph paragraphFont'
                : 'main_paragraph'
            }
          >
            A better way to manage your sales, team, clients & marketing
            <br />— on a single platform. Powerful, affordable & easy.
          </p>
          <div className="main_input">
            <input type="text" placeholder="Enter your email" />
            <Button changeImage={changeImage} text="Get Started" />
            <br />
            <Button changeImage={counterClick} text="Add" />
            <p>{count === 0 ? '' : count}</p>
          </div>

          <div className="main_sponsor">
            <img src={visa} alt="visaLogo" />
            <img src={master} alt="masterLogo" />
            <img src={paypal} alt="paypalLogo" />
          </div>
        </div>
      </div>
      <div className="main_img">
        <img src={mainImage} alt="mainImg" />
      </div>
    </div>
  )
}
export default Main
