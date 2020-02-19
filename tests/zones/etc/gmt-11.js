"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-11"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-11", { offset: true, expect: "Pacific/Pohnpei" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-11", { abbr: true, expect: "Pacific/Pohnpei" }),


};