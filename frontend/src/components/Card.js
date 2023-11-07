import report from '../../assets/Report.png'
import hide from '../../assets/hide.png'
import bookmark from '../../assets/bookmark.png'
import details from '../../assets/details.png'
const Card=({isWhite})=>{
    return(
        <div className={`box-border flex ${ !isWhite ? 'bg-[#FFFCF2]' : 'bg-white' } p-12`}>
            <div className="box-border w-9/12">
                <p className="text-2xl font-bold">Epic Designs</p>
                <p>Rating 4.5</p>
                <p className='w-11/12 mb-5'>Passionate team of 4 designers working out of Bangalore with an experience of 4 years.</p>
                <div className="flex justify-between pr-6 box-border">
                    <div>
                        <p className='text-2xl font-extrabold ml-2'>57</p>
                        <p className='text-lg font-semibold'>Projects</p>
                    </div>
                    <div>
                        <p className='text-2xl font-extrabold ml-2'>8</p>
                        <p className='text-lg font-semibold'>Years</p>
                    </div>
                    <div>
                        <p className='text-2xl font-extrabold ml-2'>$$</p>
                        <p className='text-lg font-semibold'>Price</p>
                    </div>
                </div>
                <div>
                    <p>+91-9106878925</p>
                    <p>+91-9825309940</p>
                </div>
            </div>
            <div className="border-l-[1px] box-border">
                <div className='ml-12'>
                    <div >
                        <img src={details} alt="details"></img>
                        <p>Details</p>
                    </div>
                    <div>
                        <img src={hide} alt="hide"></img>
                        <p>Hide</p>
                    </div>
                    <div>
                        <img src={bookmark} alt="shortlist"></img>
                        <p>Shortlist</p>
                    </div>
                    <div>
                        <img src={report} alt="report"></img>
                        <p>Report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;