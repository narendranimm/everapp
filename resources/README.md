These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
-- private loadingservice: LoadingService,
--set data
this.userdata.setNew("loginuser",data)
--get data
   this.user.getuser().then(res => {
      console.log(res)
      if (res !== null) {
        this.logindata = res;
        this.ordersaveData.MemberID = this.logindata.UserID;
      } else {
        // Handle the case when data is null
        console.log('Data is null. Handle accordingly.');
        // You might want to set a default value or perform some other action
      }
    })

  --- azure image Url----
   azimageUrl:any=environment.azimageUrl_hub;

  --time differenece
    {{ ProductDetails?.BookingStartDate | timeDifference:ProductDetails?.BookingEndDate }} 

------ diable button
 [ngClass]="{'disableslotbtn': startDate === null && endDate === null}"