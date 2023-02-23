export default function ContactInfo(props){
  return (
    <div className="widget-box">
      <h3 className="widget-title">Contact Info</h3>
      <div className="widget-body">

        <div className="alert alert-primary mb-3">
          <h4 className="m-0 mb-1">Call Us</h4>
          <a href={'tel:'+props.phoneNumber}>{props.phoneNumber}</a>
        </div>

        <div className="alert alert-primary">
          <h4 className="m-0 mb-1">Email Us</h4>
          <a href={'mailto:'+props.email}>{props.email}</a>
        </div>
      </div>

    </div>
  )
}