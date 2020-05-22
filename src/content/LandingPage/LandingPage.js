import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Tabs,
    Tab,
} from "carbon-components-react";

const props = {
    tabs: {
        selected: 0,
        triggerHref: "#",
        role: "navigation",
    },
    tab: {
        href: "#",
        role: "presentation",
        tabIndex: 0,
    },
};

const LandingPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width landing-page">
            <div className="bx--row landing-page__banner">
                <div className="bx--col-lg-16">
                    <Breadcrumb noTrailingSlash aria-label="Page navigation">
                        <BreadcrumbItem>
                            <a href="/">Getting started</a>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="landing-page__heading">
                        Private Flights to Anywhere in the World
                    </h1>
                </div>
            </div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col bx--no-gutter">
                    <Tabs {...props.tabs} aria-label="Tab navigation">
                        <Tab {...props.tab} label="About">
                            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                <div className="bx--row landing-page__tab-content">
                                    <div className="bx--col-md-4 bx--col-lg-7">
                                        <h2 className="landing-page__subheading">
                                            Fly with IBM Airways
                                        </h2>
                                        <div className="landing-page__p">
                                            <ul className="landing-page__ul">
                                                <li>
                                                    Private chartered flights to hundreds of
                                                    destinations around the world
                                                </li>
                                                <li>
                                                    5-course meals with hand selected wine pairings
                                                </li>
                                                <li>
                                                    Concierge services to add a personal touch
                                                    to your travels
                                                </li>
                                            </ul>
                                        </div>
                                        <Button href="/dashboard" >Sign in to your account</Button>
                                    </div>
                                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                                        <img
                                            className="landing-page__illo"
                                            src={`${process.env.PUBLIC_URL}/landing_page_private_jet.png`}
                                            alt="Carbon illustration"
                                       />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab {...props.tab} label="Design">
                            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                <div className="bx--row landing-page__tab-content">
                                    <div className="bx--col-lg-16">
                                        Rapidly build beautiful and accessible experiences. The Carbon kit
                                        contains all resources you need to get started.
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="bx--row landing-page__r3">
                <div className="bx--col-md-4 bx--col-lg-4">
                    <h3 className="landing-page__label"> Principles</h3>
                </div>
                <div className="bx--col-md-4 bx--col-lg-4">Private</div>
                <div className="bx--col-md-4 bx--col-lg-4">Personal</div>
                <div className="bx--col-md-4 bx--col-lg-4">Peerless</div>
            </div>
            <br/>
            <div>
                Secured by &nbsp;
                <a href="https://www.keycloak.org/">
                    Keycloak SSO
                </a>
            </div>
            <div>
                Designed by &nbsp;
                <a href="https://github.com/carbon-design-system">
                    Carbon Design Systems
                </a>
            </div>
        </div>
    );
};
export default LandingPage;
