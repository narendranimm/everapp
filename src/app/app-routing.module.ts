
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './Regristration_flow/splash/splash.component';
import { AllowPermissionsComponent } from './Regristration_flow/allow-permissions/allow-permissions.component';
import { GetComponent } from './Regristration_flow/get/get.component';
import { RegisterComponent } from './Regristration_flow/register/register.component';
import { LogComponent } from './Regristration_flow/log/log.component';
import { CommunicationAllowPermissionComponent } from './communication-allow-permission/communication-allow-permission.component';
import { NavComponent } from './nav/nav.component';

import { AadharComponent } from './Regristration_flow/aadhar/aadhar.component';
import { SelfieComponent } from './Regristration_flow/selfie/selfie.component';

import { CropComponent } from './Regristration_flow/crop/crop.component';
import { DurationComponent } from './E-bike-booking-flow/duration/duration.component';
import { HubdetailsComponent } from './E-bike-booking-flow/hubdetails/hubdetails.component';
import { HomepageComponent } from './E-bike-booking-flow/homepage/homepage.component';
import { BikelistComponent } from './E-bike-booking-flow/bikelist/bikelist.component';
import { BikedetailsComponent } from './E-bike-booking-flow/bikedetails/bikedetails.component';
import { DurationLaterComponent } from './E-bike-booking-flow/duration-later/duration-later.component';
import { BookingsummaryComponent } from './E-bike-booking-flow/bookingsummary/bookingsummary.component';
import { CouponappliedComponent } from './E-bike-booking-flow/couponapplied/couponapplied.component';
import { AddUPIIDComponent } from './E-bike-booking-flow/add-upiid/add-upiid.component';
import { AddcardComponent } from './E-bike-booking-flow/addcard/addcard.component';
import { EWalletComponent } from './E-bike-booking-flow/e-wallet/e-wallet.component';
import { PaymentComponent } from './E-bike-booking-flow/payment/payment.component';
import { BookingsuccessComponent } from './E-bike-booking-flow/bookingsuccess/bookingsuccess.component';
import { BookingdetailsComponent } from './E-bike-booking-flow/bookingdetails/bookingdetails.component';
import { HomepageAfterbookingComponent } from './E-bike-booking-flow/homepage-afterbooking/homepage-afterbooking.component';
import { TimedetailsComponent } from './E-bike-booking-flow/timedetails/timedetails.component';
import { DateTimeComponent } from './menu-flow/date-time/date-time.component';
import { DatetimeComponent } from './E-bike-booking-flow/datetime/datetime.component';
import { PaymentgatewaysComponent } from './E-bike-booking-flow/paymentgateways/paymentgateways.component';
import { BatteryListComponent } from './batter-reservation-flow/battery-list/battery-list.component';
import { BatteryStationComponent } from './batter-reservation-flow/battery-station/battery-station.component';
import { BatteryDetailsAvailableComponent } from './batter-reservation-flow/battery-details-available/battery-details-available.component';
import { BatteryDetailsUnavailableComponent } from './batter-reservation-flow/battery-details-unavailable/battery-details-unavailable.component';
import { BookingDetailsComponent } from './batter-reservation-flow/booking-details/booking-details.component';
import { OffersComponent } from './batter-reservation-flow/offers/offers.component';
import { CouponAppliedComponent } from './batter-reservation-flow/coupon-applied/coupon-applied.component';
import { PaymentGatewaysComponent } from './batter-reservation-flow/payment-gateways/payment-gateways.component';
import { AddUpiIdComponent } from './batter-reservation-flow/add-upi-id/add-upi-id.component';
import { AddCardComponent } from './batter-reservation-flow/add-card/add-card.component';
import { AddEWalletComponent } from './batter-reservation-flow/add-e-wallet/add-e-wallet.component';
import { PaymentOngoingComponent } from './batter-reservation-flow/payment-ongoing/payment-ongoing.component';
import { BookingSuccessComponent } from './batter-reservation-flow/booking-success/booking-success.component';
import { BookingDetailsAfterComponent } from './batter-reservation-flow/booking-details-after/booking-details-after.component';
import { BatteryStationListComponent } from './batter-reservation-flow/battery-station-list/battery-station-list.component';
import { CouponAppliedDashboardComponent } from './batter-reservation-flow/coupon-applied-dashboard/coupon-applied-dashboard.component';
import { MenuComponent } from './menu-flow/menu/menu.component';
import { ProfileComponent } from './menu-flow/profile/profile.component';
import { MyBookingsComponent } from './menu-flow/my-bookings/my-bookings.component';
import { TimeDetailsComponent } from './menu-flow/time-details/time-details.component';
import { TimeDetailsVehicleComponent } from './menu-flow/time-details-vehicle/time-details-vehicle.component';
import { TimeDetailsVehicleFromComponent } from './menu-flow/time-details-vehicle-from/time-details-vehicle-from.component';
import { NotificationsComponent } from './menu-flow/notifications/notifications.component';
import { ServicesComponent } from './menu-flow/services/services.component';
import { InviteFriendsComponent } from './menu-flow/invite-friends/invite-friends.component';
import { SupportComponent } from './menu-flow/support/support.component';
import { TermsConditionsComponent } from './menu-flow/terms-conditions/terms-conditions.component';
import { ClaimsComponent } from './menu-flow/claims/claims.component';
import { SettingsComponent } from './menu-flow/settings/settings.component';
import { BatterySwappingComponent } from './menu-flow/battery-swapping/battery-swapping.component';
import { WashStationListComponent } from './menu-flow/wash-station-list/wash-station-list.component';
import { WashStationDetailsComponent } from './menu-flow/wash-station-details/wash-station-details.component';
import { BookingSummaryComponent } from './menu-flow/booking-summary/booking-summary.component';
import { OffersMComponent } from './offers-m/offers-m.component';
import { BookingSummaryAppliedCouponComponent } from './menu-flow/booking-summary-applied-coupon/booking-summary-applied-coupon.component';
import { PaymentGatewayMComponent } from './payment-gateway-m/payment-gateway-m.component';
import { BookingMComponent } from './booking-m/booking-m.component';

