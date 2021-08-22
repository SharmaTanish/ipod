import "../stylesheets/App.css";
import ReactDOM from 'react-dom';
////////////////////
import ZingTouch from 'zingtouch';
///////////////////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFastForward, faFastBackward,faPlay } from '@fortawesome/free-solid-svg-icons'
function App() {



  // var target = document.getElementById('root');
  // var region = new ZingTouch.Region(target);
  
  // region.bind(target, 'rotate', function(e) {
  //    //Perform Operations
  //   console.log("gesture detected");
  // });



  return (
    <div className="App">
    <div className="screen" >
      <div className="mainscreen" >

      </div>
    </div>
    <div className="keypad" >
    <div className="wheel" ZingTouch >

      <p className="menubutton">Menu</p>
      <FontAwesomeIcon className="backwardicon" icon={faFastBackward} />
      <div className="centerbutton" ></div>
      <FontAwesomeIcon className="forwardicon" icon={faFastForward} />
      <FontAwesomeIcon className="playicon" icon={faPlay} />
        
      </div>
    </div>

</div>
  );

 




}

export default App;
