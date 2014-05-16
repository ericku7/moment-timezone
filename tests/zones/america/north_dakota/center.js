"use strict";

var helpers = require("../../../../tests/helpers/helpers");

exports["America/North_Dakota/Center"] = {
	"1918" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1918-03-31T08:59:59+00:00", "01:59:59", "MST", 420],
		["1918-03-31T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1918-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1918-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1919" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1919-03-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1919-03-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1919-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1919-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1942" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1942-02-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["1942-02-09T09:00:00+00:00", "03:00:00", "MWT", 360]
	]),

	"1945" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1945-08-14T22:59:59+00:00", "16:59:59", "MWT", 360],
		["1945-08-14T23:00:00+00:00", "17:00:00", "MPT", 360],
		["1945-09-30T07:59:59+00:00", "01:59:59", "MPT", 360],
		["1945-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1967" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1967-04-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1967-04-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1967-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1967-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1968" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1968-04-28T08:59:59+00:00", "01:59:59", "MST", 420],
		["1968-04-28T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1968-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1968-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1969" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1969-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1969-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1969-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1969-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1970" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1970-04-26T08:59:59+00:00", "01:59:59", "MST", 420],
		["1970-04-26T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1970-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1970-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1971" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1971-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1971-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1971-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1971-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1972" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1972-04-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1972-04-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1972-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1972-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1973" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1973-04-29T08:59:59+00:00", "01:59:59", "MST", 420],
		["1973-04-29T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1973-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1973-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1974" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1974-01-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["1974-01-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1974-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1974-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1975" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1975-02-23T08:59:59+00:00", "01:59:59", "MST", 420],
		["1975-02-23T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1975-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1975-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1976" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1976-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1976-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1976-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1976-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1977" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1977-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1977-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1977-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1977-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1978" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1978-04-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1978-04-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1978-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1978-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1979" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1979-04-29T08:59:59+00:00", "01:59:59", "MST", 420],
		["1979-04-29T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1979-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1979-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1980" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1980-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1980-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1980-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1980-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1981" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1981-04-26T08:59:59+00:00", "01:59:59", "MST", 420],
		["1981-04-26T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1981-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1981-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1982" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1982-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1982-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1982-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1982-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1983" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1983-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1983-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1983-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1983-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1984" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1984-04-29T08:59:59+00:00", "01:59:59", "MST", 420],
		["1984-04-29T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1984-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1984-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1985" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1985-04-28T08:59:59+00:00", "01:59:59", "MST", 420],
		["1985-04-28T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1985-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1985-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1986" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1986-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1986-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1986-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1986-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1987" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1987-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["1987-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1987-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1987-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1988" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1988-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["1988-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1988-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1988-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1989" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1989-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["1989-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1989-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1989-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1990" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1990-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["1990-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1990-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1990-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1991" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1991-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["1991-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1991-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1991-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1992" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1992-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["1992-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1992-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1992-10-25T08:00:00+00:00", "02:00:00", "CST", 360]
	]),

	"1993" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1993-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["1993-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1993-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1993-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1994" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1994-04-03T07:59:59+00:00", "01:59:59", "CST", 360],
		["1994-04-03T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1994-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1994-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1995" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1995-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["1995-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1995-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1995-10-29T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1996" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1996-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["1996-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1996-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1996-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1997" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1997-04-06T07:59:59+00:00", "01:59:59", "CST", 360],
		["1997-04-06T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1997-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1997-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1998" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1998-04-05T07:59:59+00:00", "01:59:59", "CST", 360],
		["1998-04-05T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1998-10-25T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1998-10-25T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1999" : helpers.makeTestYear("America/North_Dakota/Center", [
		["1999-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["1999-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1999-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1999-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2000" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2000-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["2000-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2000-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2000-10-29T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2001" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2001-04-01T07:59:59+00:00", "01:59:59", "CST", 360],
		["2001-04-01T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2001-10-28T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2001-10-28T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2002" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2002-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["2002-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2002-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2002-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2003" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2003-04-06T07:59:59+00:00", "01:59:59", "CST", 360],
		["2003-04-06T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2003-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2003-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2004" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2004-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["2004-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2004-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2004-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2005" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2005-04-03T07:59:59+00:00", "01:59:59", "CST", 360],
		["2005-04-03T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2005-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2005-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2006" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2006-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["2006-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2006-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2006-10-29T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2007" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2007-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2007-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2007-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2007-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2008" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2008-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2008-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2008-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2008-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2009" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2009-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2009-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2009-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2009-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2010" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2010-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2010-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2010-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2010-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2011" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2011-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2011-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2011-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2011-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2012" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2012-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2012-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2012-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2012-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2013" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2013-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2013-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2013-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2013-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2014" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2014-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2014-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2014-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2014-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2015" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2015-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2015-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2015-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2015-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2016" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2016-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2016-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2016-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2016-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2017" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2017-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2017-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2017-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2017-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2018" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2018-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2018-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2018-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2018-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2019" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2019-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2019-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2019-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2019-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2020" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2020-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2020-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2020-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2020-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2021" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2021-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2021-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2021-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2021-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2022" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2022-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2022-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2022-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2022-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2023" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2023-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2023-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2023-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2023-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2024" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2024-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2024-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2024-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2024-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2025" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2025-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2025-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2025-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2025-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2026" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2026-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2026-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2026-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2026-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2027" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2027-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2027-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2027-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2027-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2028" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2028-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2028-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2028-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2028-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2029" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2029-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2029-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2029-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2029-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2030" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2030-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2030-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2030-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2030-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2031" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2031-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2031-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2031-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2031-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2032" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2032-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2032-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2032-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2032-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2033" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2033-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2033-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2033-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2033-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2034" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2034-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2034-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2034-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2034-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2035" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2035-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2035-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2035-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2035-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2036" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2036-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2036-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2036-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2036-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2037" : helpers.makeTestYear("America/North_Dakota/Center", [
		["2037-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2037-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2037-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2037-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	])
};