// import logo from './logo.svg';
import "./App.css";
import "./style.css";
// task1
import CollapsibleExample from "./components/Componentnavbar";
import Componentmid1 from "./components/Componentmid1";
import Componentmid2 from "./components/Componentmid2";
// task 2
import ComponentTask2 from "./components/ComponentTask2";
import ComponentTask21 from "./ComponentTask21";
import ComponentTask22 from "./ComponentTask22";
import ComponentTask23 from "./ComponentTask23";
//task 3
import ComponentTask31 from "./ComponentTask31";
import ComponentTask32 from "./ComponentTask32";
import ComponentTask33 from "./ComponentTask33";
import ComponentTask34 from "./ComponentTask34";
//task 4
import ComponentTask41 from "./ComponentTask41";
import ComponentTask42 from "./ComponentTask42";
import ComponentTask43 from "./ComponentTask43";

// task 5
import ComponentTask51 from "./ComponentTask51";

// task 6

import ComponentTask61 from "./ComponentTask61";

function App() {
  return (
    <div className="container_main">
      <div>
        <CollapsibleExample />
      </div>
      <div class="componentmid1">
        <Componentmid1 />
      </div>
      <div className="componentmid2">
        <Componentmid2></Componentmid2>
      </div>

      {/* task 2 */}
      <div className="div_container">
        <p className="The_power_Of_Premium_para">The power Of Premium</p>
        <div className="flex_parent">
          <div className="flex_container">
            <ComponentTask2 />
            <ComponentTask21 />
            <ComponentTask22 />
            <ComponentTask23 />
          </div>
        </div>
      </div>

      {/* task 3 */}
      <div className="div_container" id="parent_div_container">
        <p
          className="The_power_Of_Premium_para"
          id="Connect_with_music_culture"
        >
          Connect with music culture
        </p>
        <div className="flex_parent" id="give_padding">
          <div className="flex_container">
            <ComponentTask31 />
            <ComponentTask32 />
            <ComponentTask33 />
            <ComponentTask34 />
          </div>
        </div>
      </div>

      {/* task 4 */}
      <div className="">
        <div className="adjust_margin">
          <h1 className="Pick_your_Premium">Pick your Premium</h1>
          <p className="Listen_without_limits">
            Listen without limits on your phone, speaker, and other devices.
          </p>
          <span>
            <img
              className="manage_image_sizee"
              src="https://content-tooling.spotifycdn.com/images/b33cabea-d074-4f4f-8714-da6bdb2f067f_upi.svg"
              alt="#"
            ></img>
            <img
              className="manage_image_sizee"
              src="https://content-tooling.spotifycdn.com/images/ea750340-f556-4682-b84c-326269cdd4bc_paytm.svg"
              alt=""
            ></img>
            <img
              className="manage_image_sizee"
              src="https://content-tooling.spotifycdn.com/images/e549bf16-2051-43ac-b4d6-c5b8d7bf100d_visa.svg"
              alt=""
            ></img>
            <img
              className="manage_image_sizee"
              src="https://content-tooling.spotifycdn.com/images/6d693019-628b-45b8-96ca-e3c294aed6aa_mastercard.svg"
              alt=""
            ></img>
            <img
              className="manage_image_sizee"
              src="	https://content-tooling.spotifycdn.com/images/468706f2-62af-48e4-80cb-9616b011f6c6_amex.svg"
              alt=""
            ></img>
          </span>
        </div>
        <div className="container-flex">
          <ComponentTask41 />
          <ComponentTask42 />
          <ComponentTask42 />
          <ComponentTask42 />
        </div>
        <ComponentTask43 />
      </div>
      {/* task 5 */}
      <div>
        <ComponentTask51 />
      </div>
      {/* task 6 */}
      <div className="main_footer_block">
        <ComponentTask61/>
      </div>

    </div>
  );
}

export default App;
