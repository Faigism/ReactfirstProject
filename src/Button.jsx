const Button = ({ changeImage, text }) => {
  return (
    <>
      <button onClick={changeImage}>{text}</button>
    </>
  )
}
export default Button
