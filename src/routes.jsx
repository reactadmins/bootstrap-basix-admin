import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";
import Badges from "./views/Badges";
import Tables from "./views/Tables";
import SocialButtons from "./views/SocialButtons";
import Cards from "./views/Cards";
import Alerts from "./views/Alerts";
import ProgressBars from "./views/ProgressBars";
import Modals from "./views/Modals";
import Grids from "./views/Grids";
import Typography from "./views/Typography";
import BasicForm from "./views/BasicForm";
import AdvancedForm from "./views/AdvancedForm";
import Icons from "./views/Icons";
import Widgets from "./views/Widgets";
import Chartjs from "./views/Chartjs";
import Recharts from "./views/Recharts";
import GoogleMaps from "./views/GoogleMaps";
import LeafletMaps from "./views/LeafletMaps";
import Login from "./views/Login";
import Register from "./views/Register";
import Brandico from "./components/Icon/Brandico";
import Entypo from "./components/Icon/Entypo";
import FontAwesome from "./components/Icon/FontAwesome";
import Fontelico from "./components/Icon/Fontelico";
import Page404 from "./views/Error404";
import Page500 from "./views/Error500";

const routes = [
    {
        path: "/",
        component: Dashboard,
    },
    {
        path: ".",
        component: Dashboard,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/components/buttons",
        component: Buttons,
    },
    {
        path: "/components/badges",
        component: Badges,
    },
    {
        path: "/components/socials",
        component: SocialButtons,
    },
    {
        path: "/components/cards",
        component: Cards,
    },
    {
        path: "/components/alerts",
        component: Alerts,
    },
    {
        path: "/components/progressbars",
        component: ProgressBars,
    },
    {
        path: "/components/modals",
        component: Modals,
    },
    {
        path: "/components/grids",
        component: Grids,
    },
    {
        path: "/components/typography",
        component: Typography,
    },
    {
        path: "/components/tables",
        component: Tables,
    },
    {
        path: "/components/basic-form",
        component: BasicForm,
    },
    {
        path: "/components/advanced-form",
        component: AdvancedForm,
    },
    {
        path: "/components/icons",
        component: Icons,
    },
    {
        path: "/components/icons/brandico",
        component: Brandico,
    },
    {
        path: "/components/icons/entypo",
        component: Entypo,
    },
    {
        path: "/components/icons/font-awesome",
        component: FontAwesome,
    },
    {
        path: "/components/icons/fontelico",
        component: Fontelico,
    },
    {
        path: "/components/widgets",
        component: Widgets,
    },
    {
        path: "/components/chartjs",
        component: Chartjs,
    },
    {
        path: "/components/recharts",
        component: Recharts,
    },
    {
        path: "/components/maps/google-maps",
        component: GoogleMaps,
    },
    {
        path: "/components/maps/leaflet-maps",
        component: LeafletMaps,
    },
    {
        route: "/auth/login",
        component: Login,
    },
    {
        route: "/auth/register",
        component: Register,
    },
    {
        route: "/auth/page404",
        component: Page404,
    },
    {
        route: "*",
        component: Page404,
    },
    {
        route: "/auth/page500",
        component: Page500,
    },
];

export default routes;

