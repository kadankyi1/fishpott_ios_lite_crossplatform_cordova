/*
// Dom7
var $ = Dom7;

var isCordova = !!window.cordova;

// Setting Theme
var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Initialising App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  input:{
    scrollIntoViewOnFocus : true,
    scrollIntoViewCentered: true
  },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
 view: {
    pushState: true,
  }
});


  //app.dialog.preloader('Poaching...');

$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});

*/

// Dom7
var $ = Dom7;

var isCordova = !!window.cordova;

// Theme
var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  input:{
    scrollIntoViewOnFocus : true,
    scrollIntoViewCentered: true,
  },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
 view: {
    pushState: true,
  }
});

var searchbar = app.searchbar.create({ /* parameters */ });

$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});


// Init Framework7 App
if (isCordova) {

    $(document).on('deviceready', app.init);
    console.log("cordova READY");

} else {
    console.log("cordova FAILED");
    app.init();
}



/****************************************************************************************************
                            
                            ------- GLOBAL VARIABLES -----------
                            SETTING UP VARIABLES NEEDED VARIABLES

****************************************************************************************************/
var CONFIG = "https://fishpott.com/";
////////// CROPS //////////////
var currentCroppedImage;
////////// END //////////////
var my_investor_level =localStorage.getItem("investor_level");
var my_user_type =localStorage.getItem("user_type");
var my_user_sys_id =localStorage.getItem("user_sys_id");
var my_full_name =localStorage.getItem("i_full_name");
var my_country = localStorage.getItem("i_country");
var my_phone =localStorage.getItem("i_phone");
var my_e_password =localStorage.getItem("key");
var my_net_worth =localStorage.getItem("i_net_worth");
var my_profile_picture =localStorage.getItem("i_profile_picture");
var my_pot_name =localStorage.getItem("i_pot_name");
var my_verified_tag =localStorage.getItem("i_verified_tag");
var my_e_user_type =localStorage.getItem("e_user_type");
var last_news_sku = 0;
var last_notification_sku = 0;
var real_phone = "";
var googlesigninphone = localStorage.getItem("googlesigninphone");
var fetching_news_toggle = 0;
var current_page = "splash";
var my_app_version = "1.3";
var my_currency = "";
var globalNewsId = "";
var myshares = [];
var current_order_index = 0;
var old_video_playing_id = "";
var new_video_playing_id = "";
var sharesNumGlobal = "";
var sharesidGlobal = "";
var rawpassGlobal = "";
var receiverPottnameGlobal = "";
var oldChatTableNameGlobal = "";
var show_chats_loading = 1;
var timer = null;
var search_or_pottdata_last_sku = 0;
var last_sku_linkups = 0;
var linkupTypeGlobal = "";
var old_search_or_pottdata_keyword = "";
var pottNameGlobal = "";
var optionGlobal = "";
var acc_countryGlobal = "";
var acc_typeGlobal = "";
var bank_network_nameGlobal = "";
var acc_numberGlobal = "";
var routing_numberGlobal = "";
var curr_pott_sys_id = "";
var newsIdForCartGlobal = "";
var firstLoadPurchasesFetch = 0;
 // vars
 var result;
cropper = '';




if(my_country == "United Kingdom"){

  my_currency = "GBP";

} else if(my_country == "Ghana"){

  my_currency = "GHS";

} else {

  my_currency = "USD";

}
//////////////////////////////////////////////////////////////////
var this_acc_type = "PA";

function addPurchaseInfo(this_purchase_info){

    var myPurchases = localStorage.getItem("myPurchases");

    if(myPurchases == null || myPurchases.trim() == ""){

        var myPurchases = [];
        myPurchases[0] = this_purchase_info;
        localStorage.setItem("myPurchases", JSON.stringify(myPurchases));
        return 0;
    } else {

      myPurchases = JSON.parse(myPurchases);
      var number_of_orders = myPurchases.length;
      myPurchases[number_of_orders] = this_purchase_info;
      console.log(myPurchases);
      localStorage.setItem("myPurchases", JSON.stringify(myPurchases));
      return number_of_orders;
    }

}

function replacePurchaseInfo(new_purchase_info, purchase_info_index){

    var myPurchases = localStorage.getItem("myPurchases");

    if(myPurchases == null || myPurchases.trim() == ""){
        return 0;
    } else if(purchase_info_index == "last") {

      myPurchases = JSON.parse(myPurchases);
      var lastIndex = myPurchases.length - 1;
      myPurchases[lastIndex] = new_purchase_info;
      console.log(myPurchases);
      localStorage.setItem("myPurchases", JSON.stringify(myPurchases));
      return 1;

    } else if(purchase_info_index != ""){

      myPurchases = JSON.parse(myPurchases);
      myPurchases[purchase_info_index] = new_purchase_info;
      console.log(myPurchases);
      localStorage.setItem("myPurchases", JSON.stringify(myPurchases));
      return 1;

    }  else {

      return 0;

    }

}


function getMyPurchases(index_needed){

  var myPurchases = localStorage.getItem("myPurchases");

  if(myPurchases == null || myPurchases.trim() == ""){
    if(firstLoadPurchasesFetch == 1){
      showToast("Something went awry. Please restart process");
    }
    return 0;

  } else {

    myPurchases = JSON.parse(myPurchases);
    console.log(myPurchases);

    if(index_needed == "all"){

      return myPurchases;
      
    } else if(index_needed == "last"){

      var lastIndex = myPurchases.length - 1;
      console.log(myPurchases[lastIndex]);
      return myPurchases[lastIndex];

    } else {

      console.log(myPurchases[index_needed]);
      return myPurchases[index_needed];

    }

  }


}


function showToast(info){

  var toastError = app.toast.create({
    text: info,
    closeTimeout: 2000,
  });
  toastError.open();

}


function checkIfSignedIn(){

    var my_investor_level =localStorage.getItem("investor_level");
    var my_user_type =localStorage.getItem("user_type");
    var my_user_sys_id =localStorage.getItem("user_sys_id");
    var my_full_name =localStorage.getItem("i_full_name");
    var my_country = localStorage.getItem("i_country");
    var my_phone =localStorage.getItem("i_phone");
    var my_e_password =localStorage.getItem("key");
    var my_net_worth =localStorage.getItem("i_net_worth");
    var my_profile_picture =localStorage.getItem("i_profile_picture");
    var my_pot_name =localStorage.getItem("i_pot_name");
    var my_verified_tag =localStorage.getItem("i_verified_tag");
    var my_e_user_type =localStorage.getItem("e_user_type");
    var last_news_sku = 0;
    var real_phone = "";
    var googlesigninphone = localStorage.getItem("googlesigninphone");
    var fetching_news_toggle = 0;
    var current_option_toggle = "news_option";

    if(my_country == "United Kingdom"){

      my_currency = "GBP";

    } else if(my_country == "Ghana"){

      my_currency = "GHS";

    } else {

      my_currency = "USD";

    }
        console.log("my_investor_level : " + my_investor_level);
        console.log("my_user_type : " + my_user_type);
        console.log("my_user_sys_id : " + my_user_sys_id);
        console.log("my_full_name : " + my_full_name);
        console.log("my_country : " + my_country);
        console.log("my_currency : " + my_currency);
        console.log("my_phone : " + my_phone);
        console.log("my_e_password : " + my_e_password);
        console.log("my_net_worth : " + my_net_worth);
        console.log("my_profile_picture : " + my_profile_picture);
        console.log("my_pot_name : " + my_pot_name);
        console.log("my_verified_tag : " + my_verified_tag);
        console.log("my_e_user_type : " + my_e_user_type);

    if(my_user_type != null && my_user_sys_id != null  && my_full_name != null  && my_country !=  null  
        && my_phone !=  null  && my_net_worth != null  && my_pot_name !=  null   && my_e_user_type !=  null 
        && my_verified_tag != null && my_e_password !=  null ){

            if(my_user_type != "" && my_user_sys_id != ""  && my_full_name != ""  && my_country !=  ""  
                && my_phone !=  ""  && my_net_worth != ""  && my_pot_name !=  ""   && my_e_user_type !=  "" 
                && my_verified_tag != "" && my_e_password !=  "" ){


              $('#bodymain').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
              current_page = "newsfeed";
              $('#success_signup').click();
              fetchNews(last_news_sku, "news_holder");


            } else {

              signMeOut();

            }

    } else {

      signMeOut();

    }

}

function signMeOut(){

    my_investor_level = "";
    my_user_type = "";
    my_user_sys_id = "";
    my_full_name = "";
    my_country = "";
    my_phone = "";
    my_e_password = "";
    my_net_worth = "";
    my_profile_picture = "";
    my_pot_name = "";
    my_verified_tag = "";
    my_e_user_type = "";

    localStorage.removeItem('googlesigninphone');
    localStorage.removeItem('e_user_type');
    localStorage.removeItem('i_verified_tag');
    localStorage.removeItem('i_pot_name');
    localStorage.removeItem('i_profile_picture');
    localStorage.removeItem('i_net_worth');
    localStorage.removeItem("key");
    localStorage.removeItem("i_phone");
    localStorage.removeItem("i_country");
    localStorage.removeItem("i_full_name");
    localStorage.removeItem("user_sys_id");
    localStorage.removeItem("user_type");
    localStorage.removeItem("investor_level");
    localStorage.removeItem("myPurchases");
    localStorage.removeItem("all_slydepay_tokens");
    localStorage.removeItem("myCartItems");

    $('#bodymain').append('<a id="success_logout" style="display : none;" href="/index/">success</a>');
    current_page = "splash";
    $('#success_logout').click();

}

function sendMessageToFishPot(){

    var disMessageText = document.getElementById("contact_input_main").value;

    if(disMessageText.trim() != ""){

      disMessageText = "NEWS REPORT -  NEWS ID : " + globalNewsId + "  --  " + disMessageText;

      var url_real = CONFIG + "inc/android_contact_fishpott.php";

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'info' : disMessageText
      };     
        
      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
                document.getElementById("contact_input_main").value = "";
                showToast("Sent");
                app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                showToast("Poor network connection. Try again later");
                app.preloader.hide();
          }
        });
    } else {
      showToast("Your message can't be empty");
    }

}


function sendPasswordReset(){

    var disMessageText = document.getElementById("reset_password_number").value;

    var countryCode = document.getElementById("my_country_reset_password").value;

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(disMessageText.trim() == ""){

        showToast("You have to enter your phone number");

    } else if(countryCode.trim() == ""){

        showToast("Complete all fields");

    }  else if(!disMessageText.match(phoneno)){

        showToast("Enter your phone number without your country code");

    } else {

        if(disMessageText.charAt(0) == "0"){

            phone_length = disMessageText.length;
            disMessageText = "+" + countryCode + disMessageText.slice(1, phone_length);

        } else {

            disMessageText = phone_value;

        }
       var url_real = CONFIG + "inc/android_reset_password_request.php";
         var loginData = {
            "info" : disMessageText,
            "my_app_version" : my_app_version
        };  



    }

}

function setSignUpType(type){

  if(type == "business"){
    document.getElementById('personal_signup_section').style.display = "none";
    document.getElementById('business_signup_section').style.display = "";
    $("#personal_btn").removeClass("button-active");
    $("#business_btn").addClass("button-active");
    this_acc_type = "BA";
  } else {
    document.getElementById('business_signup_section').style.display = "none";
    document.getElementById('personal_signup_section').style.display = "";
    $("#business_btn").removeClass("button-active");
    $("#personal_btn").addClass("button-active");
    this_acc_type = "PA";
  }

}

function checkSignupPersonalForm(){

    var this_full_name = document.getElementById('fullname_pa_signin').value;
    var this_last_name = "";
    var this_pot_name = document.getElementById('potttname_pa_signin').value;
    var this_country = document.getElementById('country_pa_signin').value;
    var this_dob = document.getElementById('dob_pa_signin').value;
    var this_phone = document.getElementById('phone_pa_signin').value;
    var this_password = document.getElementById('password_pa_signin').value;
    var this_repeat_password = document.getElementById('repeatpassword_pa_signin').value;
    var this_gender = document.getElementById('gender_pa_siginin').value;

    if(this_country.trim() == "" || this_full_name.trim() == "" || this_pot_name.trim() == ""  || 
        this_password.trim() == "" || this_dob.trim() == "" || this_dob.trim() == "" || 
        this_gender.trim() == "" || this_repeat_password.trim() == "") {

        showToast("Complete All Fields");

    } else if(this_phone.length < 11 || this_phone.length > 15 || this_phone.charAt(0) != "+") {

        showToast("Phone Number is INCORRECT. Please type phone number without your country code and it must begin with '+' ");
    
    }   else if(this_repeat_password.trim() != this_password.trim()) {

        showToast("Password Do Not Match");

    }  else if(this_country.trim() != "" && this_full_name.trim() != "" && 
        this_pot_name.trim() != ""  && this_password.trim() != "" && this_gender.trim() != ""
         && this_phone.trim() != "" && this_dob.trim() != "" && this_gender.trim() != "") {

        console.log("this_acc_type : " + this_acc_type);
        console.log("this_full_name : " + this_full_name);
        console.log("this_dob : " + this_dob);
        console.log("this_pot_name : " + this_pot_name);
        console.log("this_country : " + this_country);
        console.log("this_gender : " + this_gender);
        console.log("this_phone : " + this_phone);
        console.log("this_password : " + this_password);

      chkPotName(this_acc_type, this_full_name, this_pot_name, this_dob, this_country, this_gender, this_phone, this_password);

    } else {

        showToast("Something went awry");

    }


}


function checkSignupBusinessForm(){

    var this_full_name = document.getElementById('name_ba_signin').value;
    var this_last_name = "";
    var this_pot_name = document.getElementById('pottname_ba_signin').value;
    var this_country = document.getElementById('country_ba_signin').value;
    var this_dob = document.getElementById('startdate_ba_signin').value;
    var this_phone = document.getElementById('phone_ba_signin').value;
    var this_password = document.getElementById('password_ba_signin').value;
    var this_repeat_password = document.getElementById('repeatpassword_ba_signin').value;
    var this_gender = "business";

    if(this_country.trim() == "" || this_full_name.trim() == "" || this_pot_name.trim() == ""  || 
        this_password.trim() == "" || this_dob.trim() == "" || this_dob.trim() == "" || 
        this_gender.trim() == "" || this_repeat_password.trim() == "") {

        showToast("Complete All Fields");

    } else if(this_phone.length < 11 || this_phone.length > 15 || this_phone.charAt(0) != "+") {

        showToast("Phone Number is INCORRECT. Please type phone number without your country code and it must begin with '+' ");
    
    }   else if(this_repeat_password.trim() != this_password.trim()) {

        showToast("Password Do Not Match");

    }  else if(this_country.trim() != "" && this_full_name.trim() != "" && 
        this_pot_name.trim() != ""  && this_password.trim() != "" && this_gender.trim() != ""
         && this_phone.trim() != "" && this_dob.trim() != "" && this_gender.trim() != "") {


        console.log("this_acc_type : " + this_acc_type);
        console.log("this_full_name : " + this_full_name);
        console.log("this_dob : " + this_dob);
        console.log("this_pot_name : " + this_pot_name);
        console.log("this_country : " + this_country);
        console.log("this_gender : " + this_gender);
        console.log("this_phone : " + this_phone);
        console.log("this_password : " + this_password);

      chkPotName(this_acc_type, this_full_name, this_pot_name, this_dob, this_country, this_gender, this_phone, this_password);

    } else {

        showToast("Something went awry");

    }


}

function chkPotName(this_acc_type, this_full_name, this_pot_name, this_dob, this_country, this_gender, this_phone, this_password) {
        showToast("Checking pottname");
        curr_pott_name = this_pot_name;
        curr_pott_name = curr_pott_name.toLowerCase();
        curr_pott_name = curr_pott_name.trim();
        go = curr_pott_name.includes("/");
        go = curr_pott_name.includes(",");
        go = curr_pott_name.includes(".");
        go = curr_pott_name.includes("@");
        go = curr_pott_name.includes("#");
        go = curr_pott_name.includes("-");
        var patt1 = /\s/g;
        var result = curr_pott_name.match(patt1);
        var curr_pott_name_length = curr_pott_name.length;

        if (curr_pott_name != "" && result === null && go == false && 
            curr_pott_name_length > 4 && curr_pott_name != "mylinkups" &&
            curr_pott_name.includes("0") ==  false && curr_pott_name.includes("1") ==  false &&
            curr_pott_name.includes("2") ==  false && curr_pott_name.includes("3") ==  false &&
            curr_pott_name.includes("4") ==  false && curr_pott_name.includes("5") ==  false &&
            curr_pott_name.includes("6") ==  false && curr_pott_name.includes("7") ==  false &&
            curr_pott_name.includes("8") ==  false && curr_pott_name.includes("9") ==  false) {

            app.preloader.show();

            table_name = "investor";
            item_1 = "sku";
            item_2 = "net_worth";
            column1_name = "pot_name";
            column1_value = curr_pott_name;
            pam1 = "s";
            var url_real = CONFIG +  "inc/select2_where1_prepared_statement.php?table_name=" + table_name + "&item_1=" + item_1 + "&item_2=" + item_2 + "&column1_name=" + column1_name + "&column1_value=" + column1_value + "&pam1=" + pam1 + "&ajax=1";
              app.request({
                url: url_real,
                type: "GET",
                success: function(response){

                  var chkReturn = JSON.parse(response);
                  if(chkReturn.set == 0){
                      showToast("Creating Pott");
                      signMeUp(this_acc_type, this_full_name, curr_pott_name, this_dob, this_country, this_gender, this_phone, this_password);

                  } else {

                      showToast("Pottname has been taken. try another one.");
                      app.preloader.hide();
                  }
                },

                error: function(XMLHttpRequest, textStatus, errorThrown) {

                    showToast("Poor network connection");
                    app.preloader.hide();
                }

              });

        } else if(go == true) {
          
            showToast("Pottname Must have ONLY LETTERS A-Z...");

        }   else if(curr_pott_name == "mylinkups") {
          
            showToast("'mylinkups' CANNOT BE USED...");
            
        } else {

          
            showToast("Pottname is incorrect. Make sure it is at least 5 letters and contains only alphabets");
            
        }
}

function signMeUp(this_acc_type, this_full_name, this_pot_name, this_dob, this_country, this_gender, real_phone, this_password){

        app.preloader.show();
        var url_real = CONFIG + 'inc/android_signup.php';


        var loginData = {
            "my_app_version" : my_app_version,
            acc_type : this_acc_type,
            firstname : this_full_name,
            lastname : "???",
            pottname : this_pot_name,
            dob : this_dob,
            country : this_country,
            sex : this_gender,
            emailorphone : real_phone,
            password : this_password
        };     

        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            app.preloader.hide();
            var loginResponse = JSON.parse(response);
            console.log(loginResponse);
            if(loginResponse["datareturned"][0]["status"] == "yes") {

                localStorage.setItem("investor_level", loginResponse["datareturned"][0]["investor_level"]);
                localStorage.setItem("user_type", loginResponse["datareturned"][0]["user_type"]);
                localStorage.setItem("user_sys_id", loginResponse["datareturned"][0]["user_sys_id"]);
                localStorage.setItem("i_full_name", loginResponse["datareturned"][0]["i_full_name"]);
                localStorage.setItem("key", loginResponse["datareturned"][0]["key"]);
                localStorage.setItem("i_country", loginResponse["datareturned"][0]["i_country"]);
                localStorage.setItem("i_phone", loginResponse["datareturned"][0]["i_phone"]);
                localStorage.setItem("i_net_worth", loginResponse["datareturned"][0]["i_net_worth"]);
                localStorage.setItem("i_profile_picture", loginResponse["datareturned"][0]["i_profile_picture"]);
                localStorage.setItem("i_pot_name", loginResponse["datareturned"][0]["i_pot_name"]);
                localStorage.setItem("i_verified_tag", loginResponse["datareturned"][0]["i_verified_tag"]);
                localStorage.setItem("e_user_type", loginResponse["datareturned"][0]["e_user_type"]);

                my_investor_level = localStorage.getItem("investor_level");
                my_user_type =localStorage.getItem("user_type");
                my_user_sys_id =localStorage.getItem("user_sys_id");
                my_full_name =localStorage.getItem("i_full_name");
                my_country = localStorage.getItem("i_country");
                my_phone =localStorage.getItem("i_phone");
                my_e_password =localStorage.getItem("key");
                my_net_worth =localStorage.getItem("i_net_worth");
                my_profile_picture =localStorage.getItem("i_profile_picture");
                my_pot_name =localStorage.getItem("i_pot_name");
                my_verified_tag =localStorage.getItem("i_verified_tag");
                my_e_user_type =localStorage.getItem("e_user_type");
                googlesigninphone = my_phone;
                last_news_sku = 0;
                real_phone = my_phone;

/*
        console.log("my_investor_level : " + my_investor_level);
        console.log("my_user_type : " + my_user_type);
        console.log("my_user_sys_id : " + my_user_sys_id);
        console.log("my_full_name : " + my_full_name);
        console.log("my_country : " + my_country);
        console.log("my_phone : " + my_phone);
        console.log("my_e_password : " + my_e_password);
        console.log("my_net_worth : " + my_net_worth);
        console.log("my_profile_picture : " + my_profile_picture);
        console.log("my_pot_name : " + my_pot_name);
        console.log("my_verified_tag : " + my_verified_tag);
        console.log("my_e_user_type : " + my_e_user_type);
*/

                $('#lgr_signin').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
                current_page = "newsfeed";
                $('#success_signup').click();
                app.dialog.alert("You should visit your profile to set a profile picture. ", "Hello");
                fetchNews(last_news_sku, "news_holder");
/*
                  setTimeout(function () {

                    app.dialog.alert("You should visit your profile to set a profile picture. ", "Hello");

                  }, 2000);
*/
            } else {

              showToast(loginResponse["datareturned"][0]["error"]);

            }
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              showToast("Poor network connection");
              app.preloader.hide();
          }

        });

}


function login(){

    var this_phone = document.getElementById('phone_number_login').value;
    var this_password = document.getElementById('password_login').value;

    if(this_phone.length < 11 || this_phone.length > 15 || this_phone.charAt(0) != "+") {

        showToast("Phone Number is INCORRECT. Please type phone number without your country code and it must begin with '+' ");

    } else if(this_phone.trim() == "" || this_password.trim() == ""){

        showToast("Complete All Fields");

    }  else if(this_phone.trim() != "" && this_password.trim() != ""){

        console.log("this_phone : " + this_phone);
        console.log("this_password : " + this_password);

        app.preloader.show();
        var url_real = CONFIG + 'inc/android_login.php';


        var loginData = {
           "my_app_version" : my_app_version,
            emailorphone : this_phone,
            password : this_password
        };     

        console.log(loginData);

        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            app.preloader.hide();
            var loginResponse = JSON.parse(response);
            console.log(loginResponse);
            if(loginResponse["datareturned"][0]["status"] == "yes") {

                localStorage.setItem("investor_level", loginResponse["datareturned"][0]["investor_level"]);
                localStorage.setItem("user_type", loginResponse["datareturned"][0]["user_type"]);
                localStorage.setItem("user_sys_id", loginResponse["datareturned"][0]["user_sys_id"]);
                localStorage.setItem("i_full_name", loginResponse["datareturned"][0]["i_full_name"]);
                localStorage.setItem("key", loginResponse["datareturned"][0]["key"]);
                localStorage.setItem("i_country", loginResponse["datareturned"][0]["i_country"]);
                localStorage.setItem("i_phone", loginResponse["datareturned"][0]["i_phone"]);
                localStorage.setItem("i_net_worth", loginResponse["datareturned"][0]["i_net_worth"]);
                localStorage.setItem("i_profile_picture", loginResponse["datareturned"][0]["i_profile_picture"]);
                localStorage.setItem("i_pot_name", loginResponse["datareturned"][0]["i_pot_name"]);
                localStorage.setItem("i_verified_tag", loginResponse["datareturned"][0]["i_verified_tag"]);
                localStorage.setItem("e_user_type", loginResponse["datareturned"][0]["e_user_type"]);

                my_investor_level = localStorage.getItem("investor_level");
                my_user_type =localStorage.getItem("user_type");
                my_user_sys_id =localStorage.getItem("user_sys_id");
                my_full_name =localStorage.getItem("i_full_name");
                my_country = localStorage.getItem("i_country");
                my_phone =localStorage.getItem("i_phone");
                my_e_password =localStorage.getItem("key");
                my_net_worth =localStorage.getItem("i_net_worth");
                my_profile_picture =localStorage.getItem("i_profile_picture");
                my_pot_name =localStorage.getItem("i_pot_name");
                my_verified_tag =localStorage.getItem("i_verified_tag");
                my_e_user_type =localStorage.getItem("e_user_type");
                googlesigninphone = my_phone;
                last_news_sku = 0;
                real_phone = my_phone;

/*
        console.log("my_investor_level : " + my_investor_level);
        console.log("my_user_type : " + my_user_type);
        console.log("my_user_sys_id : " + my_user_sys_id);
        console.log("my_full_name : " + my_full_name);
        console.log("my_country : " + my_country);
        console.log("my_phone : " + my_phone);
        console.log("my_e_password : " + my_e_password);
        console.log("my_net_worth : " + my_net_worth);
        console.log("my_profile_picture : " + my_profile_picture);
        console.log("my_pot_name : " + my_pot_name);
        console.log("my_verified_tag : " + my_verified_tag);
        console.log("my_e_user_type : " + my_e_user_type);
*/

                $('#lgr_login').append('<a id="success_login" style="display : none;" href="/main/">success</a>');
                current_page = "newsfeed";
                $('#success_login').click();
                //app.dialog.alert("You should check your notifications. ", "Hello");
                fetchNews(last_news_sku, "news_holder");

/*
                  setTimeout(function () {

                    app.dialog.alert("You should check your notifications. ", "Hello");
                    console.log("fetch news");

                  }, 2000);
*/
            } else {

              showToast(loginResponse["datareturned"][0]["error"]);

            }
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              showToast("Poor network connection");
              app.preloader.hide();
          }

        });


    } else {

        showToast("Something went awry");

    }
}

