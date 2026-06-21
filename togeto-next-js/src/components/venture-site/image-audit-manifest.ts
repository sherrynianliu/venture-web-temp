import type { VentureImageId } from "./image-manifest";

type VentureImageAudit = {
  sourceUrl: string;
  sourcePage: string;
  ownershipStatus:
    | "client-confirmed"
    | "client-confirmation-required"
    | "legacy-site-source-client-confirmation-required";
  allowedSlots: string[];
};

export const ventureImageAudit = {
  factoryVisit03: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/07/Customers-refer-to-our-PCB-factory-3.jpg",
    sourcePage: "https://www.venture-mfg.com/",
    ownershipStatus: "client-confirmation-required",
    allowedSlots: ["home-identity", "about-evidence"],
  },
  factoryVisit04: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/07/Customers-refer-to-our-PCB-factory-4.jpg",
    sourcePage: "https://www.venture-mfg.com/",
    ownershipStatus: "client-confirmation-required",
    allowedSlots: ["about-evidence"],
  },
  factoryVisit05: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/07/Customers-refer-to-our-PCB-factory-5.jpg",
    sourcePage: "https://www.venture-mfg.com/",
    ownershipStatus: "client-confirmation-required",
    allowedSlots: ["home-identity", "about-evidence"],
  },
  smtPickAndPlace: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-High-Speed-SMT-Pick-and-Place-Machine.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["pcba-process"],
  },
  waveSoldering: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-Wave-soldering.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["pcba-process"],
  },
  firstArticleInspection: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-First-Article-Inspection-FAI.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["quality-testing"],
  },
  aoiInspection: {
    sourceUrl: "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-aoi.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["quality-testing"],
  },
  boxBuildAssembly: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-Box-Build-Assembly.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["ems-box-build"],
  },
  finishedProductFunctionTest: {
    sourceUrl:
      "https://www.venture-mfg.com/wp-content/uploads/2025/06/process-of-Finished-Product-Function-Test.jpg",
    sourcePage: "https://www.venture-mfg.com/pcb-assembly/",
    ownershipStatus: "legacy-site-source-client-confirmation-required",
    allowedSlots: ["ems-box-build"],
  },
} satisfies Record<VentureImageId, VentureImageAudit>;
