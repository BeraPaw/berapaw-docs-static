import meta from "../../../pages/_meta.js";
import lbgt_meta from "../../../pages/lbgt/_meta.js";
import paw_meta from "../../../pages/paw/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "bgtOptimization",
  route: "/bgtOptimization",
  frontMatter: {
    "sidebarTitle": "Bgtoptimization"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "lbgt",
  route: "/lbgt",
  children: [{
    data: lbgt_meta
  }, {
    name: "lbgtStaking",
    route: "/lbgt/lbgtStaking",
    frontMatter: {
      "sidebarTitle": "Lbgtstaking"
    }
  }]
}, {
  name: "lbgt",
  route: "/lbgt",
  frontMatter: {
    "sidebarTitle": "Lbgt"
  }
}, {
  name: "liquidityVault",
  route: "/liquidityVault",
  frontMatter: {
    "sidebarTitle": "Liquidityvault"
  }
}, {
  name: "paw",
  route: "/paw",
  children: [{
    data: paw_meta
  }, {
    name: "tokenomics",
    route: "/paw/tokenomics",
    frontMatter: {
      "sidebarTitle": "Tokenomics"
    }
  }]
}, {
  name: "paw",
  route: "/paw",
  frontMatter: {
    "sidebarTitle": "Paw"
  }
}, {
  name: "protocolOverview",
  route: "/protocolOverview",
  frontMatter: {
    "sidebarTitle": "Protocoloverview"
  }
}, {
  name: "roadmap",
  route: "/roadmap",
  frontMatter: {
    "sidebarTitle": "Roadmap"
  }
}, {
  name: "vision",
  route: "/vision",
  frontMatter: {
    "sidebarTitle": "Vision"
  }
}, {
  name: "whatIsBeraPaw",
  route: "/whatIsBeraPaw",
  frontMatter: {
    "sidebarTitle": "Whatisberapaw"
  }
}, {
  name: "whyBeraPaw",
  route: "/whyBeraPaw",
  frontMatter: {
    "sidebarTitle": "Whyberapaw"
  }
}];