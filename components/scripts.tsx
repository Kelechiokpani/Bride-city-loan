import {FC, useEffect, useState} from "react";
import Script from "next/script";


const ExternalScripts: () => false | JSX.Element = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(()=> {
    setLoaded(true)
  }, [])
    return (
        loaded &&<>
            <Script src={'/assets/js/bundle.js?ver=3.0.2'} strategy={'afterInteractive'}/>
            {/*<Script src={'/assets/js/scripts.js?ver=3.0.2'}  strategy={'afterInteractive'}/>*/}
            {/*<Script src={'/assets/js/charts/chart-crypto.js?ver=3.0.2'} strategy={'afterInteractive'}/>*/}
        </>
    )
}

export default ExternalScripts
