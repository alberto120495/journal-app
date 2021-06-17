import React from "react";

function JournalEntry() {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://spincommercecdn.imgix.net/2153/products/8494193c-d438-4ad5-b182-48647a304424/powerup3.jpg?timestamp=1611916153&w=800)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nemo
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
}

export default JournalEntry;
