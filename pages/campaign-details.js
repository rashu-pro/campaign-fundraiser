import Image from "next/image";
import RecentDonations from "@/pages/components/recent-donations";
import ContactInfo from "@/pages/components/contact-info";
import useSWR from "swr";
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function CampaignDetails(props){
  // const slug = getSlug();
  const { asPath } = useRouter();

  let queryParams = asPath.split('&')
  let slug = queryParams[0].split('=')
  slug = slug[slug.length - 1]

  let companySlug = queryParams[queryParams.length-1].split('=')
  companySlug = companySlug[companySlug.length - 1]

  const url = `https://secure-api.net/api/v1/fundraiser-campaign?slug=${slug}&companySlug=${companySlug}`;
  const {data, error} = useSWR(url, fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  setTimeout(function (){
    let forEach = function (array, callback, scope) {
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };
    let max = -219.99078369140625;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
      let percent = value.getAttribute('data-progress');
      value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
    });
  },600)

  return(
    <>
      <div className="campaign-head pt-3 pt-md-4">
        <div className="container">
          <h2 className="text-uppercase fs-2 fw-bold m-0 mb-3 mt-md-4 position-relative z-index-9">{data.name}</h2>
        </div>

        <div className="main-banner-wrapper position-relative z-index-9">
          <div className="container">
            <div className="main-banner">
              <div className="row ml-0 mr-0">

                <div className="col-lg-8 ps-0 pe-0">
                  <div className="image-holder">
                    <Image src="/images/image_registration_2_.jpg" className="mw-100" alt="banner" fill />
                  </div>
                </div>

                <div className="col-lg-4 ps-0 pe-0">
                  <div className="main-banner-content h-100 d-flex flex-column justify-content-center text-center">
                    <div className="progress-bar">
                      <svg className="progress" data-progress="65" x="0px" y="0px" viewBox="0 0 80 80">
                        <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                        <path className="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                      </svg>
                      <div className="data-center">
                        <div className="data-center-inner text-center">
                          <p className="m-0 fs-5"><span className="text-blue fw-bold text-danger">Raised</span> </p>
                          <p className="m-0 mb-2 fs-3"><span className="text-blue fw-bold">{data.raisedAmount}</span> </p>
                          <p className="m-0">of <span className="">{data.goalAmount}</span> Goal </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 pb-3">
                      <a href={data.donationLink} className="btn btn-primary btn-big text-uppercase">Donate Now</a>
                    </div>

                    {/*<div className="pb-3">*/}
                    {/*  <p className="mb-1 fw-semibold divider-1"><span className="divider-text">Share Now:</span></p>*/}
                    {/*  <ul className="list list-inline">*/}
                    {/*    <li className="list-inline-item">*/}
                    {/*      <a href="#" className="social-icon social-facebook">*/}
                    {/*        <Image src="/images/facebook.png" alt="facebook" fill /> </a>*/}
                    {/*    </li>*/}

                    {/*    <li className="list-inline-item">*/}
                    {/*      <a href="#" className="social-icon social-twitter">*/}
                    {/*        <Image src="/images/twitter.png" alt="facebook" fill /> </a>*/}
                    {/*    </li>*/}

                    {/*    <li className="list-inline-item">*/}
                    {/*      <a href="#" className="social-icon social-instagram">*/}
                    {/*        <Image src="/images/instagram.png" alt="facebook" fill />*/}
                    {/*      </a>*/}
                    {/*    </li>*/}

                    {/*    <li className="list-inline-item">*/}
                    {/*      <a href="#" className="social-icon social-linkedin">*/}
                    {/*        <Image src="/images/linkedin.png" alt="facebook" fill />*/}
                    {/*      </a>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="campaign-body main-content position-relative">
        <div className="container position-relative z-index-9">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-content-details pb-5">

                <div className="main-content-summary bg-light d-none d-lg-block">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2 left-line"></div>
                        <p>Raised <span className="text-blue fs-3 fw-bold">{data.raisedAmount}</span></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2 left-line"></div>
                        <p>Goal <span className="text-danger fs-3 fw-bold">{data.goalAmount}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="campaign-details">
                  <div className="product-details-inner" dangerouslySetInnerHTML={{ __html: data.details }} />
                </div>

                <div className="main-content-summary bg-light d-lg-none">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2"></div>
                        <p className="m-0 pt-2 pb-2">Raised <span className="text-blue fs-3 fw-bold">{data.raisedAmount}</span></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2"></div>
                        <p className="m-0 pt-2 pb-2">Goal <span className="text-danger fs-3 fw-bold">{data.goalAmount}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 pb-3">
                  <a href={data.donationLink} className="btn btn-primary btn-big text-uppercase">Donate Now</a>
                </div>
              </div>

            </div>

            <div className="col-lg-4 bg-light">
              <div className="sidebar ps-sm-4 pb-4 pb-lg-0">
                <RecentDonations />

                <ContactInfo phoneNumber={props.companyInfo.phoneNumber}
                             email={props.companyInfo.email} />
              </div>
            </div>
          </div>
        </div>

        <div className="main-content-layer d-none d-lg-block position-absolute top-0 start-0 end-0 bottom-0">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-lg-8"></div>
              <div className="col-lg-4 bg-light"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

