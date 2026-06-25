import React from "react";

const Hero = () => {
    return (
        <div className="container-fluid m-auto mt-4">
            <div className="row p-4 m-3 align-items-center border shadow-lg" style={{ backgroundColor: "rgba(234, 236, 239, 0.94)" }}>
                <div className="p-3 pt-md-3">
                    <h1 className="display-4 lh-1">
                        A Warm Welcome!
                    </h1>
                    <p className="lead">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium deserunt ex cupiditate at maiores dolore illum repellat numquam commodi corporis, quidem inventore rerum. Magnam nemo sapiente placeat sit vel.
                    </p>
                    <div className="d-flex justify-content-start mb-4 mb-md-3">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg">
                            Call to action!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero