export const metrics = [
  { value: "6+", label: "core modules", color: "primary" },
  { value: "100%", label: "Audit Ready", color: "blue" },
  { value: "1X", label: "Source of Trust", color: "primary" },
];

export const carouselCards = [
  {
    title: "Compliance Calendar & Tracking",
    description:
      "Never miss a deadline. Automated reminders keep recurring obligations on schedule.",
    icon: "calendar",
  },
  {
    title: "Policy & Document Management",
    description:
      "Store, version, and approve policies and procedures with a full audit trail.",
    icon: "document",
  },
  {
    title: "Audit Management",
    description:
      "Plan, run, and close out compliance audits and actions in one workflow.",
    icon: "audit",
  },
  {
    title: "Workflows & Automation",
    description:
      "Route attestations, approvals, and reviews automatically to the right people.",
    icon: "workflows",
  },
  {
    title: "Compliance Reporting",
    description:
      "Real-time dashboards give boards and executives instant visibility of compliance status.",
    icon: "reporting",
  },
];

export const alternatingFeatures = [
  {
    id: "obligations",
    title: "Centralised Obligations Register",
    subtitle:
      "Capture every legal and regulatory obligation, assign owners, and track status in one register.",
    bullets: [
      "Due-date tracking with automated reminders",
      "Clear ownership and accountability per obligation",
      "Evidence capture against each requirement",
      "Attestation and sign-off workflows",
      "Live status monitoring across the organisation",
    ],
    imageSrc: "/assets/obligations-feature.png",
    imageAlt: "Obligations register dashboard with status indicators",
    aspectRatio: "aspect-[1069/571]",
    reverse: false,
    cta: { label: "→ See in the Demo", href: "#demo" },
  },
  {
    id: "calendar",
    title: "Compliance Calendar",
    subtitle:
      "Every obligation becomes a live calendar entry — with reminders, owners, and evidence attached.",
    bullets: [
      "Recurring obligation scheduling",
      "Automated reminder notifications",
      "Owner and delegate assignment",
      "Calendar views by team or entity",
      "Export to Outlook and Google Calendar",
    ],
    imageSrc: "/assets/compliance-calendar.png",
    imageAlt: "Compliance calendar dashboard",
    aspectRatio: "aspect-[1003/536]",
    reverse: true,
    cta: { label: "→ See in the Demo", href: "#demo" },
  },
];

export const regulatoryCards = [
  {
    number: "1",
    title: "Regulatory Change Management",
    description:
      "Track changes to laws and standards and assess their impact on your obligations and controls.",
    color: "purple",
  },
  {
    number: "2",
    title: "Obligation Mapping",
    description:
      "Map each requirement to the policies, controls, and evidence that demonstrate compliance.",
    color: "green",
  },
  {
    number: "3",
    title: "Attestations",
    description:
      "Capture sign-offs from accountable officers to prove obligations are met.",
    color: "gold",
  },
];

export const regulatoryTags = [
  "ISO 37301",
  "ISO 27001",
  "APRA CPS 230",
  "Privacy Act / NDB",
  "NDIS Practice Standards",
  "Aged Care Quality Standards",
  "Local Government Act",
];
