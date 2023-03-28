import React, {useState} from 'react';
import Button from "../../Button";
import notify from "../../../utils/notify";

const ConnectWallet = ({utility}) => {
    const [loading, setLoading] = useState(false);
    const connectWallet = () => {
        setLoading(true)
        utility.connectWallet()
            .catch((e) => {
                notify('Error', e.message)
            })
            .finally(() => {
            setLoading(false)
        })
    }
    return (
        <div className="h-full flex flex-col">
            <p>Connect your wallet and follow along with the steps <br/>
                to access the gallery
            </p>

            <div className="mt-5 flex flex-grow items-end justify-end">
                <Button
                    isLoading={loading}
                    className=""
                    onClick={() => {
                        connectWallet()
                    }}>Connect Wallet</Button>
            </div>

        </div>
    );
};

export default ConnectWallet;
