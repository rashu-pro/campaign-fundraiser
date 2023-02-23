import useSWR from "swr";
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function RecentDonations(){
  // const slug = getSlug();
  const { asPath } = useRouter();
  let queryParams = asPath.split('&')
  let slug = queryParams[0].split('=')
  slug = slug[slug.length - 1]

  let companySlug = queryParams[queryParams.length-1].split('=')
  companySlug = companySlug[companySlug.length - 1]
  const url = `https://secure-api.net/api/v1/fundraiser-campaign/donations?slug=${slug}&companySlug=${companySlug}`;
  const {data, error} = useSWR(url, fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  return(
    <>
      <div className="widget-box mb-3 mb-sm-5">
        <h3 className="widget-title">Recent Donations</h3>
        <div className="widget-body">
          <ul className="list-group">
            {data.map((data, index)=>(
              <li key={index} className="list-group-item position-relative">
                <p className="m-0 text-blue fs-5 fw-semibold lh-1">{data.amount}</p>
                <p className="m-0">{data.name}</p>
                <p className="fs-7 m-0 position-absolute top-0 end-0 opacity-50 pt-2 pe-2">{data.time}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}