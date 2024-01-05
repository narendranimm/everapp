
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





const routes: Routes = [
 {
  path: 'tabs',
  loadChildren: () => import('./Tabs/tabs/tabs.module').then( m => m.TabsPageModule)
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingTabsModule {}

