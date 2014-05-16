"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Asia/Tokyo"] = {
	"1937" : helpers.makeTestYear("Asia/Tokyo", [
		["1937-12-31T14:59:59+00:00", "23:59:59", "CJT", -540],
		["1937-12-31T15:00:00+00:00", "00:00:00", "JST", -540]
	]),

	"1948" : helpers.makeTestYear("Asia/Tokyo", [
		["1948-05-01T16:59:59+00:00", "01:59:59", "JST", -540],
		["1948-05-01T17:00:00+00:00", "03:00:00", "JDT", -600],
		["1948-09-10T15:59:59+00:00", "01:59:59", "JDT", -600],
		["1948-09-10T16:00:00+00:00", "01:00:00", "JST", -540]
	]),

	"1949" : helpers.makeTestYear("Asia/Tokyo", [
		["1949-04-02T16:59:59+00:00", "01:59:59", "JST", -540],
		["1949-04-02T17:00:00+00:00", "03:00:00", "JDT", -600],
		["1949-09-09T15:59:59+00:00", "01:59:59", "JDT", -600],
		["1949-09-09T16:00:00+00:00", "01:00:00", "JST", -540]
	]),

	"1950" : helpers.makeTestYear("Asia/Tokyo", [
		["1950-05-06T16:59:59+00:00", "01:59:59", "JST", -540],
		["1950-05-06T17:00:00+00:00", "03:00:00", "JDT", -600],
		["1950-09-08T15:59:59+00:00", "01:59:59", "JDT", -600],
		["1950-09-08T16:00:00+00:00", "01:00:00", "JST", -540]
	]),

	"1951" : helpers.makeTestYear("Asia/Tokyo", [
		["1951-05-05T16:59:59+00:00", "01:59:59", "JST", -540],
		["1951-05-05T17:00:00+00:00", "03:00:00", "JDT", -600],
		["1951-09-07T15:59:59+00:00", "01:59:59", "JDT", -600],
		["1951-09-07T16:00:00+00:00", "01:00:00", "JST", -540]
	])
};