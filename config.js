/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device
	
	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		
		{
			module: "weather",
			position: "top_right",
			config: {
				type: "current",
				location: "San Jose,California",
				locationID: "",
				lat: "37.3394",
				lon: "-121.895",
				apiKey: "c8db4245018c50eb495a32defc94cc8c",
				}
		},
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_right",

		  config: {
			clientID: "d344b057cfbf47968d28b0b138a545ee",
			clientSecret: "ca72bf878eb544cdaf0c8f81be2746fb",
			accessToken: "BQDiQGW2Oj93Ub5jtBhzXH7lOmpiwxH9bQY0JkmRnaaQcVknXhwoGOrst-cJRcLdk038oD_oeoQTDGid8EP7wKusYE2HCyXTqMq8vTYAtLDWi4h5yo_rDQ9j1CyPS8Bn1DKk0hmXGZLmmDQ7P6p2ARTL-gmKqHYhUawhqm2jIBzM3qHZLxBdbJegoA",
			refreshToken: "AQCpXwHMx0ujp3cexnJxJ5R4oObkj46lwTNeDpc8nwaAfbGDOAsODrLRFmF2E1CcWTA58ubvl3Ddy1zxk7YjNZwNZyha1q0LWgHjH8mk0rbUBsouOA2dmxGftO2S4S0eVjk"
		  }
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
