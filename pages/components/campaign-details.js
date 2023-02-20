import Image from "next/image";

export default function CampaignDetails(){
  return(
    <>
      <div className="campaign-head pt-3 pt-md-4">
        <div className="container">
          <h2 className="text-uppercase fs-2 fw-bold m-0 mb-3 mt-md-4 position-relative z-index-9">Sponsor a Student</h2>
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
                          <p className="m-0 mb-2 fs-3"><span className="text-blue fw-bold">$650.00</span> </p>
                          <p className="m-0">of <span className="">$1000.00</span> Goal </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 pb-3">
                      <a href="#" className="btn btn-primary btn-big text-uppercase">Donate Now</a>
                    </div>

                    <div className="pb-3">
                      <p className="mb-1 fw-semibold divider-1"><span className="divider-text">Share Now:</span></p>
                      <ul className="list list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="social-icon social-facebook">
                            <Image src="/images/facebook.png" alt="facebook" fill /> </a>
                        </li>

                        <li className="list-inline-item">
                          <a href="#" className="social-icon social-twitter">
                            <Image src="/images/twitter.png" alt="facebook" fill /> </a>
                        </li>

                        <li className="list-inline-item">
                          <a href="#" className="social-icon social-instagram">
                            <Image src="/images/instagram.png" alt="facebook" fill />
                          </a>
                        </li>

                        <li className="list-inline-item">
                          <a href="#" className="social-icon social-linkedin">
                            <Image src="/images/linkedin.png" alt="facebook" fill />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                        <p>Raised <span className="text-blue fs-3 fw-bold">$650</span></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2 left-line"></div>
                        <p>Goal <span className="text-danger fs-3 fw-bold">$1000</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="campaign-details">
                  <h2 className="">Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis doloribus laudantium nisi, nobis quo tenetur ut! Accusantium, consequuntur eaque eos est et ipsum molestiae necessitatibus reiciendis tempore tenetur voluptatem.</p>

                  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut beatae dolorum ipsam labore maxime nulla officia qui voluptas.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ducimus eius nostrum quibusdam quidem temporibus!</p>

                  <h2 className="">Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut beatae dolorum ipsam labore maxime nulla officia qui voluptas.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                  </ul>

                  <h2>Lorem ipsum dolor sit.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae debitis fugiat laborum neque quam quia reiciendis repellat temporibus velit! Asperiores autem exercitationem natus neque nihil? Alias consequuntur debitis eligendi eos error nemo nihil saepe velit voluptate? Mollitia necessitatibus, quas.</p>
                </div>

                <div className="main-content-summary bg-light d-lg-none">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2"></div>
                        <p className="m-0 pt-2 pb-2">Raised <span className="text-blue fs-3 fw-bold">$650</span></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2"></div>
                        <p className="m-0 pt-2 pb-2">Goal <span className="text-danger fs-3 fw-bold">$1000</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 pb-3">
                  <a href="#" className="btn btn-primary btn-big text-uppercase">Donate Now</a>
                </div>
              </div>

            </div>

            <div className="col-lg-4 bg-light">
              <div className="sidebar ps-sm-4 pb-4 pb-lg-0">
                <div className="widget-box mb-3 mb-sm-5">
                  <h3 className="widget-title">Recent Donations</h3>
                  <div className="widget-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <p className="m-0 text-blue fs-5 fw-semibold lh-1">$50</p>
                        <p className="m-0">Mr. Monawar</p>
                      </li>

                      <li className="list-group-item">
                        <p className="m-0 text-blue fs-5 fw-semibold lh-1">$120</p>
                        <p className="m-0">Mr. Sadek</p>
                      </li>

                      <li className="list-group-item">
                        <p className="m-0 text-blue fs-5 fw-semibold lh-1">$80</p>
                        <p className="m-0">Mr. Monawar</p>
                      </li>

                      <li className="list-group-item">
                        <p className="m-0 text-blue fs-5 fw-semibold lh-1">$40</p>
                        <p className="m-0">Mr. Sadek</p>
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="widget-box">
                  <h3 className="widget-title">Contact Info</h3>
                  <div className="widget-body">

                    <div className="alert alert-primary mb-3">
                      <h4 className="m-0 mb-1">Call Us</h4>
                      <a href={'tel:'+data.phoneNumber}>{data.phoneNumber}</a>
                    </div>

                    <div className="alert alert-primary">
                      <h4 className="m-0 mb-1">Email Us</h4>
                      <a href={'mailto:'+data.email}>{data.email}</a>
                    </div>
                  </div>

                </div>

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

