import React from "react"
import BannerSlider from "../components/shared/BannerSlider"
import PlaceFilter from "/Users/jaydipkadam/Desktop/onlineticket/bms-frontend/src/components/places/PlaceFilter.jsx"
import PlaceList from "../components/places/PlaceList"
const Places = () => {
    return(
        <div>
            <BannerSlider/>
            <div className="flex-col md:flex-row bg-[#f5f5f5] min-h-screen md:px-[2 px] pb-10 pt-10">
                <PlaceList/>
            </div>

        </div>
    )
}
export default Places