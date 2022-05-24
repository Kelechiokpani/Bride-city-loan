import {FC} from "react";
import Script from "next/script";


const ExternalScripts: FC = () => {
    return (
        <>
            <Script src={'/assets/js/bundle.js?ver=3.0.2'} strategy={'afterInteractive'}/>
            <Script src={'/assets/js/scripts.js?ver=3.0.2'} strategy={'beforeInteractive'}/>
            <Script src={'/assets/js/charts/chart-crypto.js?ver=3.0.2'} strategy={'beforeInteractive'}/>
        </>
    )
}

export default ExternalScripts
