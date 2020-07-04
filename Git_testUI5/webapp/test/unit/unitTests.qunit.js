/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/demo/Git_testUI5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});