import React from 'react';
import {HiCheckCircle} from "react-icons/hi2";

const ClaimedNft = ({utility}) => {

    // Nothing to do here, this is just the successfully claimed screen
    return (
        <div className="rounded-md bg-green-50 p-4">
            <div className="">
                <div className="flex items-center">
                    <HiCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                    <p className="ml-2 text-sm font-medium text-green-800">Successfully claimed! You can now view the photo gallery!
                    </p>
                </div>

                <div className="gallery">
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <img src="angry.jpeg" alt="angry cat" />
                        </div>
                        <div className="col-span-1">
                            <img src="confused.jpeg" alt="confused cat" />
                        </div>
                        <div className="col-span-1">
                            <img src="hungry.jpeg" alt="hungry cat" />
                        </div>
                        <div className="col-span-1">
                            <img src="nervous.jpeg" alt="nervous cat" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClaimedNft;
