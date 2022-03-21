
if (typeof gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid !== "undefined") {
  gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid = {};
gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.GDObjectObjects1= [];

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.conditionTrue_0 = {val:false};
gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.userFunc0x9508d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {number} */
const gridWidth = eventsFunctionContext.getArgument("CellWidth");
/** @type {number} */
const gridHeight = eventsFunctionContext.getArgument("CellHeight");
/** @type {number} */
const gridOffsetX = eventsFunctionContext.getArgument("OffsetX");
/** @type {number} */
const gridOffsetY = eventsFunctionContext.getArgument("OffsetY");

for (const object of objects)
{
    const x = object.getX();
    const y = object.getY();
    // Why do we need this?
    // Take a 2x2 squares, put a diamond inside each square,
    // there is a 5th diamond in the center
    // So, half cells are needed, but some are not to be used.
    // It makes a pattern in diagonal like this:
    // o-o-o-
    // -o-o-o
    // o-o-o-
    let cellX = Math.round(((x - gridOffsetX) * 2) / gridWidth);
    let cellY = Math.round(((y - gridOffsetY) * 2) / gridHeight);

    if ((((cellX + cellY) % 2) + 2) % 2 == 1)
    {
      // This cell should not be used, find the nearest one
      const deltaX = (x - ((cellX / 2) * gridWidth + gridOffsetX)) / gridWidth;
      const deltaY = (y - ((cellY / 2) * gridHeight + gridOffsetY)) / gridHeight;

      if (Math.abs(deltaX) > Math.abs(deltaY))
      {
        if (deltaX > 0)
        {
          cellX++;
        }
        else
        {
          cellX--;
        }
      }
      else
      {
        if (deltaY > 0)
        {
          cellY++;
        }
        else
        {
          cellY--;
        }
      }
    }
    // magnet to the half cell
    object.setPosition
    (
        (cellX / 2) * gridWidth + gridOffsetX,
        (cellY / 2) * gridHeight + gridOffsetY
    );
}
};
gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.GDObjectObjects1);
gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.userFunc0x9508d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.func = function(runtimeScene, Object, CellWidth, CellHeight, OffsetX, OffsetY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "CellWidth") return CellWidth;
if (argName === "CellHeight") return CellHeight;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.GDObjectObjects1.length = 0;

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Isometry__SnapObjectToIsometricVirtualGrid.registeredGdjsCallbacks = [];