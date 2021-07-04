import React from "react";

function Map() {
  return (
    <div className="col-md-6 homeright mapbg">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.2660185817!2d31.34782012809795!3d31.041454962209322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20Mansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1624911841879!5m2!1sen!2seg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
