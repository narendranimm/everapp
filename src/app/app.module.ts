import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonAccordion, IonAccordionGroup, IonIcon, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './Regristration_flow/splash/splash.component';
import { GetComponent } from './Regristration_flow/get/get.component';
import { RegisterComponent } from './Regristration_flow/register/register.component';
import { LogComponent } from './Regristration_flow/log/log.component';
import { AadharComponent } from './Regristration_flow/aadhar/aadhar.component';
import { SelfieComponent } from './Regristration_flow/selfie/selfie.component';

import { CropComponent } from './Regristration_flow/crop/crop.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AllowPermissionsComponent } from './Regristration_flow/allow-permissions/allow-permissions.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnablelocationComponent } from './E-bike-booking-flow/enablelocation/enablelocation.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { EBikeBookingModule } from './E-bike-booking-flow/e-bike-booking/e-bike-booking.module';
import { HomepageComponent } from './E-bike-booking-flow/homepage/homepage.component';
import { HubdetailsComponent } from './E-bike-booking-flow/hubdetails/hubdetails.component';
import { HublistsComponent } from './E-bike-booking-flow/hublists/hublists.component';
import { BookingdetailsComponent } from './E-bike-booking-flow/bookingdetails/bookingdetails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommunicationAllowPermissionComponent } from './communication-allow-permission/communication-allow-permission.component';
import { NavComponent } from './nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BikedetailsComponent } from './E-bike-booking-flow/bikedetails/bikedetails.component';
import { DurationComponent } from './E-bike-booking-flow/duration/duration.component';
import { DatetimeComponent } from './E-bike-booking-flow/datetime/datetime.component';
import { BatteryStationListComponent } from './batter-reservation-flow/battery-station-list/battery-station-list.component';
import { BatteryStationComponent } from './batter-reservation-flow/battery-station/battery-station.component';
import { BatteryListComponent } from './batter-reservation-flow/battery-list/battery-list.component';
import { BatteryDetailsAvailableComponent } from './batter-reservation-flow/battery-details-available/battery-details-available.component';
import { BatteryDetailsUnavailableComponent } from './batter-reservation-flow/battery-details-unavailable/battery-details-unavailable.component';
import { BookingDetailsComponent } from './batter-reservation-flow/booking-details/booking-details.component';
import { OffersComponent } from './batter-reservation-flow/offers/offers.component';
import { CouponAppliedComponent } from './batter-reservation-flow/coupon-applied/coupon-applied.component';
import { CouponAppliedDashboardComponent } from './batter-reservation-flow/coupon-applied-dashboard/coupon-applied-dashboard.component';
import { PaymentGatewaysComponent } from './batter-reservation-flow/payment-gateways/payment-gateways.component';
import { AddUpiIdComponent } from './batter-reservation-flow/add-upi-id/add-upi-id.component';
import { AddCardComponent } from './batter-reservation-flow/add-card/add-card.component';
import { AddEWalletComponent } from './batter-reservation-flow/add-e-wallet/add-e-wallet.component';
import { PaymentOngoingComponent } from './batter-reservation-flow/payment-ongoing/payment-ongoing.component';
import { AddPaymentOngoingComponent } from './batter-reservation-flow/add-payment-ongoing/add-payment-ongoing.component';
import { BookingSuccessComponent } from './batter-reservation-flow/booking-success/booking-success.component';
import { BookingDetailsAfterComponent } from './batter-reservation-flow/booking-details-after/booking-details-after.component';
import { BikelistComponent } from './E-bike-booking-flow/bikelist/bikelist.component';
import { DurationLaterComponent } from './E-bike-booking-flow/duration-later/duration-later.component';
import { BookingsummaryComponent } from './E-bike-booking-flow/bookingsummary/bookingsummary.component';
import { CouponappliedComponent } from './E-bike-booking-flow/couponapplied/couponapplied.component';
import { PaymentComponent } from './E-bike-booking-flow/payment/payment.component';
import { PaymentgatewaysComponent } from './E-bike-booking-flow/paymentgateways/paymentgateways.component';
import { AddUPIIDComponent } from './E-bike-booking-flow/add-upiid/add-upiid.component';
import { AddcardComponent } from './E-bike-booking-flow/addcard/addcard.component';
import { EWalletComponent } from './E-bike-booking-flow/e-wallet/e-wallet.component';
import { HomepageAfterbookingComponent } from './E-bike-booking-flow/homepage-afterbooking/homepage-afterbooking.component';
import { TimedetailsComponent } from './E-bike-booking-flow/timedetails/timedetails.component';
import { BookingsuccessComponent } from './E-bike-booking-flow/bookingsuccess/bookingsuccess.component';
import { ProfileComponent } from './menu-flow/profile/profile.component';
import { MyBookingsComponent } from './menu-flow/my-bookings/my-bookings.component';
import { BatterySwappingComponent } from './menu-flow/battery-swapping/battery-swapping.component';
import { WashStationListComponent } from './menu-flow/wash-station-list/wash-station-list.component';
import { WashStationDetailsComponent } from './menu-flow/wash-station-details/wash-station-details.component';
import { DateTimeComponent } from './menu-flow/date-time/date-time.component';
import { BookingSummaryComponent } from './menu-flow/booking-summary/booking-summary.component';
import { OffersMComponent } from './offers-m/offers-m.component';
import { BookingSummaryAppliedCouponComponent } from './menu-flow/booking-summary-applied-coupon/booking-summary-applied-coupon.component';
import { BookingMComponent } from './booking-m/booking-m.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashServiceService } from './splash-service.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { BookingSummaryAfterCoupanComponent } from './booking-summary-after-coupan/booking-summary-after-coupan.component';
import { Http } from '@capacitor-community/http';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { SwapBatteryScrollComponent } from './E-bike-booking-flow/enablelocation/swap-battery-scroll/swap-battery-scroll.component';
import { NearhubComponent } from './E-bike-booking-flow/homepage/nearhub/nearhub.component';
import { SearchresultsBikeComponent } from './E-bike-booking-flow/searchresults-bike/searchresults-bike.component';
import { PreviewComponent } from './Regristration_flow/preview/preview.component';
import { OfferCouponComponent } from './offer-coupon/offer-coupon.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TimeDetailsComponent } from './menu-flow/time-details/time-details.component';
import { TimeDetailsVehicleComponent } from './menu-flow/time-details-vehicle/time-details-vehicle.component';
import { TimeDetailsVehicleFromComponent } from './menu-flow/time-details-vehicle-from/time-details-vehicle-from.component';
import { VerificationComponent } from './verification/verification.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { LoaderComponent } from './global_components/loader/loader.component';
import { LoadingService } from './services/loading.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SettingsComponent } from './menu-flow/settings/settings.component';
import { LoadingInterceptor } from './loading.interceptor';
import { NotificationsComponent } from './menu-flow/notifications/notifications.component';
import { HubbikeImagesComponent } from './E-bike-booking-flow/hubdetails/hubbike-images/hubbike-images.component';
import { SupportComponent } from './menu-flow/support/support.component';
import { ServicesComponent } from './menu-flow/services/services.component';
import { ViewsummaryComponent } from './viewsummary/viewsummary.component';

