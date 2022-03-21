
if (typeof gdjs.evtsExt__LinkTools__CostSum !== "undefined") {
  gdjs.evtsExt__LinkTools__CostSum.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__CostSum = {};
gdjs.evtsExt__LinkTools__CostSum.GDObjectObjects1= [];

gdjs.evtsExt__LinkTools__CostSum.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__CostSum.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinkTools__CostSum.userFunc0x908be8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = objects[0].linktoolsWeightSum;
};
gdjs.evtsExt__LinkTools__CostSum.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__CostSum.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__LinkTools__CostSum.GDObjectObjects1);
gdjs.evtsExt__LinkTools__CostSum.userFunc0x908be8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LinkTools__CostSum.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LinkTools__CostSum.GDObjectObjects1.length = 0;

gdjs.evtsExt__LinkTools__CostSum.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__LinkTools__CostSum.registeredGdjsCallbacks = [];