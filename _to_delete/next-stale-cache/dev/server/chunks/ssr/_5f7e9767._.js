module.exports = [
"[project]/src/content/profile.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/content/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ogImage",
    ()=>ogImage,
    "personSchema",
    ()=>personSchema,
    "seo",
    ()=>seo
]);
/** Section 13 — SEO, Metadata & Social. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/profile.ts [app-rsc] (ecmascript)");
;
const seo = {
    title: "Shivam Sharma — Associate Product Manager · AI Products",
    titleTemplate: "%s — Shivam Sharma",
    description: "Builder-PM working on AI-first products. I run discovery, write the PRD, then ship it — React, Electron and LLM integrations. Led a 10-person build, delivered for a paying client, shipped a platform that processed 4,000+ submissions.",
    ogTitle: "Shivam Sharma — I write the PRD, then I ship it",
    ogDescription: "Builder-PM on AI-first products. Discovery and PRDs through hands-on development in React, Electron and LLM integrations. Led a 10-person build, delivered for a paying client, shipped a platform that processed 4,000+ submissions in live use.",
    ogImageAlt: "Shivam Sharma — Associate Product Manager, AI Products",
    siteName: "Shivam Sharma — Portfolio",
    twitterDescription: "Builder-PM on AI-first products. Four products built end to end: a voice-first AI desktop companion, a paid client marketplace, and a platform that processed 4,000+ submissions.",
    keywords: [
        "associate product manager",
        "technical product manager",
        "AI product manager",
        "builder PM",
        "product manager who codes",
        "AI product management",
        "associate product manager fresher",
        "technical product manager India",
        "APM 2026",
        "entry level product manager AI",
        "product manager intern India",
        "technical PM candidate",
        "product discovery",
        "PRD authoring",
        "RICE prioritization",
        "roadmapping",
        "user stories",
        "acceptance criteria",
        "MVP definition",
        "KPI definition",
        "stakeholder management",
        "agile",
        "scrum",
        "LLM integration",
        "prompt engineering",
        "AI workflow design",
        "voice interfaces",
        "context-aware systems",
        "SQL",
        "Python",
        "pandas",
        "Metabase",
        "Mixpanel",
        "funnel analysis",
        "cohort analysis",
        "retention analysis",
        "A/B testing",
        "exploratory data analysis",
        "React",
        "Next.js",
        "TypeScript",
        "Electron",
        "Supabase",
        "Prisma",
        "REST APIs",
        "Git",
        "Jira",
        "Notion",
        "Shivam Sharma product manager",
        "CuteHelper",
        "UrbanIQ",
        "ServiceHub",
        "Docmize",
        "Groq Whisper",
        "LLaMA 4 Scout",
        "I.K. Gujral Punjab Technical University",
        "Google Project Management Professional Certificate",
        "product manager with engineering background",
        "PM who can write code",
        "AI-first product manager portfolio",
        "product manager case study portfolio",
        "technical product manager fresher India",
        "voice-first AI desktop app",
        "product manager Gurugram Haryana"
    ]
};
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivam Sharma",
    jobTitle: "Associate Product Manager, AI Products",
    description: "Builder-PM working on AI-first products — discovery and PRDs through hands-on development, then instrumentation.",
    url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].siteUrl,
    email: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].email}`,
    telephone: "+918360900804",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN"
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "I.K. Gujral Punjab Technical University"
    },
    knowsAbout: [
        "Product Management",
        "Product Discovery",
        "PRD Authoring",
        "RICE Prioritization",
        "LLM Integration",
        "Prompt Engineering",
        "React",
        "Next.js",
        "TypeScript",
        "Electron",
        "SQL",
        "Python"
    ],
    sameAs: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].links.github,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].links.linkedin
    ]
};
const ogImage = {
    name: "SHIVAM SHARMA",
    headline: [
        "I write the PRD,",
        "then I ship it."
    ],
    proof: [
        "4 products · 10-person team led ·",
        "4,000+ submissions in live use ·",
        "1 paying client"
    ]
};
}),
"[project]/app/twitter-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>OpengraphImage,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/seo.ts [app-rsc] (ecmascript)");
;
;
;
const alt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].ogImageAlt;
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
async function OpengraphImage() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#0A0A0B",
            padding: "76px 84px",
            fontFamily: "sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 22,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6B6A68"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ogImage"].name
            }, void 0, false, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ogImage"].headline.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 96,
                            lineHeight: 1.02,
                            letterSpacing: "-0.04em",
                            color: "#F4F3F1",
                            fontWeight: 500
                        },
                        children: line
                    }, line, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            width: "100%",
                            background: "rgba(255,255,255,0.14)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 6
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ogImage"].proof.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 21,
                                    letterSpacing: "0.06em",
                                    color: "#A3A2A0"
                                },
                                children: line
                            }, line, false, {
                                fileName: "[project]/app/twitter-image.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/twitter-image.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, this), size);
}
}),
"[project]/app/twitter-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/twitter-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "twitter-image");
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?4271fae8d85e6832"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function importModule() {
    return __turbopack_context__.A("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)");
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control': ("TURBOPACK compile-time truthy", 1) ? 'no-cache, no-store' : "TURBOPACK unreachable"
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
} //# sourceMappingURL=image-response.js.map
}),
"[project]/node_modules/next/og.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_5f7e9767._.js.map