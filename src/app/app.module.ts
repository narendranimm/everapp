import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { RegisterComponent } from './registration-flow/register/register.component';
import { GetOtpComponent } from './registration-flow/get-otp/get-otp.component';
import { VerificationComponent } from './registration-flow/verification/verification.component';
import { VerifiedComponent } from './registration-flow/verified/verified.component';
import { AdharComponent } from './registration-flow/adhar/adhar.component';
import { TakePhotoComponent } from './registration-flow/take-photo/take-photo.component';
import { PreviewComponent } from './registration-flow/preview/preview.component';
import { CropComponent } from './registration-flow/crop/crop.component';

import { BookingSummaryComponent } from './E-booking-flow/booking-summary/booking-summary.component';
import { VehicleSelectionComponent } from './E-booking-flow/vehicle-selection/vehicle-selection.component';
import { BikeDetailsComponent } from './E-booking-flow/bike-details/bike-details.component';
import { DurationComponent } from './E-booking-flow/duration/duration.component';
import { OfferDetailsComponent } from './E-booking-flow/offer-details/offer-details.component';
import { CouponAppliedComponent } from './E-booking-flow/coupon-applied/coupon-applied.component';
import { BookingSummaryAfterComponent } from './E-booking-flow/booking-summary-after/booking-summary-after.component';
import { PaymentGatewaysEComponent } from './E-booking-flow/payment-gateways-e/payment-gateways-e.component';
import { AddupiidEComponent } from './E-booking-flow/addupiid-e/addupiid-e.component';
import { AddcardEComponent } from './E-booking-flow/addcard-e/addcard-e.component';
import { EwalletEComponent } from './E-booking-flow/ewallet-e/ewallet-e.component';
import { PaymentongoingEComponent } from './E-booking-flow/paymentongoing-e/paymentongoing-e.component';
import { BookingSummaryFinalComponent } from './E-booking-flow/booking-summary-final/booking-summary-final.component';
import { BookingStatusEComponent } from './E-booking-flow/booking-status-e/booking-status-e.component';
import { BatteryBookingHomeComponent } from './Battery-reservation-flow/battery-booking-home/battery-booking-home.component';
import { BatteryDetailsComponent } from './Battery-reservation-flow/battery-details/battery-details.component';
import { BookingSummaryBComponent } from './Battery-reservation-flow/booking-summary-b/booking-summary-b.component';
import { OffersApliedBComponent } from './Battery-reservation-flow/offers-aplied-b/offers-aplied-b.component';
import { CouponApliedBComponent } from './Battery-reservation-flow/coupon-aplied-b/coupon-aplied-b.component';
import { AddupiidBComponent } from './Battery-reservation-flow/addupiid-b/addupiid-b.component';
import { AddcardBComponent } from './Battery-reservation-flow/addcard-b/addcard-b.component';
import { PaymentGatewaysBComponent } from './Battery-reservation-flow/payment-gateways-b/payment-gateways-b.component';
import { EWalletBComponent } from './Battery-reservation-flow/e-wallet-b/e-wallet-b.component';
import { PaymentOngoingBComponent } from './Battery-reservation-flow/payment-ongoing-b/payment-ongoing-b.component';
import { BookingSummaryFinalBComponent } from './Battery-reservation-flow/booking-summary-final-b/booking-summary-final-b.component';
import { MenuComponent } from './menu-flow/menu/menu.component';
import { ProfileComponent } from './menu-flow/profile/profile.component';
import { MyBookingsComponent } from './menu-flow/my-bookings/my-bookings.component';
import { MyBookingsCurrentStatusComponent } from './menu-flow/my-bookings-current-status/my-bookings-current-status.component';
import { NotificationsComponent } from './menu-flow/notifications/notifications.component';
import { ServicesComponent } from './menu-flow/services/services.component';
import { AllWashStationsComponent } from './menu-flow/all-wash-stations/all-wash-stations.component';
import { WashStationDetailsComponent } from './menu-flow/wash-station-details/wash-station-details.component';
import { DateTimeWashComponent } from './menu-flow/date-time-wash/date-time-wash.component';
import { BookingSummaryWashComponent } from './menu-flow/booking-summary-wash/booking-summary-wash.component';
import { InviteFriendsComponent } from './menu-flow/invite-friends/invite-friends.component';
import { SupportComponent } from './menu-flow/support/support.component';
import { TCComponent } from './menu-flow/t-c/t-c.component';
import { ClaimsComponent } from './menu-flow/claims/claims.component';
import { SettingsComponent } from './menu-flow/settings/settings.component';
import { SecruityPinComponent } from './menu-flow/secruity-pin/secruity-pin.component';
import { EmergencyMobileComponent } from './menu-flow/emergency-mobile/emergency-mobile.component';
import { EmergencyVerificationComponent } from './menu-flow/emergency-verification/emergency-verification.component';
import { EmergencyVerifiedComponent } from './menu-flow/emergency-verified/emergency-verified.component';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    TermsConditionsComponent,
    RegisterComponent,
    GetOtpComponent,
    VerificationComponent,
    VerifiedComponent,
    AdharComponent,
    TakePhotoComponent,
    PreviewComponent,
    CropComponent,
  
    BookingSummaryComponent,
       VehicleSelectionComponent,
       BikeDetailsComponent,
       DurationComponent,
       OfferDetailsComponent,
       CouponAppliedComponent,
       BookingSummaryAfterComponent,
       PaymentGatewaysEComponent,
       AddupiidEComponent,
       AddcardEComponent,
       EwalletEComponent,
       PaymentongoingEComponent,
       BookingSummaryFinalComponent,
       BookingStatusEComponent,
       BatteryBookingHomeComponent,
       BatteryDetailsComponent,
       BookingSummaryBComponent,
       OffersApliedBComponent,
       CouponApliedBComponent,
       AddupiidBComponent,
       AddcardBComponent,
       PaymentGatewaysBComponent,
       EWalletBComponent,
       PaymentOngoingBComponent,
       BookingSummaryFinalBComponent,
       MenuComponent,
       ProfileComponent,
       MyBookingsComponent,
       MyBookingsCurrentStatusComponent,
       NotificationsComponent,
       ServicesComponent,
       AllWashStationsComponent,
       WashStationDetailsComponent,
       DateTimeWashComponent,
       BookingSummaryWashComponent,
       InviteFriendsComponent,
       SupportComponent,
       TCComponent,
       ClaimsComponent,
       SettingsComponent,
       SecruityPinComponent,
       EmergencyMobileComponent,
       EmergencyVerificationComponent,
       EmergencyVerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: "fill" }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
