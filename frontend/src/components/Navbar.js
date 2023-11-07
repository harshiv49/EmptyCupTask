
import threeDots from '../../assets/threedots.png';
import logo from '../../assets/logo-small 1.png';
const Navbar=()=>{
    return(
        <div className='flex box-border justify-between p-5'> 
             <img src={logo} alt="logo" className='w-8 h-8'></img>
             {/* color: ;
font-family: Chivo;
    */}
             <p className='text-2xl font-bold text-[#716966]'>EmptyCup</p>
             <img src={threeDots} alt="three-dots" className='w-8 h-8'></img>
        </div>
    )
}
export default Navbar;