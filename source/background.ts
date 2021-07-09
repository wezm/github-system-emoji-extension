"use strict";

browser.webRequest.onBeforeSendHeaders.addListener(
	function(e) {
		if (e.requestHeaders) {
			for (var header of e.requestHeaders) {
				if (header.name.toLowerCase() === "user-agent") {
					header.value = (header.value || "").replace(/Linux/g, "Mac OS X");
				}
			}
		}

		return { requestHeaders: e.requestHeaders };
	},
	{ urls: ["https://*.github.com/*"] },
	["blocking", "requestHeaders"]
);
