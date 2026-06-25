import React from "react";

const Card = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="border m-2">
                <img
                    src={props.imgUrl}
                    className="card-img-top"
                />
                <div className="card-body text-center p-1">
                    <p className="card-title fs-5">
                        {props.title}
                    </p>
                    <p className="card-text">
                        {props.desciption}
                    </p>
                    <div className="">
                        <button type="button" className="btn btn-sm btn-primary mb-3">
                            Find Out More!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card