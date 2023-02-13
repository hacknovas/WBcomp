import React from "react";

export default function Footer() {
    return (
        <>
            <div className="mt-auto">
                <nav style={{ backgroundColor: "#232f3e9f" }} className="d-flex align-items justify-content-evenly p-3">
                    <div className="flex-shrink-0 mt-2" >
                        <img src="./images/logo.png" style={{
                            WebkitFilter: "invert(1)",
                            filter: "invert(1)",
                            height: "10vh"
                        }} />
                    </div>
                    <div className="">
                        <div className="text-light">- Offers you to access popular sites at one page for <br /> comparing products.</div>
                        <div className="text-light">- Currently v1.0.0.</div>
                    </div>
                    <div className=" text-center text-light"><div className="text-center">@CreatedBy_HackNova</div><a href="mailto: creatives.doni@gmail.com" className="text-light" style={{ textDecoration: "none" }}> creatives.doni@gmail.com</a></div>
                </nav>
            </div >
        </>
    )
}
