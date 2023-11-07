import gallery from "../../assets/gallery.png";
import contacts from "../../assets/Contacts.png";
import map from "../../assets/Map.png";
import sort from "../../assets/sort.png"
import shortlist from "../../assets/shortlist.png"
const IconBar = () => {
  return (
    <div className="flex box-border p-5">
      <div className="flex w-11/12">
        <div className="m-2 md:mx-10">
        {/* color: #E0A64E;
font-family: Chivo;
font-size: 8px;
*/}
          <img className="w-[25px] h-[25px] ml-[6px]" src={contacts} alt="contacts" />
          <p className="text-[#E0A64E] text-xs mt-2">Contacts</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-3" src={gallery} alt="gallery" />
          <p className=" text-xs mt-2 ml-1">Gallery</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-2" src={map} alt="map"/>
          <p className=" text-xs mt-2 ml-2">Map</p>
        </div>
      </div>
      <div className="flex">
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-3" src={shortlist} alt="shortlist"/>
          <p className=" text-xs mt-2">Shortlisted</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px]" src={sort} alt="sort"/>
          <p className=" text-xs mt-2">Sort</p>
        </div>
      </div>
    </div>
  );
};
export default IconBar;