import { SearchresultsBikeComponent } from './E-bike-booking-flow/searchresults-bike/searchresults-bike.component';
import { PreviewComponent } from './Regristration_flow/preview/preview.component';
import { OfferCouponComponent } from './offer-coupon/offer-coupon.component';
import { BookingSummaryAfterCoupanComponent } from './booking-summary-after-coupan/booking-summary-after-coupan.component';
import { HublistsComponent } from './E-bike-booking-flow/hublists/hublists.component';
import { VerificationComponent } from './verification/verification.component';


import { SpinnerComponent } from './spinner/spinner.component';
import { HubbikeImagesComponent } from './E-bike-booking-flow/hubdetails/hubbike-images/hubbike-images.component';
import { KycstatusComponent } from './kycstatus/kycstatus.component';
import { SwapstationsComponent } from './swapstations/swapstations.component';
import { CurrentplanComponent } from './currentplan/currentplan.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { AddadressComponent } from './addadress/addadress.component';
import { EnablelocationComponent } from './E-bike-booking-flow/enablelocation/enablelocation.component';
import { AboutapplicationComponent } from './aboutapplication/aboutapplication.component';
import { SecurityComponent } from './security/security.component';
import { UploaddocComponent } from './uploaddoc/uploaddoc.component';
import { TrustedcontactComponent } from './trustedcontact/trustedcontact.component';
import { TrustedcontactListComponent } from './trustedcontact-list/trustedcontact-list.component';
import { NobookingComponent } from './nobooking/nobooking.component';
import { ViewsummaryComponent } from './viewsummary/viewsummary.component';
import { ViewAllImagesComponent } from './view-all-images/view-all-images.component';