function getTodaysDate(){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function showRestOfText(x){

  news_text_holder_id = x.getAttribute("data-newstextholderid");
  news_text_real = x.getAttribute("data-newstext");

  console.log("news_text_holder_id " + news_text_holder_id);
  console.log("news_text_real " + news_text_real);

  news_text = urlify(news_text_real);
  news_text = getAllHashtagReferences(news_text);
  news_text = getAllPottnameReferences(news_text);

  console.log("NEW news_text_real " + news_text_real);

  document.getElementById(news_text_holder_id).innerHTML = news_text;
  x.innerHTML = "";
  x.style.display = "none";

}

function fetchNews(last_news_sku_local, newsholderid){
        if(last_news_sku_local == ""){
          last_news_sku_local = last_news_sku;
        }
        app.preloader.show();
        var url_real = CONFIG + 'inc/android_get_news.php';

        var loginData = {
            "my_app_version" : my_app_version,
            myid : my_user_sys_id,
            mypass : my_e_password,
            news_sku : last_news_sku_local,
            gettype : "down",
            i_country : my_country
        };          
        console.log(loginData);
        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          success: function(response){
            console.log(response);
            var newsResponse = JSON.parse(response);

            console.log(newsResponse);
            var total_news_num = Object.keys(newsResponse["hits"]).length;

            if(total_news_num <= 0){

              showToast("No news to show");

            } else {
              if(last_news_sku_local == 0 || last_news_sku_local == "0"){
                document.getElementById(newsholderid).innerHTML = "";
              }
              setNews(total_news_num, newsResponse, "news_holder");
              app.preloader.hide();

            }
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();
              showToast("Poor network connection");

          }
        });

}


function checkImage(imageSrc, newsid, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}

function setNews(total_news_num, newsResponse, newsholderid){

                for (var i = 0; i < total_news_num; i++) {

                    if(newsResponse["hits"][i]["news_id"] != "") {



                        var news_date = newsResponse["hits"][i]["news_date"];
                        var news_dislikes_num = newsResponse["hits"][i]["news_dislikes_num"];
                        var news_id = newsResponse["hits"][i]["news_id"];
                        var news_image = newsResponse["hits"][i]["news_image"];
                        var news_video = newsResponse["hits"][i]["news_video"];
                        var news_set_url_card = newsResponse["hits"][i]["news_set_url_card"];
                        var news_url_web_address = newsResponse["hits"][i]["news_url_web_address"];
                        var news_url_title = newsResponse["hits"][i]["news_url_title"];
                        var news_url_image = newsResponse["hits"][i]["news_url_image"];
                        var news_main = escapeHtml(newsResponse["hits"][i]["news_main"]);
                        var news_sub = escapeHtml(newsResponse["hits"][i]["news_sub"]);
                        var news_sponsored_tag = newsResponse["hits"][i]["news_sponsored_tag"];
                        var news_shared_video = newsResponse["hits"][i]["news_shared_video"];
                        var news_maker_full_name = escapeHtml(newsResponse["hits"][i]["news_maker_full_name"]);
                        var news_maker_pottname = newsResponse["hits"][i]["news_maker_pottname"];
                        var news_maker_pro_pic = newsResponse["hits"][i]["news_maker_pro_pic"];
                        var news_maker_verified_status = newsResponse["hits"][i]["news_maker_verified_status"];
                        var news_maker_pro_pic = newsResponse["hits"][i]["news_maker_pro_pic"];
                        var news_type = newsResponse["hits"][i]["news_type"];
                        var news_type_title = newsResponse["hits"][i]["news_type_title"];
                        var sku = newsResponse["hits"][i]["sku"];
                        var news_share_num = newsResponse["hits"][i]["news_share_num"];
                        var news_views_num = newsResponse["hits"][i]["news_views"];
                        var news_set_like_color = newsResponse["hits"][i]["news_set_like_color"];
                        var news_set_dislike_color = newsResponse["hits"][i]["news_set_dislike_color"];
                        var news_set_comment_color = newsResponse["hits"][i]["news_set_comment_color"];
                        var news_set_buy_color = newsResponse["hits"][i]["news_set_buy_color"];
                        var news_likes_num = newsResponse["hits"][i]["news_likes_num"];
                        var news_dislikes_num = newsResponse["hits"][i]["news_dislikes_num"];
                        var news_buy_num = newsResponse["hits"][i]["news_buy_num"];
                        var news_comment_num = newsResponse["hits"][i]["news_comment_num"];
                        var sku = newsResponse["hits"][i]["sku"];
                        var news_shared_id = newsResponse["hits"][i]["news_shared_id"];
                        var news_shared_maker_full_name = escapeHtml(newsResponse["hits"][i]["news_shared_maker_full_name"]);
                        var news_shared_maker_pottname = newsResponse["hits"][i]["news_shared_maker_pottname"];
                        var news_shared_image = newsResponse["hits"][i]["news_shared_image"];
                        var news_shared_main = escapeHtml(newsResponse["hits"][i]["news_shared_main"]);
                        var news_shared_maker_pro_pic = newsResponse["hits"][i]["news_shared_maker_pro_pic"];
                        var news_shared_maker_verified_status = newsResponse["hits"][i]["news_shared_maker_verified_status"];
                        var news_shared_type  = newsResponse["hits"][i]["news_shared_type"];
                        var shared_news_set_like_color = newsResponse["hits"][i]["shared_news_set_like_color"];
                        var shared_news_set_dislike_color = newsResponse["hits"][i]["shared_news_set_dislike_color"];
                        var shared_news_likes_num = newsResponse["hits"][i]["shared_news_likes_num_REAL"];
                        var shared_news_dislikes_num = newsResponse["hits"][i]["shared_news_dislikes_num_REAL"];
                        var shared_news_set_dislike_color = newsResponse["hits"][i]["shared_news_set_dislike_color"];
                        var shared_news_views_num = newsResponse["hits"][i]["shared_news_views"];
                        var shared_news_comments_num = newsResponse["hits"][i]["shared_news_comments"];
                        var shared_news_shares_num = newsResponse["hits"][i]["shared_news_likes_num"];
                        var shared_news_purchases_num = newsResponse["hits"][i]["shared_news_dislikes_num"];
            
                        last_news_sku = sku;
                        search_or_pottdata_last_sku = sku;

                        news_main_real = news_main;
                        news_shared_main_real  = news_shared_main;




                        if(news_main_real.length < 275){

                          news_text_font_size = "20px";

                        } else if(news_main_real.length >= 275 && news_main_real.length < 375){

                          news_text_font_size = "12px";

                        } else {

                          news_main = news_main_real.slice(0, 375) + '  <span onclick="showRestOfText(this)" data-newstext="' + news_main + '" data-newstextholderid="news_text_' + news_id + '" style="font-weight:bolder; font-style: italic;"> ...Read more</span>';
                          news_text_font_size = "12px";

                        }

                        if(news_shared_main_real.length >= 100) {

                          news_shared_main = news_shared_main_real.slice(0, 100) + '  <span onclick="showRestOfText(this)" data-newstext="' + news_shared_main + '" data-newstextholderid="news_text_' + news_shared_id + '" style="font-weight:bolder; font-style: italic;"> ...Read more</span>';
                        
                        }




                        news_main = urlify(news_main);
                        news_main = getAllHashtagReferences(news_main);
                        news_main = getAllPottnameReferences(news_main);

                        news_sub = escapeHtml(news_sub);
                        news_sub = urlify(news_sub);
                        news_shared_main = urlify(news_shared_main);
                        news_shared_main = getAllHashtagReferences(news_shared_main);
                        news_shared_main = getAllPottnameReferences(news_shared_main);

                        news_image = encodeURI(news_image);
                        news_shared_image = encodeURI(news_shared_image);
                        news_maker_pro_pic = encodeURI(news_maker_pro_pic);
                        news_shared_maker_pro_pic = encodeURI(news_shared_maker_pro_pic);


                        /*
                        if(i == total_news_num-1){

                            console.log("search_or_pottdata_last_sku : " + search_or_pottdata_last_sku);

                        }

                        if(i == 0){

                            console.log("sku at 0 - : " + sku);

                        }
                        */

                        if(news_maker_pro_pic.trim() == "" || news_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                            news_maker_pro_pic = "img/avatar.png"
                        }

                        if(news_shared_maker_pro_pic.trim() == "" || news_shared_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_shared_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                            news_shared_maker_pro_pic = "img/avatar.png"
                        }

                        poster_code_shared_news = "";

                        if(news_shared_image.trim() == ""){

                            news_shared_image_display_style = "none";
                            
                        } else if(news_shared_image.trim() != "" && news_shared_video != ""){

                            news_shared_image_display_style = "none";
                            poster_code_shared_news = 'poster="' + news_shared_image +  '"';
                            //console.log(poster_code);

                        } else {
                            news_shared_image_display_style = "";
                        }
                        poster_code = "";

                        if(news_image.trim() == ""){

                            news_image_display_style = "none";

                        } else if(news_image.trim() != "" && news_video != ""){

                            news_image_display_style = "none";
                            poster_code = 'poster="' + news_image +  '"';
                            //console.log(poster_code);

                        } else {
                            news_image_display_style = "";
                        }

                        if(news_video.trim() == ""){
                            news_video_display_style = "none";
                        } else {
                            news_video_display_style = "";
                        }

                        if(news_maker_verified_status != null && news_maker_verified_status.trim() == "1"){
                            news_maker_verified_status_display_style = "";
                        } else {
                            news_maker_verified_status_display_style = "none";
                        }

                        if(news_shared_maker_verified_status != null && news_shared_maker_verified_status.trim() == "1"){
                            news_shared_maker_verified_status_display_style = "";
                        } else {
                            news_shared_maker_verified_status_display_style = "none";
                        }

                        if(news_likes_num != null && news_likes_num.trim() != "0" && news_likes_num.trim() != ""){
                            likes_display_style = "";
                        } else {
                            likes_display_style = "none";
                        }

                        if(news_dislikes_num != null && news_dislikes_num.trim() != "0" && news_dislikes_num.trim() != ""){
                            dislikes_display_style = "";
                        } else {
                            dislikes_display_style = "none";
                        }


                        if(news_comment_num != null && news_comment_num > 0){
                            comment_display_style = "";
                        } else {
                            comment_display_style = "none";
                        }
                        
                        if(news_buy_num != null && news_buy_num > 0){
                            news_buy_num_display_style = "";
                        } else {
                            news_buy_num_display_style = "none";
                        }

                        if(news_views_num != null && news_views_num > 0){
                            news_views_num_display_style = "";
                        } else {
                            news_views_num_display_style = "none";
                        }

                        if(news_share_num != null && news_share_num > 0){
                            repost_display_style = "";
                        } else {
                            repost_display_style = "none";
                        }

                        if(shared_news_likes_num != null && shared_news_likes_num.trim() != "0" && shared_news_likes_num.trim() != ""){
                            shared_news_likes_num_display_style = "";
                        } else {
                            shared_news_likes_num_display_style = "none";
                        }
                        if(shared_news_dislikes_num != null && shared_news_dislikes_num.trim() != "0" && shared_news_dislikes_num.trim() != ""){
                            shared_news_dislikes_num_display_style = "";
                        } else {
                            shared_news_dislikes_num_display_style = "none";
                        }
                        if(shared_news_shares_num != null && shared_news_shares_num.trim() != "0" && shared_news_shares_num.trim() != ""){
                            shared_news_shares_num_display_style = "";
                        } else {
                            shared_news_shares_num_display_style = "none";
                        }

                        if(news_shared_type != "news" && news_shared_type != "shared_news" &&  shared_news_purchases_num != null && shared_news_purchases_num.trim() != "0" && shared_news_purchases_num.trim() != ""){
                            shared_news_purchases_num_display_style = "";
                            if(news_shared_type == "fundraiser"){

                              var reaction_name = "contributions";

                            } else {

                              var reaction_name = "purchases";


                            }
                        } else {
                            shared_news_purchases_num_display_style = "none";
                        }

                        if(news_set_like_color == 1){
                            news_like_color = "#ff6300";
                            news_dislike_color = "";
                            news_set_dislike_color = "0";
                            dislike_icon_type = "dislike_android.svg"
                            like_icon_type = "heart_fill"
                            like_icon_type_android = "favorite";
                        } else if (news_set_dislike_color == 1){
                            news_like_color = "";
                            news_dislike_color = "red";
                            dislike_icon_type = "dislike_fill.svg"
                            news_set_like_color = "0";
                            like_icon_type = "heart"
                            like_icon_type_android = "favorite_border";
                        } else {

                            news_like_color = "";
                            news_dislike_color = "";
                            news_set_like_color = "0";
                            news_set_dislike_color = "0";
                            dislike_icon_type = "dislike.svg"
                            like_icon_type = "heart"
                            like_icon_type_android = "favorite_border";
                        }


                        if(news_set_dislike_color == 1){
                            shared_news_like_color = "#ff6300";
                            shared_news_dislike_color = "";
                            shared_news_set_dislike_color = "0";
                            shared_dislike_icon_type = "dislike_android.svg"
                            shared_like_icon_type = "heart_fill"
                        } else if (news_set_dislike_color == 1){
                            shared_news_like_color = "";
                            shared_news_dislike_color = "red";
                            shared_dislike_icon_type = "dislike_fill.svg"
                            shared_news_set_like_color = "0";
                            shared_like_icon_type = "heart"
                        } else {

                            shared_news_like_color = "";
                            shared_news_dislike_color = "";
                            shared_news_set_like_color = "0";
                            shared_news_set_dislike_color = "0";
                            shared_dislike_icon_type = "dislike.svg"
                            shared_like_icon_type = "heart"

                        }



                        if(shared_news_views_num != null && shared_news_views_num > 0){
                            shared_news_views_num_display_style = "";
                        } else {
                            shared_news_views_num_display_style = "none";
                        }

                        if(shared_news_comments_num != null && shared_news_comments_num.trim() != "0" && shared_news_comments_num.trim() != ""){
                            shared_news_comments_num_display_style = "";
                        } else {
                            shared_news_comments_num_display_style = "none";
                        }

                        if(news_sponsored_tag == "1" || news_sponsored_tag == 1){
                            news_date = "sponsored";
                        }

  if(news_type == "news" || news_type == "shared_news"){

    if(news_image == "" && news_video == "" && news_shared_image == "" && news_shared_video == "" && (news_set_url_card == 1 || news_set_url_card == "1") && news_url_image != ""){
      news_card_display_style = "";
      news_url_image_temp = news_url_image;
      news_url_image = "img/newspaper.jpg";
      checkImage(news_url_image, news_id, function(){ if(document.getElementById("news_url_img_"+news_id) != null){ document.getElementById("news_url_img_"+news_id).src = news_url_image;} }, function(){ } );

    } else {
      news_card_display_style = "none";
    }

  } else {
    news_card_display_style = "none";
  }


/*
                        shared_news_repost_display_style
                        shared_news_share_num
*/
//<i class="fa fa-heart fa-stack-1x "></i><i class="fa fa-bolt fa-stack-1x fa-inverse"></i>
                        if(news_type == "news"){

                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="#" class="link popover-open" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name" style="font-weight : bolder;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div><div class="card-content"><p id="news_text_' + news_id + '" style="margin-left: 10px; font-size: ' + news_text_font_size +'; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_main_real + '" >' + news_main + '</p><a class="link external" target="_blank" data-url="url_holder" href = "' + news_url_web_address + '"><div style="display: ' + news_card_display_style + '" class="card elevation-4"><div style="position: relative; width: 100%; padding-top: 100%;"><div style="width: 100%; height: 50%; margin-top: -100%"><img id="news_url_img_' + news_id + '" src="' + news_url_image + '" width="100%;"></div><div style="width: 100%; height: 50%; background-color: white;"><p style="overflow: hidden; text-overflow: hidden; -webkit-line-clamp:2; -webkit-box-orient: vertical; display: -webkit-box; font-weight: 900; margin: 16px 5px;">' + news_url_title + '</p><p style="overflow: hidden; text-overflow: hidden; -webkit-line-clamp:1; -webkit-box-orient: vertical; display: -webkit-box; margin: 16px 5px;">' + news_url_web_address + '</p></div></div></div></a><a href="#" @click="openStandalone"><div style="background-image: url(' + news_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_image_display_style +'"></div></a><video ' + poster_code + '  onclick="playPauseThisVideo(this)" onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="video_' + news_id + '" data-newsid = "'+ news_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + repost_display_style + '">reposts:  ' + news_share_num + ' </span>&nbsp;<span style="display: ' + news_views_num_display_style + '">views:  ' + news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"> <i  id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type_android + '</i><i id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"><i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a></div></div>'));

                        } else if (news_type == "shared_news"){
                            if(news_shared_type == "up4sale" || news_shared_type == "fundraiser" || 
                               news_shared_type == "shares4sale" || news_shared_type == "event"){

                              news_shared_type_purchase_icon_display = "";

                            } else {
                              news_shared_type_purchase_icon_display = "none";
                            }
                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="block"> <i class="icon f7-icons ios-only" style="font-size: 10px;">reply_fill</i>&nbsp;<span onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" style="font-style: bold; font-weight: 600;" class=" popup-open" data-popup=".pott">' + news_maker_full_name  + '</span> reposted - <span  id="news_text_' + news_id + '" style="word-wrap: break-word;" >' + news_main +'</span></div><hr><div class="card-header"><a onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'"  href="#" class="link popover-open" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_shared_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_shared_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name">' + news_shared_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_shared_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_shared_maker_pottname + '</div><div class="demo-facebook-date">repost</div></div><br><div class="card-content"><p  id="news_text_' + news_shared_id + '"  style="margin-left: 10px; font-size: 12px; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_shared_main_real + '" >' + news_shared_main + '</p><a href="#" @click="openStandalone"><div style="background-image: url(' + news_shared_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_shared_image_display_style +'"></div></a><video onclick="playPauseThisVideo(this)" onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="shared_video_' + news_shared_id + '" ' + poster_code_shared_news + ' data-newsid = "'+ news_shared_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + shared_news_purchases_num_display_style + '" onclick="getLikes(this);" data-type="3" data-newsid = "'+ news_shared_id +'" class="popup-open" data-popup=".popup-likes">' + reaction_name + ': ' + shared_news_purchases_num + ' </span>&nbsp;<span style="display: ' + shared_news_shares_num_display_style + '">reposts:  ' + shared_news_shares_num + ' </span>&nbsp; <span style="display: ' + news_views_num_display_style + '">views:  ' + shared_news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"><i  id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px;color : '+ news_like_color + '">' + like_icon_type_android + '</i><i  id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px;color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"> <i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a><a style="display : ' + news_shared_type_purchase_icon_display + '" onclick="getBuyItemInfo(this);" data-type = "' + news_shared_type + '"  onmousedown="checkLongPressStart(this);" onmouseup="checkLongPressEnd();" data-newsid = "'+ news_shared_id +'" href="#" class="link"><i class="icon f7-icons ios-only" style="font-size: 20px; color: #009933;">bag_fill</i></a></div></div>'));

                        } else if (news_type == "up4sale"){

                            title_color = "#009933";
                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'"  href="#" class="link popover-open" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name" style="font-weight: bolder;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style: italic; color: green">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div><div class="card-content"><div class="block"><div style="text-align: center; border: solid; border-color: '+ title_color + '; color:  '+ title_color + '; border-top-right-radius: 5px; border-top-left-radius: 5px; border-width: 1px; border-bottom: none; font-weight: bolder;">' + news_type_title + '</div><div style="text-align: center; border: solid; border-color: 000; border-bottom-left-radius: 5px; border-width: 1px; border-bottom-right-radius: 5px;">' + news_sub + '</div></div><p id="news_text_' + news_id + '"  style="margin-left: 10px; font-size: 12px; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_main_real + '" >' + news_main + '</p><a href="#" @click="openStandalone"><div style="background-image: url(' + news_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_image_display_style +'"></div></a><video onclick="playPauseThisVideo(this)" ' + poster_code + '  onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="video_' + news_id + '" data-newsid = "'+ news_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + news_buy_num_display_style + '" onclick="getLikes(this);" data-type="3" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Transactions: ' + news_buy_num + ' </span>&nbsp;<span style="display: ' + repost_display_style + '">reposts:  ' + news_share_num + ' </span>&nbsp; <span style="display: ' + news_views_num_display_style + '">views:  ' + news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"><i id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type_android + '</i><i  id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"> <i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a><a onclick="getBuyItemInfo(this);" data-type = "' + news_type + '"  onmousedown="checkLongPressStart(this);" onmouseup="checkLongPressEnd();" data-newsid = "'+ news_id +'" href="#" class="link popup-open" data-popup=".yardsale_transaction"><i class="icon f7-icons ios-only" style="font-size: 20px; color: #009933;">bag_fill</i></a></div></div>'));

                        } else if (news_type == "event"){

                            title_color = "#e6e600";
                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'"  href="#" class="link popover-open" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name" style="font-weight: bolder;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style: italic; color: green">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div><div class="card-content"><div class="block"><div style="text-align: center; border: solid; border-color: '+ title_color + '; color:  '+ title_color + '; border-top-right-radius: 5px; border-top-left-radius: 5px; border-width: 1px; border-bottom: none; font-weight: bolder;">' + news_type_title + '</div><div style="text-align: center; border: solid; border-color: 000; border-bottom-left-radius: 5px; border-width: 1px; border-bottom-right-radius: 5px;">' + news_sub + '</div></div><p id="news_text_' + news_id + '"  style="margin-left: 10px; font-size: 12px; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_main_real + '" >' + news_main + '</p><a href="#" @click="openStandalone"><div style="background-image: url(' + news_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_image_display_style +'"></div></a><video onclick="playPauseThisVideo(this)" ' + poster_code + '  onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="video_' + news_id + '" data-newsid = "'+ news_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + news_buy_num_display_style + '" onclick="getLikes(this);" data-type="3" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Transactions: ' + news_buy_num + ' </span>&nbsp;<span style="display: ' + repost_display_style + '">reposts:  ' + news_share_num + ' </span>&nbsp; <span style="display: ' + news_views_num_display_style + '">views:  ' + news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"><i id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type_android + '</i><i  id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"> <i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a><a onclick="getBuyItemInfo(this);" data-type = "' + news_type + '"  onmousedown="checkLongPressStart(this);" onmouseup="checkLongPressEnd();" data-newsid = "'+ news_id +'" href="#" class="link popup-open" data-popup=".event_transaction"><i class="icon f7-icons ios-only" style="font-size: 20px; color: #009933;">bag_fill</i></a></div></div>'));
                       
                        } else if (news_type == "shares4sale"){

                            title_color = "#ff9900";
                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'"  href="#" class="link popover-open" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name" style="font-weight: bolder;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style: italic; color: green">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div><div class="card-content"><div class="block"><div style="text-align: center; border: solid; border-color: '+ title_color + '; color:  '+ title_color + '; border-top-right-radius: 5px; border-top-left-radius: 5px; border-width: 1px; border-bottom: none; font-weight: bolder;">' + news_type_title + '</div><div style="text-align: center; border: solid; border-color: 000; border-bottom-left-radius: 5px; border-width: 1px; border-bottom-right-radius: 5px;">' + news_sub + '</div></div><p id="news_text_' + news_id + '"  style="margin-left: 10px; font-size: 12px; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_main_real + '" >' + news_main + '</p><a href="#" @click="openStandalone"><div style="background-image: url(' + news_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_image_display_style +'"></div></a><video onclick="playPauseThisVideo(this)" ' + poster_code + '  onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="video_' + news_id + '" data-newsid = "'+ news_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + news_buy_num_display_style + '" onclick="getLikes(this);" data-type="3" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Transactions: ' + news_buy_num + ' </span>&nbsp;<span style="display: ' + repost_display_style + '">reposts:  ' + news_share_num + ' </span>&nbsp; <span style="display: ' + news_views_num_display_style + '">views:  ' + news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"><i id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type_android + '</i><i  id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"> <i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a><a onclick="getBuyItemInfo(this);" data-type = "' + news_type + '"  onmousedown="checkLongPressStart(this);" onmouseup="checkLongPressEnd();" data-newsid = "'+ news_id +'" href="#" class="link popup-open" data-popup=".sharesale_transaction"><i class="icon f7-icons ios-only" style="font-size: 20px; color: #009933;">bag_fill</i></a></div></div>'));
                       
                        } else if (news_type == "fundraiser"){

                            title_color = "#33adff";
                            $('#'+newsholderid).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'"  href="#" class="link popover-open" data-popover=".popover-menu" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">more_vertical</i><i class="icon material-icons md-only" style="font-size: 20px;">more_vert</i></a><div onclick="getPottInfo(this);" data-pottname = "'+ news_maker_pottname +'" class="demo-facebook-avatar popup-open" data-popup=".pott" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px; margin-bottom : 5px;"></div><div class="demo-facebook-name" style="font-weight: bolder;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style: italic; color: green">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div><div class="card-content"><div class="block"><div style="text-align: center; border: solid; border-color: '+ title_color + '; color:  '+ title_color + '; border-top-right-radius: 5px; border-top-left-radius: 5px; border-width: 1px; border-bottom: none; font-weight: bolder;">' + news_type_title + '</div><div style="text-align: center; border: solid; border-color: 000; border-bottom-left-radius: 5px; border-width: 1px; border-bottom-right-radius: 5px;">' + news_sub + '</div></div><p id="news_text_' + news_id + '"  style="margin-left: 10px; font-size: 12px; font-weight:bold; word-wrap: break-word;" onclick="copyNewsText(this);" data-newstext="' + news_main_real + '" >' + news_main + '</p><a href="#" @click="openStandalone"><div style="background-image: url(' + news_image + '); background-size: cover; position: relative; width: 100%; padding-top: 100%;  display: '+ news_image_display_style +'"></div></a><video onclick="playPauseThisVideo(this)" ' + poster_code + '  onplay="pauseOtherPlayers(this)" onpause = "pauseVideo(this)" id="video_' + news_id + '" data-newsid = "'+ news_id +'" style="background-color: black !important; width: 100%; display: '+ news_video_display_style +'" height="500px;"  controls preload="auto"><source src="' + news_video + '#t=2" type="video/mp4"><source src="' + news_video + '#t=2" type="video/webm"></video></div><p class="likes" style="font-size: 10px; line-height: 0.8;"><span style="display: ' + likes_display_style + '" onclick="getLikes(this);" data-type="1" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Likes: ' + news_likes_num + ' </span>&nbsp;<span style="display: ' + dislikes_display_style + '" data-type="2" onclick="getLikes(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">dislikes:  ' + news_dislikes_num + '  </span>&nbsp;<span style="display: ' + comment_display_style + '" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".comments">Comments:  ' + news_comment_num + '  </span>&nbsp;<span style="display: ' + news_buy_num_display_style + '" onclick="getLikes(this);" data-type="3" data-newsid = "'+ news_id +'" class="popup-open" data-popup=".popup-likes">Transactions: ' + news_buy_num + ' </span>&nbsp;<span style="display: ' + repost_display_style + '">reposts:  ' + news_share_num + ' </span>&nbsp; <span style="display: ' + news_views_num_display_style + '">views:  ' + news_views_num + ' </span></p><div class="card-footer"><a onclick="likeThis(this);" data-liketype="1" data-newsid = "'+ news_id +'" id="like_'+ news_id +'" data-status = "' + news_set_like_color + '" href="#" class="link"><i id="android_like_icon_' + news_id + '" class="icon material-icons md-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type_android + '</i><i  id="ios_like_icon_' + news_id + '" class="icon f7-icons ios-only" style="font-size: 20px; color : '+ news_like_color + '">' + like_icon_type + '</i></a><a onclick="likeThis(this);" data-liketype="2"  data-newsid = "'+ news_id +'" id="dislike_'+ news_id +'" data-status = "' + news_set_dislike_color + '" href="#" class="link"><img src="img/'+ dislike_icon_type + '" width="24px" height="24px" id="ios_dislike_icon_' + news_id + '"></a><a href="#" onclick="getComments(this);" data-newsid = "'+ news_id +'" class="link popup-open" data-popup=".comments"><i class="icon material-icons md-only" style="font-size: 20px;">chat_bubble_outline</i><i class="icon f7-icons ios-only" style="font-size: 20px;">chat</i></a><a href="#" onclick="setGlobalNewsId(this);" data-newsid = "'+ news_id +'" class="link popover-open" data-popover=".popover-repost"> <i class="icon material-icons md-only" style="font-size: 20px;">cached</i><i class="icon f7-icons ios-only" style="font-size: 20px;">reply</i></a><a onclick="getBuyItemInfo(this);" data-type = "' + news_type + '"  onmousedown="checkLongPressStart(this);" onmouseup="checkLongPressEnd();" data-newsid = "'+ news_id +'" href="#" class="link popup-open" data-popup=".fundraiser_transaction"><i class="icon f7-icons ios-only" style="font-size: 20px; color: #009933;">bag_fill</i></a></div></div>'));
                       
                        } else if(news_type == "pott" && my_pot_name != news_maker_pottname){

                            this_chat_table = returnChatTableName(my_pot_name, news_maker_pottname);

                            $('#'+newsholderid).append($('<div class="card demo-facebook-card popup-open" data-popup=".pott" style="color : #ff00ff;" onclick="getPottInfo(this);" data-pottname = "' + news_maker_pottname + '" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="/messages/" data-receivername = "' + news_maker_full_name + '"  data-receiverpic="' + news_maker_pro_pic + '" onclick="startChat(this)" data-tablename = "' + this_chat_table + '"  data-receiverpottname = "' + news_maker_pottname + '"  class="link popup-close" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">chats</i></a><div class="demo-facebook-avatar" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px;"></div><div class="demo-facebook-name" style="font-weight: bolder; color : black;">' + news_maker_full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style: italic; color: green">@' + news_maker_pottname + '</div><div class="demo-facebook-date"><span>' + news_sub + ' pearls</span></div><div class="demo-facebook-date"><span>' + news_date + '</span></div></div></div>'));

                        }


                    }
                  
                }

}

function setGlobalNewsId(x){

 globalNewsId = x.getAttribute("data-newsid");
 console.log("globalNewsId : " + globalNewsId);

}

function copyNewsText(x){

    text = x.getAttribute("data-newstext");
    var this_message = "Copied";
    showToast("News Text Copied.");
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        this_message = "Copied";
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            this_message = "Copied";
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            //console.warn("Copy to clipboard failed.", ex);
            this_message = "Copy to clipboard failed";
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }


}


function copyNewsLink(){

    text = "https://fishpott.com/web/in/ref.php?newsurl=" + globalNewsId;
    var this_message = "Copied";
    showToast("News Link Copied.");
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        this_message = "Copied";
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            this_message = "Copied";
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            //console.warn("Copy to clipboard failed.", ex);
            this_message = "Copy to clipboard failed";
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }


}

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      //.replace(/"/g, "&quot;")
      //.replace(/'/g, "&#039;");
}
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return "<a class='link external' style='color: black; font-weight : bolder;' target='_blank' href='" + url + "'>" + url + "</a>";
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
function getAllPottnameReferences(text){

    var urlRegex = /@\w*/g;
    return text.replace(urlRegex, function(url) {
        url2 = url.substr(1);
        return "<a class='popup-open' data-popup='.pott' style='color : #ff00ff;' onclick='getPottInfo(this);' data-pottname = '"+ url2 +"'>" + url + "</a>";
    })
}
function getAllHashtagReferences(text){

    var urlRegex = /#\w*/g;
    return text.replace(urlRegex, function(url) {
        url2 = url.substr(1);
        return "<a target='_blank' style='color : red; '>" + url + "</a>";
    })
}



