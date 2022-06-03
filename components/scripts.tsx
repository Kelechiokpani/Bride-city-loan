import Script from "next/script";


const ExternalScripts: () => JSX.Element = () => {

    return (
         <>
            <Script src={'/assets/js/bundle.js?ver=3.0.2'} strategy={'beforeInteractive'}/>
            <Script src={'/assets/js/scripts.js?ver=3.0.2'}  strategy={'beforeInteractive'}/>
            {/* <Script src={'/assets/js/charts/chart-crypto.js?ver=3.0.2'} strategy={'afterInteractive'}/> */}
        </>
    )
}

export default ExternalScripts