const routes: Routes = [
//Registration-flow 
{path:'splash', component:SplashComponent},
{path:'allow-permissions',component:AllowPermissionsComponent},
{path:'get',component:GetComponent},

{path:'register',component:RegisterComponent},
{path:'login',component:LogComponent},
{path:'communication-allow-permission',component:CommunicationAllowPermissionComponent},
{path:'nav',component:NavComponent},
{path:'',component:SplashComponent,pathMatch:'full'},
{path:'verification',component:VerificationComponent},
{path:'adhar',component:AadharComponent},
{path:'selfie',component:SelfieComponent},
{path:'preview',component:PreviewComponent},
{path:'crop',component:CropComponent},
//E-Booking-flow Routes
{path:'slotbooking',component: DurationComponent},
{path:'enableloaction',component:EnablelocationComponent},
{path:'hub-details',component:HubdetailsComponent},
{path:'homepage',component:HomepageComponent},

{path:'bikelist/:ID',component:BikelistComponent},
{path:'bikedetails/:ID',component:BikedetailsComponent},
{path:'customselection',component:DatetimeComponent},
{path:'duration-later',component:DurationLaterComponent},
{path:'booking_summary/:ID',component:BookingsummaryComponent},
{path:'offer-coupan',component:OfferCouponComponent},
{path:'booking-summary-after-coupan',component:BookingSummaryAfterCoupanComponent},
{path:'payment-gateway',component:PaymentgatewaysComponent},
{path:'coupan-applied-e',component:CouponappliedComponent},
{path:'addupiid',component:AddUPIIDComponent},
{path:'addcard-e',component:AddcardComponent},
{path:'e-wallet-e',component:EWalletComponent},
{path:'payment-success',component:PaymentComponent},
{path:'booking-success-e',component:BookingsuccessComponent},
{path:'booking-details',component:BookingdetailsComponent},
{path:'homepage-after-booking',component:HomepageAfterbookingComponent},
{path:'timedetails',component:TimedetailsComponent},
{path:'search-result-bike',component:SearchresultsBikeComponent},
{path:'hublist',component:HublistsComponent},

//Battery-Reservation-flow
{path:'battery-staion-list',component:BatteryStationListComponent},
{path:'battery-station',component:BatteryStationComponent},
{path:'battery-list',component:BatteryListComponent},
{path:'battery-details-available/:id',component:BatteryDetailsAvailableComponent},
{path:'battery-details-unavailable',component:BatteryDetailsUnavailableComponent},
{path:'booking-details-b',component:BookingDetailsComponent},
{path:'offer-b',component:OffersComponent},
{path:'coupon-applied-b',component:CouponAppliedComponent},
{path:'coupon-applied-dashboard',component:CouponAppliedDashboardComponent},
{path:'payment-gateways-b',component:PaymentGatewaysComponent},
{path:'addupiid-b',component:AddUpiIdComponent},
{path:'add-card-b',component:AddCardComponent},
{path:'e-wallet-b',component:AddEWalletComponent},
{path:'payment-ongoing-b',component:PaymentOngoingComponent},
{path:'booking-success',component:BookingSuccessComponent},
{path:'booking-details-a',component:BookingDetailsAfterComponent},
//menu-flow
{path:'menu',component:MenuComponent},
{path:'profile',component:ProfileComponent},
{path:'my-booking',component:MyBookingsComponent},
{path:'time-details-m/:ID',component:TimeDetailsComponent},
{path:'time-details-vehicle-m',component:TimeDetailsVehicleComponent},
{path:'time-details-vehicle-from-m',component:TimeDetailsVehicleFromComponent},
{path:'notification',component:NotificationsComponent},
{path:'services',component:ServicesComponent},
{path:'invite-friends',component:InviteFriendsComponent},
{path:'support',component:SupportComponent},
{path:'tc',component:TermsConditionsComponent},
{path:'claims',component:ClaimsComponent},
{path:'setting',component:SettingsComponent},
{path:'battery-swapping',component: BatterySwappingComponent},
{path:'wash-station-list',component:WashStationListComponent},
{path:'wash-station-details',component:WashStationDetailsComponent},
{path:'wash-slot-book',component:DateTimeComponent},
{path:'offer-coupan-m',component:OfferCouponComponent},
{path:'booking-summary-m/:ID',component:BookingSummaryComponent},
{path:'offers-m',component:OffersMComponent},
{path:'coupan-applied-m',component:CouponappliedComponent},
{path:'booking-summary-applied-m',component:BookingSummaryAppliedCouponComponent},
{path:'payment-gateways-m',component:PaymentGatewayMComponent},
{path:'booking-details-m',component:BookingMComponent},
// {path:'currentplan',component:CurrentplanComponent},
{path:'bimages',component:HubbikeImagesComponent},
  {
    path: 'popup',
    loadChildren: () => import('./E-bike-booking-flow/duration/popup/popup.module').then( m => m.PopupPageModule)

  },
  {
    path: 'currentplan',
    loadChildren: () => import('./currentplan/currentplan.module').then( m => m.CurrentplanPageModule)

  },
  {path:'kyc',component:KycstatusComponent},
  {path:'swapstation',component:SwapstationsComponent},
 
  {path:'emergency',component:EmergencyComponent},
  {path:'myaddress',component:MyaddressComponent},
  {path:'add-address/:id',component:AddadressComponent},
  {path:'aboutapplication',component:AboutapplicationComponent},
  {path:'security',component:SecurityComponent},
  {path:'uploaddoc',component:UploaddocComponent},
  {
    path: 'search',
    loadChildren: () => import('./swapstations/search/search.module').then( m => m.SearchPageModule)
  },
  {path:'trustedcontacts/:id',component:TrustedcontactComponent},
  {path:'trustedcontacts_list',component:TrustedcontactListComponent},
  {path:'nobookings',component:NobookingComponent},
  {path:'invoice',component:ViewsummaryComponent},
  {path:'view-all-images',component:ViewAllImagesComponent}





]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
