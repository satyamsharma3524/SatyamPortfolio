module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>ArrowRight,
    "ArrowUpRight",
    ()=>ArrowUpRight,
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
const base = "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-[var(--dur-hover)] ease-[var(--ease-out-quad)] active:translate-y-px";
const variants = {
    primary: "bg-accent-fill text-accent-fill-fg shadow-e1 hover:bg-accent-fill-hover hover:shadow-e2",
    secondary: "border border-line-2 bg-card text-ink shadow-e1 hover:border-ink-4 hover:shadow-e2",
    quiet: "border border-transparent text-ink-2 hover:border-line-2 hover:bg-card hover:text-ink"
};
const sizes = {
    md: "h-11 px-5 text-sm",
    sm: "h-9 px-4 text-xs"
};
function Button({ children, href, variant = "primary", size = "md", external = false, className = "", onClick, type = "button", ...rest }) {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (!href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            className: classes,
            onClick: onClick,
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: classes,
            ...href.startsWith("mailto:") ? {} : {
                target: "_blank",
                rel: "noopener noreferrer"
            },
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: classes,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function ArrowUpRight({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 11 11 5M6 5h5v5"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
function ArrowRight({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 8h10M9 4l4 4-4 4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/content/microcopy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Section 4 — Navigation & Global Microcopy. */ __turbopack_context__.s([
    "a11y",
    ()=>a11y,
    "buttons",
    ()=>buttons,
    "emptyStates",
    ()=>emptyStates,
    "errorPage",
    ()=>errorPage,
    "loading",
    ()=>loading,
    "mobileNavHeading",
    ()=>mobileNavHeading,
    "nav",
    ()=>nav,
    "notFound",
    ()=>notFound,
    "toasts",
    ()=>toasts,
    "unavailable",
    ()=>unavailable
]);
const nav = [
    {
        label: "Work",
        href: "#work"
    },
    {
        label: "How I Work",
        href: "#practice"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Background",
        href: "#background"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
const mobileNavHeading = "Sections";
const buttons = {
    heroPrimary: "See the work",
    heroSecondary: "Résumé",
    heroTertiary: "Email me",
    projectCard: "Read the case study",
    liveProduct: "Open the live product",
    repo: "View the code",
    prd: "Read the PRD",
    caseStudyBack: "← All work",
    contactPrimary: "Email me",
    contactSecondary: "Connect on LinkedIn",
    skillsRevealMore: "Show all",
    skillsRevealLess: "Show less",
    copy: "Copy",
    copied: "Copied"
};
const unavailable = {
    clientRestricted: "Client product — access on request",
    privateRepo: "Private repository — walkthrough on request",
    notPublic: "Build available on request",
    screensPendingClearance: "Screens pending client clearance"
};
const loading = {
    primary: [
        "Shivam Sharma",
        "Product, then build."
    ],
    alternates: [
        "Discovery → PRD → shipped.",
        "Four products. One page.",
        "Loading the work."
    ]
};
const notFound = {
    heading: "Not found",
    body: [
        "This page doesn’t exist.",
        "Which, to be fair, is the kind of thing\ngood acceptance criteria catch early.",
        "Everything that does exist is one click away."
    ],
    actions: {
        primary: "Back to the work",
        secondary: "Email me"
    },
    metaTitle: "Not found",
    metaDescription: "That page doesn’t exist. The work does."
};
const errorPage = {
    heading: "Error",
    body: [
        "Something broke on my end.",
        "Not your fault, and not a route problem —\nthe page failed to render."
    ],
    actions: {
        primary: "Try again",
        secondary: "Back to the work"
    },
    footnote: "If it keeps happening:"
};
const emptyStates = {
    mediaSlot: "Screens pending — walkthrough available on request",
    decisionsPending: "Trade-off notes in progress. Happy to talk through the calls I made.",
    skillFilterEmpty: "Nothing under that filter yet. The full list is above.",
    caseStudyFilterEmpty: "No projects match. Clear the filter to see everything."
};
const a11y = {
    skipLink: "Skip to content",
    navLandmark: "Primary navigation",
    emailLink: `Email Shivam Sharma at sharmashivam6214@gmail.com`,
    resumeLink: "Download résumé, PDF, opens in a new tab",
    projectCardLink: (project)=>`Read the ${project} case study`,
    scrollProgress: "Page progress",
    themeGroup: "Colour theme",
    themeAuto: "Match the system theme",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme"
};
const toasts = {
    emailCopied: "Email copied",
    linkCopied: "Link copied",
    resumeOpening: "Opening résumé"
};
}),
"[project]/src/content/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Identity, contact details and the brand system. Section 2 and Section 3. */ __turbopack_context__.s([
    "bios",
    ()=>bios,
    "brand",
    ()=>brand,
    "profile",
    ()=>profile
]);
const profile = {
    name: "Shivam Sharma",
    role: "Associate Product Manager · AI Products",
    email: "sharmashivam6214@gmail.com",
    phone: "+91 8360900804",
    location: "Gurugram, Haryana, India · IST (GMT+5:30)",
    locationShort: "Gurugram, India · IST",
    graduating: "Expected August 2026",
    siteUrl: "https://shivam-sharma-portfolio-theta.vercel.app",
    resumeHref: "/Shivam-Sharma-Product-Manager-Resume.pdf",
    links: {
        linkedin: "https://linkedin.com/in/shivamsharma6214",
        github: "https://github.com/ShivamSharma6214"
    }
};
const brand = {
    tagline: "I write the PRD, then I ship it.",
    secondaryTaglines: [
        "Product judgment, backed by a working build.",
        "Discovery to deployment, without a handoff.",
        "AI products, specced and shipped by the same person.",
        "The spec, the build, and the instrumentation after.",
        "Student on paper. Four products in the world."
    ],
    mission: "To build AI products that make people more capable rather than more dependent — deciding what to build with the same rigour as how to build it.",
    adjectives: [
        {
            word: "Rigorous",
            gloss: "RICE, PRDs, acceptance criteria, EDA."
        },
        {
            word: "Hands-on",
            gloss: "Electron, React, TypeScript, solo delivery."
        },
        {
            word: "Considered",
            gloss: "The judgment calls — voice over chat, one role-based app over two."
        }
    ]
};
const bios = {
    short: "Shivam Sharma is a final-year Computer Science student and builder-PM who takes AI products from discovery to deployment. He has led a 10-person build, delivered a marketplace for a paying client as sole developer, and shipped a platform that processed 4,000+ submissions in live use. Based in Gurugram, India.",
    medium: [
        "Shivam Sharma is a final-year Computer Science student at I.K. Gujral Punjab Technical University and a builder-PM: he runs the discovery, writes the PRD, then builds the product himself.",
        "He founded CuteHelper, a voice-first AI desktop companion, scoping its MVP with a RICE framework to the two highest-impact workflows and implementing it in Electron, React and TypeScript with Groq Whisper and LLaMA 4 Scout. As sole developer on a paid engagement for ServiceHub Private Limited, he elicited requirements directly from the client and delivered a two-sided services marketplace and admin panel inside a fixed budget. Earlier, as Product Manager on UrbanIQ, he led a 10-person team building an AI-assisted complaint platform that processed 4,000+ submissions in live use, reconciling three user roles into 15+ prioritized user stories.",
        "He is looking for an Associate or Technical Product Management role where product judgment and technical depth compound."
    ]
};
}),
"[project]/app/error.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/microcopy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/profile.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Error({ reset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main",
        className: "shell flex min-h-[80svh] flex-col justify-center py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-mono uppercase tracking-[0.14em] text-ink-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPage"].heading
            }, void 0, false, {
                fileName: "[project]/app/error.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "mt-8 h-px w-1/2 max-w-[34rem] bg-line-2"
            }, void 0, false, {
                fileName: "[project]/app/error.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 max-w-[46ch] space-y-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPage"].body.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `narrative whitespace-pre-line ${index === 0 ? "text-h3 leading-[1.25] text-ink" : "text-lede text-ink-2"}`,
                        children: paragraph
                    }, paragraph, false, {
                        fileName: "[project]/app/error.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/error.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: reset,
                        variant: "primary",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPage"].actions.primary
                    }, void 0, false, {
                        fileName: "[project]/app/error.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        href: "/#work",
                        variant: "secondary",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPage"].actions.secondary
                    }, void 0, false, {
                        fileName: "[project]/app/error.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/error.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-10 font-mono text-mono uppercase tracking-[0.13em] text-ink-3",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPage"].footnote,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                        className: "link-draw text-ink-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                    }, void 0, false, {
                        fileName: "[project]/app/error.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/error.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/error.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c8f2a5e._.js.map