function showImagePreview(input, previewer_id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#'+previewer_id).attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


function setEventFormType(x){
  if(x.value == "yes"){

    document.getElementById("selling_ticket_section_main").style.display = "";
    document.getElementById("price_holder_eventnews_main").innerHTML = '<input id="price_eventnews_main" type="number" min="1" placeholder="Ticket Price">';

  } else {

    document.getElementById("selling_ticket_section_main").style.display = "none";
    document.getElementById("quantity_eventnews_main").value = "0";
    document.getElementById("price_holder_eventnews_main").innerHTML = '<input id="price_eventnews_main" type="number" value="0" min="1" placeholder="Ticket Price">';

  }
}

function postJustNews(){

      post_img = document.getElementById("upload_news_pic_justnews_main").value;
      post_img2 = document.getElementById("upload_news_camera_justnews_main").value;
      post_vid = document.getElementById("upload_news_video_justnews_main").value;
      post_vid2 = document.getElementById("upload_news_video_cam_justnews_main").value;
      post_text = document.getElementById("newstext_justnews_main").value.trim();

      if(post_img.trim() == ""  && post_img2.trim() == ""  && post_vid.trim() == "" && post_vid2.trim() == ""  && post_text.trim() == "" ){

          showToast("You should at least say something");

      } else {

      app.preloader.show();

      var formData = new FormData();

      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('news_type', "news");
      formData.append('inputtor_type', my_user_type);
      formData.append('addNewsText', post_text);

      if(post_img != ""){

        formData.append('upload_news_pic', $('#upload_news_pic_justnews_main')[0].files[0]); 

      } else if(post_img2 != ""){

        formData.append('upload_news_pic', $('#upload_news_camera_justnews_main')[0].files[0]); 

      }

/*
////////// CROPS //////////////
    console.log("currentCroppedImage ADD STARTING");
    console.log(currentCroppedImage);
      if(currentCroppedImage != ""){

          console.log("currentCroppedImage 2");
          console.log(currentCroppedImage);
        formData.append("upload_news_pic", currentCroppedImage, 'image.png');

      }

////////// END //////////////
*/
      if(post_vid != ""){

        formData.append('upload_news_video', $('#upload_news_video_justnews_main')[0].files[0]); 

      } else if(post_vid2 != ""){

        formData.append('upload_news_video', $('#upload_news_video_cam_justnews_main')[0].files[0]); 

      }


        var url_real = CONFIG + 'inc/android_add_news_justnews.php';

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          success: function(response){
              console.log("response : " + response);
              showToast("Posted");
              document.getElementById("newstext_justnews_main").value = "";
              document.getElementById("upload_news_pic_justnews_main").value = "";
              document.getElementById("upload_news_video_justnews_main").value = "";
              document.getElementById("just_news_crop_result").innerHTML = "";
              ////////// CROPS //////////////
              //currentCroppedImage = "";
              ////////// END //////////////
              $('#close_justnewspost_main').click();
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function postYardSaleNews(){

      post_img = document.getElementById("upload_news_pic_yardsale_main").value;
      post_text = document.getElementById("newstext_yardsalenews_main").value.trim();
      itemname = document.getElementById("itemname_yardsalenews_main").value.trim();
      price = document.getElementById("price_yardsalenews_main").value.trim();
      weight = document.getElementById("itemweight_yardsalenews_main").value.trim();
      pickup = document.getElementById("itempickup_yardsalenews_main").value.trim();
      quantity = document.getElementById("quantity_yardsalenews_main").value.trim();
      delivery = document.getElementById("delivery_yardsalenews_main").value.trim();

      if(post_img.trim() == "" ){

          showToast("You have to show a picture of the item");

      } else if(post_text.trim() == "" || itemname.trim() == ""  || price.trim() == "" || 
          quantity.trim() == "" || delivery.trim() == "" ){

          showToast("Complete all fields");

      } else if(parseFloat(price) < 1){

          showToast("Please check the price of item");

      } else if(parseFloat(weight) < 1){

          showToast("Please check the weight of item");

      } else if(parseFloat(quantity) < 1){

          showToast("Please check the quantity of items");

      } else if (pickup.indexOf(' ') !== -1){

          showToast("Ferry Addresses has no spaces");

      }  else if (pickup.length < 8){

          showToast("Incorrect Ferry Address");

      } else if (pickup.toLowerCase().substr(0, 5) != "ferry"){

          showToast("Incorrect Ferry Address");

      } else {

      app.preloader.show();
      
      var formData = new FormData();

      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('inputtor_type', my_user_type);
      formData.append('news_type', "up4sale");
      formData.append('this_currency', my_currency);
      formData.append('delivery_style', delivery);
      formData.append('item_name', itemname);
      formData.append('item_quantity', quantity);
      formData.append('set_price', price);
      formData.append('item_current_location', pickup);
      formData.append('item_weight_type', weight);
      formData.append('addNewsText', post_text);
/*
      if(currentCroppedImage != ""){

        formData.append("upload_news_pic", currentCroppedImage, 'image.png');

      }
*/
      if(post_img != ""){

        formData.append('upload_news_pic', $('#upload_news_pic_yardsale_main')[0].files[0]); 

      }

        var url_real = CONFIG + 'inc/android_add_news_up4sale.php';

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          mimeTypes:"multipart/form-data",
          success: function(response){
              console.log("response : " + response);
              showToast("Posted");
              document.getElementById("upload_news_pic_yardsale_main").value = "";
              document.getElementById("newstext_yardsalenews_main").value = "";
              document.getElementById("itemname_yardsalenews_main").value = "";
              document.getElementById("price_yardsalenews_main").value = "";
              document.getElementById("itemweight_yardsalenews_main").value = "";
              document.getElementById("itempickup_yardsalenews_main").value = "";
              document.getElementById("quantity_yardsalenews_main").value = "";
              document.getElementById("delivery_yardsalenews_main").value = "";
              document.getElementById("up4sale_news_crop_result").innerHTML = "";
              ////////// CROPS //////////////
              //currentCroppedImage = "";

              $('#close_yardsalenewspost_main').click();
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function postEventNews(){

      post_img = document.getElementById("upload_news_pic_eventnews_main").value;
      post_text = document.getElementById("newstext_eventnews_main").value.trim();
      name = document.getElementById("name_eventnews_main").value.trim();
      venue = document.getElementById("venue_eventnews_main").value.trim();
      time = document.getElementById("time_eventnews_main").value.trim();
      price = document.getElementById("price_eventnews_main").value.trim();
      quantity = document.getElementById("quantity_eventnews_main").value.trim();
      selling_tickets_option = document.getElementById("selling_tickets_option_main").value.trim();

      if(post_img.trim() == "" ){

          showToast("You need to a cover art to promote the event");

      } else if(post_text.trim() == "" || name.trim() == ""  || venue.trim() == "" || 
          time.trim() == "" || price.trim() == "" || quantity.trim() == "" || selling_tickets_option.trim() == "" ){

          showToast("Complete all fields");

      } else if(parseFloat(price) < 1 && selling_tickets_option.trim() == "yes"){

          showToast("Please check the price of ticket");

      } else if(parseFloat(quantity) < 1 && selling_tickets_option.trim() == "yes"){

          showToast("Please check the quantity of tickets");

      } else {

      app.preloader.show();
      
      var formData = new FormData();

      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('inputtor_type', my_user_type);
      formData.append('news_type', "event");
      formData.append('this_currency', my_currency);
      formData.append('item_current_location', venue);
      formData.append('set_price', price);
      formData.append('item_name', name);
      formData.append('event_time', time);
      formData.append('target', quantity);
      formData.append('addNewsText', post_text);
/*

      if(currentCroppedImage != ""){

        formData.append("upload_news_pic", currentCroppedImage, 'image.png');

      }
*/      
      if(post_img != ""){

        formData.append('upload_news_pic', $('#upload_news_pic_eventnews_main')[0].files[0]); 

      }

        var url_real = CONFIG + 'inc/android_add_news_event.php';

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          mimeTypes:"multipart/form-data",
          success: function(response){
              console.log("response : " + response);
              showToast("Posted");
              document.getElementById("upload_news_pic_eventnews_main").value = "";
              document.getElementById("newstext_eventnews_main").value = "";
              document.getElementById("name_eventnews_main").value = "";
              document.getElementById("venue_eventnews_main").value = "";
              document.getElementById("time_eventnews_main").value = "";
              document.getElementById("price_eventnews_main").value = "";
              document.getElementById("quantity_eventnews_main").value = "";
              document.getElementById("event_news_crop_result").innerHTML = "";
              ////////// CROPS //////////////
              //currentCroppedImage = "";


              $('#close_eventnewspost_main').click();
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function postFundraiserNews(){

      post_img = document.getElementById("upload_news_pic_fundraisernews_main").value;
      post_text = document.getElementById("newstext_fundraisernews_main").value.trim();
      name = document.getElementById("name_fundraisernews_main").value.trim();
      amount = document.getElementById("amount_fundraisernews_main").value.trim();
      time = document.getElementById("time_fundraisernews_main").value.trim();

      if(post_img.trim() == "" ){

          showToast("You need to a cover art to promote the fundraiser");

      } else if(post_text.trim() == "" || name.trim() == ""  || amount.trim() == "" || 
          time.trim() == ""){

          showToast("Complete all fields");

      } else if(parseFloat(amount) < 1){

          showToast("Please check the target amount");

      } else {

      app.preloader.show();
      
      var formData = new FormData();

      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('inputtor_type', my_user_type);
      formData.append('news_type', "fundraiser");
      formData.append('this_currency', my_currency);
      formData.append('item_name', name);
      formData.append('target', amount);
      formData.append('item_current_location', time);
      formData.append('addNewsText', post_text);
/*
      if(currentCroppedImage != ""){

        formData.append("upload_news_pic", currentCroppedImage, 'image.png');

      }
*/
      if(post_img != ""){

        formData.append('upload_news_pic', $('#upload_news_pic_fundraisernews_main')[0].files[0]); 

      }

        var url_real = CONFIG + 'inc/android_add_news_fundraiser.php';

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          mimeTypes:"multipart/form-data",
          success: function(response){
              console.log("response : " + response);
              showToast("Posted");
              document.getElementById("upload_news_pic_fundraisernews_main").value = "";
              document.getElementById("newstext_fundraisernews_main").value = "";
              document.getElementById("name_fundraisernews_main").value = "";
              document.getElementById("amount_fundraisernews_main").value = "";
              document.getElementById("time_fundraisernews_main").value = "";

              document.getElementById("event_news_crop_result").innerHTML = "";
              ////////// CROPS //////////////
              //currentCroppedImage = "";

              $('#close_fundraisernewspost_main').click();
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function postSharesSaleNews(){

      this_shares_id = document.getElementById("selected_shares_id").value.trim();
      post_text = document.getElementById("newstext_sharesalenews_main").value.trim();
      price = document.getElementById("price_sharesalenews_main").value.trim();
      quantity = document.getElementById("quantity_sharessalenews_main").value.trim();
      password = document.getElementById("password_sharenews_main").value.trim();

      if(this_shares_id.trim() == "" ){

          showToast("Choose the shares you will like to sell");

      } else if(myshares[this_shares_id][0] == ""){

          showToast("Please close the app and try again");

      } else if(post_text.trim() == "" || price.trim() == "" || 
          password.trim() == "" || quantity.trim() == "" ){

          showToast("Complete all fields");

      } else if(parseFloat(price) < 0.1){

          showToast("The price is too low");

      } else if(parseFloat(price) > myshares[this_shares_id][1]){

          showToast("Please check the price. It can't be higher than the maximum allowed selling price");

      } else if(parseFloat(quantity) > myshares[this_shares_id][4]){

          showToast("Please check the quantity. It can't be higher than what you have");

      } else {

      app.preloader.show();
      
      var formData = new FormData();

      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('inputtor_type', my_user_type);
      formData.append('news_type', "shares4sale");
      formData.append('this_currency', my_currency);
      formData.append('set_price', price);
      formData.append('target', quantity);
      formData.append('item_current_location', this_shares_id);
      formData.append('raw_pass', password);
      formData.append('addNewsText', post_text);


        var url_real = CONFIG + 'inc/android_add_news_shares.php';

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            
              showToast("Posted");
              document.getElementById("selected_shares_id").innerHTML = "";
              document.getElementById("newstext_sharesalenews_main").value = "";
              document.getElementById("price_sharesalenews_main").value = "";
              document.getElementById("quantity_sharessalenews_main").value = "";
              document.getElementById("password_sharenews_main").value = "";

              $('#close_sharessalenewspost_main').click();
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function fetchMyShares(holder_id){

        var url_real = CONFIG + 'inc/android_get_my_shares.php';

        var formData = {
            'myid' : my_user_sys_id,
            'mypass' : my_e_password,
            'this_currency' : my_currency
        };     
        
        app.preloader.show();

        app.request({
          type: "POST",
          url: url_real,
          data: formData,
          success: function(response){
            
            var sharesResponse = JSON.parse(response);
            var total_shares_num = Object.keys(sharesResponse["hits"]).length;
            console.log(sharesResponse);
            if(total_shares_num <= 0){

              $('#close_sharessalenewspost_main').click();
              document.getElementById(holder_id).innerHTML = "";
              $('#'+holder_id).append($('<option value="" selected="selected">Choose Shares To Sell</option>'));
              document.getElementById("currentavailabletitle_transfer_main").innerHTML = "Choose Shares";
              showToast("You have no shares to sell");

            } else {
              document.getElementById(holder_id).innerHTML = "";
              $('#'+holder_id).append($('<option value="" selected="selected">Choose Shares To Sell</option>'));
              for (var i = 0; i < total_shares_num; i++) {
                if(sharesResponse["hits"][i]["share_id"] != "") {

                    var share_id = sharesResponse["hits"][i]["share_id"];
                    var yield_per_share = sharesResponse["hits"][i]["yield_per_share"];
                    var yield_duration = sharesResponse["hits"][i]["yield_duration"];
                    var parent_shares_id = sharesResponse["hits"][i]["parent_shares_id"];
                    var curr_max_price = sharesResponse["hits"][i]["curr_max_price"];
                    var share_name = sharesResponse["hits"][i]["share_name"];
                    var cost_price_per_share = sharesResponse["hits"][i]["cost_price_per_share"];
                    var num_of_shares = sharesResponse["hits"][i]["num_of_shares"];
                    var owner_id = sharesResponse["hits"][i]["owner_id"];
                    myshares[share_id] = [parent_shares_id, curr_max_price, share_name, cost_price_per_share, num_of_shares, owner_id, yield_per_share, yield_duration];
                    
                    if(owner_id == my_user_sys_id){
                        $('#'+holder_id).append($('<option value="' + share_id + '">' + share_name + '</option>'));
                    }

                  }

    if(holder_id == "selected_shares_id"){
      //document.getElementById("maximumpricetitle_sharesalenews_main").innerHTML = 'Maximum Allowed Selling Price :  ' + sharesResponse["hits"][total_shares_num-1]["curr_max_price"] + ' ' + my_currency;
      //document.getElementById("currentavailabletitle_sharesalenews_main").innerHTML = 'Currently Available : ' + sharesResponse["hits"][total_shares_num-1]["num_of_shares"];
    } else {

              document.getElementById("currentavailabletitle_transfer_main").innerHTML = "Choose Shares";

    }


              }
              console.log(myshares);
            }
              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });


}

function setSharesInfo(x, type){
  console.log("shares Id : " + x.value);
  if(x.value != ""){

    var shares_id = x.value;
    var shares_max_price = myshares[shares_id][1];
    var shares_available = myshares[shares_id][4];

    if(type == "transfer"){
      document.getElementById("currentavailabletitle_transfer_main").innerHTML = 'Currently Available : ' + shares_available;
    } else {
      document.getElementById("maximumpricetitle_sharesalenews_main").innerHTML = 'Maximum Allowed Selling Price :  ' + shares_max_price + ' ' + my_currency;
      document.getElementById("currentavailabletitle_sharesalenews_main").innerHTML = 'Currently Available : ' + shares_available;
    }
  } else {

    if(type == "transfer"){
      document.getElementById("currentavailabletitle_transfer_main").innerHTML = 'Choose Shares';
    } else {
      document.getElementById("maximumpricetitle_sharesalenews_main").innerHTML = 'Pending...';
      document.getElementById("currentavailabletitle_sharesalenews_main").innerHTML = 'Choose Shares';
    }

  }
}


function setInitialItems(){
  document.getElementById("pricetitle_sharesalenews_main").innerHTML = "Selling Price Per Share ( " + my_currency + " )";
  document.getElementById("pricetitle_yardsalenews_main").innerHTML = "Price For One ( " + my_currency + " )";
  document.getElementById("pricetitle_eventnews_main").innerHTML = "Ticket Price ( " + my_currency + " )";
  document.getElementById("pricetitle_fundraisernews_main").innerHTML = "Target Amount ( " + my_currency + " )";
  document.getElementById("transaction_fundraiser_amount_title").innerHTML = "How much do you want to contribute ( " + my_currency + " ) ?";

}

function transferShares(){

    var this_shares_id = document.getElementById("selected_shares_id_transfer_main").value;
    var receiver_pottname = document.getElementById("receiver_pottname_transfer_main").value;
    var quantity = document.getElementById("shares_amount_transfer_main").value;
    receiver_pottname = receiver_pottname.toLowerCase();
      if(this_shares_id.trim() == "" ){

          showToast("Choose the shares you will like to sell");

      } else if(receiver_pottname.trim() == my_pot_name ){

          showToast("You cannot transfer to yourself");

      } else if(myshares[this_shares_id][0] == ""){

          showToast("Please close the app and try again");

      } else if(quantity.trim() == "" || receiver_pottname.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(quantity) < 1){

          showToast("Set the correct amount of shares to transfer");

      } else if(parseFloat(quantity) > myshares[this_shares_id][4]){

          showToast("Please check the quantity. It can't be higher than what you have");

      } else {

        sharesNumGlobal = quantity;
        sharesidGlobal = this_shares_id;
        receiverPottnameGlobal = receiver_pottname;
        if(receiver_pottname.trim() == "fishpot_inc"){

          transfer_alert = "FishPot will settle you for these shares. Based on the yield duration of the shares and how long you have kept the shares, you may receive either the amount you paid for these shares, or receive between " + my_currency + " " +  (myshares[this_shares_id][1] * parseInt(quantity)) + " and " + my_currency + " " + ((myshares[this_shares_id][6] * parseInt(quantity)) + (myshares[this_shares_id][1] * parseInt(quantity))) + ". Make sure your settlement account is set. Settlement should be done within 24 hours.";
        
        } else {

          transfer_alert = "You give away " + my_currency + " " +  (myshares[this_shares_id][1] * parseInt(quantity)) + " worth of shares on this transfer. These " + parseInt(quantity) + " shares yield " + my_currency + " " + (myshares[this_shares_id][6] * parseInt(quantity)) + " every " + myshares[this_shares_id][7] + " days";
        
        }
        app.dialog.password(transfer_alert, 'Are you sure', callbackTransfer, callbackCancelTransfer);
      
      } 

}

function callbackCancelTransfer(password){

}

function callbackTransfer(password){

  if(password.trim() == ""){
      showToast("Transfer cancelled. Password can't be empty");
  } else {

    app.preloader.show();

    var url_real = CONFIG + 'inc/android_transfer_shares.php';

    var loginData = {
      myid : my_user_sys_id,
      mypass : my_e_password,
      "my_app_version" : my_app_version,
      "shares_num" : sharesNumGlobal,
      "shares_id" : sharesidGlobal,
      "raw_pass" : password,
      "receiver_potname" : receiverPottnameGlobal
    };          

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
          app.preloader.hide();

          if(response.trim() == ""){

              showToast("Something went awry");

          } else {

              showToast(response);
              $('#transfer_center').click();
              
          }        
        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

         app.preloader.hide();
         showToast("Network Error");

      }
    });


  }

}

function likeThis(thisItem){

    var thisnews_id = thisItem.getAttribute("data-newsid");
    var thisType = thisItem.getAttribute("data-liketype");

    var android_like_icon = document.getElementById("android_like_icon_" + thisnews_id);
    var ios_like_icon = document.getElementById("ios_like_icon_" + thisnews_id);
    var dislike_icon = document.getElementById("ios_dislike_icon_" + thisnews_id);

    if(thisType == "1"){

         var loginData = {
            "my_app_version" : my_app_version,
            myid : my_user_sys_id,
            mypass : my_e_password,
            likeData_news_id : thisnews_id,
            likeData_like_type : "1"
        };          

      var likeStatus = thisItem.getAttribute("data-status");
      var dislikeIconHolder = document.getElementById("dislike_"+thisnews_id);
      var dislikeStatus = dislikeIconHolder.getAttribute("data-status");

      if(likeStatus != "" && dislikeStatus != ""){

          likeStatusInt = parseInt(likeStatus);
          dislikeStatusInt = parseInt(dislikeStatus);

          if(likeStatus == 1){

            android_like_icon.innerHTML = "favorite_border";
            android_like_icon.style.color = "#ff6300";
            ios_like_icon.innerHTML = "heart";
            ios_like_icon.style.color = "";

            dislike_icon.src = "img/dislike.svg";
            thisItem.setAttribute("data-status", "0");
            dislikeIconHolder.setAttribute("data-status", "0");

          } else if(likeStatus == 0) {

            document.getElementById("like_audio").play();

            android_like_icon.innerHTML = "favorite";
            android_like_icon.style.color = "#ff6300";
            ios_like_icon.innerHTML = "heart_fill";
            ios_like_icon.style.color = "#ff6300";

            dislike_icon.src = "img/dislike.svg";
            thisItem.setAttribute("data-status", "1");
            dislikeIconHolder.setAttribute("data-status", "0");

          }

      } else {

        showToast("Something went awry");

      }

    } else if (thisType == "2"){

         var loginData = {
           "my_app_version" : my_app_version,
            myid : my_user_sys_id,
            mypass : my_e_password,
            likeData_news_id : thisnews_id,
            likeData_like_type : "0"
        };          

      var dislikeStatus = thisItem.getAttribute("data-status");
      var likeIconHolder = document.getElementById("like_"+thisnews_id);
      var likeStatus = likeIconHolder.getAttribute("data-status");

      if(likeStatus != "" && dislikeStatus != ""){

          likeStatusInt = parseInt(likeStatus);
          dislikeStatusInt = parseInt(dislikeStatus);

          if(dislikeStatusInt == 1){

            dislike_icon.src = "img/dislike.svg";

            android_like_icon.innerHTML = "favorite_border";
            android_like_icon.style.color = "";
            ios_like_icon.innerHTML = "heart";
            ios_like_icon.style.color = "";

            thisItem.setAttribute("data-status", "0");
            likeIconHolder.setAttribute("data-status", "0");

          } else if(dislikeStatusInt == 0) {

            document.getElementById("dislike_audio").play();

            dislike_icon.src = "img/dislike_fill.svg";

            android_like_icon.innerHTML = "favorite_border";
            android_like_icon.style.color = "";
            ios_like_icon.innerHTML = "heart";
            ios_like_icon.style.color = "";

            thisItem.setAttribute("data-status", "1");
            likeIconHolder.setAttribute("data-status", "0");

          }
      } else {

        showToast("Something went awry");

      }

    }

   var url_real = CONFIG + 'inc/android_like_dislike_this.php';

  app.request({
    type: "POST",
    url: url_real,
    data: loginData,
    success: function(response){
       
      },

    error: function(XMLHttpRequest, textStatus, errorThrown) {

    }
  });


}

function getMyNotifications(sku){

    if(sku == ""){
      sku = last_notification_sku;
    }

    app.preloader.show();
    var url_real = CONFIG + 'inc/android_get_notifications.php';

     var loginData = {
        myid : my_user_sys_id,
        mypass : my_e_password,
        "last_sku" : sku,
        "fetch_all" : "1",
        "my_app_version" : my_app_version
    };          

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
            var newsResponse = JSON.parse(response);
            console.log(newsResponse);
            var total_news_num = Object.keys(newsResponse["hits"]).length;

            if(total_news_num <= 1){

                showToast("You have no notifications");

            } else {

            if(sku == 0 || sku == "0"){
              document.getElementById("notifications_holder").innerHTML = "";
            }

              
                for (var i = 0; i  < total_news_num; i++) {

                        var sku = newsResponse["hits"][i]["sku"];
                        var news_type = escapeHtml(newsResponse["hits"][i]["news_text"]);
                        var news_image = newsResponse["hits"][i]["news_image"];
                        var news_video = newsResponse["hits"][i]["news_video"];
                        var not_time = newsResponse["hits"][i]["not_time"];
                        var notification_text = escapeHtml(newsResponse["hits"][i]["notification_text"]);
                        var pott_name = newsResponse["hits"][i]["pott_name"];
                        var news_id = newsResponse["hits"][i]["pott_or_news_id"];
                        var news_maker_pro_pic = newsResponse["hits"][i]["profile_pic"];
                        var thistype = newsResponse["hits"][i]["type"];


                        if(news_maker_pro_pic.trim() == "" || news_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                            news_maker_pro_pic = "img/avatar.png"
                        }

                        last_notification_sku = sku;

                        news_type = urlify(news_type);
                        news_type = getAllHashtagReferences(news_type);
                        news_type = getAllPottnameReferences(news_type);

                        notification_text = urlify(notification_text);
                        notification_text = getAllHashtagReferences(notification_text);
                        notification_text = getAllPottnameReferences(notification_text);

                        if(thistype == "like"){

                            $('#notifications_holder').append($('<div class="demo-facebook-card popup-open" data-popup=".popup-likes" onclick="getLikes2(this);" data-newsid = "' + news_id +'" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + not_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ pott_name +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><br><div class="demo-facebook-name">' + notification_text + '<br><br></div></div></div>'));

                        } else if (thistype == "dislike"){

                            $('#notifications_holder').append($('<div class="demo-facebook-card popup-open" data-popup=".popup-likes" onclick="getLikes2(this);" data-newsid = "' + news_id +'" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + not_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ pott_name +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><br><div class="demo-facebook-name">' + notification_text + '<br><br></div></div></div>'));

                        } else if (thistype == "comment"){

                            $('#notifications_holder').append($('<div class="demo-facebook-card popup-open" data-popup=".comments" onclick="getComments2(this);" data-newsid = "' + news_id +'" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + not_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ pott_name +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><br><div class="demo-facebook-name">' + notification_text + '<br><br></div></div></div>'));

                        } else if (thistype == "share"){

                            $('#notifications_holder').append($('<div class="demo-facebook-card" data-newsid = "' + news_id +'" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + not_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ pott_name +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><br><div class="demo-facebook-name">' + notification_text + '<br><br></div></div></div>'));
                       
                        } else if (thistype == "purchase"){

                            $('#notifications_holder').append($('<div class="demo-facebook-card" data-newsid = "' + news_id +'" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + not_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ pott_name +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><br><div class="demo-facebook-name">' + notification_text + '<br><br></div></div></div>'));
                       
                        }
                  
                }
                


            }

            app.preloader.hide();
        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

        app.preloader.hide();
        showToast("Network Error");

      }
    });


}

function getMyChats(){

    if(show_chats_loading == 1){

     app.preloader.show();
     
    }
    var url_real = CONFIG + 'inc/android_get_chatlist.php';

     var loginData = {
        myid : my_user_sys_id,
        mypass : my_e_password,
        "my_app_version" : my_app_version
    };          

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
            var newsResponse = JSON.parse(response);
            console.log(newsResponse);
            var total_news_num = Object.keys(newsResponse["chats"]).length;

            if(total_news_num <= 1){

                showToast("You have no chats");

            } else {

              document.getElementById("tab-2").innerHTML = "";

                for (var i = 0; i  < total_news_num; i++) {

                        var chat_id = escapeHtml(newsResponse["chats"][i]["chat_id"]);
                        var receiver_full_name = escapeHtml(newsResponse["chats"][i]["receiver_full_name"]);
                        var receiver_pottname = newsResponse["chats"][i]["receiver_pottname"];
                        var verified_tag = newsResponse["chats"][i]["verified_tag"];
                        var news_maker_pro_pic = newsResponse["chats"][i]["profile_picture"];
                        var last_msg = escapeHtml(newsResponse["chats"][i]["last_msg"]);
                        var last_msg_time = newsResponse["chats"][i]["last_msg_time"];

                        if(verified_tag != null && verified_tag.trim() == "1"){
                            verified_status_display_style = "";
                        } else {
                            verified_status_display_style = "none";
                        }

                        if(news_maker_pro_pic.trim() == "" || news_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                            news_maker_pro_pic = "img/avatar.png"
                        }

                        if(last_msg == ""){
                          last_msg = "...";
                        }
                        last_msg = urlify(last_msg);
                        last_msg = getAllHashtagReferences(last_msg);
                        last_msg = getAllPottnameReferences(last_msg);
                        if(receiver_pottname != "" && chat_id != "" && receiver_full_name != ""){
                            $('#tab-2').append($('<a href="/messages/" class="item-link item-content" onclick="startChat(this)" data-receiverpic = "' + news_maker_pro_pic + '"  data-receivername = "' + receiver_full_name + '" data-receiverpottname = "' + receiver_pottname + '" data-tablename = "' + chat_id + '"><div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0; background-color: transparent;"><div class="item-title-row" style="float: right;margin-right: 5px;"><div class="item-after" style="font-size: 10px;">' + last_msg_time + '</div></div><div class="card-header"><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ receiver_pottname +'" style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 10px"></div><div class="demo-facebook-name" style="font-weight : bolder;">' + receiver_full_name + '&nbsp; |&nbsp; @' + receiver_pottname + ' <i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="overflow: hidden; text-overflow: hidden; -webkit-line-clamp:1; -webkit-box-orient: vertical; display: -webkit-box; font-size: 13px; margin-right: 5px;">' + last_msg + '</div><br></div></a>'));
                        }
                  
                }
                


            }

            if(show_chats_loading == 1){
              
              app.preloader.hide();
              show_chats_loading = 0;
            }
        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

        app.preloader.hide();
        showToast("Network Error");

      }
    });


}

function refreshMessages(){

  document.getElementById("receiver_name_messages").innerHTML = "";

}

function startChat(x){

    var this_receiverpottname = x.getAttribute("data-receiverpottname").trim();
    var this_receivername = x.getAttribute("data-receivername").trim();
    var chat_table = x.getAttribute("data-tablename").trim();
    var receiverpic = x.getAttribute("data-receiverpic").trim();

    setTimeout(function () {

      console.log("starting chat");
      console.log("this_receiverpottname : " + this_receiverpottname);
      console.log("this_receivername : " + this_receivername);
      console.log("chat_table : " + chat_table);
      console.log("receiverpic : " + receiverpic);

      document.getElementById("receiver_name_messages").innerHTML = this_receivername;
      var message_btn = document.getElementById("send_message_btn");

      if(receiverpic == "img/avatar.png"){
        real_receiver_pic = "";
      } else {
        real_receiver_pic = receiverpic;
      }

      message_btn.setAttribute("data-receiverpic", real_receiver_pic);
      message_btn.setAttribute("data-receivername", this_receivername);
      message_btn.setAttribute("data-chattable", chat_table);
      message_btn.setAttribute("data-receiverpottname", this_receiverpottname);

        if(oldChatTableNameGlobal != chat_table){
          document.getElementById("messages_holder").innerHTML = "";
          oldChatTableNameGlobal = chat_table;
          var rootRef = firebase.database().ref(chat_table).child(chat_table).limitToLast(1);


          rootRef.on('value', function(snapshot) {
          console.log("snapshot.numChildren() " + snapshot.numChildren());
          snapshot.forEach(function(childSnapshot) {

              var childData = childSnapshot.val();

              console.log(childData);
              var the_message = childData["message"];

              the_message = escapeHtml(the_message);
              the_message = urlify(the_message);
              the_message = getAllHashtagReferences(the_message);
              //the_message = getAllPottnameReferences(the_message);


              var the_timeStamp = childData["timeStamp"];
              var the_time = enochtimetodate(the_timeStamp);

              old_the_timeStamp = the_timeStamp;
              var the_mypottname = childData["userModel"]["pottname"];
              if(childData["file"] != undefined && childData["file"] != null){
              
                var pic_url = childData["file"]["url_file"];
                var pic_display_style = "";

              } else {

                var pic_url = "";
                var pic_display_style = "none";

              }

              if(the_mypottname.trim() != my_pot_name){

                    $('#messages_holder').append($('<div class="message message-sent"><div class="message-content"><div class="message-name">' + the_time + '</div><div class="message-bubble"><div class="message-text">' + the_message + ' <img style=" width : 100%; display : ' + pic_display_style + '" src="' + pic_url + '" /></div></div></div></div>'));
             
              } else {

                    $('#messages_holder').append($('<div class="message message-received"><div class="message-avatar" style="background-image:url(' + receiverpic + ')"></div><div class="message-content"><div class="message-name">' + the_time + '</div><div class="message-bubble"><div class="message-text">' + the_message + ' <img style=" width : 100%; display : ' + pic_display_style + '" src="' + pic_url + '" /></div></div></div></div>'));
              
              }
              var objDiv = document.getElementById("messages_holder");
              objDiv.scrollTop = objDiv.scrollHeight;

          });
        });
      }

    }, 2000);

}


function checkLongPressStart(type){
    console.log("type : " + type);
    newsIdForCartGlobal = "";
    if(type == "message"){

      timer = setTimeout( removeMessageImage, 2000 );

    } else if(type == "empty_cart"){

      timer = setTimeout( emptyCart, 2000 );

    } else if(type == "send_tokens"){
      
      timer = setTimeout( setTokens, 2000 );

    } else if(type != "" && type != "message" && type != "empty_cart" && type != "send_tokens"){

      newsIdForCartGlobal = type.getAttribute("data-newsid");
      news_type = type.getAttribute("data-type");

      console.log("news_type : " + news_type);
      console.log("newsIdForCartGlobal : " + newsIdForCartGlobal);

      if(newsIdForCartGlobal != null && newsIdForCartGlobal != "" && news_type == "up4sale"){

        timer = setTimeout( addToCart, 2000 );

      } else {

        showToast("Failed to add to cart");

      }

    }

};

function checkLongPressEnd(){
  clearTimeout( timer );
};

function setTokens(){

  current_all_tokens = localStorage.getItem("all_slydepay_tokens");
  document.getElementById("contact_input_main").value = current_all_tokens;
  localStorage.setItem("all_slydepay_tokens", "");
  app.dialog.alert("All purchase tokens have been set to contact field. Click the contact FishPot Inc option and send the tokens. Please make sure you send them to FishPot Inc if you have an issue with a transaction. If you do not send them now, all the tokens will be lost", "Alert");
}

function emptyCart(){

    var myCartItems = localStorage.getItem("myCartItems");

    document.getElementById("cart_proceed_btn").innerHTML = "Cart - Empty";

    if(myCartItems == null){

        showToast("You have no items in your cart");

    } else {

      localStorage.removeItem('myCartItems');
      showToast("Cart Is Emptied");

    }

}

function addToCart(){

  var myCartItems = localStorage.getItem("myCartItems");

  if(myCartItems == null || myCartItems.trim() == ""){

      var myCartItems = [];

      myCartItems[0] = newsIdForCartGlobal;

      localStorage.setItem("myCartItems", JSON.stringify(myCartItems));
      showToast("Added to cart");

  } else {

      myCartItems = JSON.parse(myCartItems);
      if(myCartItems.indexOf(newsIdForCartGlobal) < 0){
        myCartItems.push(newsIdForCartGlobal);
        localStorage.setItem("myCartItems", JSON.stringify(myCartItems));
        showToast("Added to cart");
      } else {
        showToast("Item exists in cart");
      }

  }

}

function setFinalPriceCart(x){

      ttl_quantity = x.getAttribute("data-allitemsnum");

      my_buyreceivername = document.getElementById("cart_receiver_name").value;
      my_buyreceiverphone = document.getElementById("cart_receiver_phone").value;
      my_buydeliveryaddress = document.getElementById("cart_delivery_address").value;
      my_deliverytype = document.getElementById("cart_delivery_type").value;
      generic_news_item_name = "Multiple Items From Cart";
      generic_news_type = "cart";
      this_agreement = document.getElementById('cart_check_agreement_main');

      if( !this_agreement.checked || my_buyreceivername.trim() == "" || 
          my_buyreceiverphone.trim() == "" || my_buydeliveryaddress.trim() == "" || 
          my_deliverytype.trim() == ""){

          showToast("Complete all fields");

      } else {


    ttl_quantity = parseInt(ttl_quantity);

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'total_items' : ttl_quantity,
          'delivery_address' : my_buydeliveryaddress,
          'adetor_delivery_type' : my_deliverytype,
          'mycountry' : my_country
      };     

    cart_items_purchased_info = {};
    my_buyquantity = 0;
    allow_process = 1;

    for(y = 1; y < ttl_quantity + 1; y++){

        var this_item_index_name = "item_quantity_" + y;
        var item_newsid_index = "item_newsid_" + y;
        var x = document.getElementById(item_newsid_index);
        var this_item_quantity = x.value;
        var this_item_newsid = x.getAttribute("data-newsid");
        if(parseInt(this_item_quantity) > 0 && this_item_newsid.trim() != ""){

            loginData[this_item_index_name] =  this_item_quantity;
            loginData[item_newsid_index] =  this_item_newsid;
            my_buyquantity = parseInt(this_item_quantity) + my_buyquantity;
            var this_cart_item_info = {};
            this_cart_item_info["news_id"] = this_item_newsid;
            this_cart_item_info["this_item_index_name"] = this_item_index_name;
            this_cart_item_info["this_item_quantity"] = this_item_quantity;
            cart_items_purchased_info[y.toString()] = (this_cart_item_info);
            my_buyquantity = parseInt(my_buyquantity) + parseInt(this_item_quantity);

        } else {
          allow_process = 0;
        }

    }

    if(allow_process == 0){
        
        showToast("Complete all fields properly");
        return;
    }

      localStorage.setItem("cartItemsNow", JSON.stringify(cart_items_purchased_info));

      app.preloader.show();

        var url_real = CONFIG + 'inc/android_calculate_delivery_and_total_charge_cart.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);


            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "cart";
                var adetor_news_id = randomString();
                var adetor_receiver_name = my_buyreceivername;
                var adetor_receiver_phone = my_buyreceiverphone;
                var adetor_delivery_address = my_buydeliveryaddress + "  ---  " +  newsResponse["hits"][0]["destination_location_name"];
                var adetor_delivery_type = my_deliverytype;
                var item_quantity = my_buyquantity;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = parseFloat(total_charge_num) - parseFloat(delivery_charge_num);
                var delivery_charge_num = newsResponse["hits"][0]["delivery_charge_num"];
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = total_charge_num;
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = "Globe Cart Items";

                current_order_index = addPurchaseInfo(this_purchase_info);

                console.log(this_purchase_info);

document.getElementById("transaction_cart_info_itemprice_main").innerHTML = adetor_currency + " " +  ((parseFloat(total_charge_num) - parseFloat(delivery_charge_num)) / parseFloat(item_quantity)).toFixed(2);
document.getElementById("transaction_cart_info_itemquantity_main").innerHTML = item_quantity;
document.getElementById("transaction_cart_info_receivername_main").innerHTML = adetor_receiver_name;
document.getElementById("transaction_cart_info_receiverphone_main").innerHTML = adetor_receiver_phone;
document.getElementById("transaction_cart_info_deliverylocation_main").innerHTML = newsResponse["hits"][0]["destination_location_name"];
document.getElementById("transaction_cart_info_deliverycharge_main").innerHTML = newsResponse["hits"][0]["delivery_charge_str"];
document.getElementById("transaction_cart_info_totalcharge_main").innerHTML = adetor_currency + " " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("transaction_cart_info_totalcharge_cedis_main").innerHTML = "Ghc " + newsResponse["hits"][0]["total_charge_num_cedis"];

          fixSaleForm('cart', '2', '');

              } else {

              showToast("FishPott could not find the delivery address. Please try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }


function getCartItems(){


    var myCartItems = localStorage.getItem("myCartItems");

    if(myCartItems != null && myCartItems.trim() != ""){

              myCartItems = JSON.parse(myCartItems);
              length_of_cart = myCartItems.length;

              if(length_of_cart > 0){


                    app.dialog.preloader('fetching cart items...');

                    var url_real = CONFIG + 'inc/android_get_cart_items_info.php';

                    var loginData = {
                        myid : my_user_sys_id,
                        mypass : my_e_password,
                        items_number : length_of_cart,
                        i_country : my_country
                    };         

                    for(var k = 0; k < length_of_cart; k++){

                        thisitem = "item_" + (k + 1);
                        loginData[thisitem] = myCartItems[k];
                    }

                    console.log(loginData);

                    app.request({
                      type: "POST",
                      url: url_real,
                      data: loginData,
                      success: function(response){
                      app.dialog.close();
                        console.log(response);

                        if(response.trim() == ""){

                            $('#cart_box_close_main').click();
                            showToast("Cart Items Fetch Failed");

                        } else {
                                   
                            var newsResponse = JSON.parse(response);

                            console.log(newsResponse);
                            var total_news_num = Object.keys(newsResponse["hits"]).length;

                            if(total_news_num <= 0){

                                $('#cart_box_close_main').click();
                                showToast("Cart Items Fetch Failed");

                            } else {

                                var checkout_btn_cart = document.getElementById("checkout_btn_cart");
                                checkout_btn_cart.setAttribute("data-allitemsnum", total_news_num);
                                document.getElementById("cart_results_holder").innerHTML = "";
                                document.getElementById("cart_title").innerHTML = "G- Cart ( " + total_news_num + " )";
                                //$('#buyfromcartitemlist').append($('<div style="display : none;" class="w3-container w3-card w3-white w3-round w3-margin" ><input value = "' + total_news_num +  '" id="ttl_quantity" /></div>')); 
                                
                                for (var i = total_news_num-1; i >= 0; i--) {

                                        var item_price = newsResponse["hits"][i]["this_transaction_currency"] + " " + newsResponse["hits"][i]["price_per_item"];
                                        var item_news_id = newsResponse["hits"][i]["item_news_id"];
                                        var item_name = newsResponse["hits"][i]["item_name"];
                                        var news_sub = newsResponse["hits"][i]["news_sub"];
                                        var item_image = newsResponse["hits"][i]["item_image"];
                                        var item_quantity = newsResponse["hits"][i]["item_quantity"];
                                        var item_sale_status = newsResponse["hits"][i]["sale_status"];

                                        cart_item_id = "item_newsid_" + (i+1);

                                        item_name = escapeHtml(item_name);
                                        item_name = urlify(item_name);
                                        item_name = getAllHashtagReferences(item_name);

                                        news_sub = escapeHtml(news_sub);
                                        news_sub = urlify(news_sub);
                                        news_sub = getAllHashtagReferences(news_sub);

                                        if(item_image.trim() == "" || item_image == "http://fishpott.com/pic_upload/" || item_image == "https://fishpott.com/pic_upload/"){
                                            item_image = "img/avatar.png"
                                        }

                                        console.log("item_quantity  :  " + item_quantity);

                                        if(item_quantity > 0 || item_sale_status.trim() != "0"){

                                            $('#cart_results_holder').append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><div class="demo-facebook-avatar" style="background-image: url(' + item_image + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px;"></div><div class="demo-facebook-name">' + item_name + '</div><div class="demo-facebook-date">' + item_price + ' per item</div><div class="demo-facebook-date">Availble Quantity : ' + item_quantity + '</div></div><div class="list no-hairlines-md"><ul><li class="item-content item-input"><div class="item-inner"><div class="item-title item-label">How many do you want to buy (Maximum : ' + item_quantity + ')</div><div class="item-input-wrap"><input id="' + cart_item_id + '" data-maxquantity = "' + item_quantity + '"  data-newsid = "' + item_news_id + '" type="number" min="1" placeholder="Enter Quantity"><span class="input-clear-button"></span></div></div></li></ul></div></div>'));
                                        }
                                  
                                }

                            }

                        }
                      },

                      error: function(XMLHttpRequest, textStatus, errorThrown) {
                            app.dialog.close();
                            showToast("Network Error. Try again");
                      }
                    });




              } else {

                    toastr.info("You have no items in your cart");

              }

    } else {

        toastr.info("You have no items in your cart");

    }


}

function removeMessageImage(){

  document.getElementById("send_pic_icon_ios").style.color = "";
  document.getElementById("upload_message_pic_message").value = "";
  showToast("Image removed");
  document.getElementById("send_pic_icon_android").style.color = "";
}

function setImageAddedColor(){

  var img_added_to_msg = document.getElementById("upload_message_pic_message").value;

  if(img_added_to_msg != ""){
    document.getElementById("send_pic_icon_ios").style.color = "green";
    showToast('Image Attached. Long Press icon to remove'); 
    document.getElementById("send_pic_icon_android").style.color = "green";
  } else {
    document.getElementById("send_pic_icon_ios").style.color = "";
    showToast("No image added");
    document.getElementById("send_pic_icon_android").style.color = "green";
  }

}

function async(your_function, callback) {
    setTimeout(function() {

          your_function;

        if (callback) {callback}
    }, 0);
}


function sendMessage(x){
    //x = document.getElementById('send_message_btn');
    var upload_message_pic = document.getElementById("upload_message_pic_message").value;
    var this_message = document.getElementById("message_input_messages").value;
    var receiver_fullname = x.getAttribute("data-receivername");
    var receiver_pottname = x.getAttribute("data-receiverpottname");
    var receiver_profile_picture = x.getAttribute("data-receiverpic");
    var chat_table = x.getAttribute("data-chattable");


    var newRef = firebase.database().ref(chat_table).child(chat_table);

    console.log("this_message : " + this_message);
    console.log("receiver_profile_picture : " + receiver_profile_picture);
    console.log("receiver_fullname : " + receiver_fullname);
    console.log("chat_table : " + chat_table);
    console.log("receiver_pottname : " + receiver_pottname);
    console.log("upload_message_pic : " + upload_message_pic);


    if((this_message.trim() != "" || upload_message_pic != "" ) && receiver_pottname != "" &&  chat_table != ""
       && receiver_pottname != undefined && chat_table != undefined){
  
        document.getElementById("message_input_messages").value = "";  

        this_message = escapeHtml(this_message);
        this_message = urlify(this_message);
        this_message = getAllHashtagReferences(this_message);
        //this_message = getAllPottnameReferences(this_message);

        var news_date = getCurrentDate();
        var news_maker_full_name = escapeHtml(my_full_name);
        var news_maker_pottname = my_pot_name;
        var news_maker_pro_pic = my_profile_picture;
        var news_maker_verified_status = my_verified_tag;

          
        var this_timestamp = (new Date).getTime().toString();;

        var userModelJson = {
            'name' : receiver_fullname,
            'photo_profile' : receiver_profile_picture,
            'pottname' : receiver_pottname
        };         


        if(upload_message_pic != ""){

          const ref = firebase.storage().ref('images');
          const file = document.querySelector('#upload_message_pic_message').files[0]
          const name = (+new Date()) + '-' + file.name;
          const metadata = {
          contentType: file.type
          };
          document.getElementById("upload_message_pic_message").value = "";
          const task = ref.child(name).put(file, metadata);
          task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then((url) => {

              var fileModelJson = {
                  'name_file' : name,
                  'size_file' : "",
                  'type' : file.type,
                  'url_file' : url
              };         
              removeMessageImage();
              var messageJson = {
                'file' : fileModelJson,
                'message' : this_message,
                'timeStamp' : this_timestamp,
                'userModel' : userModelJson
              };

              console.log(messageJson);
              console.log(url);
              //document.querySelector('#someImageTagID').src = url;

              var pic_url = url;
              var pic_display_style = "";
          
              var newUserRef = newRef.push();
              newUserRef.set(messageJson);

        })
        .catch(console.error);
        //this_message = "Image";
      } else {

        var pic_url = "";
        var pic_display_style = "none";

        var messageJson = {
          'message' : this_message,
          'timeStamp' : this_timestamp,
          'userModel' : userModelJson
        };

        console.log(messageJson);

        var newUserRef = newRef.push();
        newUserRef.set(messageJson);

        //$('#messages_holder').append($('<div class="message message-received"><div class="message-avatar" style="background-image:url(' + receiverpic + ')"></div><div class="message-content"><div class="message-name">' + the_time + '</div><div class="message-bubble"><div class="message-text">' + this_message + ' <img style=" width : 100%; display : ' + pic_display_style + '" src="' + pic_url + '" /></div></div></div></div>'));

      }


    document.getElementById("message_input_messages").value = "";  
    document.getElementById("upload_message_pic_message").value = "";  

    var loginData = {
        myid : my_user_sys_id,
        mypass : my_e_password,
        "my_app_version" : my_app_version,
        'receiver_pottname' : receiver_pottname,
        'msg_datetime' : this_timestamp,
        'msg' : this_message,
        "chat_table" : chat_table
    };         

    var url_real = CONFIG + 'inc/android_notify_new_message.php';

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){

            console.log("Message notification sent");

      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {

          showToast("Network Error");

      }
    });



    }

    /*
     else {

       showToast('You should at least say something');

    }  
    */



}

 function enochtimetodate(enochtimestamp){
    var a = parseInt(enochtimestamp);
    if(typeof a === "number"){        

        var dateVal ="/Date(" + enochtimestamp + ")/";
        var date = new Date( parseFloat( dateVal.substr(6 )));
        if(parseInt(date.getMinutes()) < 10){
          var mins = '0' + date.getMinutes();
        } else {
          
          var mins = date.getMinutes();
        }
         
        if(parseInt(date.getHours()) < 12){
          
          var hrs = '0' + date.getHours();
          var am_or_pm = "AM";
          
        } else {
          
          var hrs = parseInt(date.getHours()) - 12;
          var am_or_pm = "PM";
          
        }
          
        //(date.getMonth() + 1) + "/" + date.getDate() + "/" +date.getFullYear() + " " + 
        var this_time = hrs + ":" + mins + " " + am_or_pm;
        console.log("enochtimestamp is A NUMBER");
        return this_time;

    } else {

        console.log("enochtimestamp NOT a number");
        return enochtimestamp;

    }
 }


function getComments(x){

  document.getElementById("be_first_to_comment_info").style.display = "none";
  document.getElementById("comments_holder").innerHTML = "";
  var commentBtn = document.getElementById("post_comment_btn_main");
  this_newsid = x.getAttribute("data-newsid");
  commentBtn.setAttribute("data-newsid", this_newsid);
  showMoreInfo(this_newsid, "comments_holder", 2, 1);

}

function getComments2(x){
  
  document.getElementById("be_first_to_comment_info").style.display = "none";
  document.getElementById("comments_holder").innerHTML = "";
  var commentBtn = document.getElementById("post_comment_btn_main");
  this_newsid = x.getAttribute("data-newsid");
  commentBtn.setAttribute("data-newsid", this_newsid);
  showMoreInfo(this_newsid, "comments_holder", 2, 0);

}

function getLikes(x){

  document.getElementById("likes_holder_main").innerHTML = "";
  this_newsid = x.getAttribute("data-newsid");
  showMoreInfo(this_newsid, "likes_holder_main", 1, 1);

}

function getLikes2(x){

  document.getElementById("likes_holder_main").innerHTML = "";
  this_newsid = x.getAttribute("data-newsid");
  showMoreInfo(this_newsid, "likes_holder_main", 1, 0);

}

 function getCurrentDate(){

  var currentdate = new Date(); 
  var d = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
  return d;

 }


function postComment(x){

    var this_comment = document.getElementById("comment_input_main").value;
    var this_newsid = x.getAttribute("data-newsid");

    if(this_comment.trim() != ""){

    document.getElementById("be_first_to_comment_info").style.display = "none";
    document.getElementById("comment_input_main").value = "";  
    var news_type = this_comment;
    news_type = urlify(news_type);
    news_type = getAllHashtagReferences(news_type);
    news_type = getAllPottnameReferences(news_type);

    var news_date = getCurrentDate();
    var news_maker_full_name = escapeHtml(my_full_name);
    var news_maker_pottname = my_pot_name;
    var news_maker_pro_pic = my_profile_picture;
    var news_maker_verified_status = my_verified_tag;

      $('#comments_holder').append($('<div class="message message-received"><div class="message-avatar" style="background-image:url(' + news_maker_pro_pic + '); opacity: 1;"></div><div class="message-content"><div class="message-name" style="display: block;">'+ news_maker_full_name +' | @'+ news_maker_pottname +' <i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="message-bubble"><div class="message-text">' + news_type + '<br><span style="float: right; font-size: 10px;">'+ news_date +' </span></div></div></div></div><br>'));
      
      var url_real = CONFIG + 'inc/android_comment_this.php';

       var loginData = {
          "my_app_version" : my_app_version,
          myid : my_user_sys_id,
          mypass : my_e_password,
          news_id : this_newsid,
          myshare_addition : this_comment
      };          

      app.request({
        type: "POST",
        url: url_real,
        data: loginData,
        success: function(response){


          },

        error: function(XMLHttpRequest, textStatus, errorThrown) {
          showToast("Network Error");
        }
      });

    } else {

       showToast('You should at least say something');

    }  



}

function showMoreInfo(this_newsid,holder_id,type, news_show_toggle){

    if(type == 1){

        type = "like";
        title = "Likes and dislikes";

    } else if(type == 2) {

        type = "comment";
        title = "Comments";

    } else if(type == 3) {

        type = "share";
        title = "Reposts";

    } else if(type == 4) {

        type = "purchase";
        title = "Purchases / Contributions";

    } else {
      showToast("Something went awry");
      return;
    }

    app.preloader.show();
    var url_real = CONFIG + 'inc/android_get_generic_item_info.php';

     var loginData = {
        "my_app_version" : my_app_version,
        myid : my_user_sys_id,
        mypass : my_e_password,
        generic_id : this_newsid,
        generic_item_type : type
    };          

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
            var newsResponse = JSON.parse(response);
            var total_news_num = Object.keys(newsResponse["hits"]).length;

            if(total_news_num <= 1){

                //showToast("No " + title + " found");
                if(type == 2){

                  document.getElementById("be_first_to_comment_info").style.display = "";

                } else if (type == 1){
                  
                  $('#close_likes_main').click();

                }

            } else {

            document.getElementById(holder_id).innerHTML = "";

                for (var i = news_show_toggle; i  < total_news_num; i++) {

                        var news_type = newsResponse["hits"][i]["news_type"];
                        var news_date = newsResponse["hits"][i]["news_date"];
                        var news_maker_full_name = escapeHtml(newsResponse["hits"][i]["news_maker_full_name"]);
                        var news_maker_pottname = newsResponse["hits"][i]["news_maker_pottname"];
                        var news_maker_pro_pic = newsResponse["hits"][i]["news_maker_pro_pic"];
                        var news_maker_verified_status = newsResponse["hits"][i]["news_maker_verified_status"];
                        var thistype = newsResponse["hits"][i]["type"];


                        if(news_maker_pro_pic.trim() == "" || news_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                            news_maker_pro_pic = "img/avatar.png"
                        }

                        if(news_maker_verified_status != null && news_maker_verified_status.trim() == "1"){
                            news_maker_verified_status_display_style = "";
                        } else {
                            news_maker_verified_status_display_style = "none";
                        }

                        news_type = urlify(news_type);
                        news_type = getAllHashtagReferences(news_type);
                        news_type = getAllPottnameReferences(news_type);

                        if(i == 0){

                            setNews(1, newsResponse, holder_id);

                        }else if(thistype == "like"){

                            if(news_type == "1"){

                                $('#'+holder_id).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="#" class="link" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;color: #ff6300">heart_fill</i></a><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);"  style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right : 5px;"></div><div class="demo-facebook-name popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);" >' + news_maker_full_name + '</div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div></div>'));
                            
                            } else {

                                $('#'+holder_id).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="#" class="link" style="float: right;"><img src="img/dislike_fill.svg" width="24px" height="24px"></a><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);"  style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right : 5px;"></div><div class="demo-facebook-name popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);" >' + news_maker_full_name + '</div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div></div>'));
                            
                            }


                        } else if (thistype == "comment"){

                                $('#'+holder_id).append($('<div class="message message-received"><div class="message-avatar popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);"  style="background-image:url(' + news_maker_pro_pic + '); opacity: 1;"></div><div class="message-content"><div class="message-name popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);" style="display: block;">'+ news_maker_full_name +' | @'+ news_maker_pottname +' <i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="message-bubble"><div class="message-text">' + news_type + '<br><span style="float: right; font-size: 10px;">'+ news_date +' </span></div></div></div></div><br>'));

                        } else if (thistype == "share"){

                                $('#'+holder_id).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="#" class="link" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;color: #ff6300">heart_fill</i></a><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);"  style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right : 5px;"></div><div class="demo-facebook-name popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);" >' + news_maker_full_name + '</div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div></div>'));
                       
                        } else if (thistype == "purchase"){

                                $('#'+holder_id).append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="#" class="link" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;color: #ff6300">heart_fill</i></a><div class="demo-facebook-avatar popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);"  style="background-image: url(' + news_maker_pro_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right : 5px;"></div><div class="demo-facebook-name popup-open" data-popup=".pott" data-pottname = "'+ news_maker_pottname +'"  onclick="getPottInfo(this);" >' + news_maker_full_name + '</div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + news_maker_pottname + '</div><div class="demo-facebook-date">' + news_date + '</div></div></div>'));
                       
                        }
                  
                }


            }

            app.preloader.hide();
        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

        app.preloader.hide();
        showToast("Network Error");

      }
    });

 }

 function rePostNews(reposttext){

      var url_real = CONFIG + "inc/android_share_this.php";

      var loginData = {
          "my_app_version" : my_app_version,
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          'news_id' : globalNewsId,
          'myshare_addition' : reposttext
      };     
        
      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

                //document.getElementById("contact_input_main").value = "";
                showToast("Reposted");
                app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                showToast("Network Error. Try again");
                app.preloader.hide();
          }
        });

 }

 function callbackOk(reposttext){

   rePostNews(reposttext);

 }

 function callbackCancel(reposttext){

   //rePostNews(reposttext);

 }

function returnChatTableName(my_pott_name, sender_pott_name){

     var my_pot_name_firstletter = my_pott_name.charAt(0);
     var sender_firstletter = sender_pott_name.charAt(0);

     var A = my_pot_name_firstletter.toLowerCase();
     var B = sender_firstletter.toLowerCase();

     if (A < B){

        return my_pott_name + sender_pott_name;

     } else if (A > B){

       return  sender_pott_name + my_pott_name;

     } else if (A == B){

       return  sender_pott_name + my_pott_name;

     } else{

       return "0";

     }
}

 function fixSaleForm(form_type, stage_wanted, reset_totally){

  if(form_type == "advert"){


    if(stage_wanted == "1"){

      document.getElementById("advert_stage_3_form_main").style.display = "none";
      document.getElementById("advert_stage_2_form_main").style.display = "none";
      document.getElementById("advert_stage_1_form_main").style.display = "";

    } else if (stage_wanted == "2") {

      document.getElementById("advert_stage_1_form_main").style.display = "none";
      document.getElementById("advert_stage_3_form_main").style.display = "none";
      document.getElementById("advert_stage_2_form_main").style.display = "";

    }else if (stage_wanted == "3") {

      document.getElementById("advert_stage_1_form_main").style.display = "none";
      document.getElementById("advert_stage_2_form_main").style.display = "none";
      document.getElementById("advert_stage_3_form_main").style.display = "";

    }

  } else if(form_type == "up4sale"){

    if(reset_totally == "1"){

      document.getElementById("pott_trader_pic_yardsale_main").style.backgroundImage = "url('avatar.png')";
      document.getElementById("pott_trader_name_yardsale_main").innerHTML = "...";
      document.getElementById("pott_trader_pottname_yardsale_main").innerHTML = "...";
      document.getElementById("quantity_info_yardsale_main").innerHTML = "...";

    }

    if(stage_wanted == "1"){

      document.getElementById("transaction_yardsale_stage_3_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_2_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_1_main").style.display = "";

    } else if (stage_wanted == "2"){

      document.getElementById("transaction_yardsale_stage_3_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_1_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_2_main").style.display = "";

    } else if(stage_wanted == "3"){

      document.getElementById("transaction_yardsale_stage_2_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_1_main").style.display = "none";
      document.getElementById("transaction_yardsale_stage_3_main").style.display = "";

    }

  } else if(form_type == "shares4sale"){

    if(reset_totally == "1"){

      document.getElementById("pott_trader_pic_sharesale_main").style.backgroundImage = "url('avatar.png')";
      document.getElementById("pott_trader_name_sharesale_main").innerHTML = "...";
      document.getElementById("pott_trader_pottname_sharesale_main").innerHTML = "...";
      document.getElementById("quantity_info_sharesale_main").innerHTML = "...";
      document.getElementById("sharesale_yield_info").innerHTML = "...";

    }

    if(stage_wanted == "1"){

      document.getElementById("transaction_sharesale_stage_3_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_2_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_1_main").style.display = "";

    } else if (stage_wanted == "2"){

      document.getElementById("transaction_sharesale_stage_3_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_1_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_2_main").style.display = "";

    } else if(stage_wanted == "3"){

      document.getElementById("transaction_sharesale_stage_2_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_1_main").style.display = "none";
      document.getElementById("transaction_sharesale_stage_3_main").style.display = "";

    }

  } else if (form_type == "event"){

    if(reset_totally == "1"){

      document.getElementById("pott_trader_pic_event_main").style.backgroundImage = "url('avatar.png')";
      document.getElementById("pott_trader_name_event_main").innerHTML = "...";
      document.getElementById("pott_trader_pottname_event_main").innerHTML = "...";
      document.getElementById("quantity_info_event_main").innerHTML = "...";
      document.getElementById("event_verified_info").innerHTML = "...";

    }

    if(stage_wanted == "1"){

      document.getElementById("transaction_event_stage_3_main").style.display = "none";
      document.getElementById("transaction_event_stage_2_main").style.display = "none";
      document.getElementById("transaction_event_stage_1_main").style.display = "";

    } else if (stage_wanted == "2"){

      document.getElementById("transaction_event_stage_3_main").style.display = "none";
      document.getElementById("transaction_event_stage_1_main").style.display = "none";
      document.getElementById("transaction_event_stage_2_main").style.display = "";

    } else if(stage_wanted == "3"){

      document.getElementById("transaction_event_stage_2_main").style.display = "none";
      document.getElementById("transaction_event_stage_1_main").style.display = "none";
      document.getElementById("transaction_event_stage_3_main").style.display = "";

    }

  } else if(form_type == "fundraiser"){

    if(reset_totally == "1"){

      document.getElementById("pott_trader_pic_fundraiser_main").style.backgroundImage = "url('avatar.png')";
      document.getElementById("pott_trader_name_fundraiser_main").innerHTML = "...";
      document.getElementById("pott_trader_pottname_fundraiser_main").innerHTML = "...";
      document.getElementById("quantity_info_fundraiser_main").innerHTML = "...";
      document.getElementById("fundraiser_verified_info").innerHTML = "...";

    }

    if(stage_wanted == "1"){

      document.getElementById("transaction_fundraiser_stage_3_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_2_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_1_main").style.display = "";

    } else if (stage_wanted == "2"){

      document.getElementById("transaction_fundraiser_stage_3_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_1_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_2_main").style.display = "";

    } else if(stage_wanted == "3"){

      document.getElementById("transaction_fundraiser_stage_2_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_1_main").style.display = "none";
      document.getElementById("transaction_fundraiser_stage_3_main").style.display = "";

    }

  } else if(form_type == "cart"){

    if(reset_totally == "1"){

      document.getElementById("cart_results_holder").innerHTML = "";

    }

    if(stage_wanted == "1"){

      document.getElementById("transaction_cart_stage_3_main").style.display = "none";
      document.getElementById("transaction_cart_stage_2_main").style.display = "none";
      document.getElementById("transaction_cart_stage_1_main").style.display = "";

    } else if (stage_wanted == "2"){

      document.getElementById("transaction_cart_stage_3_main").style.display = "none";
      document.getElementById("transaction_cart_stage_1_main").style.display = "none";
      document.getElementById("transaction_cart_stage_2_main").style.display = "";

    } else if(stage_wanted == "3"){

      document.getElementById("transaction_cart_stage_2_main").style.display = "none";
      document.getElementById("transaction_cart_stage_1_main").style.display = "none";
      document.getElementById("transaction_cart_stage_3_main").style.display = "";

    }

  }
 }

function getBuyItemInfo(x){

  type = x.getAttribute("data-type");
  news_id = x.getAttribute("data-newsid");

  if(type != "fundraiser" && type != "event" && type != "shares4sale" && type != "up4sale"){
    
    $('#transaction_fundraiser_close_main').click();
    $('#transaction_yardsale_close_main').click();
    $('#transaction_shares_close_main').click();
    $('#transaction_event_close_main').click();
    showToast("Something went. Transaction type could not be determined");
    return;
  } else {

    fixSaleForm(type, '1', '1');

  }


      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'this_newsmaker_pottname' : "",
          'generic_id' : news_id,
          'i_country' : my_country
      };     

        var url_real = CONFIG + 'inc/android_check_sale_status_return_item_info.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){

            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);
            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var sale_status = newsResponse["hits"][0]["sale_status"];
                var seller_verified_status = newsResponse["hits"][0]["seller_verified_status"];
                var item_type = newsResponse["hits"][0]["item_type"];
                var item_news_id = newsResponse["hits"][0]["item_news_id"];
                var item_name = newsResponse["hits"][0]["item_name"];
                var item_image = newsResponse["hits"][0]["item_image"];
                var price_per_item = newsResponse["hits"][0]["price_per_item"];
                var this_transaction_currency = newsResponse["hits"][0]["this_transaction_currency"];
                var item_weight_type = newsResponse["hits"][0]["item_weight_type"];
                var item_location = newsResponse["hits"][0]["item_location"];
                var item_quantity = newsResponse["hits"][0]["item_quantity"];
                var item_verified_tag = newsResponse["hits"][0]["item_verified_tag"];
                var news_maker_pro_pic = newsResponse["hits"][0]["news_maker_pro_pic"];
                var news_maker_pottname = newsResponse["hits"][0]["news_maker_pottname"];
                var news_date = newsResponse["hits"][0]["news_date"];
                var news_maker_full_name = newsResponse["hits"][0]["news_maker_full_name"];
                var news_type = newsResponse["hits"][0]["news_type"];
                var news_type_title = newsResponse["hits"][0]["news_type_title"];
                var news_maker_verified_status = newsResponse["hits"][0]["news_maker_verified_status"];
                var news_main = newsResponse["hits"][0]["news_main"];
                var news_sub = newsResponse["hits"][0]["news_sub"];
                var news_buy_num = newsResponse["hits"][0]["news_buy_num"];
                var news_sponsored_tag = newsResponse["hits"][0]["news_sponsored_tag"];
                var chat_table = returnChatTableName(my_pot_name, news_maker_pottname);
                var adetor_type = item_type.trim();
                var adetor_news_id = item_news_id;
                globalNewsId = item_news_id;

                 if((price_per_item ==  null || price_per_item == "") && type != "fundraiser"){
                    $('#transaction_fundraiser_close_main').click();
                    $('#transaction_yardsale_close_main').click();
                    $('#transaction_shares_close_main').click();
                    $('#transaction_event_close_main').click();
                    app.preloader.hide();
                    
                    if (type == "event"){
                      showToast("This event is FREE to attend");
                    } else if(type == "shares4sale"){
                      showToast("This item has been sold out");
                    } else if(type == "up4sale"){
                      showToast("This item has been sold out");
                    }

                    return

                } else if(sale_status != "0"){
                    $('#transaction_fundraiser_close_main').click();
                    $('#transaction_yardsale_close_main').click();
                    $('#transaction_shares_close_main').click();
                    $('#transaction_event_close_main').click();
                    app.preloader.hide();

                    if(type == "fundraiser"){
                      showToast("Contributions are no longer allowed on this fundraiser");
                    } else if (type == "event"){
                      showToast("This event may have passed or tickets sold out.");
                    } else if(type == "shares4sale"){
                      showToast("This item has been sold out");
                    } else if(type == "up4sale"){
                      showToast("This item has been sold out");
                    }

                    return
                } else if(news_maker_pottname == null || news_maker_pottname.trim() == ""){

                    $('#transaction_fundraiser_close_main').click();
                    $('#transaction_yardsale_close_main').click();
                    $('#transaction_shares_close_main').click();
                    $('#transaction_event_close_main').click();
                    app.preloader.hide();
                    showToast("Seller not found");
                    return
                } else if(chat_table == "0"){
                    $('#transaction_fundraiser_close_main').click();
                    $('#transaction_yardsale_close_main').click();
                    $('#transaction_shares_close_main').click();
                    $('#transaction_event_close_main').click();
                    app.preloader.hide();
                    showToast("Something went awry. Restart process");
                    return
                }

                if(news_maker_pro_pic.trim() == "" || news_maker_pro_pic == "http://fishpott.com/pic_upload/" || news_maker_pro_pic == "https://fishpott.com/pic_upload/"){
                    news_maker_pro_pic = "img/avatar.png"
                }

                if(adetor_type == "up4sale"){

                  if(news_maker_verified_status != "1"){

                    $('#transaction_yardsale_close_main').click();
                    app.dialog.alert("Seller is not verified. FishPott cannot safeguard this transaction. Please deal with verified sellers only to stay safe", "Sorry");

                  }

                  document.getElementById("pott_trader_pic_yardsale_main").style.backgroundImage = "url('" + news_maker_pro_pic + "')";
                  document.getElementById("pott_trader_name_yardsale_main").innerHTML = news_maker_full_name;
                  document.getElementById("pott_trader_pottname_yardsale_main").innerHTML = "@" + news_maker_pottname;
                  document.getElementById("quantity_info_yardsale_main").innerHTML = "Available Quantity : " + item_quantity;
                  yardsale_view_summary_btn = document.getElementById("view_summary_btn_yardsale_btn");
                  yardsale_view_summary_btn.setAttribute("data-itemname", item_name);
                  yardsale_view_summary_btn.setAttribute("data-itemquantity", item_quantity);
                  chat_transaction_yardsale_main = document.getElementById("chat_transaction_yardsale_main");
                  chat_transaction_yardsale_main.setAttribute("data-tablename", chat_table);
                  chat_transaction_yardsale_main.setAttribute("data-receivername", news_maker_full_name);
                  chat_transaction_yardsale_main.setAttribute("data-receiverpottname", news_maker_pottname);
                  chat_transaction_yardsale_main.setAttribute("data-receiverpic", news_maker_pro_pic);
               
                } else if(type == "fundraiser"){

                  if(item_verified_tag != "1"){

                    document.getElementById("fundraiser_verified_info").innerHTML = "This fundraiser is NOT verified. Please make sure you are completely sure it's for genuine before contributing. You should chat with the organizer and request that the fundraiser be verified with FishPott";

                  } else {

                    document.getElementById("fundraiser_verified_info").innerHTML = "This fundraiser is VERIFIED. This is to say that it's for a genuine course.";
                  
                  }

                  document.getElementById("pott_trader_pic_fundraiser_main").style.backgroundImage = "url('" + news_maker_pro_pic + "')";
                  document.getElementById("pott_trader_name_fundraiser_main").innerHTML = news_maker_full_name;
                  document.getElementById("pott_trader_pottname_fundraiser_main").innerHTML = "@" + news_maker_pottname;
                  document.getElementById("quantity_info_fundraiser_main").innerHTML = "Target : " + price_per_item;
                  fundraiser_view_summary_btn = document.getElementById("view_summary_btn_fundraiser_btn");
                  fundraiser_view_summary_btn.setAttribute("data-itemname", item_name);
                  fundraiser_view_summary_btn.setAttribute("data-itemquantity", price_per_item);
                  chat_transaction_event_main = document.getElementById("chat_transaction_fundraiser_main");
                  chat_transaction_event_main.setAttribute("data-tablename", chat_table);
                  chat_transaction_event_main.setAttribute("data-receivername", news_maker_full_name);
                  chat_transaction_event_main.setAttribute("data-receiverpottname", news_maker_pottname);
                  chat_transaction_event_main.setAttribute("data-receiverpic", news_maker_pro_pic);
                } else if(type == "event"){

                  if(item_verified_tag != "1"){

                    document.getElementById("event_verified_info").innerHTML = "This event is NOT verified. Please make sure you are completely sure it's genuine before buying a ticket. You should chat with the event organizer and request that the event be verified with FishPott";

                  } else {

                    document.getElementById("event_verified_info").innerHTML = "This event is VERIFIED. This is to say that it's genuine and all other's with it's name are not genuine.";
                  
                  }

                  document.getElementById("pott_trader_pic_event_main").style.backgroundImage = "url('" + news_maker_pro_pic + "')";
                  document.getElementById("pott_trader_name_event_main").innerHTML = news_maker_full_name;
                  document.getElementById("pott_trader_pottname_event_main").innerHTML = "@" + news_maker_pottname;
                  document.getElementById("quantity_info_event_main").innerHTML = "Available Tickets : " + item_quantity;
                  event_view_summary_btn = document.getElementById("view_summary_btn_event_btn");
                  event_view_summary_btn.setAttribute("data-itemname", item_name);
                  event_view_summary_btn.setAttribute("data-itemquantity", item_quantity);
                  chat_transaction_event_main = document.getElementById("chat_transaction_event_main");
                  chat_transaction_event_main.setAttribute("data-tablename", chat_table);
                  chat_transaction_event_main.setAttribute("data-receivername", news_maker_full_name);
                  chat_transaction_event_main.setAttribute("data-receiverpottname", news_maker_pottname);
                  chat_transaction_event_main.setAttribute("data-receiverpic", news_maker_pro_pic);
                } else if(type == "shares4sale"){

                  document.getElementById("pott_trader_pic_sharesale_main").style.backgroundImage = "url('" + news_maker_pro_pic + "')";
                  document.getElementById("pott_trader_name_sharesale_main").innerHTML = news_maker_full_name;
                  document.getElementById("pott_trader_pottname_sharesale_main").innerHTML = "@" + news_maker_pottname;
                  document.getElementById("quantity_info_sharesale_main").innerHTML = "Available Quantity : " + item_quantity;
                  event_view_summary_btn = document.getElementById("view_summary_btn_sharesale_btn");
                  event_view_summary_btn.setAttribute("data-itemname", item_name);
                  event_view_summary_btn.setAttribute("data-itemquantity", item_quantity);
                  chat_transaction_event_main = document.getElementById("chat_transaction_sharesale_main");
                  chat_transaction_event_main.setAttribute("data-tablename", chat_table);
                  chat_transaction_event_main.setAttribute("data-receivername", news_maker_full_name);
                  chat_transaction_event_main.setAttribute("data-receiverpottname", news_maker_pottname);
                  chat_transaction_event_main.setAttribute("data-receiverpic", news_maker_pro_pic);
                }

              } else {

                  $('#transaction_fundraiser_close_main').click();
                  $('#transaction_yardsale_close_main').click();
                  $('#transaction_shares_close_main').click();
                  $('#transaction_event_close_main').click();
                  showToast("Item not found");            
            
              }
            } else {


              $('#transaction_yardsale_close_main').click();
              showToast("Item not found");            
            }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });



}

