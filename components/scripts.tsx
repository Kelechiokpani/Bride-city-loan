import Script from "next/script";


const ExternalScripts: () => false | JSX.Element = () => {

    return (
<<<<<<< HEAD
        <>
            <Script src={'/assets/js/bundle.js?ver=3.0.2'} strategy={'afterInteractive'} />
            {/*<Script src={'/assets/js/scripts.js?ver=3.0.2'}  strategy={'afterInteractive'}/>*/}
            {/*<Script src={'/assets/js/charts/chart-crypto.js?ver=3.0.2'} strategy={'afterInteractive'}/>*/}
=======
         <>
            <Script src={'/assets/js/bundle.js?ver=3.0.2'} strategy={'beforeInteractive'}/>
            <Script src={'/assets/js/scripts.js?ver=3.0.2'}  strategy={'beforeInteractive'}/>
            {/* <Script src={'/assets/js/charts/chart-crypto.js?ver=3.0.2'} strategy={'afterInteractive'}/> */}
>>>>>>> 86fccd968d499cbd03a2d455424e7374e6c296db
        </>
    )
}

export default ExternalScripts
