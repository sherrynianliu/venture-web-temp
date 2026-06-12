const MapArea = () => {
  return (
    <div className="it-map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="it-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456184.5056356658!2d71.34513870507091!3d26.714317398338892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1724579991300!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapArea;