function setFinalPriceAdvert(){

      advert_minimum_age = document.getElementById("advert_minimum_age_main").value.trim();
      advert_maximum_age = document.getElementById("advert_maximum_age_main").value.trim();
      advert_country = document.getElementById("advert_country_main").value.trim();
      advert_days = document.getElementById("advert_days_main").value.trim();

      if(advert_minimum_age.trim() == "" || advert_maximum_age.trim() == "" || 
         advert_country.trim() == "" || advert_days.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(advert_days) < 1){

          showToast("Please check advert duration days");

      } else if(parseInt(advert_minimum_age) < 13 || parseInt(advert_maximum_age) > 200){

          showToast("Please check minimum age");

      } else if(parseInt(advert_maximum_age) < 13 || parseInt(advert_maximum_age) > 200){

          showToast("Please check maximum age");

      } else {

      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'item_order_quantity' : advert_days,
          'advert_maximum_age' : advert_maximum_age,
          'advert_minimum_age' : advert_minimum_age,
          'mycountry' : my_country
      };     

        var url_real = CONFIG + 'inc/android_calculate_total_charge_advert.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);

            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "advert";
                var adetor_news_id = globalNewsId;
                var adetor_receiver_name = advert_minimum_age;
                var adetor_receiver_phone = advert_maximum_age;
                var adetor_delivery_address = "advert";
                var adetor_delivery_type = advert_country;
                var item_quantity = advert_days;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = newsResponse["hits"][0]["price_per_ad_str"];
                var delivery_charge_num = 0;
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = adetor_price_per_item;
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = "FishPott Advertisement";

                /*

                0- this_purchase_info["adetor_type"] = adetor_type;
                1- this_purchase_info["adetor_news_id"] = adetor_news_id;
                2- this_purchase_info["adetor_receiver_name"] = adetor_receiver_name;
                3- this_purchase_info["adetor_receiver_phone"] = adetor_receiver_phone;
                4- this_purchase_info["adetor_delivery_address"] = adetor_delivery_address;
                5- this_purchase_info["adetor_delivery_type"] = adetor_delivery_type;
                6- this_purchase_info["item_quantity"] = item_quantity;
                7- this_purchase_info["adetor_currency"] = adetor_currency;
                8- this_purchase_info["adetor_price_per_item"] = adetor_price_per_item;
                9- this_purchase_info["delivery_charge_num"] = delivery_charge_num;
                10- this_purchase_info["total_charge_num"] = total_charge_num;
                11- this_purchase_info["adetor_status_code"] = adetor_status_code;
                12- this_purchase_info["adetor_pay_type"] = adetor_pay_type;
                13- this_purchase_info["adetor_status_message"] = adetor_status_message;
                14- this_purchase_info["slydepay_order_id"] = slydepay_order_id;
                15- this_purchase_info["total_charge_num_cedis"] = total_charge_num_cedis;
                16- this_purchase_info["total_charge_str"] = total_charge_str;
                17- this_purchase_info["slydepaytoken"] = total_charge_str;
                18- this_purchase_info["slydepayurl"] = total_charge_str;
                19- this_purchase_info["item_name"] = "FishPott Advertisement";

                */

                current_order_index = addPurchaseInfo(this_purchase_info);

                document.getElementById("advert_ad_days_main").innerHTML = advert_days + " days";
                document.getElementById("advert_price_per_ad_main").innerHTML = adetor_price_per_item;
                document.getElementById("advert_target_country_per_ad_main").innerHTML = advert_country;
                document.getElementById("advert_target_min_age_main").innerHTML = advert_minimum_age;
                document.getElementById("advert_target_max_age_main").innerHTML = advert_maximum_age;
                document.getElementById("advert_total_charge_main").innerHTML = total_charge_str;
                document.getElementById("advert_total_charge_cedis_main").innerHTML = "Ghc " + total_charge_num_cedis;

                document.getElementById("advert_stage_3_form_main").style.display = "none";
                document.getElementById("advert_stage_1_form_main").style.display = "none";
                document.getElementById("advert_stage_2_form_main").style.display = "";

              } else {

              showToast("Something went awry. Restart app and try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function setFinalPriceYardSale(x){

      this_item_name = x.getAttribute("data-itemname");
      this_total_itemquantity = x.getAttribute("data-itemquantity");
      this_agreement = document.getElementById('transaction_yardsale_check_agreement_main');
      this_quantity = document.getElementById("transaction_yardsale_quantity_input_main").value.trim();
      this_receiver_name = document.getElementById("transaction_yardsale_receiver_name_input_main").value.trim();
      this_receiver_phone = document.getElementById("transaction_yardsale_receiver_phone_input_main").value.trim();
      this_delivery_address = document.getElementById("transaction_yardsale_delivery_address_input_main").value.trim();
      this_delivery_type = document.getElementById("transaction_yardsale_delivery_type_input_main").value.trim();

      if( !this_agreement.checked || this_quantity.trim() == "" || 
          this_receiver_name.trim() == "" || this_receiver_phone.trim() == "" || 
          this_delivery_address.trim() == "" || this_delivery_type.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(this_quantity) < 1){

          showToast("Please check the quantity you are buying");

      } else if(parseInt(this_quantity) > parseInt(this_total_itemquantity)){

          showToast("You cannot buy more than the total quantity of the item available");

      } else {

      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'item_order_quantity' : this_quantity,
          'delivery_address' : this_delivery_address,
          'adetor_delivery_type' : this_delivery_type,
          'mycountry' : my_country
      };     

        var url_real = CONFIG + 'inc/android_calculate_delivery_and_total_charge_up4sale.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);


            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "up4sale";
                var adetor_news_id = globalNewsId;
                var adetor_receiver_name = this_receiver_name;
                var adetor_receiver_phone = this_receiver_phone;
                var adetor_delivery_address = this_delivery_address + "  --- " +  newsResponse["hits"][0]["destination_location_name"];
                var adetor_delivery_type = this_delivery_type;
                var item_quantity = this_quantity;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = ((parseFloat(total_charge_num) - parseFloat(delivery_charge_num)) / parseFloat(item_quantity)).toFixed(2);
                var delivery_charge_num = newsResponse["hits"][0]["delivery_charge_num"];
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = adetor_price_per_item;
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = this_item_name;

                current_order_index = addPurchaseInfo(this_purchase_info);

document.getElementById("transaction_yardsale_info_itemname_main").innerHTML = this_item_name;
document.getElementById("transaction_yardsale_info_itemprice_main").innerHTML = adetor_currency + " " +  ((parseFloat(total_charge_num) - parseFloat(delivery_charge_num)) / parseFloat(item_quantity)).toFixed(2);
document.getElementById("transaction_yardsale_info_itemlocation_main").innerHTML = newsResponse["hits"][0]["item_location_name"];
document.getElementById("transaction_yardsale_info_itemquantity_main").innerHTML = this_quantity;
document.getElementById("transaction_yardsale_info_receivername_main").innerHTML = adetor_receiver_name;
document.getElementById("transaction_yardsale_info_receiverphone_main").innerHTML = adetor_receiver_phone;
document.getElementById("transaction_yardsale_info_deliverylocation_main").innerHTML = newsResponse["hits"][0]["destination_location_name"];
document.getElementById("transaction_yardsale_info_deliverycharge_main").innerHTML = newsResponse["hits"][0]["delivery_charge_str"];
document.getElementById("transaction_yardsale_info_totalcharge_main").innerHTML = adetor_currency + " " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("transaction_yardsale_info_totalcharge_cedis_main").innerHTML = "Ghc " + newsResponse["hits"][0]["total_charge_num_cedis"];

          fixSaleForm('up4sale', '2', '');

              } else {

              showToast("FishPott could not find the delivery address. Please try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function setFinalPriceEvent(x){

      this_item_name = x.getAttribute("data-itemname");
      this_total_itemquantity = x.getAttribute("data-itemquantity");
      this_quantity = document.getElementById("transaction_event_quantity_input_main").value.trim();
      this_agreement = document.getElementById('transaction_event_check_agreement_main');

      if( !this_agreement.checked || this_quantity.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(this_quantity) < 1){

          showToast("Please check the ticket quantity you are buying");

      } else if(parseInt(this_quantity) > parseInt(this_total_itemquantity)){

          showToast("You cannot buy more than the total quantity of the tickets available");

      } else {

      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'item_order_quantity' : this_quantity,
          'mycountry' : my_country
      };     

        var url_real = CONFIG + 'inc/android_calculate_total_charge_event.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);
            console.log(newsResponse);


            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "event";
                var adetor_news_id = globalNewsId;
                var adetor_receiver_name = "ticket";
                var adetor_receiver_phone = "ticket";
                var adetor_delivery_address = "ticket";
                var adetor_delivery_type = "ticket";
                var item_quantity = this_quantity;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
                var delivery_charge_num = 0;
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = this_item_name;

                current_order_index = addPurchaseInfo(this_purchase_info);

document.getElementById("transaction_event_info_itemname_main").innerHTML = this_item_name;
document.getElementById("transaction_event_info_itemprice_main").innerHTML = adetor_currency + " " + (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
document.getElementById("transaction_event_info_itemquantity_main").innerHTML = this_quantity;
document.getElementById("transaction_event_info_totalcharge_main").innerHTML = adetor_currency + " " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("transaction_event_info_totalcharge_cedis_main").innerHTML = "Ghc " + newsResponse["hits"][0]["total_charge_num_cedis"];

          fixSaleForm('event', '2', '');

              } else {

              showToast("Something went awry. try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }

function setFinalPriceFundraiser(x){

      this_item_name = x.getAttribute("data-itemname");
      this_total_itemquantity = x.getAttribute("data-itemquantity");
      this_quantity = document.getElementById("transaction_fundraiser_quantity_input_main").value.trim();
      this_agreement = document.getElementById('transaction_fundraiser_check_agreement_main');

      if( !this_agreement.checked || this_quantity.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(this_quantity) < 1){

          showToast("Please check the amount");

      } else if(parseInt(this_quantity) > parseInt(this_total_itemquantity)){

          showToast("You cannot contribute more than the target of the fundraiser");

      } else {

      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'item_order_quantity' : this_quantity,
          'mycountry' : my_country
      };     

        var url_real = CONFIG + 'inc/android_calculate_total_charge_fundraiser.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);
            console.log(newsResponse);


            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "fundraiser";
                var adetor_news_id = globalNewsId;
                var adetor_receiver_name = "contribution";
                var adetor_receiver_phone = "contribution";
                var adetor_delivery_address = "contribution";
                var adetor_delivery_type = "contribution";
                var item_quantity = this_quantity;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = 1;
                var delivery_charge_num = 0;
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = this_item_name;

                current_order_index = addPurchaseInfo(this_purchase_info);

document.getElementById("transaction_fundraiser_info_itemname_main").innerHTML = this_item_name;
document.getElementById("transaction_fundraiser_info_totalcharge_main").innerHTML = adetor_currency + " " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("transaction_fundraiser_info_totalcharge_cedis_main").innerHTML = "Ghc " + newsResponse["hits"][0]["total_charge_num_cedis"];

          fixSaleForm('fundraiser', '2', '');

              } else {

              showToast("Something went awry. try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }


function setFinalPriceSharesale(x){

      this_item_name = x.getAttribute("data-itemname");
      this_total_itemquantity = x.getAttribute("data-itemquantity");
      this_quantity = document.getElementById("transaction_sharesale_quantity_input_main").value.trim();
      this_agreement = document.getElementById('transaction_sharesale_check_agreement_main');

      if( !this_agreement.checked || this_quantity.trim() == ""){

          showToast("Complete all fields");

      } else if(parseInt(this_quantity) < 1){

          showToast("Please check the shares quantity you are buying");

      } else if(parseInt(this_quantity) > parseInt(this_total_itemquantity)){

          showToast("You cannot buy more than the total quantity of the shares available");

      } else {

      app.preloader.show();

      var loginData = {
          'myid' : my_user_sys_id,
          'mypass' : my_e_password,
          "my_app_version" : my_app_version,
          'generic_item_news_id' : globalNewsId,
          'item_order_quantity' : this_quantity,
          'mycountry' : my_country
      };     

        var url_real = CONFIG + 'inc/android_calculate_total_charge_shares.php';

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          mimeTypes:"multipart/form-data",
          success: function(response){
            if(response.trim() != ""){

            var newsResponse = JSON.parse(response);
            console.log(newsResponse);


            if(newsResponse["hits"].length > 0){

                var hit_status = newsResponse["hits"][0]["hit_status"];

                if(hit_status.trim() == "1"){

                var adetor_type = "shares4sale";
                var adetor_news_id = globalNewsId;
                var adetor_receiver_name = "shares";
                var adetor_receiver_phone = "shares";
                var adetor_delivery_address = "shares";
                var adetor_delivery_type = "shares";
                var item_quantity = this_quantity;
                var adetor_currency = newsResponse["hits"][0]["currency"];
                var adetor_price_per_item = (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
                var delivery_charge_num = 0;
                var total_charge_num = newsResponse["hits"][0]["total_charge_num"];
                var adetor_status_code = "not_initiated";
                var adetor_pay_type = "not_initiated";
                var adetor_status_message = "not_initiated";
                var slydepay_order_id = "not_initiated";
                var total_charge_num_cedis = newsResponse["hits"][0]["total_charge_num_cedis"];
                var total_charge_str = newsResponse["hits"][0]["total_charge_str"];
                var yield_duration_info = newsResponse["hits"][0]["yield_duration_info"];
                var order_id_ref_str = randomString();

                this_purchase_info = [];
                this_purchase_info[0] = adetor_type;
                this_purchase_info[1] = adetor_news_id;
                this_purchase_info[2] = adetor_receiver_name;
                this_purchase_info[3] = adetor_receiver_phone;
                this_purchase_info[4] = adetor_delivery_address;
                this_purchase_info[5] = adetor_delivery_type;
                this_purchase_info[6] = item_quantity;
                this_purchase_info[7] = adetor_currency;
                this_purchase_info[8] = (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
                this_purchase_info[9] = delivery_charge_num;
                this_purchase_info[10] = total_charge_num;
                this_purchase_info[11] = adetor_status_code;
                this_purchase_info[12] = adetor_pay_type;
                this_purchase_info[13] = adetor_status_message;
                this_purchase_info[14] = slydepay_order_id;
                this_purchase_info[15] = total_charge_num_cedis;
                this_purchase_info[16] = total_charge_str;
                this_purchase_info[17] = "";
                this_purchase_info[18] = "";
                this_purchase_info[19] = this_item_name;

                current_order_index = addPurchaseInfo(this_purchase_info);

document.getElementById("transaction_sharesale_info_itemname_main").innerHTML = this_item_name;
document.getElementById("transaction_sharesale_info_itemprice_main").innerHTML = adetor_currency + " " + (parseFloat(total_charge_num) / parseFloat(item_quantity)).toFixed(2);
document.getElementById("transaction_sharesale_info_itemquantity_main").innerHTML = this_quantity;
document.getElementById("transaction_sharesale_info_totalcharge_main").innerHTML = adetor_currency + " " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("transaction_sharesale_info_totalcharge_cedis_main").innerHTML = "Ghc " + newsResponse["hits"][0]["total_charge_num_cedis"];
document.getElementById("sharesale_yield_info").innerHTML = yield_duration_info;

          fixSaleForm('shares4sale', '2', '');

              } else {

              showToast("Something went awry. try again");
            
              }
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }


              //$('#close_justnewspost_main').click();
                /////////
            } else {

              showToast("Something went awry. Restart app and try again");
            
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

              app.preloader.hide();

              showToast("Network Error");

          }
        });

      } 
  }


function prepareSlydePay(transaction_type){

    var myPurchases = localStorage.getItem("myPurchases");


      // THIS IS THE SERVER SIDE FILE THAT GENERATES THE TOKEN
      var url_real = "https://fishpott.com/web/in/slydepay_web/prepare_payment_ferry.php";


/****************************************************************************************************
                            
            - IF THE CHARGE WE ARE GOING TO GENERATE THE TOKEN FOR IS ZERO OR LESS,
              ABORT THE PROCESS

****************************************************************************************************/
    newPurchaseInfo = getMyPurchases("last");

    console.log(newPurchaseInfo);
    final_charge_cedis = newPurchaseInfo[15];
    item_name = newPurchaseInfo[19];
    if(parseFloat(newPurchaseInfo[15]) <= 0){

      showToast("Something went awry. Please restart process");
      return;
    }   

      // SETTING THE DATA TO BE SENT TO THE SERVER
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version,
          "item_name" : item_name,
          "buy_quantity" : 1,
          "total_charge" : final_charge_cedis

        };  

/****************************************************************************************************
                            
            - MAKING THE REQUEST TO THE SERVER

****************************************************************************************************/

      app.preloader.show();// SHOW THE LOADER

        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();//HIDE THE LOADER

            // IF THERE IS NO RESPONSE, INFORM USER
            if(response == null || response == ""){
                showToast("Something went awry. Try again");
                app.preloader.hide();
                return;
            }

            var itemsResponse = JSON.parse(response);

/****************************************************************************************************
                            
            -IF THERE IS A RESPONSE, ALLOW USER TO GO AND MAKE PAYMENT ON SLYDEPAY USING TOKEN

****************************************************************************************************/

            if(itemsResponse["status"] == 1){

              slydepay_order_id = itemsResponse["slydepay_order_id"];
              slydepay_token = itemsResponse["slydepay_pay_token"];
              slydepay_redirect_url = itemsResponse["slydepay_redirect_url"];

                current_all_tokens = localStorage.getItem("all_slydepay_tokens");

                if(current_all_tokens == null){

                  new_all_tokens = slydepay_token;
                  localStorage.setItem("all_slydepay_tokens", slydepay_token);
                
                } else {

                  new_all_tokens = current_all_tokens + " " + slydepay_token;
                  localStorage.setItem("all_slydepay_tokens", new_all_tokens);

                }

                newPurchaseInfo[17] = slydepay_token;
                newPurchaseInfo[18] = slydepay_redirect_url;

                purchase_info_changed_response = replacePurchaseInfo(newPurchaseInfo, "last");

                if(transaction_type == "advert" && purchase_info_changed_response == 1){
              
                  document.getElementById("advert_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("advert", "3", "");   

                } else if(transaction_type == "up4sale" && purchase_info_changed_response == 1) {

                  document.getElementById("yardsale_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("up4sale", "3", "");   

                } else if(transaction_type == "event" && purchase_info_changed_response == 1) {

                  document.getElementById("event_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("event", "3", "");   

                } else if(transaction_type == "fundraiser" && purchase_info_changed_response == 1) {

                  document.getElementById("fundraiser_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("fundraiser", "3", "");   

                } else if(transaction_type == "shares4sale" && purchase_info_changed_response == 1) {

                  document.getElementById("sharesale_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("shares4sale", "3", "");   

                }  else if(transaction_type == "cart" && purchase_info_changed_response == 1) {

                  document.getElementById("cart_slydepay_goto_btn_main").href = slydepay_redirect_url;
                  fixSaleForm("cart", "3", "");   

                } else {

                  showToast("Something went awry. Restart process and try again");

                }

            } else {

              showToast("Something went awry. Try again");

            }

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Poor network connection. Try again later";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

                app.preloader.hide();
          }
        });
}


function savePaymentInfo(type){
    
      newPurchaseInfo = getMyPurchases("last");

      generic_news_type = newPurchaseInfo[0];

      adetor_type = newPurchaseInfo[0];
      adetor_news_id = newPurchaseInfo[1];
      adetor_receiver_name = newPurchaseInfo[2];
      adetor_receiver_phone = newPurchaseInfo[3];
      adetor_delivery_address = newPurchaseInfo[4];
      adetor_delivery_type = newPurchaseInfo[5];
      item_quantity = newPurchaseInfo[6];
      adetor_currency = newPurchaseInfo[7];
      adetor_price_per_item = newPurchaseInfo[8];
      delivery_charge_num = newPurchaseInfo[9];
      total_charge_num = newPurchaseInfo[10];
      adetor_status_code = "1";
      adetor_pay_type = "cash_ios";
      adetor_status_message = "Successful";
      slydepay_order_id = newPurchaseInfo[14];
      total_charge_num_cedis = newPurchaseInfo[15];
      total_charge_str = newPurchaseInfo[16];
      slydepaytoken = newPurchaseInfo[17];
      slydepayurl = newPurchaseInfo[18];
      itemname = newPurchaseInfo[19];

    if(generic_news_type == "cart"){

        var url_real = CONFIG + 'inc/android_save_purchase_info_cart.php';
        var purchaseData = {
            'myid' : my_user_sys_id,
            'mypass' : my_e_password,
            'adetor_receiver_name' : adetor_receiver_name,
            'adetor_receiver_phone' : adetor_receiver_phone,
            'adetor_delivery_address' : adetor_delivery_address,
            'adetor_delivery_type' : adetor_delivery_type,
            'adetor_currency' : adetor_currency,
            'adetor_price_per_item' : adetor_price_per_item,
            'delivery_charge_num' : delivery_charge_num,
            'total_charge_num' : total_charge_num,
            'adetor_status_code' : adetor_status_code,
            'adetor_pay_type' : adetor_pay_type,
            'slydepay_order_id' : slydepaytoken,
            'adetor_status_message' : adetor_status_message
        };

    var cart_items_purchased_info = localStorage.getItem("cartItemsNow");
    console.log("6 cart_items_purchased_info");
    console.log(cart_items_purchased_info);
    if(cart_items_purchased_info == null){

            showToast("Something went wrong");
            showToast("Restart process");

            return;
    }

    cart_items_purchased_info = JSON.parse(cart_items_purchased_info);
    var this_length = Object.keys(cart_items_purchased_info).length;
    console.log("5 this_length : " + this_length);
    console.log("5 cart_items_purchased_info");
    console.log(cart_items_purchased_info);

    if(this_length <= 0){

            showToast("2- Something went wrong");
            showToast("Restart process");
            return;

    } else {
            
            console.log("cart_items_purchased_info BELOW");
            console.log(cart_items_purchased_info);
            for(y = 1; y <= this_length; y++){
                
                var this_item_quantity = cart_items_purchased_info[y.toString()]["this_item_quantity"];
                var this_news_id = cart_items_purchased_info[y.toString()]["news_id"];

                var this_item_quantity = this_item_quantity.trim();
                var this_news_id = this_news_id.trim();

                if(this_news_id != "" && this_item_quantity != ""){

                    j = y;
                    var this_item_index_quantity = "item_quantity_" + j.toString();
                    var item_newsid_index = "item_newsid_" + j.toString();


                    purchaseData[this_item_index_quantity] = this_item_quantity;
                    purchaseData[item_newsid_index] = this_news_id;

                }
            }
            purchaseData["total_items"] = this_length;
        }
    } else {

      //newPurchaseInfo = getMyPurchases("last");

        var url_real = CONFIG + 'inc/android_save_purchase_info.php';
        var purchaseData = {
            'myid' : my_user_sys_id,
            'mypass' : my_e_password,
            'adetor_type' : adetor_type,
            'adetor_news_id' : adetor_news_id,
            'adetor_receiver_name' : adetor_receiver_name,
            'adetor_receiver_phone' : adetor_receiver_phone,
            'adetor_delivery_address' : adetor_delivery_address,
            'adetor_delivery_type' : adetor_delivery_type,
            'item_quantity' : item_quantity,
            'adetor_currency' : adetor_currency,
            'adetor_price_per_item' : adetor_price_per_item,
            'delivery_charge_num' : delivery_charge_num,
            'total_charge_num' : total_charge_num,
            'adetor_status_code' : adetor_status_code,
            'adetor_pay_type' : adetor_pay_type,
            'slydepay_order_id' : slydepaytoken,
            'adetor_status_message' : adetor_status_message
        };          
    }

    console.log(purchaseData);


        if(slydepaytoken != undefined && slydepaytoken.trim() != ""){

          showToast("Checking payment status");
              var url_real = 'https://app.slydepay.com.gh/api/merchant/invoice/checkstatus';
              var checkData = {
                            "emailOrMobileNumber": "fishpottcompany@gmail.com",
                            "merchantKey": "1492651329147",
                            "orderCode": "",
                            "payToken": slydepaytoken,
                            "confirmTransaction": true
                        }
            app.request({
              type: "POST",
              url: url_real,
              data: JSON.stringify(checkData),
              contentType: "application/json",
              success: function(response){
                console.log(response);
                var paySuccessResponse = response["success"];

                if(paySuccessResponse == true){
                    var payResult = response["result"];
                    if(payResult == "CONFIRMED" || payResult == "PENDING"){
                        /***************************************************/
                          showToast("Saving Transaction");
                          if(generic_news_type == "cart"){

                              var url_real = CONFIG + 'inc/android_save_purchase_info_cart.php';

                          } else {


                              var url_real = CONFIG + 'inc/android_save_purchase_info.php';
                          }
                            app.request({
                              type: "POST",
                              url: url_real,
                              data: purchaseData,
                              success: function(response){
                                console.log("PURCHASE SAVE RESPONSE");
                                console.log(response);
                                if(response == 1){

                                    if(generic_news_type == "cart"){

                                        cart_items_purchased_info = [];
                                        localStorage.removeItem('myCartItems');
                                    }
                                    if(type == "advert"){
                                    
                                      $('#close_advert_transaction_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find the details of your transaction ", "Awesome");
                                    
                                    } else if (type == "up4sale"){

                                      $('#transaction_yardsale_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find the details of your transaction including your tracking/transaction code. You can track the delivery of your item on octopus.fishpott.com using your transaction code. ", "Awesome");
                                    
                                    } else if (type == "event"){

                                      $('#transaction_event_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find your ticket codes for the event. You can track the usage of your ticket codes on octopus.fishpott.com using your ticket code. ", "Awesome");
                                    
                                    } else if (type == "fundraiser"){

                                      $('#transaction_fundraiser_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find your contribution code.", "Awesome");
                                    
                                    } else if (type == "shares4sale"){

                                      $('#transaction_sharesale_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the transfer section to view your new shares. You can also click the notification section to find your transaction code.", "Awesome");
                                    
                                    } else if (type == "cart"){

                                      $('#cart_box_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find the details of your transaction including your tracking/transaction code. You can track the delivery of your items on octopus.fishpott.com using your transaction code. ", "Awesome");
                                    
                                    } else if (type == "all"){

                                      $('#close_advert_transaction_main').click();

                                      $('#transaction_yardsale_close_main').click();

                                      $('#transaction_event_close_main').click();

                                      $('#transaction_fundraiser_close_main').click();

                                      $('#transaction_sharesale_close_main').click();

                                      $('#cart_box_close_main').click();
                                      app.dialog.alert("Transaction completed. Please click the notification section to find the details of your transaction and it's reference code. You can view details of your transaction code on octopus.fishpott.com. ", "Awesome");
                                    
                                    }  else {

                                      app.dialog.alert("Transaction completed. Please click the notification section for details.", "Awesome");

                                    }
                                    
                                } else {
                                  app.dialog.alert("We noticed you have made payment but we could not save the transaction. Please click the 'Record My Payment' button to try again. If this continues, discontinue and CONTACT FISHPOT", "Oops..");

                                }

                              },
                              error: function(XMLHttpRequest, textStatus, errorThrown) {

                                showToast("Network Error. Try again");

                              }
                            });



                        /****************************************************/
                        clearAllPurchases();
                    } else {

                      showToast("Please complete payment on Slydepay and try recording your payment again");
                    }

                  } else {

                      showToast("Please complete payment on Slydepay and try recording your payment again");

                  }

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {

                    showToast("Network Error. Try again");

                }
              });

        } else {

          showToast("Something went awry. Restart process");

        }
}

function pauseVideo(x){



}

function playPauseThisVideo(x){

  if(x.paused){

    x.play();

  } else {

    x.pause();

  }

}

function stopVideoPlayer(){

  if(old_video_playing_id != "" && document.getElementById(old_video_playing_id) != null){

    video_player =  document.getElementById(old_video_playing_id);
    video_player.pause();
  }

}

function pauseOtherPlayers(x){

var new_video_playing_id = x.id;
//var old_video_playing_id = "";
  
  if(old_video_playing_id != null && old_video_playing_id != "" && old_video_playing_id != new_video_playing_id){
    
    var old_player = document.getElementById(old_video_playing_id);
    if(old_player != null && old_player != undefined){
        old_player.pause();
    }
    

  }

  old_video_playing_id = new_video_playing_id;

}



function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    randomstring = randomstring + Math.floor((Math.random() * 999999) + 100000);
    return randomstring;
}

setInterval(function(){ 

        //console.log("real_token =   " + real_token);
         var url_real = CONFIG + 'inc/a_web_save_fcm_token.php';

         var loginData = {
            myid : my_user_sys_id,
            mypass : my_e_password,
            'my_app_version' : my_app_version,
            'token' : 'ios_token_not_set',
            'just_date_update' : 'yes'
        };          

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          success: function(response){

            },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

          }
        });


    //readAllChats();
    //readAllNotifications();
}, 30000);

function setSettlementAccount(){

    var acc_country = document.getElementById("settlement_acc_country_main").value;
    var acc_type = document.getElementById("settlement_acc_type_main").value;
    var bank_network_name = document.getElementById("settlement_bank_network_name_main").value;
    var acc_number = document.getElementById("settlement_acc_number_main").value;
    var routing_number = document.getElementById("settlement_routing_number_main").value;

    acc_countryGlobal = acc_country;
    acc_typeGlobal = acc_type;
    bank_network_nameGlobal = bank_network_name;
    acc_numberGlobal = acc_number;
    routing_numberGlobal = routing_number;

    if(acc_countryGlobal.trim() == ""){

        showToast("Choose country holding account");

    } else if(acc_typeGlobal.trim() == ""){

        showToast("Choose account type");

    } else if(bank_network_nameGlobal.trim() == ""){

        showToast("Choose Bank/Mobile Network Name");

    } else if(acc_numberGlobal.trim() == ""){

        showToast("Enter account/mobile money number");

    } else if(acc_typeGlobal.trim() == "Bank Account" && routing_numberGlobal.trim() == ""){

        showToast("If account type is a bank account, then the routing number is needed");

    } else if(acc_countryGlobal.trim() != "" && acc_typeGlobal.trim() != "" && 
              bank_network_nameGlobal.trim() != "" && acc_numberGlobal.trim() != ""){

      app.dialog.password('This is the account any earnings you make on FishPott will be tranferred to. Earnings include income from events ticket sale, fundraiser contributionsi, shares sale, yields from shares and pott pearl cashout', 'Are you sure', callbackSettlementAccount, callbackCancelSettlementAccount);

    } else  {

       showToast('Something went awry.');

    }  



}

function callbackCancelSettlementAccount(password){

}

function callbackSettlementAccount(password){

  if(password.trim() == ""){

      showToast("Operation cancelled");

  } else {

    app.preloader.show();

    var url_real = CONFIG + 'inc/android_set_settlement_account.php';

    var loginData = {
      "myid" : my_user_sys_id,
      "mypass" : my_e_password,
      "my_app_version" : my_app_version,
      "raw_pass" : password,
      "acc_type" : acc_typeGlobal,
      "acc_country" : acc_countryGlobal,
      "bank_routing_number" : routing_numberGlobal,
      "bank_name_or_mobilenetwork_name" : bank_network_nameGlobal,
      "bank_acc_or_mobilemoney_number" : acc_numberGlobal
    }; 

    console.log(loginData);         

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
          app.preloader.hide();

          if(response.trim() == ""){

              showToast("Something went awry");

          } else {

              showToast(response);
              $('#close_settlement_account_main').click();
              
          }        
        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

         app.preloader.hide();
         showToast("Network Error");

      }
    });


  }

}

function buyShield(){

  app.preloader.show();

  var url_real = CONFIG + 'inc/android_set_shield.php';

  var loginData = {
    'myid' : my_user_sys_id,
    'mypass' : my_e_password,
    'my_app_version' : my_app_version
  };          

  app.request({
    type: "POST",
    url: url_real,
    data: loginData,
    success: function(response){
      
      app.preloader.hide();
      if(response.trim() == ""){

        app.dialog.alert('Something went awry. Try again later', 'Error');

      } else {

        app.dialog.alert(response, 'Shield');

      }
    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {
      
      app.preloader.hide();
      showToast("Network Error. Try again");
    }
  });

}


function poachPearls(){

  app.dialog.preloader('Poaching...');

  console.log("pottNameGlobal : " + pottNameGlobal);

  var url_real = CONFIG + 'inc/android_poach.php';

  var loginData = {
    'myid' : my_user_sys_id,
    'mypass' : my_e_password,
    'my_app_version' : my_app_version,
    'victim_pottname' : pottNameGlobal
  };          

  app.request({
    type: "POST",
    url: url_real,
    data: loginData,
    success: function(response){

      app.dialog.close();
      if(response.trim() == ""){

        app.dialog.alert('Something went awry. Try again', 'Error');

      } else {

        app.dialog.alert(response, 'Pss..');

      }
    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {
      
      app.dialog.close();
      showToast("Network Error. Try again");
    }
  });

}

function startPottLinkChanger(){

  this_linkup_btn = document.getElementById('linkup_btn_main');
  link_status = this_linkup_btn.getAttribute("data-status");

  if(link_status == "1" || link_status == 1){

      this_linkup_btn.innerHTML = "Link-Up";
      this_linkup_btn.setAttribute("data-status", "0");
      showToast("You are no longer connected to this pott.");
      
  } else {

      this_linkup_btn.innerHTML = "Linked";
      this_linkup_btn.setAttribute("data-status", "1");
      showToast("You will see more posts from this pott");

  }
  console.log("pottNameGlobal : " + pottNameGlobal);

  var url_real = CONFIG + 'inc/android_send_linkup.php';

  var loginData = {
    'myid' : my_user_sys_id,
    'mypass' : my_e_password,
    'my_app_version' : my_app_version,
    'receiver_pottname' : pottNameGlobal
  };          

  app.request({
    type: "POST",
    url: url_real,
    data: loginData,
    success: function(response){

      /*
      app.dialog.close();
      if(response.trim() == ""){

        app.dialog.alert('Something went awry. Try again', 'Error');

      } else {

        app.dialog.alert(response, 'Pss..');

      }
      */
    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {
      
    }
  });

}



function cashoutPearls(){

  app.preloader.show();

  var url_real = CONFIG + 'inc/android_cashout_pearls.php';

  var loginData = {
    'myid' : my_user_sys_id,
    'mypass' : my_e_password,
    'mycountry' : my_country,
    'my_app_version' : my_app_version
  };          

  app.request({
    type: "POST",
    url: url_real,
    data: loginData,
    success: function(response){
      
      app.preloader.hide();
      if(response.trim() == ""){

        app.dialog.alert('Something went awry. Try again later', 'Error');

      } else {

        app.dialog.alert(response, 'Hey');

      }
    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {
      
      app.preloader.hide();
      showToast("Network Error. Try again");
    }
  });

}

function resetOtherPottPage(){

  $('#other_pott_close_main').click();
  document.getElementById('pott_title_main').innerHTML = "...";
  document.getElementById('pott_fullname_other_main').innerHTML = "...";
  document.getElementById('pott_pottname_other_main').innerHTML = "...";
  document.getElementById("pott_profilepic_other_main").style.backgroundImage = "url('img/avatar.png')";
  document.getElementById("pott_country_other_main").innerHTML = "...";
  document.getElementById("pott_investorlevel_other_main").innerHTML = "..." ;
  document.getElementById("pott_pearls_other_main").innerHTML = "...";
  document.getElementById("pott_linkupsnum_other_main").innerHTML =  "..." ;
  document.getElementById("pott_linkednum_other_main").innerHTML = "..."  ;
  document.getElementById("pott_results_holder").innerHTML = "..."  ;
  document.getElementById("mypott_results_holder").innerHTML = "..."  ;

}

function getPottInfo(x){
    this_pottname = x.getAttribute('data-pottname');
    console.log('this_pottname : ' + this_pottname);
    stopVideoPlayer();
    document.getElementById("pott_results_holder").innerHTML = "..."  ;
    document.getElementById("mypott_results_holder").innerHTML = "..."  ;
    document.getElementById('pott_title_main').innerHTML = "...";

    if(this_pottname == 'mylinkups' || this_pottname == ''){

      //showToast("");
      $('#other_pott_close_main').click();
      return;

    }

    if(this_pottname == my_pot_name){

      document.getElementById("linkup_btn_main").style.display = "none";
      document.getElementById("poach_btn_main").style.display = "none";
      document.getElementById("message_pott_main").style.display = "none";

    } else {

      document.getElementById("linkup_btn_main").style.display = "";
      document.getElementById("poach_btn_main").style.display = "";
      document.getElementById("message_pott_main").style.display = "";

    }

     if(this_pottname == '???'){

      this_pottname_real = my_pot_name;
      var myCartItems = localStorage.getItem("myCartItems");


      if(myCartItems == null){

        document.getElementById("cart_proceed_btn").innerHTML = "G-Cart - Empty";

      } else {

        if(myCartItems.trim() != ""){

          myCartItems = JSON.parse(myCartItems);
          length_of_cart = myCartItems.length;
          document.getElementById("cart_proceed_btn").innerHTML = "G-Cart ( " + length_of_cart + " )";
        } else {

          document.getElementById("cart_proceed_btn").innerHTML = "G-Cart - Empty";

        }
      }

    } else {

      this_pottname_real = this_pottname;
      
    }

      if(this_pottname.trim() != ""){
        app.preloader.show();

        var url_real = CONFIG + 'inc/android_get_pott_bios.php';

         var loginData = {
            'myid' : my_user_sys_id,
            'mypass' : my_e_password,
            'my_app_version' : my_app_version,
            'pott_name' : this_pottname_real
        };          

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          success: function(response){
            
            app.preloader.hide();

            ///////////////// POTTNAME BIOS FETCH RESPONSE
            var biosResponse = JSON.parse(response);
            console.log(biosResponse);
            var total_bios_data = Object.keys(biosResponse["pott_info"]).length;

            if(total_bios_data > 0 && biosResponse["pott_info"][0]["full_name"] != "" && 
                biosResponse["pott_info"][0]["investor_id"] != "" && 
                biosResponse["pott_info"][0]["country"] != ""){

                this_pott_full_name = biosResponse["pott_info"][0]["full_name"];
                this_pott_profile_picture = biosResponse["pott_info"][0]["profile_picture"];
                this_pott_net_worth = biosResponse["pott_info"][0]["net_worth"];
                this_pott_country = biosResponse["pott_info"][0]["country"];
                this_pott_investor_id = biosResponse["pott_info"][0]["investor_id"];
                this_pott_investor_level = biosResponse["pott_info"][0]["investor_level"];
                this_pott_our_link = biosResponse["pott_info"][0]["our_link"];
                this_linkups = biosResponse["pott_info"][0]["linkstome"];
                this_linked = biosResponse["pott_info"][0]["mylinkups"];
                curr_pott_sys_id = this_pott_investor_id;

                this_linkup_btn = document.getElementById('linkup_btn_main');
                this_linkup_btn.setAttribute("data-status", this_pott_our_link);

                if(this_pott_our_link == "1"){

                  this_linkup_btn.innerHTML = "Un-Link";

                } else {

                  this_linkup_btn.innerHTML = "Link-Up";

                }

                if(this_pott_profile_picture.trim() == "" || this_pott_profile_picture.trim() == "http://fishpott.com/pic_upload/"){
                    this_pott_profile_picture = "img/avatar.png";
                }
                pottNameGlobal = this_pottname_real;
                  document.getElementById('pott_title_main').innerHTML = "@" + this_pottname_real;
                if(this_pottname == '???'){
                  document.getElementById('pott_fullname_mine_main').innerHTML = this_pott_full_name;
                  document.getElementById('pott_pottname_mine_main').innerHTML = "@" + this_pottname_real;
                  document.getElementById("pott_profilepic_mine_main").style.backgroundImage = "url('" + this_pott_profile_picture + "')";
                  document.getElementById("pott_country_mine_main").innerHTML = this_pott_country;
                  document.getElementById("pott_investorlevel_mine_main").innerHTML = this_pott_investor_level ;
                  document.getElementById("pott_pearls_mine_main").innerHTML = this_pott_net_worth;
                  document.getElementById("pott_linkupsnum_mine_main").innerHTML =  this_linkups ;
                  document.getElementById("pott_linkednum_mine_main").innerHTML =  this_linked ;
  
                  getSearchOrPottDataForOption('my_pott', 'news_option', my_pot_name, 'mypott_results_holder', 'start');
                
                } else {

                  document.getElementById('pott_fullname_other_main').innerHTML = this_pott_full_name;
                  document.getElementById('pott_pottname_other_main').innerHTML = "@" + this_pottname_real;
                  document.getElementById("pott_profilepic_other_main").style.backgroundImage = "url('" + this_pott_profile_picture + "')";
                  document.getElementById("pott_country_other_main").innerHTML = this_pott_country;
                  document.getElementById("pott_investorlevel_other_main").innerHTML = this_pott_investor_level ;
                  document.getElementById("pott_pearls_other_main").innerHTML = this_pott_net_worth;
                  document.getElementById("pott_linkupsnum_other_main").innerHTML =  this_linkups ;
                  document.getElementById("pott_linkednum_other_main").innerHTML = this_linked  ;

                  this_pott_msg_btn = document.getElementById("message_pott_main");
                  this_pott_msg_btn.setAttribute("data-receiverpic", this_pott_profile_picture);
                  this_chat_table = returnChatTableName(my_pot_name, this_pottname_real);
                  this_pott_msg_btn.setAttribute("data-tablename", this_chat_table);
                  this_pott_msg_btn.setAttribute("data-receiverpottname", this_pottname_real);
                  this_pott_msg_btn.setAttribute("data-receivername", this_pott_full_name);

                  getSearchOrPottDataForOption('pott', 'news_option', this_pottname_real, 'pott_results_holder', 'start');
                
                }

/*
                if(this_pott_our_link.trim() == "0" && thispottname != my_pot_name){
                    document.getElementById("linkup_btn").style.display = "";
                }

                if(thispottname != my_pot_name){
                    document.getElementById("poach_btn").style.display = "";
                    document.getElementById("send_message_btn").style.display = "";
                    document.getElementById("main_floating_btn").style.display = "";
                }
*/
              }
            },

          error: function(XMLHttpRequest, textStatus, errorThrown) {
            
            app.preloader.hide();
            showToast("Network Error. Try again");
          }
        });
      } else {
            showToast("Something went awry. Try again");
      }

////////////////    
}

function getLinks(type, pottname, last_sku){

    if(pottname == "???"){
      pottname = my_pot_name;
    } else {
      pottname = pottNameGlobal;
    }

    if(last_sku != "continue"){

      last_sku_linkups = 0;
      document.getElementById("links_results_holder").innerHTML = "";
    }

    if(type != ""){

      linkupTypeGlobal = type;

    } else {

      type = linkupTypeGlobal;
    }

    console.log("type : " + type);
    console.log("pottname : " + pottname);


    app.preloader.show();
    var url_real = CONFIG + 'inc/android_get_links_info.php';

     var loginData = {
        "my_app_version" : my_app_version,
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "pottname" : pottname,
        "type" : type,
        "last_sku" : last_sku_linkups
    };          

    app.request({
      type: "POST",
      url: url_real,
      data: loginData,
      success: function(response){
        console.log("response : " + response);
            var newsResponse = JSON.parse(response);
            var total_news_num = Object.keys(newsResponse["hits"]).length;
        console.log(newsResponse);
        console.log("total_news_num : " + total_news_num);
            if(total_news_num <= 1){

                  $('#links_box_close_main').click();
                  showToast("No links to show");

            } else {

            document.getElementById("links_results_holder").innerHTML = "";

                for (var i = 0; i  < total_news_num; i++) {

                        var sku = newsResponse["hits"][i]["sku"];
                        var full_name = newsResponse["hits"][i]["full_name"];
                        var pott_name = newsResponse["hits"][i]["pott_name"];
                        var profile_pic = newsResponse["hits"][i]["profile_pic"];
                        var net_worth = escapeHtml(newsResponse["hits"][i]["net_worth"]);
                        var country = newsResponse["hits"][i]["country"];
                        var profile_pic = newsResponse["hits"][i]["profile_pic"];
                        var verified_tag = newsResponse["hits"][i]["verified_tag"];
                        var last_online_formatted = newsResponse["hits"][i]["last_online_formatted"];
                        var last_online_time = newsResponse["hits"][i]["last_online_time"];
                        var investor_level = newsResponse["hits"][i]["investor_level"];

                        this_chat_table = returnChatTableName(my_pot_name, pott_name);

                        if(verified_tag != null && verified_tag.trim() == "1"){
                            news_maker_verified_status_display_style = "";
                        } else {
                            news_maker_verified_status_display_style = "none";
                        }

                        last_sku_linkups = sku;

                        if(i == 0){
                          console.log("last_sku_linkups : " + last_sku_linkups);
                        } 

                        if(i == total_news_num-1){
                          console.log("last_sku_linkups : " + last_sku_linkups);
                        } 

                        if(profile_pic.trim() == "" || profile_pic == "http://fishpott.com/pic_upload/" || profile_pic == "https://fishpott.com/pic_upload/"){
                            profile_pic = "img/avatar.png"
                        }

                        $('#links_results_holder').append($('<div class="card demo-facebook-card" style="margin-right: 0; margin-left: 0;"><div class="card-header"><a href="/messages/" data-receivername = "' + full_name + '"  data-receiverpic="' + profile_pic + '" onclick="startChat(this)" data-tablename = "' + this_chat_table + '"  data-receiverpottname = "' + pott_name + '"  class="link popup-close" style="float: right;"><i class="icon f7-icons ios-only" style="font-size: 20px;">chats</i></a><div class="demo-facebook-avatar" style="background-image: url(' + profile_pic + '); background-size: cover; position: relative; width: 45px; padding-top: 45px; border-radius: 50%; margin-right: 5px;"></div><div class="demo-facebook-name">' + full_name + '&nbsp;<i class="icon f7-icons" style="font-size: 13px; color : #3399ff;display: ' + news_maker_verified_status_display_style + '">check_round_fill</i></div><div class="demo-facebook-date" style="font-style:italic; color:green;">@' + pott_name + '</div><div class="demo-facebook-date"><span>' + net_worth + ' pearls | ' + investor_level + '</span></div><div class="demo-facebook-date"><span>' + country + '</span>  <span style="float: right;"> last seen : ' + last_online_formatted + '</span></div></div></div>'));

                }

            }

            app.preloader.hide();

        },

      error: function(XMLHttpRequest, textStatus, errorThrown) {

        app.preloader.hide();
        $('#links_box_close_main').click();
        showToast("Network Error. Try again");

      }
    });




}

function sendLinkUp(){

}

function getSearchOrPottDataForOption(search_or_pott, option, pottname, holder_id, last_sku){

      stopVideoPlayer();

      if(last_sku == 'start'){
        search_or_pottdata_last_sku = 0;
      } 

        if(option == '' && optionGlobal != ""){

          option = optionGlobal;

        } else if(option == '' && optionGlobal == ""){

          showToast("Something went awry.");
          return;
        }

        if(search_or_pott == "search"){

          search_txt = document.getElementById("search_form_input").value.trim();
          if(search_txt == ""){
            $('#search_box_close_main').click();
            return;
          }

        } else if(search_or_pott == "pott"){
          search_txt = "";
          if(pottname != ""){

            pottNameGlobal = pottname;

          }

          if(pottNameGlobal == ""){
            $('#other_pott_close_main').click();
            return;
          }
          
        } else if(search_or_pott == "my_pott"){
          search_txt = "";
          pottname = my_pot_name;
        }

        if(option == "videos_option"){

            if(search_or_pott == "search"){

              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_videos_icon").style.color = "";

              var url_real = CONFIG + 'inc/android_search_get_videos.php';

            } else if(search_or_pott == "pott") {

              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_videos_icon_otherpott").style.color = "";

              var url_real = CONFIG + 'inc/android_pott_get_videos.php';

            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_videos_icon_mypott").style.color = "";

              var url_real = CONFIG + 'inc/android_pott_get_videos.php';

            }


        } else if (option == "up4sale_option"){
   
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#009933";

              var url_real = CONFIG + 'inc/android_search_get_up4sales.php';

            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#009933";

              var url_real = CONFIG + 'inc/android_pott_get_up4sales.php';
       
            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#009933";

              var url_real = CONFIG + 'inc/android_pott_get_up4sales.php'

            }
       
        } else if (option == "sharessale_option"){
       
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ff9900";

              var url_real = CONFIG + 'inc/android_search_get_sharessales.php';

            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ff9900";

              var url_real = CONFIG + 'inc/android_pott_get_sharessales.php';
      
            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ff9900";

              var url_real = CONFIG + 'inc/android_pott_get_sharessales.php';
      
            }
      
        } else if (option == "event_option"){
        
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#e6e600";

              var url_real = CONFIG + 'inc/android_search_get_events.php';
     
            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#e6e600";

              var url_real = CONFIG + 'inc/android_pott_get_events.php';
     
            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#e6e600";

              var url_real = CONFIG + 'inc/android_pott_get_events.php';
     
            }

        }  else if (option == "fundraiser_option"){
         
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#33adff";

              var url_real = CONFIG + 'inc/android_search_get_fundraisers.php';
    
            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#33adff";

              var url_real = CONFIG + 'inc/android_pott_get_fundraisers.php';
    
            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#33adff";

              var url_real = CONFIG + 'inc/android_pott_get_fundraisers.php';
    
            }

        } else if (option == "potts_option"){
         
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "";

              var url_real = CONFIG + 'inc/android_search_get_potts.php';

            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";

              var url_real = CONFIG + 'inc/android_pott_get_news.php';

            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "";

              var url_real = CONFIG + 'inc/android_pott_get_news.php';

            }

        } else if (option == "news_option"){
   
            if(search_or_pott == "search"){

              document.getElementById("ios_videos_icon").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon").style.color = "#ccccb3";
              document.getElementById("ios_event_icon").style.color = "#ccccb3";
              document.getElementById("ios_pott_icon").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon").style.color = "";

              var url_real = CONFIG + 'inc/android_search_get_news.php';

            } else if(search_or_pott == "pott") {

              document.getElementById("ios_videos_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_otherpott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_otherpott").style.color = "";

              var url_real = CONFIG + 'inc/android_pott_get_news.php';

            } else if(search_or_pott == "my_pott") {

              document.getElementById("ios_videos_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_fundraiser_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_yardsale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_sharesale_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_event_icon_mypott").style.color = "#ccccb3";
              document.getElementById("ios_posts_icon_mypott").style.color = "";

              var url_real = CONFIG + 'inc/android_pott_get_news.php';

            }

        } else {

          showToast("Something went awry.");
          return;

        }

        optionGlobal = option;
           
        if(search_or_pott == "search"){

          if(old_search_or_pottdata_keyword == search_txt && search_or_pottdata_last_sku == 0){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(old_search_or_pottdata_keyword != search_txt){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(optionGlobal != option){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          }
              old_search_or_pottdata_keyword = search_txt;
        } else if(search_or_pott == "pott") {

          if(old_search_or_pottdata_keyword == pottname && search_or_pottdata_last_sku == 0){
              
              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(old_search_or_pottdata_keyword != pottname){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(optionGlobal != option){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;
              
          }

              old_search_or_pottdata_keyword = pottname;
        } else if(search_or_pott == "my_pott") {

          if(old_search_or_pottdata_keyword == pottname && search_or_pottdata_last_sku == 0){
              
              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(old_search_or_pottdata_keyword != pottname){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;

          } else if(optionGlobal != option){

              document.getElementById(holder_id).innerHTML = "";
              search_or_pottdata_last_sku = 0;
              
          }

              old_search_or_pottdata_keyword = pottname;

        }


        console.log("url_real : " + url_real);
        console.log("option : " + option);
        console.log("search_or_pottdata_last_sku : " + search_or_pottdata_last_sku);

         var loginData = {
            'myid' : my_user_sys_id,
            'mypass' : my_e_password,
            'my_app_version' : my_app_version,
            'news_sku' : search_or_pottdata_last_sku,
            'search_txt' : search_txt,
            'pottname' : pottname,
            'pott_sys_id' : curr_pott_sys_id,
            'gettype' : 'down',
            'i_country' : my_country
        };  

        console.log(loginData);

        app.request({
          type: "POST",
          url: url_real,
          data: loginData,
          success: function(response){
            
            console.log("response : " + response);
            var newsResponse = JSON.parse(response);

            console.log(newsResponse);

            var total_news_num = Object.keys(newsResponse["hits"]).length;

            if(total_news_num <= 0){

                //document.getElementById("news_holder").innerHTML = '';


            } else {


                  setNews(total_news_num, newsResponse, holder_id);


            }
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                showToast("Network Error. Try again");

          }
        });
}

function clearAllPurchases(){

  localStorage.setItem("myPurchases", "");

}


/****************************************************************************************************
                            
                            ------- FUNCTIONS END -----------

****************************************************************************************************/

/****************************************************************************************************
                            
                            ------- CROPS START -----------

****************************************************************************************************/
setTimeout(function () {

searchbar = document.querySelectorAll('.searchbar');

searchbar.forEach(function(currsearchbar) {
    currsearchbar.addEventListener("search", function(e) {
                //this function does stuff
          e.preventDefault();
          console.log("Search started");
          $('#start_search_btn').click();

    });
});

/*

newsImageArray = document.querySelectorAll('.news-image');
postNewsBtnsArray = document.querySelectorAll('.post-news-btn');
allPopUpsArray = document.querySelectorAll('.popup');
newsImageArray.forEach(function(newsImage) {
    newsImage.addEventListener("change", function(e) {
                //this function does stuff
          var curr_type = newsImage.getAttribute("data-type");
          console.log("curr_type 1 : " + curr_type);

          if(curr_type == "justnews"){

            document.querySelector('#just_news_crop_result').innerHTML = '';

          } else if(curr_type == "up4salenews"){

            document.querySelector('#up4sale_news_crop_result').innerHTML = '';
            
          } else if(curr_type == "eventnews"){

            document.querySelector('#event_news_crop_result').innerHTML = '';
            
          } else if(curr_type == "fundraisernews"){

            document.querySelector('#fundraiser_news_crop_result').innerHTML = '';
            
          }
          currentCroppedImage = '';
          if (e.target.files.length) {
            showToast("Crop picture as desired. Only highlighted portion will show in news");
            // start file reader
            var reader = new FileReader();
            reader.onload = function (e) {
              if (e.target.result) {
                // create new image
                var img = document.createElement('img');
                img.id = 'image';
                img.src = e.target.result;

                // clean result before
          if(curr_type == "justnews"){

            document.querySelector('#just_news_crop_result').append(img);

          } else if(curr_type == "up4salenews"){

            document.querySelector('#up4sale_news_crop_result').append(img);
            
          } else if(curr_type == "eventnews"){

            document.querySelector('#event_news_crop_result').append(img);
            
          } else if(curr_type == "fundraisernews"){

            document.querySelector('#fundraiser_news_crop_result').append(img);
            
          }
                // append new image
                //result.appendChild(img);

                // init cropper
                cropper = new Cropper(img);

                cropper.options.aspectRatio = 1;
                cropper.options.cropBoxResizable = false;
                cropper.options.zoomable = false;
                cropper.options.scalable = false;
                //cropper.options.autoCrop = false;

              }
            };
            reader.readAsDataURL(e.target.files[0]);
          console.log("DONE 1 : " + curr_type);
          }

    });
});

postNewsBtnsArray.forEach(function(btn) {
    btn.addEventListener("click", function(e) {

          e.preventDefault();

          var curr_type = btn.getAttribute("data-type");
          console.log("curr_type 2 : " + curr_type);

          var imgSrc = cropper.getCroppedCanvas({
            width: 300 // input value
          }).toDataURL();

        cropper.getCroppedCanvas().toBlob(function (blob) {

          currentCroppedImage = blob;
          console.log("currentCroppedImage 1");
          console.log(currentCroppedImage);
          app.preloader.show();

          if(curr_type == "justnews"){

            postJustNews();

          } else if(curr_type == "up4salenews"){

            postYardSaleNews();
            
          } else if(curr_type == "eventnews"){

            postEventNews();
            
          } else if(curr_type == "fundraisernews"){

            postFundraiserNews();
            
          }
            console.log("DONE 2 : " + curr_type);

          });



    });
});

allPopUpsArray.forEach(function(popupclosebtn) {
    popupclosebtn.addEventListener("click", function(e) {

            document.querySelector('#just_news_crop_result').innerHTML = '';

            document.querySelector('#up4sale_news_crop_result').innerHTML = '';

            document.querySelector('#event_news_crop_result').innerHTML = '';

            document.querySelector('#fundraiser_news_crop_result').innerHTML = '';
            console.log("all closed");
    });
});

*/

}, 5000);


/****************************************************************************************************
                            
                            ------- CROPS END -----------

****************************************************************************************************/

checkIfSignedIn();
//signMeOut();

setTimeout(function () {

  setInitialItems();
  newPurchaseInfo = getMyPurchases("last");
  firstLoadPurchasesFetch = 1;
  console.log("CONTINUING - " + newPurchaseInfo);
  if(newPurchaseInfo != 0 && newPurchaseInfo != ""){


  generic_news_type = newPurchaseInfo[0];

  adetor_type = newPurchaseInfo[0];
  adetor_news_id = newPurchaseInfo[1];
  adetor_receiver_name = newPurchaseInfo[2];
  adetor_receiver_phone = newPurchaseInfo[3];
  adetor_delivery_address = newPurchaseInfo[4];
  adetor_delivery_type = newPurchaseInfo[5];
  item_quantity = newPurchaseInfo[6];
  adetor_currency = newPurchaseInfo[7];
  adetor_price_per_item = newPurchaseInfo[8];
  delivery_charge_num = newPurchaseInfo[9];
  total_charge_num = newPurchaseInfo[10];
  adetor_status_code = "1";
  adetor_pay_type = "cash_ios";
  adetor_status_message = "Successful";
  slydepay_order_id = newPurchaseInfo[14];
  total_charge_num_cedis = newPurchaseInfo[15];
  total_charge_str = newPurchaseInfo[16];
  slydepaytoken = newPurchaseInfo[17];
  slydepayurl = newPurchaseInfo[18];
  itemname = newPurchaseInfo[19];

  if(slydepaytoken != "" && slydepayurl != ""){

              var url_real = 'https://app.slydepay.com.gh/api/merchant/invoice/checkstatus';
              var checkData = {
                            "emailOrMobileNumber": "fishpottcompany@gmail.com",
                            "merchantKey": "1492651329147",
                            "orderCode": "",
                            "payToken": slydepaytoken,
                            "confirmTransaction": true
                        }
        app.request({
          type: "POST",
          url: url_real,
          data: JSON.stringify(checkData),
          contentType: "application/json",
          success: function(response){
            console.log(response);
            var paySuccessResponse = response["success"];
            if(paySuccessResponse == true){
                var payResult = response["result"];
                if(payResult == "CONFIRMED" || payResult == "PENDING"){

    document.getElementById("continuepayment_btn_slydepay_goto_btn_main").href = slydepayurl;
    $('#continuepayment_btn').click();

              }
            }
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                showToast("Network Error. Try again");

          }
        });
  }


}
}, 5000);



