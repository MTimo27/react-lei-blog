import React from 'react';
import './write.css';

function Write() {
  return (
    <div class="wrapperWrite">
      <div class="write">
        <div class="writeImg">
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>

        <form class="writeForm">
          <div class="writeFormGroup">
            {/* <label htmlFor="fileInput" style="display: none">
            <i class="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style="display: none"
          />  */}
            <input
              class="writeInput"
              placeholder="Titlu"
              type="text"
              autofocus="{true}"
            />
          </div>
          <div class="writeFormGroup">
            <textarea
              class="writeInput writeText"
              placeholder="Incepe articolul..."
              type="text"
              autofocus="{true}"
            ></textarea>
          </div>
          <button class="writeSubmit" type="submit">
            Posteaza
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
