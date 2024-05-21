import mainPhoto from '../../../../assets/images/mainphoto.svg'
import visa from '../../../../assets/images/main_sponsor_visa.svg'
import master from '../../../../assets/images/main_sponsor_master.svg'
import paypal from '../../../../assets/images/main_sponsor_paypal.svg'
const Main = () => {
  return (
    <div className="main_sec">
      <div className="main_head">
        <div className="main_title">
          <h1>
            Always Track &
            <br />
            Analyze Your Business
            <br />
            Statistics To Succeed.
          </h1>
          <p>
            A better way to manage your sales, team, clients & marketing
            <br />— on a single platform. Powerful, affordable & easy.
          </p>
          <div className="main_input">
            <input type="text" placeholder="Enter your email" />
            <button>Get started</button>
          </div>
          <div className="main_sponsor">
            <img src={visa} alt="visaLogo" />
            <img src={master} alt="masterLogo" />
            <img src={paypal} alt="paypalLogo" />
          </div>
        </div>
      </div>
      <div className="main_img">
        <img src={mainPhoto} alt="mainImg" />
      </div>
    </div>
  )
}
export default Main
