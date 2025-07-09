import { Outlet } from "react-router-dom"
import { BG_3D_1_IMAGE, BG_3D_2_IMAGE, BG_IMAGE } from "../../contants/images"
import { useEffect } from "react";

function AppBackground() {
    useEffect(() => {
        window.onmousemove = (event) => {
            const objects3D = document.querySelectorAll(".move-with-cursor")
            var t = event.clientX,
                e = event.clientY;
            objects3D.forEach((elem) => {
                elem.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
                elem.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`;
            })
        }
    }, [])

    return (
        <>
            <div className="background-shapes">
                <div className="shape-1 common-shape">
                    <img src={BG_IMAGE} alt="banner-shape-1" />
                </div>
                <div className="shape-2 common-shape">
                    <img src={BG_IMAGE} alt="banner-shape-1" />
                </div>
                <div className="threed-shape-1 move-with-cursor">
                    <img src={BG_3D_1_IMAGE} alt="object-3d-1" />
                </div>
                <div className="threed-shape-2 move-with-cursor">
                    <img src={BG_3D_2_IMAGE} alt="object-3d-2" />
                </div>
            </div>


            <Outlet />
        </>
    )
}

export default AppBackground