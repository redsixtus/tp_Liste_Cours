'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ionicprojetfull documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' : 'data-target="#xs-components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' :
                                            'id="xs-components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesPageModule.html" data-type="entity-link" >CoursesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' : 'data-target="#xs-components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' :
                                            'id="xs-components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' }>
                                            <li class="link">
                                                <a href="components/CoursesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesPageRoutingModule.html" data-type="entity-link" >CoursesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListeCoursPageModule.html" data-type="entity-link" >ListeCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' : 'data-target="#xs-components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' :
                                            'id="xs-components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' }>
                                            <li class="link">
                                                <a href="components/ListeCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListeCoursPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaisirComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaisirComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListeCoursPageRoutingModule.html" data-type="entity-link" >ListeCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherCoursPageModule.html" data-type="entity-link" >RechercherCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' : 'data-target="#xs-components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' :
                                            'id="xs-components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' }>
                                            <li class="link">
                                                <a href="components/RechercherCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RechercherCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherCoursPageRoutingModule.html" data-type="entity-link" >RechercherCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieCoursPageModule.html" data-type="entity-link" >SaisieCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' : 'data-target="#xs-components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' :
                                            'id="xs-components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' }>
                                            <li class="link">
                                                <a href="components/SaisieCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaisieCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieCoursPageRoutingModule.html" data-type="entity-link" >SaisieCoursPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ModelCours.html" data-type="entity-link" >ModelCours</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CoursServiceService.html" data-type="entity-link" >CoursServiceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});