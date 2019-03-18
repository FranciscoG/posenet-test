/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/camera.js":
/*!**********************!*\
  !*** ./js/camera.js ***!
  \**********************/
/*! exports provided: setupCamera, loadVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupCamera\", function() { return setupCamera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadVideo\", function() { return loadVideo; });\n/* harmony import */ var _mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-check */ \"./js/mobile-check.js\");\n\n\n/**\n * Loads a the camera to be used in the demo\n *\n */\nasync function setupCamera(videoWidth, videoHeight) {\n  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {\n    throw new Error(\n      \"Browser API navigator.mediaDevices.getUserMedia not available\"\n    );\n  }\n\n  const video = document.getElementById(\"video\");\n  video.width = videoWidth;\n  video.height = videoHeight;\n\n  const mobile = Object(_mobile_check__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])();\n  const stream = await navigator.mediaDevices.getUserMedia({\n    audio: false,\n    video: {\n      facingMode: \"user\",\n      width: mobile ? undefined : videoWidth,\n      height: mobile ? undefined : videoHeight\n    }\n  });\n  video.srcObject = stream;\n\n  return new Promise(resolve => {\n    video.onloadedmetadata = () => {\n      resolve(video);\n    };\n  });\n}\n\nasync function loadVideo(videoWidth, videoHeight) {\n  const video = await setupCamera(videoWidth, videoHeight);\n  video.play();\n\n  return video;\n}\n\n\n\n\n//# sourceURL=webpack:///./js/camera.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow-models/posenet */ \"./node_modules/@tensorflow-models/posenet/dist/posenet.esm.js\");\n/* harmony import */ var _stats_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.min */ \"./js/stats.min.js\");\n/* harmony import */ var _stats_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stats_min__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _setupDat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setupDat */ \"./js/setupDat.js\");\n/* harmony import */ var _mobile_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-check */ \"./js/mobile-check.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera */ \"./js/camera.js\");\n\n\n\n\n\n\n\n\n// code copied over from the demo: https://storage.googleapis.com/tfjs-models/demos/posenet/737f311f31f1c925b2c718522b9c55a0.js\n\nconst videoWidth = 600;\nconst videoHeight = 500;\nconst stats = new _stats_min__WEBPACK_IMPORTED_MODULE_1___default.a();\nconst canvas = document.getElementById(\"output\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst guiState = {\n  algorithm: \"multi-pose\",\n  input: {\n    mobileNetArchitecture: Object(_mobile_check__WEBPACK_IMPORTED_MODULE_5__[\"isMobile\"])() ? \"0.50\" : \"0.75\",\n    outputStride: 16,\n    imageScaleFactor: 0.5\n  },\n  singlePoseDetection: {\n    minPoseConfidence: 0.1,\n    minPartConfidence: 0.5\n  },\n  multiPoseDetection: {\n    maxPoseDetections: 5,\n    minPoseConfidence: 0.15,\n    minPartConfidence: 0.1,\n    nmsRadius: 30.0\n  },\n  output: {\n    showVideo: true,\n    showSkeleton: true,\n    showPoints: true,\n    showBoundingBox: false\n  },\n  net: null\n};\n\n/**\n * Sets up a frames per second panel on the top-left of the window\n */\nfunction setupFPS() {\n  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom\n  document.body.appendChild(stats.dom);\n}\n\n/**\n * Feeds an image to posenet to estimate poses - this is where the magic\n * happens. This function loops with a requestAnimationFrame method.\n */\nfunction detectPoseInRealTime(video, ctx) {\n  // since images are being fed from a webcam\n  const flipHorizontal = true;\n\n  canvas.width = videoWidth;\n  canvas.height = videoHeight;\n\n  async function poseDetectionFrame() {\n    if (guiState.changeToArchitecture) {\n      // Important to purge variables and free up GPU memory\n      guiState.net.dispose();\n\n      // Load the PoseNet model weights for either the 0.50, 0.75, 1.00, or 1.01\n      // version\n      guiState.net = await _tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_0__[\"load\"](+guiState.changeToArchitecture);\n\n      guiState.changeToArchitecture = null;\n    }\n\n    // Begin monitoring code for frames per second\n    stats.begin();\n\n    // Scale an image down to a certain factor. Too large of an image will slow\n    // down the GPU\n    const imageScaleFactor = guiState.input.imageScaleFactor;\n    const outputStride = +guiState.input.outputStride;\n\n    let poses = [];\n    let minPoseConfidence;\n    let minPartConfidence;\n    switch (guiState.algorithm) {\n      case \"single-pose\":\n        const pose = await guiState.net.estimateSinglePose(\n          video,\n          imageScaleFactor,\n          flipHorizontal,\n          outputStride\n        );\n        poses.push(pose);\n\n        minPoseConfidence = +guiState.singlePoseDetection.minPoseConfidence;\n        minPartConfidence = +guiState.singlePoseDetection.minPartConfidence;\n        break;\n      case \"multi-pose\":\n        poses = await guiState.net.estimateMultiplePoses(\n          video,\n          imageScaleFactor,\n          flipHorizontal,\n          outputStride,\n          guiState.multiPoseDetection.maxPoseDetections,\n          guiState.multiPoseDetection.minPartConfidence,\n          guiState.multiPoseDetection.nmsRadius\n        );\n\n        minPoseConfidence = +guiState.multiPoseDetection.minPoseConfidence;\n        minPartConfidence = +guiState.multiPoseDetection.minPartConfidence;\n        break;\n    }\n\n    ctx.clearRect(0, 0, videoWidth, videoHeight);\n\n    if (guiState.output.showVideo) {\n      ctx.save();\n      ctx.scale(-1, 1);\n      ctx.translate(-videoWidth, 0);\n      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);\n      ctx.restore();\n    }\n\n    // For each pose (i.e. person) detected in an image, loop through the poses\n    // and draw the resulting skeleton and keypoints if over certain confidence\n    // scores\n    poses.forEach(({ score, keypoints }) => {\n      if (score >= minPoseConfidence) {\n        if (guiState.output.showPoints) {\n          (0, _utils__WEBPACK_IMPORTED_MODULE_3___default.a.drawKeypoints)(keypoints, minPartConfidence, ctx);\n        }\n        if (guiState.output.showSkeleton) {\n          (0, _utils__WEBPACK_IMPORTED_MODULE_3___default.a.drawSkeleton)(keypoints, minPartConfidence, ctx);\n        }\n        if (guiState.output.showBoundingBox) {\n          (0, _utils__WEBPACK_IMPORTED_MODULE_3___default.a.drawBoundingBox)(keypoints, ctx);\n        }\n      }\n    });\n\n    // End monitoring code for frames per second\n    stats.end();\n\n    requestAnimationFrame(poseDetectionFrame);\n  }\n\n  poseDetectionFrame();\n}\n\n/**\n * Kicks off the demo by loading the posenet model, finding and loading\n * available camera devices, and setting off the detectPoseInRealTime function.\n */\nasync function bindPage() {\n  // Load the PoseNet model weights with architecture 0.75\n  const net = await _tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_0__[\"load\"](0.75);\n\n  document.getElementById(\"loading\").style.display = \"none\";\n  document.getElementById(\"main\").style.display = \"block\";\n\n  let video;\n\n  try {\n    video = await Object(_camera__WEBPACK_IMPORTED_MODULE_6__[\"loadVideo\"])(videoWidth, videoHeight);\n  } catch (e) {\n    let info = document.getElementById(\"info\");\n    info.textContent =\n      \"this browser does not support video capture,\" +\n      \"or this device does not have a camera\";\n    info.style.display = \"block\";\n    throw e;\n  }\n\n  Object(_setupDat__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([], net, guiState);\n  setupFPS();\n  detectPoseInRealTime(video, ctx);\n}\n\nnavigator.getUserMedia =\n  navigator.getUserMedia ||\n  navigator.webkitGetUserMedia ||\n  navigator.mozGetUserMedia;\n\n// kick off the demo\nbindPage();\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/mobile-check.js":
/*!****************************!*\
  !*** ./js/mobile-check.js ***!
  \****************************/
