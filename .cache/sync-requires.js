const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/nguyen/Workspace/web-demo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/nguyen/Workspace/web-demo/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/nguyen/Workspace/web-demo/src/pages/index.js"))),
  "component---src-pages-test-js": hot(preferDefault(require("/home/nguyen/Workspace/web-demo/src/pages/test.js"))),
  "component---src-pages-test-video-js": hot(preferDefault(require("/home/nguyen/Workspace/web-demo/src/pages/test-video.js")))
}

