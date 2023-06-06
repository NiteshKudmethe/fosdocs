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
                    <a href="index.html" data-type="index-link">frontend documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b013c572f02517bc3aaf7bca80b9202bfe6a3c442caf9548449c20687c7e8b4425dec1f9c3495f2315a0c617ed73925c598ccc3d78104d72932c00e3c1be2736"' : 'data-bs-target="#xs-components-links-module-AppModule-b013c572f02517bc3aaf7bca80b9202bfe6a3c442caf9548449c20687c7e8b4425dec1f9c3495f2315a0c617ed73925c598ccc3d78104d72932c00e3c1be2736"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b013c572f02517bc3aaf7bca80b9202bfe6a3c442caf9548449c20687c7e8b4425dec1f9c3495f2315a0c617ed73925c598ccc3d78104d72932c00e3c1be2736"' :
                                            'id="xs-components-links-module-AppModule-b013c572f02517bc3aaf7bca80b9202bfe6a3c442caf9548449c20687c7e8b4425dec1f9c3495f2315a0c617ed73925c598ccc3d78104d72932c00e3c1be2736"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRestaurantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRestaurantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuItemFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuItemFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyordersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyordersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestaurantsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestaurantsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StripePaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripePaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserordersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserordersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cart-1.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItem-1.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-1.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order-1.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order-2.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order-3.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order-4.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurant.html" data-type="entity-link" >Restaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurant-1.html" data-type="entity-link" >Restaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});