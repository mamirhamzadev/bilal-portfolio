import { Outlet } from "react-router-dom"
import { BG_3D_1_IMAGE, BG_3D_2_IMAGE, BG_IMAGE } from "../../contants/images"

function AppBackground() {
    return (
        <>
            <div className="background-shapes">
                <div className="shape-1 common-shape">
                    <img src={BG_IMAGE} alt="banner-shape-1" />
                </div>
                <div className="shape-2 common-shape">
                    <img src={BG_IMAGE} alt="banner-shape-1" />
                </div>
                <div className="threed-shape-1 move-with-cursor" data-value={1}>
                    <img src={BG_3D_1_IMAGE} alt="object-3d-1" />
                </div>
                <div className="threed-shape-2 move-with-cursor" data-value={1}>
                    <img src={BG_3D_2_IMAGE} alt="object-3d-2" />
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default AppBackground