"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Ho_Chi_Minh"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Ho_Chi_Minh", { offset: true, expect: "Indian/Christmas" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Ho_Chi_Minh", { abbr: true, expect: "Indian/Christmas" }),

	"1906" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1906-06-30T16:53:19+00:00", "23:59:59", "LMT", -25600 / 60],
		["1906-06-30T16:53:20+00:00", "23:59:50", "PLMT", -25590 / 60]
	]),

	"1911" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1911-04-30T16:53:29+00:00", "23:59:59", "PLMT", -25590 / 60],
		["1911-04-30T16:53:30+00:00", "23:53:30", "+07", -420]
	]),

	"1942" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1942-12-31T15:59:59+00:00", "22:59:59", "+07", -420],
		["1942-12-31T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"1945" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1945-03-14T14:59:59+00:00", "22:59:59", "+08", -480],
		["1945-03-14T15:00:00+00:00", "00:00:00", "+09", -540],
		["1945-09-01T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-01T15:00:00+00:00", "22:00:00", "+07", -420]
	]),

	"1947" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1947-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1947-03-31T17:00:00+00:00", "01:00:00", "+08", -480]
	]),

	"1955" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1955-06-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1955-06-30T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1959" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1959-12-31T15:59:59+00:00", "22:59:59", "+07", -420],
		["1959-12-31T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"1975" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1975-06-12T15:59:59+00:00", "23:59:59", "+08", -480],
		["1975-06-12T16:00:00+00:00", "23:00:00", "+07", -420]
	])
};