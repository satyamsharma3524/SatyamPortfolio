(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>ArrowRight,
    "ArrowUpRight",
    ()=>ArrowUpRight,
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = Button;
function ArrowUpRight({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = ArrowUpRight;
function ArrowRight({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c2 = ArrowRight;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "ArrowUpRight");
__turbopack_context__.k.register(_c2, "ArrowRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/microcopy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/microcopy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const STORAGE_KEY = "theme";
const OPTIONS = [
    {
        value: "auto",
        label: "Auto"
    },
    {
        value: "light",
        label: "Light"
    },
    {
        value: "dark",
        label: "Dark"
    }
];
/** Mirrors the inline pre-paint script in the layout. */ function apply(choice) {
    const root = document.documentElement;
    if (choice === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", choice);
}
function ThemeToggle({ className = "" }) {
    _s();
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            let stored = "auto";
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw === "light" || raw === "dark") stored = raw;
            } catch  {
            // Storage blocked — the control still works for this page view.
            }
            setChoice(stored);
            setReady(true);
        }
    }["ThemeToggle.useEffect"], []);
    function choose(next) {
        setChoice(next);
        apply(next);
        try {
            if (next === "auto") localStorage.removeItem(STORAGE_KEY);
            else localStorage.setItem(STORAGE_KEY, next);
        } catch  {
        // Non-fatal: the choice holds until reload.
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "radiogroup",
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].themeGroup,
        className: `inline-flex items-center rounded-full border border-line bg-card p-0.5 shadow-e1 ${className}`,
        children: OPTIONS.map((option)=>{
            const active = ready && choice === option.value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "radio",
                "aria-checked": active,
                "aria-label": option.value === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].themeToLight : option.value === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].themeToDark : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].themeAuto,
                onClick: ()=>choose(option.value),
                className: `rounded-full px-2.5 py-1 font-mono text-mono uppercase tracking-[0.11em] transition-colors duration-[var(--dur-hover)] ${active ? "bg-inset text-ink" : "text-ink-4 hover:text-ink-2"}`,
                children: option.label
            }, option.value, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "qgPzdqx+ylNk12p6eI1r/FANGl8=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/microcopy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/profile.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const SECTION_IDS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map(_c = (item)=>item.href.replace("#", ""));
_c1 = SECTION_IDS;
function SiteHeader({ variant = "home" }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 220,
        damping: 40,
        restDelta: 0.001
    });
    /* Header gains a surface once the page has moved. Near the top nothing is
     "current" — the hero is not a nav destination — so the indicator clears. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const onScroll = {
                "SiteHeader.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 12);
                    if (window.scrollY < window.innerHeight * 0.5) setActive(null);
                }
            }["SiteHeader.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    /* Active section. Observed, not computed on every scroll frame. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (variant !== "home") return;
            const targets = SECTION_IDS.map({
                "SiteHeader.useEffect.targets": (id)=>document.getElementById(id)
            }["SiteHeader.useEffect.targets"]).filter({
                "SiteHeader.useEffect.targets": (el)=>Boolean(el)
            }["SiteHeader.useEffect.targets"]);
            if (!targets.length) return;
            const observer = new IntersectionObserver({
                "SiteHeader.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "SiteHeader.useEffect": (entry)=>entry.isIntersecting
                    }["SiteHeader.useEffect"]).sort({
                        "SiteHeader.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["SiteHeader.useEffect"])[0];
                    if (visible) setActive(visible.target.id);
                }
            }["SiteHeader.useEffect"], {
                rootMargin: "-45% 0px -45% 0px",
                threshold: [
                    0,
                    0.25,
                    0.5,
                    1
                ]
            });
            targets.forEach({
                "SiteHeader.useEffect": (target)=>observer.observe(target)
            }["SiteHeader.useEffect"]);
            return ({
                "SiteHeader.useEffect": ()=>observer.disconnect()
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        variant
    ]);
    /* Close the sheet on Escape, and lock the page behind it. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "SiteHeader.useEffect.onKey": (event)=>{
                    if (event.key === "Escape") setOpen(false);
                }
            }["SiteHeader.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
            return ({
                "SiteHeader.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.body.style.overflow = "";
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        open
    ]);
    const homePrefix = variant === "home" ? "" : "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-print-hide": true,
        className: `sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${scrolled || open ? "border-b border-line bg-paper/85 shadow-[0_1px_0_rgba(15,23,42,0.02)] backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent"}`,
        style: {
            height: "var(--header-h)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shell flex h-full items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "group -ml-1 flex items-baseline gap-2.5 rounded px-1 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[0.95rem] font-medium tracking-[-0.015em] text-ink",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden font-mono text-mono uppercase tracking-[0.14em] text-ink-4 sm:inline",
                                children: "Builder-PM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].navLandmark,
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex items-center gap-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((item)=>{
                                const id = item.href.replace("#", "");
                                const isActive = variant === "home" && active === id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `${homePrefix}${item.href}`,
                                        "aria-current": isActive ? "true" : undefined,
                                        className: `relative block rounded px-3 py-2 text-sm transition-colors duration-[var(--dur-hover)] ${isActive ? "text-ink" : "text-ink-2 hover:text-ink"}`,
                                        children: [
                                            item.label,
                                            isActive ? reduced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 118,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                layoutId: "nav-active",
                                                className: "absolute inset-x-3 -bottom-0.5 h-px bg-accent",
                                                transition: {
                                                    duration: 0.4,
                                                    ease: [
                                                        0.16,
                                                        1,
                                                        0.3,
                                                        1
                                                    ]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 120,
                                                columnNumber: 25
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                className: "hidden md:inline-flex"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resumeHref,
                                    variant: "secondary",
                                    size: "sm",
                                    external: true,
                                    "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].resumeLink,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttons"].heroSecondary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((value)=>!value),
                                "aria-expanded": open,
                                "aria-controls": "mobile-sections",
                                className: "inline-flex h-9 items-center gap-2.5 rounded-full border border-line-2 bg-card px-4 font-mono text-mono uppercase tracking-[0.13em] text-ink-2 shadow-e1 lg:hidden",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileNavHeading"],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "grid gap-[3px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-3 bg-current transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-3 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-3 bg-current transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                "aria-hidden": "true",
                className: "absolute inset-x-0 bottom-0 h-px origin-left bg-accent",
                style: {
                    scaleX: reduced ? 0 : progress
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].scrollProgress
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    id: "mobile-sections",
                    initial: reduced ? undefined : {
                        opacity: 0,
                        y: -8
                    },
                    animate: reduced ? undefined : {
                        opacity: 1,
                        y: 0
                    },
                    exit: reduced ? undefined : {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.28,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    className: "absolute inset-x-0 top-full border-b border-line bg-paper/95 backdrop-blur-xl lg:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].navLandmark,
                        className: "shell py-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "ruled",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `${homePrefix}${item.href}`,
                                            onClick: ()=>setOpen(false),
                                            className: "flex items-baseline justify-between py-4 text-h4 text-ink",
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "font-mono text-mono uppercase tracking-[0.14em] text-ink-4",
                                                    children: item.href
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 200,
                                            columnNumber: 21
                                        }, this)
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex flex-wrap items-center gap-3 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resumeHref,
                                            variant: "secondary",
                                            size: "sm",
                                            external: true,
                                            "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a11y"].resumeLink,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$microcopy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttons"].heroSecondary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SiteHeader.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "NUxVG6EVrzWDi16EjR+VdWlWXKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c2 = SiteHeader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SECTION_IDS$nav.map");
__turbopack_context__.k.register(_c1, "SECTION_IDS");
__turbopack_context__.k.register(_c2, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3bdb3a57._.js.map