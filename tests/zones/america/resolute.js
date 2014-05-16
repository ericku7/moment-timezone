"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["America/Resolute"] = {
	"1947" : helpers.makeTestYear("America/Resolute", [
		["1947-08-30T23:59:59+00:00", "23:59:59", "zzz", 0],
		["1947-08-31T00:00:00+00:00", "18:00:00", "CST", 360]
	]),

	"1965" : helpers.makeTestYear("America/Resolute", [
		["1965-04-25T05:59:59+00:00", "23:59:59", "CST", 360],
		["1965-04-25T06:00:00+00:00", "02:00:00", "CDDT", 240],
		["1965-10-31T05:59:59+00:00", "01:59:59", "CDDT", 240],
		["1965-10-31T06:00:00+00:00", "00:00:00", "CST", 360]
	]),

	"1980" : helpers.makeTestYear("America/Resolute", [
		["1980-04-27T07:59:59+00:00", "01:59:59", "CST", 360],
		["1980-04-27T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1980-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1980-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1981" : helpers.makeTestYear("America/Resolute", [
		["1981-04-26T07:59:59+00:00", "01:59:59", "CST", 360],
		["1981-04-26T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1981-10-25T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1981-10-25T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1982" : helpers.makeTestYear("America/Resolute", [
		["1982-04-25T07:59:59+00:00", "01:59:59", "CST", 360],
		["1982-04-25T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1982-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1982-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1983" : helpers.makeTestYear("America/Resolute", [
		["1983-04-24T07:59:59+00:00", "01:59:59", "CST", 360],
		["1983-04-24T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1983-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1983-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1984" : helpers.makeTestYear("America/Resolute", [
		["1984-04-29T07:59:59+00:00", "01:59:59", "CST", 360],
		["1984-04-29T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1984-10-28T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1984-10-28T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1985" : helpers.makeTestYear("America/Resolute", [
		["1985-04-28T07:59:59+00:00", "01:59:59", "CST", 360],
		["1985-04-28T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1985-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1985-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1986" : helpers.makeTestYear("America/Resolute", [
		["1986-04-27T07:59:59+00:00", "01:59:59", "CST", 360],
		["1986-04-27T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1986-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1986-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1987" : helpers.makeTestYear("America/Resolute", [
		["1987-04-05T07:59:59+00:00", "01:59:59", "CST", 360],
		["1987-04-05T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1987-10-25T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1987-10-25T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1988" : helpers.makeTestYear("America/Resolute", [
		["1988-04-03T07:59:59+00:00", "01:59:59", "CST", 360],
		["1988-04-03T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1988-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1988-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1989" : helpers.makeTestYear("America/Resolute", [
		["1989-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["1989-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1989-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1989-10-29T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1990" : helpers.makeTestYear("America/Resolute", [
		["1990-04-01T07:59:59+00:00", "01:59:59", "CST", 360],
		["1990-04-01T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1990-10-28T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1990-10-28T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1991" : helpers.makeTestYear("America/Resolute", [
		["1991-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["1991-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1991-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1991-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1992" : helpers.makeTestYear("America/Resolute", [
		["1992-04-05T07:59:59+00:00", "01:59:59", "CST", 360],
		["1992-04-05T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1992-10-25T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1992-10-25T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1993" : helpers.makeTestYear("America/Resolute", [
		["1993-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["1993-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1993-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1993-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1994" : helpers.makeTestYear("America/Resolute", [
		["1994-04-03T07:59:59+00:00", "01:59:59", "CST", 360],
		["1994-04-03T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1994-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1994-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1995" : helpers.makeTestYear("America/Resolute", [
		["1995-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["1995-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1995-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1995-10-29T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1996" : helpers.makeTestYear("America/Resolute", [
		["1996-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["1996-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1996-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1996-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1997" : helpers.makeTestYear("America/Resolute", [
		["1997-04-06T07:59:59+00:00", "01:59:59", "CST", 360],
		["1997-04-06T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1997-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1997-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1998" : helpers.makeTestYear("America/Resolute", [
		["1998-04-05T07:59:59+00:00", "01:59:59", "CST", 360],
		["1998-04-05T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1998-10-25T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1998-10-25T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1999" : helpers.makeTestYear("America/Resolute", [
		["1999-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["1999-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1999-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1999-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2000" : helpers.makeTestYear("America/Resolute", [
		["2000-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["2000-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2000-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2000-10-29T07:00:00+00:00", "02:00:00", "EST", 300]
	]),

	"2001" : helpers.makeTestYear("America/Resolute", [
		["2001-04-01T07:59:59+00:00", "02:59:59", "EST", 300],
		["2001-04-01T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2001-10-28T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2001-10-28T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2002" : helpers.makeTestYear("America/Resolute", [
		["2002-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["2002-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2002-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2002-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2003" : helpers.makeTestYear("America/Resolute", [
		["2003-04-06T07:59:59+00:00", "01:59:59", "CST", 360],
		["2003-04-06T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2003-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2003-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2004" : helpers.makeTestYear("America/Resolute", [
		["2004-04-04T07:59:59+00:00", "01:59:59", "CST", 360],
		["2004-04-04T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2004-10-31T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2004-10-31T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2005" : helpers.makeTestYear("America/Resolute", [
		["2005-04-03T07:59:59+00:00", "01:59:59", "CST", 360],
		["2005-04-03T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2005-10-30T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2005-10-30T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2006" : helpers.makeTestYear("America/Resolute", [
		["2006-04-02T07:59:59+00:00", "01:59:59", "CST", 360],
		["2006-04-02T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2006-10-29T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2006-10-29T07:00:00+00:00", "02:00:00", "EST", 300]
	]),

	"2007" : helpers.makeTestYear("America/Resolute", [
		["2007-03-11T07:59:59+00:00", "02:59:59", "EST", 300],
		["2007-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2007-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2007-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2008" : helpers.makeTestYear("America/Resolute", [
		["2008-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2008-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2008-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2008-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2009" : helpers.makeTestYear("America/Resolute", [
		["2009-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2009-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2009-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2009-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2010" : helpers.makeTestYear("America/Resolute", [
		["2010-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2010-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2010-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2010-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2011" : helpers.makeTestYear("America/Resolute", [
		["2011-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2011-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2011-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2011-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2012" : helpers.makeTestYear("America/Resolute", [
		["2012-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2012-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2012-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2012-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2013" : helpers.makeTestYear("America/Resolute", [
		["2013-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2013-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2013-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2013-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2014" : helpers.makeTestYear("America/Resolute", [
		["2014-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2014-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2014-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2014-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2015" : helpers.makeTestYear("America/Resolute", [
		["2015-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2015-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2015-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2015-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2016" : helpers.makeTestYear("America/Resolute", [
		["2016-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2016-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2016-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2016-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2017" : helpers.makeTestYear("America/Resolute", [
		["2017-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2017-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2017-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2017-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2018" : helpers.makeTestYear("America/Resolute", [
		["2018-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2018-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2018-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2018-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2019" : helpers.makeTestYear("America/Resolute", [
		["2019-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2019-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2019-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2019-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2020" : helpers.makeTestYear("America/Resolute", [
		["2020-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2020-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2020-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2020-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2021" : helpers.makeTestYear("America/Resolute", [
		["2021-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2021-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2021-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2021-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2022" : helpers.makeTestYear("America/Resolute", [
		["2022-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2022-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2022-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2022-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2023" : helpers.makeTestYear("America/Resolute", [
		["2023-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2023-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2023-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2023-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2024" : helpers.makeTestYear("America/Resolute", [
		["2024-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2024-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2024-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2024-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2025" : helpers.makeTestYear("America/Resolute", [
		["2025-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2025-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2025-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2025-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2026" : helpers.makeTestYear("America/Resolute", [
		["2026-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2026-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2026-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2026-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2027" : helpers.makeTestYear("America/Resolute", [
		["2027-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2027-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2027-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2027-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2028" : helpers.makeTestYear("America/Resolute", [
		["2028-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2028-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2028-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2028-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2029" : helpers.makeTestYear("America/Resolute", [
		["2029-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2029-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2029-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2029-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2030" : helpers.makeTestYear("America/Resolute", [
		["2030-03-10T07:59:59+00:00", "01:59:59", "CST", 360],
		["2030-03-10T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2030-11-03T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2030-11-03T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2031" : helpers.makeTestYear("America/Resolute", [
		["2031-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2031-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2031-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2031-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2032" : helpers.makeTestYear("America/Resolute", [
		["2032-03-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["2032-03-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2032-11-07T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2032-11-07T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2033" : helpers.makeTestYear("America/Resolute", [
		["2033-03-13T07:59:59+00:00", "01:59:59", "CST", 360],
		["2033-03-13T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2033-11-06T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2033-11-06T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2034" : helpers.makeTestYear("America/Resolute", [
		["2034-03-12T07:59:59+00:00", "01:59:59", "CST", 360],
		["2034-03-12T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2034-11-05T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2034-11-05T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2035" : helpers.makeTestYear("America/Resolute", [
		["2035-03-11T07:59:59+00:00", "01:59:59", "CST", 360],
		["2035-03-11T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2035-11-04T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2035-11-04T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2036" : helpers.makeTestYear("America/Resolute", [
		["2036-03-09T07:59:59+00:00", "01:59:59", "CST", 360],
		["2036-03-09T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2036-11-02T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2036-11-02T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"2037" : helpers.makeTestYear("America/Resolute", [
		["2037-03-08T07:59:59+00:00", "01:59:59", "CST", 360],
		["2037-03-08T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2037-11-01T06:59:59+00:00", "01:59:59", "CDT", 300],
		["2037-11-01T07:00:00+00:00", "01:00:00", "CST", 360]
	])
};