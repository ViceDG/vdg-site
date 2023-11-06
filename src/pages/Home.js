import AboutData from '../data/about.json'

const Home = (props) => {
  return (
    <div className='about'>
        <img className="main-logo" src={AboutData.logo} alt="Main Logo"/>
        <div>{(() => true)()}</div>
        <p className="bio">{AboutData.bio}</p>
        <br />
    </div>
)}
  
  export default Home;