/*! exports provided: isAndroid, isiOS, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAndroid\", function() { return isAndroid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isiOS\", function() { return isiOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\nfunction isAndroid() {\n  return /Android/i.test(navigator.userAgent);\n}\n\nfunction isiOS() {\n  return /iPhone|iPad|iPod/i.test(navigator.userAgent);\n}\n\nfunction isMobile() {\n  return isAndroid() || isiOS();\n}\n\n\n\n\n//# sourceURL=webpack:///./js/mobile-check.js?");

/***/ }),

/***/ "./js/setupDat.js":
/*!************************!*\
  !*** ./js/setupDat.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setupGui; });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n/**\n * Sets up dat.gui controller on the top-right of the window\n */\nfunction setupGui(cameras, net, guiState) {\n  guiState.net = net;\n\n  if (cameras.length > 0) {\n    guiState.camera = cameras[0].deviceId;\n  }\n\n  const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__[\"GUI\"]({ width: 300 });\n\n  // The single-pose algorithm is faster and simpler but requires only one\n  // person to be in the frame or results will be innaccurate. Multi-pose works\n  // for more than 1 person\n  const algorithmController = gui.add(guiState, \"algorithm\", [\n    \"single-pose\",\n    \"multi-pose\"\n  ]);\n\n  // The input parameters have the most effect on accuracy and speed of the\n  // network\n  let input = gui.addFolder(\"Input\");\n  // Architecture: there are a few PoseNet models varying in size and\n  // accuracy. 1.01 is the largest, but will be the slowest. 0.50 is the\n  // fastest, but least accurate.\n  const architectureController = input.add(\n    guiState.input,\n    \"mobileNetArchitecture\",\n    [\"1.01\", \"1.00\", \"0.75\", \"0.50\"]\n  );\n  // Output stride:  Internally, this parameter affects the height and width of\n  // the layers in the neural network. The lower the value of the output stride\n  // the higher the accuracy but slower the speed, the higher the value the\n  // faster the speed but lower the accuracy.\n  input.add(guiState.input, \"outputStride\", [8, 16, 32]);\n  // Image scale factor: What to scale the image by before feeding it through\n  // the network.\n  input\n    .add(guiState.input, \"imageScaleFactor\")\n    .min(0.2)\n    .max(1.0);\n  input.open();\n\n  // Pose confidence: the overall confidence in the estimation of a person's\n  // pose (i.e. a person detected in a frame)\n  // Min part confidence: the confidence that a particular estimated keypoint\n  // position is accurate (i.e. the elbow's position)\n  let single = gui.addFolder(\"Single Pose Detection\");\n  single.add(guiState.singlePoseDetection, \"minPoseConfidence\", 0.0, 1.0);\n  single.add(guiState.singlePoseDetection, \"minPartConfidence\", 0.0, 1.0);\n\n  let multi = gui.addFolder(\"Multi Pose Detection\");\n  multi\n    .add(guiState.multiPoseDetection, \"maxPoseDetections\")\n    .min(1)\n    .max(20)\n    .step(1);\n  multi.add(guiState.multiPoseDetection, \"minPoseConfidence\", 0.0, 1.0);\n  multi.add(guiState.multiPoseDetection, \"minPartConfidence\", 0.0, 1.0);\n  // nms Radius: controls the minimum distance between poses that are returned\n  // defaults to 20, which is probably fine for most use cases\n  multi\n    .add(guiState.multiPoseDetection, \"nmsRadius\")\n    .min(0.0)\n    .max(40.0);\n  multi.open();\n\n  let output = gui.addFolder(\"Output\");\n  output.add(guiState.output, \"showVideo\");\n  output.add(guiState.output, \"showSkeleton\");\n  output.add(guiState.output, \"showPoints\");\n  output.add(guiState.output, \"showBoundingBox\");\n  output.open();\n\n  architectureController.onChange(function(architecture) {\n    guiState.changeToArchitecture = architecture;\n  });\n\n  algorithmController.onChange(function(value) {\n    switch (guiState.algorithm) {\n      case \"single-pose\":\n        multi.close();\n        single.open();\n        break;\n      case \"multi-pose\":\n        single.close();\n        multi.open();\n        break;\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/setupDat.js?");

/***/ }),

