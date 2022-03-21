
if (typeof gdjs.evtsExt__LinkTools__CanReachWithMaxLength !== "undefined") {
  gdjs.evtsExt__LinkTools__CanReachWithMaxLength.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__CanReachWithMaxLength = {};
gdjs.evtsExt__LinkTools__CanReachWithMaxLength.GDPickedObjectObjects1= [];
gdjs.evtsExt__LinkTools__CanReachWithMaxLength.GDTargetObjectObjects1= [];

gdjs.evtsExt__LinkTools__CanReachWithMaxLength.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__CanReachWithMaxLength.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinkTools__CanReachWithMaxLength.userFunc0x902870 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let pickedSomething = false;
const pickedObjects = eventsFunctionContext.getObjects("PickedObject");
const targetObjects = eventsFunctionContext.getObjects("TargetObject");
/** @type {number} */
const maxLinkLength = eventsFunctionContext.getArgument("MaxLinkLength");
/** @type {string} */
const costClass = eventsFunctionContext.getArgument("CostClass");
/** @type {gdjs.LinksManager} */
const manager = gdjs.LinksManager.getManager(runtimeScene);
for (const targetObject of targetObjects)
{
    targetObject.linktoolsWeightSum = 0;
}
for (const pickedObject of pickedObjects)
{
    pickedObject.pick = false;
}
// mark every instance that can be reached through links
// openObjects is the new discovered instances where links must be checked
let openObjects = [];
let swapOpenObjects = [];
let nextOpenObjects = targetObjects.slice();
while (nextOpenObjects.length !== 0)
{
    swapOpenObjects = openObjects;
    openObjects = nextOpenObjects;
    nextOpenObjects = swapOpenObjects;
    nextOpenObjects.length = 0;
    while (openObjects.length !== 0)
    {
        const object = openObjects.pop();
        /** @type {number} */
        const linktoolsWeightSum = object.linktoolsWeightSum;
        /** @type {Array<gdjs.RuntimeObject>} */
        const linkedObjects = manager.getObjectsLinkedWith(object);
        //console.log("linktoolsWeightSum: " + linktoolsWeightSum);
        //console.log("linkedObjects: " + linkedObjects.length);
        for (const linkedObject of linkedObjects)
        {
            // don't check one instance twice
            // and it must be in the set given by the caller
            if (!linkedObject.pick && pickedObjects.includes(linkedObject))
            {
                if (costClass === "")
                {
                    if (linktoolsWeightSum + 1 <= maxLinkLength)
                    {
                        linkedObject.pick = true;
                        pickedSomething = true;
                        linkedObject.linktoolsWeightSum = linktoolsWeightSum + 1;
                        nextOpenObjects.push(linkedObject);
                    }
                }
                else
                {
                    const costVariable = linkedObject.getVariables().get("linktools_Cost");
                    if (costVariable.hasChild(costClass))
                    {
                        const cost = linkedObject.getVariableNumber(costVariable.getChild(costClass));
                        if (cost === 0)
                        {
                            linkedObject.pick = true;
                            pickedSomething = true;
                            linkedObject.linktoolsWeightSum = linktoolsWeightSum;
                            openObjects.push(linkedObject);
                        }
                        else
                        {
                            if (linktoolsWeightSum + 1 <= maxLinkLength)
                            {
                                linkedObject.pick = true;
                                pickedSomething = true;
                                linkedObject.linktoolsWeightSum = linktoolsWeightSum + 1;
                                nextOpenObjects.push(linkedObject);
                            }
                        }
                    }
                }
            }
        }
    }
}
// filter the instances to only keep the one marked with the pick attribute
const pickedObjectsLists = eventsFunctionContext.getObjectsLists("PickedObject");
/** @type {Array<String>} */
const objectNames = [];
pickedObjectsLists.keys(objectNames);
for (const objectName of objectNames)
{
    const pickedObjectsList = pickedObjectsLists.get(objectName);
    gdjs.evtTools.object.filterPickedObjectsList(pickedObjectsList);
}
for (const pickedObject of pickedObjects)
{
    pickedObject.pick = false;
}
eventsFunctionContext.returnValue = pickedSomething;
};
gdjs.evtsExt__LinkTools__CanReachWithMaxLength.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LinkTools__CanReachWithMaxLength.userFunc0x902870(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LinkTools__CanReachWithMaxLength.func = function(runtimeScene, PickedObject, TargetObject, MaxLinkLength, CostClass, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PickedObject": PickedObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"PickedObject": gdjs.objectsListsToArray(PickedObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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
if (argName === "MaxLinkLength") return MaxLinkLength;
if (argName === "CostClass") return CostClass;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LinkTools__CanReachWithMaxLength.GDPickedObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__CanReachWithMaxLength.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__LinkTools__CanReachWithMaxLength.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LinkTools__CanReachWithMaxLength.registeredGdjsCallbacks = [];