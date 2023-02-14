import React from "react";

export default function Footer() {
    return (
        <>
            <div className="btn btn-sm">
                <nav style={{ backgroundColor: "#232f3e9f" }} className="d-flex align-items justify-content-evenly flex-wrap p-3">
                    <div className="flex-shrink-0 mt-2" >
                        <img src="./images/logo.png" style={{
                            WebkitFilter: "invert(1)",
                            filter: "invert(1)",
                            height: "10vh"
                        }} />
                    </div>
                    <div className="d-flex flex-row flex-wrap  mt-3">
                        <div className="text-light w-100">- Offers you to access popular sites at one page for <br /> comparing products.
                        </div>
                        <div className="text-light  w-100">- Currently v1.0.0.</div>
                    </div>
                    <div className=" text-center text-light mt-3">
                        <div className="text-center">@CreatedBy_HackNova</div>
                        <a href="mailto: creatives.doni@gmail.com" className="text-light" style={{ textDecoration: "none" }}> creatives.doni@gmail.com</a>
                    </div>
                </nav>
            </div >
        </>
    )
}