import { KycstatusComponent } from './kycstatus/kycstatus.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SwapstationsComponent } from './swapstations/swapstations.component';
import { ViewAllImagesComponent } from './view-all-images/view-all-images.component';
import { CompletekycComponent } from './completekyc/completekyc.component';
import { SharedModule } from './shared.module';
import { EmergencyComponent } from './emergency/emergency.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { AboutapplicationComponent } from './aboutapplication/aboutapplication.component';
import { SecurityComponent } from './security/security.component';
import { UploaddocComponent } from './uploaddoc/uploaddoc.component';
import { TrustedcontactComponent } from './trustedcontact/trustedcontact.component';
import { TrustedcontactListComponent } from './trustedcontact-list/trustedcontact-list.component';
import {MatMenuModule} from '@angular/material/menu';
import { TermsConditionsComponent } from './menu-flow/terms-conditions/terms-conditions.component';
import { InviteFriendsComponent } from './menu-flow/invite-friends/invite-friends.component';
import { ClaimsComponent } from './menu-flow/claims/claims.component';
import { NobookingComponent } from './nobooking/nobooking.component';
import { AddadressComponent } from './addadress/addadress.component';
import { FacerecognizationComponent } from './facerecognization/facerecognization.component';
providers: [Storage]
@NgModule({
  declarations: [AppComponent, SplashComponent, GetComponent, RegisterComponent, LogComponent, AadharComponent, SelfieComponent, NavComponent, PreviewComponent, CropComponent, AllowPermissionsComponent, CongratulationsComponent, EnablelocationComponent, HomepageComponent, HubdetailsComponent, HublistsComponent, BookingdetailsComponent, CommunicationAllowPermissionComponent, HublistsComponent, BikedetailsComponent, DurationComponent, DatetimeComponent, BatteryStationListComponent, BatteryStationComponent, BatteryListComponent, BatteryDetailsAvailableComponent, BatteryDetailsUnavailableComponent, BookingDetailsComponent, OffersComponent, CouponAppliedComponent, CouponAppliedDashboardComponent, PaymentGatewaysComponent, AddUpiIdComponent, AddCardComponent, AddEWalletComponent, PaymentOngoingComponent, AddPaymentOngoingComponent, BookingSuccessComponent, BookingDetailsAfterComponent, BikelistComponent, DurationComponent, DurationLaterComponent, BookingsummaryComponent, OffersComponent, CouponappliedComponent, PaymentComponent, PaymentgatewaysComponent, AddUPIIDComponent, AddcardComponent, EWalletComponent, BookingDetailsComponent, HomepageAfterbookingComponent, TimedetailsComponent, BookingsuccessComponent,
    HublistsComponent,
    //battery-reservation-flow
    BatteryStationListComponent,
    BatteryStationComponent,
    BatteryListComponent,
    BatteryDetailsAvailableComponent,
    BatteryDetailsUnavailableComponent,
    BookingDetailsComponent,
    OffersComponent,
    CouponAppliedComponent,
    PaymentGatewaysComponent,
    AddUPIIDComponent,
    AddCardComponent,
    //menu-flow
    ProfileComponent,
    MyBookingsComponent,
    BatterySwappingComponent,
    WashStationListComponent,
    WashStationDetailsComponent,
    DateTimeComponent,
    BookingSummaryComponent, CouponappliedComponent,
    OffersMComponent,
    BookingSummaryAppliedCouponComponent,
    BookingMComponent,
     NotificationsComponent,
    SwapBatteryScrollComponent,
    NearhubComponent,
    SearchresultsBikeComponent,
    BookingSummaryAfterCoupanComponent,
    CouponAppliedComponent,
    BookingSummaryAppliedCouponComponent,
    OfferCouponComponent,
    TimeDetailsComponent,
    TimeDetailsVehicleComponent,
    TimeDetailsVehicleFromComponent,
    VerificationComponent,
    LoaderComponent,
    SettingsComponent,
    HubbikeImagesComponent,
    SupportComponent,
    ServicesComponent,
    ViewsummaryComponent,
    KycstatusComponent,
    SettingsComponent,
    SwapstationsComponent,
    ViewAllImagesComponent,
    CompletekycComponent,
    EmergencyComponent,
    MyaddressComponent,
    AboutapplicationComponent,
    SecurityComponent,
    UploaddocComponent,
    TrustedcontactComponent,
    TrustedcontactListComponent,
    TermsConditionsComponent,
    InviteFriendsComponent,
    ClaimsComponent,
    NobookingComponent,
    AddadressComponent,
    MyaddressComponent,
    FacerecognizationComponent

  ],

  imports: [BrowserModule, MatExpansionModule,MatSlideToggleModule,MatDatepickerModule,MatProgressSpinnerModule,MatMenuModule,
    // SocialLoginModule,
    IonicStorageModule.forRoot({ name: "mylocaldb" }), MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule, MatBottomSheetModule, HttpClientModule, CommonModule,
    IonicModule.forRoot({ mode: 'md' }), AppRoutingModule, 
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatButtonModule, MatCardModule,
    RouterModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule, MatIconModule,
    FormsModule, ReactiveFormsModule,SharedModule ,
    provideFirebaseApp(() => initializeApp({ "projectId": "otp-project-eb64c", "appId": "1:459119525785:web:b8c64ab6b6daaf7e941d08", "databaseURL": "https://otp-project-eb64c-default-rtdb.firebaseio.com", "storageBucket": "otp-project-eb64c.appspot.com", "apiKey": "AIzaSyA_lRy00xcn2oOICSOMEakyVpgNSoFopUk", "authDomain": "otp-project-eb64c.firebaseapp.com", "messagingSenderId": "459119525785", "measurementId": "G-4BRTCEDX5J" })),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  
  providers: [
    AndroidPermissions,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    // google api
    
    //   {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [

    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '969954827338-4il00hojt2kgndkbbnl7441l51m72gkv.apps.googleusercontent.com'
    //         )
    //       },

    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
    provideHttpClient(withJsonpSupport()),


  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
