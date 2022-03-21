
if (typeof gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer !== "undefined") {
  gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer = {};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceX")) > 1;
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceX"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceX")) > 1;
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceX"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetX")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartX"));
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetX")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartX"));
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceY")) > 1;
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceY"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceY")) > 1;
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollDistanceY"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetY")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartY"));
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetY")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartY"));
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getVariables().get("scrollTargetX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("scrollTargetY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("X").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetX")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartX")));
}{runtimeScene.getVariables().get("Y").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollTargetY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("scrollStartY")));
}{runtimeScene.getVariables().get("scrollDistanceX").setNumber(Math.sqrt(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("X")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("X"))));
}{runtimeScene.getVariables().get("scrollDistanceY").setNumber(Math.sqrt(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Y")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Y"))));
}}

}


{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("selected_direction")) == "horizontal";
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("selected_direction")) == "both";
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("selected_direction")) == "vertical";
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("selected_direction")) == "both";
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if ( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9589388);
}
}}
if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("scrollStartX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("scrollStartY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


{



}


{


{
{runtimeScene.getVariables().get("selected_direction").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""));
}}

}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


{

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func = function(runtimeScene, CamNumber, CamLayer, Direction, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CamNumber") return CamNumber;
if (argName === "CamLayer") return CamLayer;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList8(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks = [];