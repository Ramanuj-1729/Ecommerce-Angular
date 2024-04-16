import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HeaderCarouselComponent } from './components/header-carousel/header-carousel.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { OfferBarComponent } from './components/offer-bar/offer-bar.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { OnSaleProductsComponent } from './components/on-sale-products/on-sale-products.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { FiltersComponent } from './components/filters/filters.component';
import { ViewOptionsComponent } from './components/view-options/view-options.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductViewDialogComponent } from './components/product-view-dialog/product-view-dialog.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductCollectionComponent } from './components/product-collection/product-collection.component';
import { ProductCollectionCardComponent } from './components/product-collection-card/product-collection-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavbarComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderCarouselComponent,
    OfferCardComponent,
    OfferBarComponent,
    FeaturedProductsComponent,
    ProductsCarouselComponent,
    ProductCardComponent,
    ProductTabComponent,
    LatestProductsComponent,
    OnSaleProductsComponent,
    BreadcrumbComponent,
    CapitalCasePipe,
    FiltersComponent,
    ViewOptionsComponent,
    ProductListComponent,
    PaginatorComponent,
    ProductComponent,
    ProductCarouselComponent,
    AuthComponent,
    MyaccountComponent,
    SignInFormComponent,
    RegisterFormComponent,
    ProductViewDialogComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    ProductCollectionComponent,
    ProductCollectionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