/***/ "./js/stats.min.js":
/*!*************************!*\
  !*** ./js/stats.min.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():undefined})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n\n\n//# sourceURL=webpack:///./js/stats.min.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var tf = __webpack_require__(/*! @tensorflow/tfjs */ \"./node_modules/@tensorflow/tfjs/dist/tf.esm.js\");\nvar posenet = __webpack_require__(/*! @tensorflow-models/posenet */ \"./node_modules/@tensorflow-models/posenet/dist/posenet.esm.js\");\n\nconst color = \"aqua\";\nconst boundingBoxColor = \"red\";\nconst lineWidth = 2;\n\nfunction toTuple({ y, x }) {\n  return [y, x];\n}\n\nfunction drawPoint(ctx, y, x, r, color) {\n  ctx.beginPath();\n  ctx.arc(x, y, r, 0, 2 * Math.PI);\n  ctx.fillStyle = color;\n  ctx.fill();\n}\n\n/**\n * Draws a line on a canvas, i.e. a joint\n */\nfunction drawSegment([ay, ax], [by, bx], color, scale, ctx) {\n  ctx.beginPath();\n  ctx.moveTo(ax * scale, ay * scale);\n  ctx.lineTo(bx * scale, by * scale);\n  ctx.lineWidth = lineWidth;\n  ctx.strokeStyle = color;\n  ctx.stroke();\n}\n\n/**\n * Draws a pose skeleton by looking up all adjacent keypoints/joints\n */\nfunction drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {\n  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(\n    keypoints,\n    minConfidence\n  );\n\n  adjacentKeyPoints.forEach(keypoints => {\n    drawSegment(\n      toTuple(keypoints[0].position),\n      toTuple(keypoints[1].position),\n      color,\n      scale,\n      ctx\n    );\n  });\n}\n\n/**\n * Draw pose keypoints onto a canvas\n */\nfunction drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {\n  for (let i = 0; i < keypoints.length; i++) {\n    const keypoint = keypoints[i];\n\n    if (keypoint.score < minConfidence) {\n      continue;\n    }\n\n    const { y, x } = keypoint.position;\n    drawPoint(ctx, y * scale, x * scale, 3, color);\n  }\n}\n\n/**\n * Draw the bounding box of a pose. For example, for a whole person standing\n * in an image, the bounding box will begin at the nose and extend to one of\n * ankles\n */\nfunction drawBoundingBox(keypoints, ctx) {\n  const boundingBox = posenet.getBoundingBox(keypoints);\n\n  ctx.rect(\n    boundingBox.minX,\n    boundingBox.minY,\n    boundingBox.maxX - boundingBox.minX,\n    boundingBox.maxY - boundingBox.minY\n  );\n\n  ctx.strokeStyle = boundingBoxColor;\n  ctx.stroke();\n}\n\n/**\n * Converts an arary of pixel data into an ImageData object\n */\nasync function renderToCanvas(a, ctx) {\n  const [height, width] = a.shape;\n  const imageData = new ImageData(width, height);\n\n  const data = await a.data();\n\n  for (let i = 0; i < height * width; ++i) {\n    const j = i * 4;\n    const k = i * 3;\n\n    imageData.data[j + 0] = data[k + 0];\n    imageData.data[j + 1] = data[k + 1];\n    imageData.data[j + 2] = data[k + 2];\n    imageData.data[j + 3] = 255;\n  }\n\n  ctx.putImageData(imageData, 0, 0);\n}\n\n/**\n * Draw an image on a canvas\n */\nfunction renderImageToCanvas(image, size, canvas) {\n  canvas.width = size[0];\n  canvas.height = size[1];\n  const ctx = canvas.getContext(\"2d\");\n\n  ctx.drawImage(image, 0, 0);\n}\n\n/**\n * Draw heatmap values, one of the model outputs, on to the canvas\n * Read our blog post for a description of PoseNet's heatmap outputs\n * https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5\n */\nfunction drawHeatMapValues(heatMapValues, outputStride, canvas) {\n  const ctx = canvas.getContext(\"2d\");\n  const radius = 5;\n  const scaledValues = heatMapValues.mul(tf.scalar(outputStride, \"int32\"));\n\n  drawPoints(ctx, scaledValues, radius, color);\n}\n\n/**\n * Used by the drawHeatMapValues method to draw heatmap points on to\n * the canvas\n */\nfunction drawPoints(ctx, points, radius, color) {\n  const data = points.buffer().values;\n\n  for (let i = 0; i < data.length; i += 2) {\n    const pointY = data[i];\n    const pointX = data[i + 1];\n\n    if (pointX !== 0 && pointY !== 0) {\n      ctx.beginPath();\n      ctx.arc(pointX, pointY, radius, 0, 2 * Math.PI);\n      ctx.fillStyle = color;\n      ctx.fill();\n    }\n  }\n}\n\n/**\n * Draw offset vector values, one of the model outputs, on to the canvas\n * Read our blog post for a description of PoseNet's offset vector outputs\n * https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5\n */\nfunction drawOffsetVectors(\n  heatMapValues,\n  offsets,\n  outputStride,\n  scale = 1,\n  ctx\n) {\n  const offsetPoints = posenet.singlePose.getOffsetPoints(\n    heatMapValues,\n    outputStride,\n    offsets\n  );\n\n  const heatmapData = heatMapValues.buffer().values;\n  const offsetPointsData = offsetPoints.buffer().values;\n\n  for (let i = 0; i < heatmapData.length; i += 2) {\n    const heatmapY = heatmapData[i] * outputStride;\n    const heatmapX = heatmapData[i + 1] * outputStride;\n    const offsetPointY = offsetPointsData[i];\n    const offsetPointX = offsetPointsData[i + 1];\n\n    drawSegment(\n      [heatmapY, heatmapX],\n      [offsetPointY, offsetPointX],\n      color,\n      scale,\n      ctx\n    );\n  }\n}\n\nmodule.exports = {\n  drawPoint: drawPoint,\n  drawSegment: drawSegment,\n  drawSkeleton: drawSkeleton,\n  drawKeypoints: drawKeypoints,\n  drawBoundingBox: drawBoundingBox,\n  renderToCanvas: renderToCanvas,\n  renderImageToCanvas: renderImageToCanvas,\n  drawHeatMapValues: drawHeatMapValues,\n  drawOffsetVectors: drawOffsetVectors\n};\n\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

/******/ });