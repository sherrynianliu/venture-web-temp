export type VentureImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  maxDisplayCssPx: number;
  alt: string;
  caption: string;
};

export const ventureImages = {
  factoryVisit03: {
    id: "factory-visit-03",
    src: "/assets/img/venture-real/factory-visit-03-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 600,
    alt: "Factory visit and production review context for Venture Electronics buyer discussions.",
    caption:
      "Factory visit and production review context for Venture Electronics buyer discussions.",
  },
  factoryVisit04: {
    id: "factory-visit-04",
    src: "/assets/img/venture-real/factory-visit-04-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 600,
    alt: "Factory visit and production review context for Venture Electronics buyer discussions.",
    caption:
      "Factory visit and production review context for Venture Electronics buyer discussions.",
  },
  factoryVisit05: {
    id: "factory-visit-05",
    src: "/assets/img/venture-real/factory-visit-05-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 600,
    alt: "Factory visit and production review context for Venture Electronics buyer discussions.",
    caption:
      "Factory visit and production review context for Venture Electronics buyer discussions.",
  },
  smtPickAndPlace: {
    id: "smt-pick-and-place",
    src: "/assets/img/venture-real/smt-pick-and-place-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "High-speed SMT pick-and-place equipment used in the PCB assembly process.",
    caption: "SMT component-placement process context for PCB Assembly discussions.",
  },
  waveSoldering: {
    id: "wave-soldering",
    src: "/assets/img/venture-real/wave-soldering-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "Wave-soldering process used for through-hole PCB assembly context.",
    caption: "Wave-soldering process context for through-hole assembly discussions.",
  },
  firstArticleInspection: {
    id: "first-article-inspection",
    src: "/assets/img/venture-real/first-article-inspection-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "First-article inspection during PCB assembly process review.",
    caption: "First-article inspection process context for quality planning.",
  },
  aoiInspection: {
    id: "aoi-inspection",
    src: "/assets/img/venture-real/aoi-inspection-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "Automated optical inspection equipment used for PCBA inspection context.",
    caption: "AOI process context for inspection planning.",
  },
  boxBuildAssembly: {
    id: "box-build-assembly",
    src: "/assets/img/venture-real/box-build-assembly-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "Box-build assembly process for an electronics manufacturing project.",
    caption: "Box-build assembly context for EMS project discussions.",
  },
  finishedProductFunctionTest: {
    id: "finished-product-function-test",
    src: "/assets/img/venture-real/finished-product-function-test-1200.webp",
    width: 1200,
    height: 900,
    maxDisplayCssPx: 720,
    alt: "Finished-product functional test during an EMS or box-build workflow.",
    caption: "Finished-product test context for EMS and Box Build discussions.",
  },
} satisfies Record<string, VentureImage>;

export type VentureImageId = keyof typeof ventureImages;
