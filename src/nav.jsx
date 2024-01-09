export const navItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "fa fa-dashboard",
        badge: {
            variant: "success",
            text: "NEW",
        },
    },
    {
        title: true,
        name: "UI elements",
        class: "menu-title",
    },
    {
        name: "Components",
        path: "/",
        icon: "fa fa-puzzle-piece",
        children: [
            {
                name: "Buttons",
                path: "/components/buttons",
                icon: "fa fa-puzzle-piece",
                badge: {
                    variant: "danger",
                    text: "NEW",
                },
            },
            {
                name: "Badges",
                path: "/components/badges",
                icon: "fa fa-id-badge",
            },
            {
                name: "Tabs",
                path: "/components/tabs",
                icon: "menu-icon fa fa-bars",
            },
            {
                name: "Social Buttons",
                path: "/components/socials",
                icon: "fa fa-share-square",
                badge: {
                    variant: "success",
                    text: "NEW",
                },
            },
            {
                name: "Cards",
                path: "/components/cards",
                icon: "fa fa-id-card",
            },
            {
                name: "Alerts",
                path: "/components/alerts",
                icon: "fa fa-exclamation-triangle",
            },
            {
                name: "Progress Bars",
                path: "/components/progressbars",
                icon: "fa fa-spinner",
            },
            {
                name: "Modals",
                path: "/components/modals",
                icon: "fa fa-fire",
            },
            {
                name: "Grids",
                path: "/components/grids",
                icon: "fa fa-th",
            },
            {
                name: "Typography",
                path: "/components/typography",
                icon: "fa fa-file-word",
            },
        ],
    },
    {
        name: "Tables",
        path: "/components/tables",
        icon: "fa fa-table",
    },
    {
        name: "Forms",
        path: "/",
        icon: "fa fa-pencil-square",
        children: [
            {
                name: "Basic Form",
                path: "/components/basic-form",
                icon: "fa fa-pencil-square",
                badge: {
                    variant: "warning",
                    text: "NEW",
                },
            },
            {
                name: "Advanced Form",
                path: "/components/advanced-form",
                icon: "fa fa-pencil-square",
            },
            {
                name: "Form Wizard",
                path: "/components/wizard-form",
                icon: "fa fa-pencil-square",
                badge: {
                    variant: "danger",
                    text: "NEW",
                },
            },
        ],
    },
    {
        name: "Icons",
        path: "/components/icons",
        icon: "fa fa-star",
    },
    {
        name: "Widgets",
        path: "/components/widgets",
        icon: "fa fa-calculator",
        badge: {
            variant: "info",
            text: "60+",
        },
    },
    {
        name: "Charts",
        path: "/",
        icon: "fa fa-pie-chart",
        children: [
            {
                name: "Chart JS",
                path: "/components/chartjs",
                icon: "fa fa-line-chart",
            },
            {
                name: "Apex Charts",
                path: "/components/apex-charts",
                icon: "fa fa-line-chart",
            },
            {
                name: "Recharts",
                path: "/components/recharts",
                icon: "fa fa-line-chart",
            },
        ],
    },
    {
        name: "Maps",
        path: "/",
        icon: "fa-solid fa-location-dot",
        children: [
            {
                name: "Google Maps",
                path: "/components/maps/google-maps",
                icon: "fa fa-map",
            },
            {
                name: "Leaflet Maps",
                path: "/components/maps/leaflet-maps",
                icon: "fa fa-street-view",
            },
        ],
    },
    {
        title: true,
        name: "Extras",
        class: "menu-title",
    },
    {
        name: "Pages",
        path: "/",
        icon: "fa fa-paperclip",
        children: [
            {
                name: "Login",
                path: "/auth/login",
                icon: "fa fa-sign-in",
            },
            {
                name: "Register",
                path: "/auth/register",
                icon: "fa fa-sign-in",
            },
            {
                name: "Error 404",
                path: "/auth/Page404",
                icon: "fa fa-paper-plane",
            },
            {
                name: "Error 500",
                path: "/auth/Page500",
                icon: "fa fa-paper-plane",
            },
        ],
    },
    {
        name: "Docs",
        url: "https://docs.vuejsadmin.com/docs/basix-admin-free-vuejs-admin-template/",
        icon: "fa-solid fa-file-lines",
    },
    {
        name: "Purchase",
        url: "https://vuejsadmin.com",
        icon: "fa fa-shopping-cart",
    },
];
