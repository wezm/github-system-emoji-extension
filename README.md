# GitHub System Emoji 😀

This is a Firefox extension that makes GitHub use the system emoji font on
Linux, FreeBSD, and other non-Windows, non-macOS systems.

When browsing GitHub on non-Apple and Microsoft platforms GitHub performs image
replacement on emoji, replacing the text with mis-aligned images of the super
ugly Noto Color Emoji font. This extension alters the user agent to appear as
Windows when on GitHub so that it does not mess with the emoji and uses the
emoji font installed on your system.

## Screenshot

This screenshot shows the output before the extension is enabled and after
(where it uses my system emoji font, [JoyPixels](https://www.joypixels.com/)).

<img src="screenshots/Screenshot.png" width="613" alt="Screenshot showing emoji before/after enabling this extension">

## Install

[Download from Firefox Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/github-system-emoji/)

## Build from Source

1. Run `yarn install`
2. Run `tsc`, output is `source/background.js`.

Versions used (for AMO reviewers):

* **Operating System:** Arch Linux
* **Yarn:** 1.22.10
* **TypeScript:** 4.3.4

## Acknowledgements

* Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
  from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
