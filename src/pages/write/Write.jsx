import React from 'react';
import './write.css';

function Write() {
  return (
    <div className="wrapperWrite">
      <div className="write">
        <div className="writeImg">
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>

        <form className="writeForm">
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput" style="display: none">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style="display: none"
          />  */}
            <input
              className="writeInput"
              placeholder="Titlu"
              type="text"
              autoFocus="{true}"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Incepe articolul..."
              type="text"
              autoFocus="{true}"
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Posteaza
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
