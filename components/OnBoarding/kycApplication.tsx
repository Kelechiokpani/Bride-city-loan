import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { UPLOAD_BILL } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";


interface UserSubmitForm {
    acceptTerms: boolean;
    image: string| undefined;
}

const KycApplication: FC = () => {
    const router: NextRouter = useRouter()

    const [uploadBill, { loading }] = useMutation<{
        image: string,
    }>(UPLOAD_BILL)


    const validationSchema = Yup.object().shape({
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')

    });

    const {
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        uploadBill({
            variables: {
                image: data.image
            }
        }).then(({data}) => {
            router.push('/account/profile');
        })
    };

    const processImage = ({ target }: { target: any }) => {
        let file = target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setValue('image', reader.result?.toString())
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    return (
        <div className="container-xl wide-lg">
            <div className="nk-content-body">
                <div className="kyc-app wide-sm m-auto">
                    <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                        <div className="nk-block-head-content text-center">
                            <h2 className="nk-block-title fw-normal">Begin your ID-Verification</h2>
                            <div className="nk-block-des">
                                <p>To comply with regulation each participant will have to go through indentity
                                    verification (KYC/AML) to prevent fraud causes. </p>
                            </div>
                        </div>
                    </div>

                    <form className="nk-block" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card card-bordered">
                            <div className="nk-kycfm">
                                <div className="nk-kycfm-content">
                                    <div className="nk-kycfm-note">
                                        <em className="icon ni ni-info-fill" data-bs-toggle="tooltip"
                                            data-bs-placement="right" title="Tooltip on right"></em>
                                        <p>In order to complete, please upload any of the following personal
                                            document.</p>

                                    </div>
                                    <ul className="nk-kycfm-control-list g-3">

                                        <li className="nk-kycfm-control-item">
                                            <input className="nk-kycfm-control" type="radio" name="id-proof"
                                                id="Utility Bill" data-title="Utility Bill" />
                                            <label className="nk-kycfm-label" htmlFor="Utility Bill">
                                                <span className="nk-kycfm-label-icon">
                                                    <span className="label-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 76 76">
                                                            <path
                                                                d="M70.5,2H9.9A7.9167,7.9167,0,0,0,2,9.9V51.5A7.49,7.49,0,0,0,9.5,59H31.6a1.538,1.538,0,0,0,1.5-1.5A1.4727,1.4727,0,0,0,31.6,56H9.7A4.6946,4.6946,0,0,1,5,51.3V15H75V46.9a1.5,1.5,0,1,0,3,0V10.1C78,5.6,74.7,2,70.5,2ZM75,11H5V9.5A4.6115,4.6115,0,0,1,9.8,5H70.3a4.6115,4.6115,0,0,1,4.8,4.5V11ZM64.3,29.5a4.1408,4.1408,0,0,1-1.5,2.9.9593.9593,0,0,0-.3,1L63,35a.9879.9879,0,0,0,.7.7l3.9,1a2.0749,2.0749,0,0,1,1,.6.972.972,0,0,0,1.4-.1h0a.9663.9663,0,0,0-.1-1.4h0a5.7028,5.7028,0,0,0-2.2-1.1l-3-.8-.1-.5a7.08,7.08,0,0,0,1.6-3.1,1.8059,1.8059,0,0,0,1-1.4l.2-1.7a1.8411,1.8411,0,0,0-.8-1.8l.1-1.1.2-.2a2.5846,2.5846,0,0,0,.1-3.4,4.3847,4.3847,0,0,0-3.8-1.8,7.2965,7.2965,0,0,0-3.5.9c-4.1.1-4.6,2.4-4.6,4,0,.3.1.9.1,1.5-.1.1-.3.2-.4.3a1.9638,1.9638,0,0,0-.5,1.5l.2,1.7a2.0944,2.0944,0,0,0,1.1,1.5,6.1046,6.1046,0,0,0,1.5,3l-.1.6-3,.8A5.4636,5.4636,0,0,0,49.9,40a.9448.9448,0,0,0,1,1H65a1,1,0,0,0,0-2H52.1a3.1116,3.1116,0,0,1,2.5-2.3l3.6-.9a.9879.9879,0,0,0,.7-.7l.4-1.7a.8065.8065,0,0,0-.3-.9,4.6858,4.6858,0,0,1-1.4-2.9.8949.8949,0,0,0-1-.8l-.3-1.6a.9448.9448,0,0,0,1-1v-.1a19.0913,19.0913,0,0,1-.2-2c0-1,0-2,2.9-2a1.4213,1.4213,0,0,0,.6-.2,4.1045,4.1045,0,0,1,2.6-.7,2.1984,2.1984,0,0,1,2.1.9c.4.6.2.8.1.9l-.4.2a.9078.9078,0,0,0-.3.7L64.6,26a.7787.7787,0,0,0,.7.9h.2l-.1,1.6A1.0278,1.0278,0,0,0,64.3,29.5ZM34.1,27a1.538,1.538,0,0,0,1.5-1.5A1.4727,1.4727,0,0,0,34.1,24h-6a1.5,1.5,0,0,0,0,3ZM12.8,37h21a1.5,1.5,0,0,0,0-3h-21a1.538,1.538,0,0,0-1.5,1.5A1.4727,1.4727,0,0,0,12.8,37Zm-.4-10h9a1.5,1.5,0,0,0,0-3h-9a1.5,1.5,0,1,0,0,3ZM74.9,55a2.0059,2.0059,0,0,0-2-2h-.2a7.0756,7.0756,0,0,0-3.1,1c-1.4-3-3.8-5.6-5.4-6.4-1.1-.6-4.9-1.2-8.3-1.2s-7.1.6-8.2,1.2c-1.7.8-4,3.4-5.4,6.4a6.6831,6.6831,0,0,0-3.1-1,2.2959,2.2959,0,0,0-1.4.4A2.0876,2.0876,0,0,0,37,55a5.5585,5.5585,0,0,0,2,4c.2.1.3.2.5.3a16.4687,16.4687,0,0,0-1,5.8c0,2.1.2,5.8,1.5,7.7v2.4a2.9483,2.9483,0,0,0,2.8,2.9h3.4A2.8616,2.8616,0,0,0,49,75.3h0v-1a27.5212,27.5212,0,0,0,7,1,27.5212,27.5212,0,0,0,7-1v1a2.7754,2.7754,0,0,0,2.7,2.8H69a2.8183,2.8183,0,0,0,2.9-2.8h0V72.9c1.2-1.9,1.4-5.5,1.4-7.7a16.0869,16.0869,0,0,0-1-5.8.8643.8643,0,0,0,.6-.3A5.7634,5.7634,0,0,0,74.9,55ZM49.3,50.1a22.2387,22.2387,0,0,1,6.8-.8,30.84,30.84,0,0,1,6.8.8c1.1.5,3.6,3.4,4.6,6.5-2.7.4-9.1,1.2-11.5,1.2s-8.7-.9-11.4-1.2C45.7,53.5,48.2,50.7,49.3,50.1Zm-8.1,6.6c-.1-.2-.3-.3-.4-.5a2.1859,2.1859,0,0,1,.5.3c0,.1,0,.1-.1.2ZM46.1,75H43V74h3v1.1Zm23,0H66V74h3v1.1Zm.4-5H66.9a6.7381,6.7381,0,0,0-2.6.9h0a32.0084,32.0084,0,0,1-8.2,1.4,42.62,42.62,0,0,1-7.6-1.5,6.1538,6.1538,0,0,0-1.9-.2l-4,.4a19.5493,19.5493,0,0,1-.8-5.9,6.15,6.15,0,0,1,.1-1.4c1.9.1,4.2.7,4.2,1.4a1.52,1.52,0,0,0,1.4,1.5h0c.8,0,1.5-1.4,1.5-1.4v-.7c0-3.4-4.7-4-6.5-4.1.2-.5.4-1,.6-1.4h0c.4.1,9.8,1.4,13,1.4S68.7,59.1,69,59h0c.2.5.4.9.6,1.4-1.8.1-6.4.7-6.4,4.1a1.4036,1.4036,0,0,0,2.8,0v-.1c0-.7,2.2-1.3,4.2-1.4a6.602,6.602,0,0,1,.1,1.4A17.2549,17.2549,0,0,1,69.5,70Zm1.6-13.3c0-.1-.1-.1-.1-.2l.5-.3A2.1813,2.1813,0,0,1,71.1,56.7ZM59.2,64h-6a1.5,1.5,0,0,0,0,3h6a1.5,1.5,0,0,0,0-3Z"
                                                                transform="translate(-2 -2)"
                                                                fill="#6476ff" />
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span className="nk-kycfm-label-text">Utility Bill</span>
                                            </label>
                                        </li>

                                    </ul>

                                    <h6 className="title">To avoid delays when verifying account, Please make
                                        sure
                                        bellow:</h6>
                                    <ul className="list list-sm list-checked">
                                        <li>Chosen credential must not be expaired.</li>
                                        <li>Document should be good condition and clearly visible.</li>
                                        <li>Make sure that there is no light glare on the card.</li>
                                    </ul>
                                    <div className="nk-kycfm-upload">
                                        <h6 className="title nk-kycfm-upload-title">Upload Here Your Copy</h6>
                                        <div className="row align-items-center">
                                            <div className="col-sm-8">
                                                <div className="nk-kycfm-upload-box">
                                                    <div className="upload-zone">
                                                        <div className="dz-message" data-dz-message>
                                                            <span
                                                                className="dz-message-text"> Drag and drop file  </span>
                                                            <span className="dz-message-or"> or  </span>

                                                            <input className="btn  " type="file" id="SELECT" name="filename" onChange={processImage} />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 d-none d-sm-block">
                                                <div className="mx-md-4">
                                                    <Image src="/images/icons/id-front.svg" alt="ID Front"
                                                        height={90}
                                                        width={90} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="nk-kycfm-footer">
                                    <div className="form-group">
                                        <div className="custom-control custom-control-xs custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                id="info-assure" />
                                            <label className="custom-control-label" htmlFor="info-assure">All
                                                The Personal Information I Have Entered Is Correct.</label>
                                            <label className="custom-control-label" htmlFor="tc-agree">I Have
                                                Read The <a href="#">Terms Of Condition</a> And <a href="#">Privacy
                                                    Policy</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-control-xs custom-checkbox">


                                            {/* <input type="checkbox" className="custom-control-input"
                                                id="info-assure" />
                                            <label className="custom-control-label" htmlFor="info-assure">All
                                                The Personal Information I Have Entered Is Correct.</label> */}
                                        </div>
                                    </div>
                                    <div className="nk-kycfm-action pt-2">

                                        <button type="submit" className="btn btn-lg btn-primary" disabled={loading}>Process for
                                            Verify
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default KycApplication
