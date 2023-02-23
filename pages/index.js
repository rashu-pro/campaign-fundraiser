import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'
import CampaignDetails from "@/pages/campaign-details";
import {useRouter} from "next/router"


const inter = Inter({ subsets: ['latin'] })

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  // const slug = getSlug();
  const { asPath } = useRouter();
  let queryParams = asPath.split('&')
  let slug = queryParams[0].split('=')
  slug = slug[slug.length - 1]

  let companySlug = queryParams[queryParams.length-1].split('=')
  companySlug = companySlug[companySlug.length - 1]
  const {data, error} = useSWR('https://secure-api.net/api/v1/company-prayer?slug=' + companySlug, fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Fundraiser Campaign" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <header className="header shadow-sm">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-2">
        <a href="#" className="d-flex align-items-center mb-0 mb-md-0 me-md-auto position-relative">
          <Image src={data.logoURL} 
          className="logo-image img-logo-company img-fluid" 
          alt="company"  fill />
        </a>

        <div className="logo-credit position-relative">
          <Image src="/images/credit-logo.png"
               alt="Masjid Solutions" fill />
        </div>
      </div>
    </div>

  </header>

  <div className="main-wrapper">
    <CampaignDetails companyInfo={data} />
  </div>

  <footer className="footer">
    <div className="footer-inner pt-3 pb-3 pt-sm-4 pb-sm-4 bg-dark text-white">
      <div className="container">
        <div className="d-md-flex justify-content-sm-between">
          <p className="m-0 text-center text-md-start">&copy; {data.nickName}. All rights reserved, 2023</p>

          <p className="m-0 text-center text-md-end pb-md-2 pb-lg-0"><a href="htttps://masjidsolutions.net" target="_blank"> masjidsolutions.net</a>
            &nbsp;(317) 854 0207 </p>
        </div>
      </div>
    </div>
  </footer>
      </main>
    </>
  )
}
