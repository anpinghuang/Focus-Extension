/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedSetCookie = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["SOCS","CAESHAgBEhJnd3NfMjAyMzA2MTItMF9SQzIaAmZpIAEaBgiAzK6kBg","1year"],["datr","__GMZCgwVF5BbyvAtfJojQwg","1year","","reload","1"],["ig_did","0C826C21-17C3-444A-ABB7-EBABD37214D7","1year","","reload","1"],["euconsent-v2","CPtgasAPtgasAAGABCENDECgAAAAAAAAAApAAAAAAAAA.YAAAAAAAAAAA","1year"],["consentUUID","dde2fbcb-0722-417a-92be-67407ba369de_20","1year"],["euconsent-v2","CPt3fQAPt3fQACNAFAENDLCgAAAAAAAAACiQAAAOCgDAB-AIsAZ8A6QDBAHBAAAA.YAAAAAAAAAAA","1year"],["tracking-opt-in-status","rejected","1year"],["addtl_consent","1~","1year"],["dm-euconsent-v2","CPt6yMAPt6yMABpAGAENDECgAAAAAH_AAAqIAAAS3AJMNW4gC7MocGbQMIoEQIwrCQigUAEFAMLRAQAODgp2VgE-sIkAKAUARgRAhwBRkQCAAASAJCIAJAiwQAAAiAQAAgAQCIQAMDAIKACwEAgABAdAxRCgAECQgSIiIhTAgKgSCAlsqEEoLpDTCAKssAKARGwUACIJARWAAICwcAwRICViwQJMQbRAAMAKAUSoVqKT00BCxmQAAAAA","1year"],["consentUUID","9f883906-c5ae-4d90-80a1-6623a4211ad4_21","1year"],["consentUUID","629d4124-fa7b-43b4-8158-d596cef1004d_23"],["consentUUID","f0aaedd0-2a07-443a-b90f-055c553b5160_21","1year"],["consentUUID","14ec7082-be8b-4b4c-a5b4-668972e0e04b_21","1year"],["fig_save_consent","iTTPgpSWqAGGcd3vV88zNDbHsABxE1hB","1year"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAAAAAAAAAB5YAAAAAAAA.YAAAAAAAAAAA","1year"],["wt_tandc","20190527%3A1"],["__wtcm","CP03uwAP03uwAPnACAENAxCAAEIAEEJAEAABGbwFgABAAMABlAEQARQAnABlADcAH4ATABCACLAEcAKQAVkAuoBpgDiAH8AXmAwQBkkjKSM3AAAAAAAA.JGbwFgABAAMABlAEQARQAnABlADcAH4ATABCACLAEcAKQAVkAuoBpgDiAH8AXmAwQBkkjKSM3AAA"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0008%3A0","1year"],["_scw_rgpd_hash","1676567096","1year"],["PUR_SUBSCRIPTION","PREMIUM"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false}","1year"],["cb","1_1970_01_01_2-3","1year","","reload","1"],["datr","mWTaZBxAoW8lFl0v3EpECGYi","1year","","reload","1"],["COOKIES_CONSENT","essential"],["myscript","{%22acceptance%22:true%2C%22analytics%22:false}"],["tm_cookie_setting","Analytics","","","reload","1"],["BCP","AD=0&AL=0&SM=0"],["cookies","{\"system\":1,\"target\":0}"],["CookieControl","{\"interactedWith\":true\\,\"acceptedCategories\":[\"essentials\"]}"],["cookie_preference","functional"],["trackingPermissionConsentsValue","%7B%22cookies_analytics%22%3Afalse%2C%22cookies_personalization%22%3Afalse%2C%22cookies_advertisement%22%3Afalse%7D"],["euconsent-v2","CPzEX8APzEX8ADtACBESAUEgAAAAAAAAAAiQAAAAAAAA"],["euconsent-v2-addtl","%20"],["pfUserCookPolicy","12562660:1"],["viucom-cookie-accept","[\"technical_necessary\"]"],["consentUUID","642425b5-b07b-421f-a5dd-a80d44b661c9_24","1year"],["BN.User.CookieConsent","CAE%3D"],["CookieConsent","{stamp:%27BvqlZ34xqOpzSOaxY1VgwOy5CZ1lfC4Xs2JNiDqz9M4rNuyyAY56Jg==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1697932000537}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:2}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:3}","1year"],["CookieConsent","{stamp:%27fbbiPQWa8SRQm47Ge8hRVOAPAgw2jXlG8o/+hp1euVVi1qtFQj1O3w==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:4}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:5}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:6}","1year"],["purr-pref-agent","<a1<Go"],["SK.Website.ConsentManager","W1siYmFzZSIsdHJ1ZV0sWyJnb29nbGVhbmFseXRpY3MiLGZhbHNlXSxbIm1ldGFwaXhlbCIsZmFsc2VdXQ=="],["consent","%7B%22level%22%3A%5B%22necessary%22%5D%2C%22revision%22%3A0%2C%22data%22%3A%7B%22id%22%3A%22DarYF7gx7v%22%7D%2C%22rfc_cookie%22%3Atrue%7D"],["CookieConsents","{\"StrictlyNecessary\":true,\"Analytical\":false,\"Performance\":false,\"AdvertisingAndTargeting\":false,\"timestamp\":\"\"}"],["cookie-consent-1","{\"optedIn\":true,\"functionality\":false,\"statistics\":false}"],["kmt_rd","no-consent","","","reload","1"],["cr_consent","2|tracking=false+analytics=false+marketing=false","","","reload","1"],["hbl_cookie_prefs_v1","[%22Essential%22]"],["mmc-cookie-consent","{\"Id\":\"c2457eddbecc20cbab3869374900e864\",\"CategoryID\":4}","1year"],["fixami.app_state","eyJzdGF0ZSI6eyJpc1RheEluY2x1ZGVkIjp0cnVlLCJpc0ZpcnN0VmlzaXQiOnRydWUsImlzQ3VzdG9tZXJTZXJ2aWNlTW9kYWxPcGVuIjpmYWxzZSwiYWNjZXB0ZWRDb29raWVzIjoiMCIsImhhc0FjY2VwdGVkQ29va2llcyI6dHJ1ZSwiaGFzQWNjZXB0ZWRNYXJrZXRpbmdDb29raWVzIjp0cnVlLCJoYXNBY2NlcHRlZFN0YXRpc3RpY3NDb29raWVzIjp0cnVlfSwidmVyc2lvbiI6MH0="],["website_cookies_bar","{\"required\": true, \"optional\": false}"],["OptanonAlertBoxClosed","$currentDate$","1year"],["_EVAcookieaccept","Y","1year"],["_EVAGDPRfunctional","Y","1year"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPt6LrpPt6LrpAcABBENDKCgAAAAAAAAAAYgGBtX_T5eb2vj-3ZcN_tkaYwP55y3o2wzhhaIke8NwIeH7BoGJ2MwvBV4JiACGBAkkiKBAQVlHGBcCQAAgIgRiSKMYk2MjzNKJLJAilMbO0NYCD9mnkHT2ZCY70-uO__zvneAAAAYJABAXmKgAgLzGQAQF5joAIC8yUAEBeZSACAvMAAA.YAAAAAAAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A1%2CBG57%3A0%2CBG58%3A0%2CBG59%3A0","1year"],["TcString","CPzEX8APzEX8ABUANAFIDZCgAP_AAAAAAApAAAALzgJgALAAqAB4AEAAMgAaABEACYAE8APwAhABogDZAIsAYoAz4B1AEyALzAFCQDgAFgAVAA8ACAAGQANAAiABMACeAH4AQgA2QDFALzHQEAAFgAVABAADIAGgARAAmABPAD8ANEAbIBFgDFAHUATIAvMhAEAAWAEwAxQB1CUAcABYARAAmADZAMUAdQBeZSAeAAsACoAIAAZAA0ACIAEwAJ4AfgBogDZAIsAYoA6gC8wA.YAAAAAAAAIAA","1year"],["gravitoData","{\"NonTCFVendors\":[{\"id\":1,\"name\":\"Facebook\",\"consent\":true},{\"id\":3,\"name\":\"Google\",\"consent\":true},{\"id\":9,\"name\":\"Twitter\",\"consent\":true}]}","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0%2CC0005%3A0","1year"],["ladies-cookies-overlay","%7B%22cookie-category-essential%22%3Atrue%2C%22cookie-category-stats%22%3Afalse%2C%22cookie-category-map_services%22%3Atrue%7D","","","reload","1"],["opt_out","analyse,werbe"],["OptanonConsent","groups=C0001%3A1%2CC0003%3A1%2CSPD_BG%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1","","","reload","1"],["STYXKEY_your_privacy_settings","%7B%22strict%22%3A%221%22%2C%22thirdparty%22%3A%221%22%2C%22advanced%22%3A%220%22%7D","1year","","reload","1"],["consentUUID","21ad958f-7582-49b3-b243-b637a91e292c_25","1year"],["consentUUID","21ad958f-7582-49b3-b243-b637a91e292c_25","1year","","reload","1"],["OptanonConsent","groups=C0001%3A1%2CC0009%3A0%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["allowCookies","{\"uvc\":true,\"__cfduid\":true}"],["cookieConsent","%5B%7B%22name%22%3A%22essenziell%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22komfort%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22marketing%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22statistik%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22speichern%22%2C%22value%22%3A%22on%22%7D%5D","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","1year"],["consents",":4:6:7:8:9:10:11:12:13:19:"],["__cmpcpc","__1_2__"],["__cmpcvc","__c24599_s94_c24102_s40_s1052_s65_c24103_s23_c9953_c24290_c24098_s26_s2612_s135_s1104_s1409_s905_s24_c24202_c22143_c21373_s77_s30_U__"],["__cmpconsentx40263","BPuKNGaPuKNGaAfEHBFIABAAAAA_mABAfyA"],["consent-levels","1-1_2-1_3-0_4-0","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A1"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAM_AAE7AAAqII7FF_X7eTSPheWp_Y_tUOY0ewVQ_4-AhBgCJA4gBCRpAsJQEkGAIIEDAIAAKAAYEIGJBAAElAAFABEAAYIEBACHMAAAAIRAAIDKAAAAAAgBACABYEwAAAAIAgEBUABUAiAIAABogwMBAEAAgBEAAAAogAIBBAAAAACAAwAAQAAAIAggAAAAAAAAEAAAEAAAAEAAABJKADAAEExQ0AGAAIJiioAMAAQTFKQAYAAgmKOgAwABBMUhABgACCYoSADAAEExREAGAAIJijIAMAAQTFAAA.efgACdgAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A0%2CBG40%3A0%2CBG41%3A0%2CBG42%3A0","1year"],["euconsent-v2","CPuy0IAPuy0IAAHABBENDNCgAAAAAAAAAAAAJNFB_G5cSWNhOHJvY9tUaQ0HwFR4o6AgDgCZA4wBCRIAMIwF0GAAIEBAIAgAAAAEAAJAAAAEAAHAAAAAAIEBASCIAEAAIBAAICAAAAABQgAACABJGwAAEAAAAEQEABQAgAIAQBuAQEAAAAAAAAAAAAgBAABBAAAAAAAgAAAIAAAAAAgAEAAAAAAAAAAAABAAEAAAAAEAAABIaADAAEExRUAGAAIJihIAMAAQTFEQAYAAgmKMgAwABBMUdABgACCYpCADAAEExSUAGAAIJilIAMAAQTFA.YAAAAAAAAAAA"],["_ul_cookie_consent","allow"],["p","eyJnZHByX3RwIjoyLCJnZHByX3AiOjF9","1year","","reload","1"],["cmplz_consented_services","{\"youtube\":true}"],["xf_consent","%5B%22_third_party%22%5D","","","reload","1"],["cookieConsent","functional","1year","","reload","1"],["je-cookieConsent","necessary","1year"],["customerCookieConsent","%5B%7B%22consentTypeId%22%3A103%2C%22consentTypeName%22%3A%22necessary%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A104%2C%22consentTypeName%22%3A%22functional%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A105%2C%22consentTypeName%22%3A%22analytical%22%2C%22isAccepted%22%3Afalse%7D%2C%7B%22consentTypeId%22%3A106%2C%22consentTypeName%22%3A%22personalized%22%2C%22isAccepted%22%3Afalse%7D%5D","1year"],["cookie-optin","{%22version%22:1%2C%22settings%22:{%22required%22:true%2C%22analytical%22:false%2C%22marketing%22:false%2C%22thirdparty%22:true}}","1year"],["cookiefirst-consent","%7B%22cookiefirst%22%3Atrue%2C%22google_analytics%22%3Atrue%2C%22google_tag_manager%22%3Atrue%2C%22linkedin_ads%22%3Afalse%2C%22hubspot%22%3Atrue%2C%22twitter%22%3Afalse%2C%22active-campaign%22%3Atrue%2C%22email-marketing%22%3Atrue%2C%22bing_ads%22%3Afalse%2C%22type%22%3A%22granular%22%7D"],["consentUUID","f2fed351-3e4d-4e37-a3d6-bf942c6146e1_25","1year"],["euconsent-v2","CP0C_wAP0C_wAAGABBENDbCgAP_AAAAAAApAJLNV_H__bX9r8X7_6ft0eY1f9_jz7uQxBhfJk-4F3LvW_JwX32E7NF36tq4KmRoEu1JBIUNlHIHUDUmwaogVrzHsakWcpTNKJ6BkkFMRU2dYCF5um4tjeQKY5_p_d3f52T-9_dv839zz38VHv3cZX--12PDdU5-9Dfn9fRfb89IL9_78v4v8_t_rk2_eT13_tetr_DAAAAaEgogAIAAXABQAFQAOQAeACAAGAAMoAaABqADwAIgATAAngBVADMAG8APQAfgBCQCGAIkARwAlgBNAClAGAAMOAZQBlgDZgHcAd8A9gD4gH2AfsA_wEAAIpARcBGACNAElAJSAUGAp4CrgFzAMUAaIA2gBuADiAIdASIAnYBQ4CjwFIgLYAXIAu8BgwDDYGRgZIAycBlwDOQGfANIgauBrIDbwG6gOCgcmBygDlwHjgPaAfSBBgCEMELQQvAhyBD0CH4EcQI-gR_AkUBJAIACAJoAtwNAEAKeAh0BnwDlBEAQAp4CHQGfAOUFQAwGfAOUAheMgBgM-AcoBC8hA4AAWABQAFwAMQAagBMACmAFUALgAYgA3gB6AEcAKUAYAAyoB3AHeAP8AigBJQCUgFBAKfAVEBVwC5gGKANoAc4A6gCVAFNAKsAWKAsoBaIC4AFyAMjAZOAzkBnwDRAGqgOAAcoA8cB9IEGAIUAQtAheBDoCHoEcQJFASQHQaQAFwAUABUADkAHwAgABdADAAMoAaABqADwAIgATAAngBVgC4ALoAYgAzABvAD0AH6AQwBEgCWAE0AKMAUoAwABhgDKAGiANkAd4A9oB9gH6AP8AikBFgEYAI6ASUAlIBQQCnwFRAVcAsQBc4C8gL0AYoA2gBuADiAHOAOoAfYBDoCLwEiAJUATIAnYBQ4CjwFNAKsAWKAsoBbAC3QFwALkAXaAu8BfQDBgGGgMegZGBkgDJwGVAMsAZcAzMBnIDPgGiANIAarA1cDWAG3gN1AcXA5MDlAHLgPHAe0A-kB9YEAQIMAQtAhfBDkEOgIegRxAjsBH0CP4EigJIDgAIC3CUDQABAACwAKAAcAA_ADAAMQAeABEACYAFUALgAYoBDAESAI4AUYAwABsgDvAH4AU-AqICrgFzAMUAdQBDoCJgEXgJEAUeAsUBZQC2IGRgZIAycBnIDPgGkANYAbeA4AB7QD6QIAgQPAgwBCECF4EPQI4gSKAkgBJUkABAW4UgpAALgAoACoAHIAPgBBADAAMYAaABqADwAIgATAAngBSACqAGIAMwAfoBDAESAKMAUoAwABlADRAGyAO-AfgB-gEWAIwAR0AkoBKQCgwFRAVcAuYBeQDFAG0ANwAdQA9oB9gEOgImAReAkQBOwChwFWALFAWwAuABcgC7QF9AMNgZGBkgDJwGWAMuAZyAz4BpEDWANZAbeA3UBwUDkwOUAcuA8UB44D2gH0gQYAhCBC0CF4EM4Icgh0BHECOwEfQI_gSKAkgUAAgLc.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPwbUmgPwbUmgAcABBENDSCgAAAAAH_AAChQJnNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XWxBQAJMNS4gC7IkZCbaMIoEQIwrCQqgUAFEAkLRAYQurgp2VwE-sBkAIEUATwQAhgBRkACAAASAJCIAJAjgQCAQCAQAAgAVCAQAMbAAPAC0EAgAFAdCxTigCUCwgyISIhTAhKkSCgnsqEEoP1BXCEMssCKDR_xUICNZAxWBEJCxehwBICXiSQPdUb4ACEAKAUUoViKT8wBDgmbLVXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAA.YAAAD_gAAAAA","1year"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:true%2Cmarketing:true}","1year"],["AtomStore[COOKIES_ACCEPTED]","1","1year","","reload","1"],["AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1","1year"],["AtomStore[MARKETING_COOKIES_ACCEPTED]","0","1year"],["solt_cookie_preferences","functional%2Cperformance","1year"],["cookie-layer-settings","{\"id\":\"b2575cbc6f69c6ff02140366ef7473e9\",\"options\":[{\"analytics-is-enabled\":false},{\"komfort-is-enabled\":false},{\"personalisierung-is-enabled\":false},{\"external-data-is-enabled\":true},{\"cf-ga-opt-in\":false},{\"cf-fb-opt-in\":false},{\"cf-go-opt-in\":false},{\"cf-sn-opt-in\":false},{\"cf-am-opt-in\":false},{\"cf-pi-opt-in\":false},{\"cf-tw-opt-in\":false},{\"cf-li-opt-in\":false},{\"cf-te-opt-in\":false},{\"cf-ti-opt-in\":false},{\"cf-ttd-opt-in\":false},{\"external-data-youtube-is-enabled\":true},{\"external-data-spotify-is-enabled\":true},{\"external-data-googlemaps-is-enabled\":true},{\"external-data-universal-is-enabled\":true}]}","1year"],["d_prefs","MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw"],["didomi_token","eyJ1c2VyX2lkIjoiMThhNmQyZGEtOGNmOC02YTE0LWI3OWQtNzViOGU4ZjA2YmYyIiwiY3JlYXRlZCI6IjIwMjMtMDktMDdUMDE6MDc6MTQuNTIwWiIsInVwZGF0ZWQiOiIyMDIzLTA5LTA3VDAxOjA3OjE0LjUyMFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpwaWFuby1ic1hwclg4dyIsImM6bHVjaWRob2xkLXlmdGJXVGY3IiwiYzpzYWxlc2ZvcmNlLUI0WEI1UU5aIiwiYzpsaXZlZnlyZS00Y2JOV1lFeiIsImM6eW91dHViZS1EV3RqQ1VLYiIsImM6YWNjZW5nYWdlLUVXRUx4MzRnIiwiYzpjaGFydGJlYXQtaHhLaEZiQXciLCJjOmFtYXpvbmFkcy05YzVUTkdhaiIsImM6dHdpdHRlcndpLXdVbUJubkt5IiwiYzpmYWNlYm9va3ctMmthN1Z3UTgiLCJjOmdvb2dsZW9wdC1RaGlBZG1WYSIsImM6Z2djcm9sbHVwLW5OSGVpMmFXIiwiYzpmYWNlYm9va2EtZnJVOU01SlkiLCJjOmdvb2dsZWFuYS1HMmJzRUp5VCIsImM6Z29vZ2xlYXVkLUxEalZZa2VhIiwiYzppbnN0YWdyYW0tdFdtSmdKcHEiLCJjOm5ldHF1ZXN0LU4yblc0ZnBHIiwiYzpwcm9jdGVyYW4tSzROdzh4TUMiLCJjOmNvbXNjb3JlLWpVRmM5aWNZIiwiYzpzcG90aW0tM0ZLSDYyeUMiLCJjOnl1c3AtejhOaTQ0Wk0iLCJjOndlbWFzc21lZC1QR1o2M0Z4WSIsImM6ZXZvbG9rLWl6S3o3QVlWIiwiYzpnb29nbGVmaXItSDhrY2lGSkciLCJjOmxhbGlnYS1ZNllRMjJSUiIsImM6YWRzdml1LVZUMjZtM1FiIl19LCJwdXJwb3NlcyI6eyJkaXNhYmxlZCI6WyJnZW9sb2NhdGlvbl9kYXRhIiwiY29tcGFydGlyLWRwSGdKRUphIiwia0VlRHNMQ3AiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIl19LCJ2ZW5kb3JzX2xpIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIl19LCJ2ZXJzaW9uIjoyLCJhYyI6IkRIYUNJQUVJQUl3QVdRQXVnQnNBRDBBSlVBWWdBOFFCLWdFM0FLTUFZb0F6NEI0Z0R6UUh1QWU4QkRnQ1N3R1lnTTFBZXFCQWtDRFlFUkFJamdSSkFpbUJHY0NVUUVzUUphZ1M3QW40QlJVQ3FvRmh3TFVnWWlBem1CcWNEaUFIS0FPbkFkV0E3Q0I3RURfd0lHQVJtZ2tNQkwyQ2M0RTd3S0NBVUhncFNCVHFDczhGb0FMUmdXeUF1ZEJlU0Mtb0dIUU1iZ1k3QUFBQS5ESGFDSUFFSUFJd0FXUUF1Z0JzQUQwQUpVQVlnQThRQi1nRTNBS01BWW9BejRCNGdEelFIdUFlOEJEZ0NTd0dZZ00xQWVxQkFrQ0RZRVJBSWpnUkpBaW1CR2NDVVFFc1FKYWdTN0FuNEJSVUNxb0Zod0xVZ1lpQXptQnFjRGlBSEtBT25BZFdBN0NCN0VEX3dJR0FSbWdrTUJMMkNjNEU3d0tDQVVIZ3BTQlRxQ3M4Rm9BTFJnV3lBdWRCZVNDLW9HSFFNYmdZN0FBQUEifQ=="],["euconsent-v2","CPxurkAPxurkAAHABBENDVCgAP8AAE4AAAiQIkNf_X_fb2vj-_p99_t0eY1P9_6_t6wzjheNk-8NyZ_X_J4Xp2M6rB34pqIKuR4kunLBIQdlHGHcTUgg4IkFoSPsYk2MizJKJ7JEmlMbE2dYGG9vn8TT-ZKY70__f__zvn-r___97oAAhCAABAAAAAgAAIAAAgAIAAAAAAAAAAAAAAAAAAAAAAAADA4tAsy0bqaFsHT0Lpo4igRGjCuJWoBQGUQCwtkBhmTPCnZHAR-wnUAAxAADBByGAFEaAICCIIAkKgIkEOBAqJAIdAACgAUIBAFRIgEoiLAQCAA0B8PAKKAJSLGDKhIidcCMKxIPu-QAAEAQAAIAAQAAAABAJCgAYAAiCgGgAwABEFARABgACIKAqADAAEQUBkAGAAIgoDwAMAARBQIQAYAAiCgTAAwABEFAqABgACIKAAAA.f-AACcAAAAAA"],["cookie_consent","%7B%22allowEssentials%22%3Atrue%2C%22allowFunctional%22%3Atrue%2C%22allowAnalytics%22%3Afalse%2C%22allowMarketing%22%3Afalse%7D"],["SOCS","CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwODI5LjA3X3AxGgJlbiADGgYIgJnPpwY","","","reload","1","domain","youtube.com"],["cad","$now$"],["cc","2.4"],["cp",".16.21."],["cva","W2.0"],["ubs_cookie_settings_2.0.4","0-2-1"],["ConsentChecked","{\"userHasSetCookies\":true,\"functionalityCookies\":true,\"statisticCookies\":false,\"marketingCookies\":false}","","","reload","1"],["_iub_cs-817732","%7B%22purposes%22%3A%7B%221%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A817732%2C%22cons%22%3A%7B%22rand%22%3A%223ec000%22%7D%7D"],["allow_cookies","{\"essential\":\"1\",\"functional\":{\"all\":\"1\"},\"marketing\":{\"all\":\"0\"}}"],["euconsent-v2","CPywmUAPywmUAAHABBENDYCsAP_AAH_AAAAAJrNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdF-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PkmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XW-8E1ACTDQuIAuwJGQm2jCKBACMKwkKoFABRAJC0QGELq4KdlcBPrARACBFAAcEAIYAUZAAgAAAgCQiACQI4EAgEAgEAAIAFQgEABGwACgAsBAIABQHQsU4oAlAsIMiMiIUwIQpEgoJ7KhBKD9QVwhDLLACg0f8VCAgUAMVgRCQsXocASAlwkkC3VG-AAhACgFFKFYgk9MAA4JGy1B4IAA.f_gAD_gAAAAA"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZDY1NzMtZGY4YS02YzJhLWJkZmUtOGI5ZjkwMDU5MmQwIiwiY3JlYXRlZCI6IjIwMjMtMDktMjdUMTE6MTI6MzcuNzk3WiIsInVwZGF0ZWQiOiIyMDIzLTA5LTI3VDExOjEyOjM3Ljc5N1oiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpkbXB3ZWJlZGktblRCSEFrNDQiLCJjOmFtYXpvbnRhbS1lWTRpTjROViIsImM6YmF0Y2gtYkp0R3R0eEwiLCJjOndhcm5lcmJyby1BUEpXeUFHUCIsImM6ZmFjZWJvb2std0RpR25KV1YiLCJjOnNuYXBjaGF0LWhXMnJNSmZZIiwiYzp0aWt0b2stV2J5cEEzWmQiLCJjOnR3aXR0ZXIteGJERXhKUGsiLCJjOmdvb2dsZWFuYS1YTXFhZ2F3YSJdfSwicHVycG9zZXMiOnsiZW5hYmxlZCI6WyJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiZ2VvbG9jYXRpb25fZGF0YSJdfSwidmVuZG9yc19saSI6eyJlbmFibGVkIjpbImdvb2dsZSJdfSwidmVyc2lvbiI6Mn0="],["_iub_cs-30166201","%7B%22timestamp%22%3A%222023-09-28T08%3A20%3A53.130Z%22%2C%22version%22%3A%221.51.0%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Afalse%2C%223%22%3Atrue%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A30166201%2C%22cons%22%3A%7B%22rand%22%3A%22e747e3%22%7D%7D"],["trackingCookies","off"],["complianceCookie","on"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZWVmMWQtNGQ2ZC02MDAwLWEzYTAtMDgzZjdhYzBhNGQ1IiwiY3JlYXRlZCI6IjIwMjMtMTAtMDJUMDU6NTI6MjUuNDUzWiIsInVwZGF0ZWQiOiIyMDIzLTEwLTAyVDA1OjUyOjI1LjQ1M1oiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzptZXN1cmVkYS1aYzl6dDhMOCIsImM6cHJvbW90aW9ucy1Id0VZZjRUQyIsImM6eWFob28tYWQtZXhjaGFuZ2UiLCJjOnB1YmxpaGViZG8tM1FORWNnRjQiLCJjOnB1YmxpaGViZG8tSE40Z1hhWDYiLCJjOnB1YmxpaGViZG8tWk1iWDI2a1IiLCJjOnlhaG9vLWdlbWluaS1hbmQtZmx1cnJ5IiwiYzpwdWJsaWNpdGUtSGlLR0ZDNGEiLCJjOnB1YmxpaGViZG8tR0huUW1Ea0YiXX0sInB1cnBvc2VzIjp7ImVuYWJsZWQiOlsibWVzdXJlZGEteDN0YzhHYUUiLCJwcm9tb3Rpb25zLVF4R2NHQXpSIiwiY29udGVudXNjLVJad2ZYSk1RIiwiY29udGVudXNkLTcyVlRUYzdlIiwiY29udGVudXN2LXl4TlFXOWI4IiwicHVibGljaXRlLURSRm1UV3RHIiwicHVibGljaXRlLWJiM0M0ZDR6IiwiZGV2aWNlX2NoYXJhY3RlcmlzdGljcyIsImdlb2xvY2F0aW9uX2RhdGEiXX0sInZlcnNpb24iOjIsImFjIjoiQ0JxQUNDQm8uQUFBQSJ9"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCsAP_AAAAAAAAAJNNf_X_db3Nj-_5_fvt0eY1f9dy-v-wjDhedh-0NzXrW-L0F02I7vF3ihggKOQ4EshJBIQdlGKHcRUkw6okEgzGsYESUg4MAJqLEikETEwNYGE1bGcRCOAIYrtsoPr2ymtuKev_9W2V-_-j0QzpJKS-i8IbtQ185xLmsyf0fn4jOP_-VO2997____8AAAFEIEABZAAEAAABISADAAEQUA0AGAAIgoCIAMAARBQFQAYAAiCgMgAwABEFAdABgACIKBCADAAEQUCUAGAAIgoFIAMAARBQA.f_gAAAAAAAAA"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCgAAAAAAAAAAAAJNFB_W_fD2Ni-35_avt0aQ1dwVC_6-UxDgKZB4kFyRpEMKwX3mAKKFXgpKAKGBYEsUZAIQBlHCHEDECwQIERLzHMIAEQJQIAJqJEgFERAkJQCBpZHwMACAIQgHRWATFIiB-HaBroyfhEMaC0AUBQ4AonhMTPAoSdwXCkg7uaHIgIImgFASBAIoYMEEEEBlTkFABAAAkAAABJSADAAEQUCUAGAAIgoDoAMAARBQIQAYAAiCgEgAwABEFARABgACIKAyADAAEQUA0AGAAIgoCoAMAARBQA.YAAAAAAAAAAA","","","reload","1"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZWVmZTgtNGJjMS02NjhmLWE5YTgtNmNhM2VmMmQ0NzVkIiwiY3JlYXRlZCI6IjIwMjMtMTAtMDJUMDY6MDY6NDQuODA0WiIsInVwZGF0ZWQiOiIyMDIzLTEwLTAyVDA2OjA2OjQ0LjgwNFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiYzphYi10YXN0eSIsImM6YWNhc3QtQ2M3MmNoWHAiLCJjOmFjcG0tSkIzNEJicmQiLCJjOmFwbG96ZS14NDdKZlhVSyIsImM6YXBwc2ZseWVyLXdETmJrQ2I2IiwiYzphdGludGVybmUtY1dRS0hlSloiLCJjOmJlb3AtdEdSV0hIYUYiLCJjOmJpbmctYWRzIiwiYzpjaGFydGJlYXQiLCJjOmNsaWNraW50ZXh0IiwiYzpkYWlseW1vdGlvLWhyRldwVEtDIiwiYzpzcXVhZGF0YS1lYXN5ZG1wIiwiYzpkeW5hbWljbWEtNzhlUmpLY1YiLCJjOmZhY2Vib29rLXRrQWpXM2k2IiwiYzpmbG91cmlzaC14bnhZTVo2TiIsImM6Z2VuaWFsbHktWjhiUmhxRW4iLCJnb29nbGUiLCJjOmdvb2dsZW1hcC1kRDdDWkNKZyIsImM6aW5mb2dyYW0tcXFoZDNoZk0iLCJjOmluc3RhZ3JhbS1MWmthNlI0NCIsImM6aW5zdGFncmFtIiwiYzpqdXh0YXBvc2UtTVpnSEZmWXgiLCJjOm1hcHM0bmV3cy0zWDlWUVc3NiIsImM6bWljcm9zb2Z0IiwiYzptaWNyb3NvZnQtYW5hbHl0aWNzIiwiYzptaWNyb3NvZnQtb25lZHJpdmUtbGl2ZS1zZGsiLCJjOm15ZmVlbGJhY2siLCJjOm9uZXNpZ25hbC1uS1hmQ3BZcyIsImM6cGxheWJ1enotamhKcUNBeEsiLCJjOnBvb29sLWV3WjY2ZWdmIiwiYzpwb29vbC1WeWhDaXQ3TiIsImM6cHVic3RhY2stV3JDYkV5Y00iLCJjOnNob3J0aGFuZC02R01GSzJCVyIsImM6c291bmRjbG91ZC14S01ER1g0TCIsImM6c3RvcnltYXAtTFpwaWQ3WXEiLCJjOnN1YnNjcmliZS1abXdVZVVDUCIsImM6dGltZWxpbmVqLWU2WFJDS1VYIiwidHdpdHRlciIsImM6dHdpdHRlci1pNnhkQjJyVCIsImM6dmltZW8tSGlNcnpFUEgiLCJjOnlvdXR1YmUiLCJjOnlvdXR1YmUtQ2VWemptSlAiXX0sInB1cnBvc2VzIjp7ImVuYWJsZWQiOlsicmVzZWF1eHNvLTlLYmpid05oIl0sImRpc2FibGVkIjpbImdlb2xvY2F0aW9uX2RhdGEiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiYXVkaWVuY2VtLXhlZGVVMmdRIiwiY29udGVudXN2LWhGVDhpZmRSIiwiY29udGVudXNjLXBYQVZVdDhyIiwibWVzdXJlZGEtaDdHUWVyclQiXX0sInZlcnNpb24iOjIsImFjIjoiQ25XQUdBRmtCSllLZFFBQS5BRm1BQ0FGayJ9"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCgAAAAAAAAAAAAJNFB_W_fD2Ni-35_avt0aQ1dwVC_6-UxDgKZB4kFyRpEMKwX3mAKKFXgpKAKGBYEsUZAIQBlHCHEDECwQIERLzHMIAEQJQIAJqJEgFERAkJQCBpZHwMACAIQgHRWATFIiB-HaBroyfhEMaC0AUBQ4AonhMTPAoSdwXCkg7uaHIgIImgFASBAIoYMEEEEBlTkFABAAAkAAABJSADAAEQUCUAGAAIgoDoAMAARBQIQAYAAiCgEgAwABEFARABgACIKAyADAAEQUA0AGAAIgoCoAMAARBQA.YAAAAAAAAAAA"],["CTC","eyJBIjoxNjk5MzUwNzAxODY1LCJCIjoxNjk5MzUwNzAxODY1LCJEIjpmYWxzZSwiRSI6dHJ1ZSwiRiI6ZmFsc2UsIkciOmZhbHNlLCJIIjpmYWxzZSwiSSI6Wy01ODM2OSwyNjEyODddLCJKIjpbOTgzNTg1LDMwNzJdfQ=="],["the_green_city","[%22preference%22%2C%22technical%22]"],["consentCookie","%7B%22id%22%3A%22d28cc3d1-22a4-4137-9477-3e82b6936e01%22%2C%22permissions%22%3A%7B%22social%22%3Atrue%2C%22personalization%22%3Afalse%2C%22tracking%22%3Afalse%7D%2C%22createdAt%22%3A%222023-10-13T02%3A54%3A20.54Z%22%7D","","","reload","1"],["cookieconsent_dismissed","1%7C%7C1%7C%7Crt2d2f69if8tq2hiq7dmjejrd2","1year","","reload","1"],["OptanonAlertBoxClosed","$currentDate$"],["OptanonConsent","groups=C0003%3A1%2CC0002%3A1%2CC0001%3A1%2CC0005%3A1%2CC0004%3A1","1year"],["cookiepreferences","necessary#true|marketing#true"],["cookie-preferences","{\"performance\":false,\"marketing\":false,\"functionality\":true,\"social\":true,\"essential\":true}"],["hp__gdpr_consent","!demographics=false!googletagmanager=false!facebook=true!twitter=true!instagram=true!youtube=true!optimize=false!helphero=false!fbpixel=false!iterable=false!kayakWidget=false!vimeo=true!lastminute=false!apple=true!google=true!hotjar=false!getYourGuide=false!gad=false","1year"],["consentUUID","a87000c2-544c-4174-9e93-a15b7a78da3e_24","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year"],["_iub_cs-88644770","%7B%22timestamp%22%3A%222023-10-23T06%3A16%3A56.750Z%22%2C%22version%22%3A%221.51.1%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%7D%2C%22id%22%3A88644770%2C%22cons%22%3A%7B%22rand%22%3A%22c904a1%22%7D%7D","1year"],["_iub_cs-59813847","%7B%22timestamp%22%3A%222023-10-25T07%3A55%3A58.826Z%22%2C%22version%22%3A%221.51.1%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%7D%2C%22id%22%3A59813847%2C%22cons%22%3A%7B%22rand%22%3A%22944830%22%7D%7D","1year"],["cm_eu_preferences","{%22consent%22:[%22necessary%22%2C%22functional%22]%2C%22region%22:%22DEFAULT%22}"],["gdpr","{%22version%22:%221.0_tracking%22%2C%22options%22:{%22typo3%22:true%2C%22gdpr%22:true%2C%22openstreetmap%22:true%2C%22vimeo%22:true%2C%22youtube%22:true%2C%22recaptcha%22:true%2C%22googlemaps%22:true%2C%22tracking%22:false}}"],["rts-consent-cookie","essential%2CcustomCategory-37e8dfb9-5b08-4500-819f-f838d37a030b%2Cfunctional%2CcustomCategory-4a45356b-968a-4bf0-b5ec-ed8d474eb0fe%2CcustomCategory-c983c522-acc5-4cd4-bc4c-e6d79f26c390%2CcustomCategory-4445f83c-5f4e-4c1d-b78f-b4627fb3ef21%2CcustomCategory-eae5fd82-bf1d-4cd1-82ac-a602c1b179b2","","","reload","1"],["_iub_cs-495815","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["_iub_cs-15665353","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["consentUUID","30fa6cf5-9b2a-40b5-a14f-183629a4f9e7_25","1year"],["privacy_consent","%7B%22essentials%22%3Atrue%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%2C%22maps%22%3Atrue%2C%22youtube%22%3Atrue%7D"],["hs365-accepted-cookies","[{%22description%22:%22Enable%20you%20to%20navigate%20and%20use%20the%20basic%20functions%20and%20to%20store%20preferences.%22%2C%22key%22:%22technically_required%22%2C%22label%22:%22Technically%20necessary%20cookies%22%2C%22isMandatory%22:true}%2C{%22description%22:%22Display%20third%20party%20content%20like%2C%20for%20example%2C%20YouTube%20videos%20or%20twitter%20feeds.%22%2C%22key%22:%223rdParty%22%2C%22label%22:%22Third-Party%20Content%22}]"],["notion_cookie_consent","{%22id%22:%2282a41727-b652-4011-a0a4-13a4499c039a%22%2C%22permission%22:{%22necessary%22:true%2C%22preference%22:true%2C%22performance%22:false%2C%22targeting%22:false}%2C%22policy_version%22:%22v8%22}"],["eupubconsent-v2","CP0tkXAP0tkXAAcABBENAXEwAAAAAAAAAAYgAAAAAAHBAHwAAQADQAOAA8ADIALAAjgBQACuAFsARYAlwBfQDUANUAc4A8gB8gEDAIOARwAn8BQwFFALsAZwA3gB6AD5AIbAReAj0BIoCSwErAJlgTYBNoClwFPgLCgWIBYoC6gF3ALyAYFAw8DEAGLQMhAyMBkwDPwGhANGAaYA1MBroDaAG3AN0AcEA6gB2ADuoHkgeUA96B8gHyhIHAACAAFwAUABUADkAHgAgABhADIANQAeABMACqAG8APQAhIBDAESAI4ASwAmgBSgDDAGWANkAd8A9gD4gH2AfoBAICLgIwARoAlIBQQCoAFXALmAYoA2gBuADiAJEATsAocBR4CkQFNgLYAXIAu8BeYDBgGGgMkAZOAzmBrAGsgN1AcmA5cB44YCgAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAAqABXgC2ALkAcwB3AEMAIkARYAlwBSACtAGcANSAbIBwADjAHOAPIAfgBAACMAEmAJ0AUUApcBXgFfALsAX4AzgBsgDbAG8AOOAc0A6gB2QD1AHyAP2AhIBDYCLwEdQJEAkUBJcCWgJeATYAnYBQkCkQKSAU2AsUBaIC5AF0ALuAXoAwIBh4DHoGRgZIAycBnIDPAGhANMga0BrsDcgN0AdQA7gB7wgCcAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAArgBbgDmAO4AhgBEgCLAEuAKQAVoAzgBqQDZAOAAcYA5wB5AD5AH4AQAAjABJgCdAFFAKXAV4BXwC7AF-AM4AagA2wBvADjgHNAOyAeoA-QB-wEJAIbAReAjuBIgEigJLgS0BLwCbAE7AKEAUkApuBYgFigLRAXIAugBdwC9AGBAMPAY8AyQBk4DOQGhANMga0BroDdAHUAO4Ae8KARgAigBUAFgAQgAmABcAEcAKQAZQA1ABwAEcAKLAV4BXwC7AF-AM4AbwA5oB-wEegJFAS8AmwBYoC0QFsALuAXoAw8BnIDPAGhQNaA14BuQD3hgCAAEUAKgAsACEAEwARwApABqADgAI4AUWArwCvgF2AL8AZwA3gBzQD9gI9ASKAl4BNgC0QFsALuAXoAw8BnIDPAGhQNaA10B7wD4hwF6AAwAEQAOAA8AC4AGQAWAA5AB8AEcAJoAUAArgBbAC-AGgAQgAiwBHACXAFIALIAXwAwoBmgGcANQAc4A7gB5AD5gIAAgcBBwEIAI4ATiAnwCfgFFAKWAVAArIBdgC9AGcAN4AccA6QB6AD5AIbAREAioBHoCRQElgJWATEAmWBNgE2gKQAUmApcBVQCxAFlALUAWzAugC6gF3AL6AYEAxABiYDFgGQgMmAZeAz8BoQDRoGmAaaA1OBroGwANoAbcA48BywDnwHWAOwAdxA8kDygHpAPeAfEA-UB9oD8R0EcABcAFAAVAA5AB8AIAAXQAwADUAHgATAAqwBcAF0AMQAZgA3gB6gEMARIAlgBNACjAFKAMMAZQA0QBsgDvAHtAPsA_QB_wEWARgAlIBQQCrgFiALmAXkAxQBtADcAHEAOoAi8BIgCVAEyAJ2AUOAo-BTQFNgLFAWwAuABcgC7QF3gLzAYMAw0BjwDJAGTgMqAZYAzkBogDVQGsAN1AcWA5MBy4DxwH1kAFwACAAMgAsACaAF8ANAApABZAC-AGcANQAc4BHACcAE-gKGAooBSwCsgFiALSAXYA3gBzQD0AI9ASLAmwCbQFJgLEgWyBbQC7gF5AMCAYlAzwDPwGhANTAa6A2ABtwDnwHRgOwgeSB5QD3gHxEIEAACwAKAAuABiAEwAKoAXAAxABvAD0AI4Ad4A_wCUgFBAKuAXMAxQBtADqAJUAU0AsUBaIC4AFyAMnAZyA0QBqoDgAHjkgGIABgAHAAXAAyACwAHIARwAmgBUAC-AGQANoAhABSACyAGdANQA1QB3AEAAI4AT6ApoCoAFZALSAXYA3gB8gEVAI6AR6AkUBKwCWoE2ATaApMBVICxAFlALuAYsAyyBngGfgNCAa6A2ABuQDsAHlAPeJQHQAEAALAAoAByAGAAYgA8ACYAFUALgAYoBDAESAI4AUYA2QB3gD8AKuAYoA6gCLwEiAKPAWKAtgBeYDJwGcgNYAcAUgYgALgAoACoAHIAPgBBADAANQAeABMACkAFUAMQAZoBDAESAKMAUoAygBogDZAHfAPwA_QCLAEYAJSAUEAq4BcwC8gGKANoAbgBF4CRAE7AKHAU2AsUBbAC4AFyALtAXmAw0BkgDJwGcwNYA1kBuoDkwHLgPHKAQAALgAZABYADkAI4ATQAqABfADIAG0AQgAiwBHACZAFIALIAXwAwgBnQDUANUAc4A7oB8gH2AQAAjgBPgChgFLgKyArYBYoC6gLsAa8A3gB2wD0AH_AR0Aj0BIoCSwExQJsAm0BSACnwFiALoAXcAvIBfQDAgGLAMmgZ4Bn4DQgGiQNSA1OBroGwAOCAdgA7gB5QD3gHxAPlAA.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0005%3A0%2CC0004%3A0%2CC0048%3A1%2CC0030%3A1%2CC0046%3A1%2CC0032%3A1%2CC0033%3A1%2CC0057%3A1%2CC0054%3A1%2CC0056%3A1%2CC0043%3A1%2CC0029%3A1%2CC0055%3A1%2CC0026%3A1","1year"],["Vendd:AcceptedCookieConsents","FunctionalityCookies=-29&StatisticsCookies=-30&MarketingCookies=-31"],["sv-cookie-consent","true","","","reload","1"],["CookieConsent","{necessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year","","reload","1"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":true,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"5\":false,\"6\":true}"],["sj_consent_v1","%7B%22consent%22%3A%7B%22PERSONALIZATION%22%3Afalse%2C%22MARKETING%22%3Afalse%7D%2C%22uuid%22%3A%22d599dc64-52b7-4dc7-bff3-1e18d5cebc1a%22%7D"]];

const hostnamesMap = new Map([["facebook.com",1],["instagram.com",2],["bloomberg.com",[3,4]],["leggo.it",[3,136]],["ilmattino.it",[3,137]],["multiplayer.it",[3,141]],["ansa.it",[3,142]],["bloomberg.co.jp",4],["fandom.com",[5,6,7]],["dailymotion.com",8],["standard.co.uk",9],["independent.co.uk",10],["theguardian.com",11],["bbc.com",12],["lefigaro.fr",13],["filmweb.pl",14],["wetransfer.com",[15,16]],["thetrainline.com",[17,54]],["scaleway.com",18],["all3dp.com",19],["threads.net",21],["messenger.com",22],["trading212.com",23],["myscript.com",24],["odido.nl",25],["bing.com",26],["procvetok.ua",27],["stwater.co.uk",28],["boogschietshop.nl",29],["x-kom.pl",30],["tiempo.com",[31,32]],["pizzafan.gr",33],["windhager.eu",34],["tomsguide.com",35],["banknorwegian.no",36],["biomarkt.de",37],["plaion.com",37],["apetro.pt",38],["apoteket.se",38],["bergbauernmilch.de",38],["berlingske.dk",38],["cineplex.de",38],["danbolig.dk",38],["egmont.com",38],["euroatla.pt",38],["finanzmarktwelt.de",38],["harzwasserwerke.de",38],["hoyavision.com",38],["nos.pt",38],["neue.at",38],["nngroup.com",38],["nordiskfilm.com",38],["storyhouseegmont.dk",38],["storyhouseegmont.no",38],["storyhouseegmont.se",38],["toyota-forklifts.se",38],["vn.at",38],["werder.de",38],["werkenbijlidl.nl",38],["wwf.fi",38],["refinery29.com",39],["dasinvestment.com",39],["fof.se",39],["mein-grundeinkommen.de",39],["ekstrabladet.dk",40],["kino.dk",41],["dr.dk",42],["nytimes.com",43],["schauspiel.koeln",44],["onlinestempel.ch",45],["chase.co.uk",46],["svt.se",47],["komoot.com",48],["komoot.de",48],["chatreplay.stream",49],["hubblehq.com",50],["hwebber.co.uk",51],["gereedschapcentrum.nl",52],["ontinet.com",53],["1001games.com",[54,147,148]],["1001hry.cz",[54,147,148]],["1001jeux.fr",[54,147,148]],["1001jocuri.ro",[54,147,148]],["1001jogos.com.br",[54,147,148]],["1001jogos.pt",[54,147,148]],["1001pelit.com",[54,147,148]],["1001spiele.de",[54,147,148]],["elkspel.nl",[54,147,148]],["gamespot.com",[54,62]],["giochixl.it",[54,147,148]],["grajteraz.pl",[54,147,148]],["isladejuegos.com",[54,147,148]],["jatekokxl.hu",[54,147,148]],["mtvuutiset.fi",[54,59]],["paixnidiaxl.gr",[54,147,148]],["pushsquare.com",[54,94,95]],["spelo.se",[54,147,148]],["spillespill.no",[54,147,148]],["spilxl.dk",[54,147,148]],["thejournal.ie",[54,79]],["vkmag.com",[54,57,58]],["zdnet.com",[54,72]],["evaair.com",[55,56]],["arvopaperi.fi",[60,61]],["iltalehti.fi",[60,61]],["kauppalehti.fi",[60,61]],["mediuutiset.fi",[60,61]],["mikrobitti.fi",[60,61]],["talouselama.fi",[60,61]],["tekniikkatalous.fi",[60,61]],["tivi.fi",[60,61]],["uusisuomi.fi",[60,61]],["asialadies.de",63],["avladies.de",63],["badeladies.de",63],["behaarteladies.de",63],["bizarrladies.de",63],["busenladies.de",63],["deutscheladies.de",63],["devoteladies.de",63],["dominanteladies.de",63],["erfahreneladies.de",63],["escorts24.de",63],["exklusivladies.de",63],["fkk24.de",63],["grosseladies.de",63],["hobbyladies.de",63],["jungeladies.de",63],["kollegin.de",63],["kussladies.de",63],["ladies.de",63],["latinaladies.de",63],["massierendeladies.de",63],["mollyladies.de",63],["nsladies.de",63],["nymphomaneladies.de",63],["orientladies.de",63],["osteuropaladies.de",63],["piercingladies.de",63],["rasierteladies.de",63],["schokoladies.de",63],["tattooladies.de",63],["tsladies.de",63],["zaertlicheladies.de",63],["zierlicheladies.de",63],["1a-finanzmarkt.de",64],["1a-immobilienmarkt.de",64],["1a-reisemarkt.de",64],["1a-singleboerse.de",64],["1a-stellenmarkt.de",64],["gameinformer.com",65],["christianconcern.com",66],["aamulehti.fi",67],["etlehti.fi",67],["gloria.fi",67],["hs.fi",67],["hyvaterveys.fi",67],["is.fi",67],["jamsanseutu.fi",67],["janakkalansanomat.fi",67],["kankaanpaanseutu.fi",67],["kmvlehti.fi",67],["kodinkuvalehti.fi",67],["merikarvialehti.fi",67],["nokianuutiset.fi",67],["rannikkoseutu.fi",67],["satakunnankansa.fi",67],["soppa365.fi",67],["suurkeuruu.fi",67],["sydansatakunta.fi",67],["tyrvaansanomat.fi",67],["valkeakoskensanomat.fi",67],["vauva.fi",67],["pelikone.fi",68],["vogue.co.uk",69],["wired.com",69],["jekabpils.lv",70],["aachener-bank.de",71],["bernhauser-bank.de",71],["bodenseebank.de",71],["bremischevb.de",71],["cvw-privatbank-ag.de",71],["dervolksbanker.de",71],["gladbacher-bank.de",71],["meine-rvb.de",71],["meinebank.de",71],["muenchner-bank.de",71],["nordthueringer-volksbank.de",71],["owl-immobilien.de",71],["raiba-gr.de",71],["raiba-ndwa.de",71],["raiba-westhausen.de",71],["rb-berghuelen.de",71],["rb-denzlingen-sexau.de",71],["rb-eching.de",71],["rb-hardt-bruhrain.de",71],["rb-oberaudorf.de",71],["rb-sondelfingen.de",71],["rv-banken.de",71],["saechsischer-gewinnsparverein.de",71],["skbwitten.de",71],["sparda-bank-hamburg.de",71],["sparda-sw.de",71],["vb-lauterecken.de",71],["vb-mittelhessen.de",71],["vb-rb.de",71],["vbleos.de",71],["vbsuedemsland.de",71],["voba-deisslingen.de",71],["voba-moeckmuehl.de",71],["volksbank-aktiv.de",71],["volksbank-backnang.de",71],["volksbank-daaden.de",71],["volksbank-dh.de",71],["volksbank-freiburg.de",71],["volksbank-international.de",71],["volksbank-kirnau.de",71],["volksbank-mittleres-erzgebirge.de",71],["volksbank-remseck.de",71],["volksbank-thueringen-mitte.de",71],["volksbank-trossingen.de",71],["volksbankeg.de",71],["vr-nopf.cz",71],["vrb-spangenberg.de",71],["vrbankeg.de",71],["vrbankimmobilien.de",71],["vvr-bank.de",71],["vvrbank-krp.de",71],["news.sky.com",73],["lippu.fi",[74,75,76]],["starcart.com",77],["sydan.fi",78],["rfi.fr",80],["cmore.fi",81],["europe1.fr",82],["teket.jp",83],["etsy.com",84],["technopat.net",[85,86]],["justeat.it",[87,88,89]],["pyszne.pl",[87,88,89]],["takeaway.com",[87,88,89]],["thuisbezorgd.nl",[87,88,89]],["telekom.com",90],["hemmersbach.com",91],["eurogamer.nl",[92,93]],["eurogamer.es",[92,93]],["eurogamer.cz",[92,93]],["eurogamer.net",[92,93]],["eurogamer.pl",[92,93]],["eurogamer.pt",[92,93]],["bt.dk",96],["dlalakierni.pl",[97,98,99]],["officiallondontheatre.com",100],["constantin.film",101],["twitter.com",102],["mundodeportivo.com",[103,104]],["nordax.com",105],["youtube.com",106],["empik.com",[107,108,109,110]],["ubs.com",111],["vicko.gr",112],["3bmeteo.com",113],["call-a-pizza.de",114],["jeuxvideo.com",[115,116]],["player.boom973.com",117],["praxisplan.at",[118,119]],["actu.fr",[120,121]],["ledauphine.com",122],["privacy.ledauphine-presse.fr",[123,124]],["canva.com",125],["thegreencity.gr",126],["ohra.nl",127],["sandberg.world",128],["everyeye.it",129],["breitbart.com",130],["saniweb.nl",131],["uswitch.com",132],["ferienpiraten.ch",133],["holidaypirates.com",133],["piratinviaggio.it",133],["travelpirates.com",133],["urlaubspiraten.at",133],["urlaubspiraten.de",133],["vakantiepiraten.nl",133],["viajerospiratas.es",133],["voyagespirates.fr",133],["wakacyjnipiraci.pl",133],["formula1.com",134],["stadtmobil.de",135],["coinbase.com",138],["go-e.com",139],["rts.ch",140],["zeit.de",143],["starcar.de",144],["hubsite365.com",145],["notion.so",146],["stergioufamily.gr",149],["viss.nu",150],["goed.at",151],["babolat-tenis.pl",152],["denonmarkabolt.hu",152],["monocerus.pl",152],["plastiflora.pl",152],["s4home.pl",152],["salonydenon.pl",152],["vipera.com.pl",152],["zdrowomania.pl",152],["avstore.pl",153],["bednarek.sklep.pl",153],["byinsomnia.com",153],["foto-tip.pl",153],["handloteka.net",153],["hiprom.pl",153],["meblewypoczynkowe.pl",153],["plantica.pl",153],["produkcjakartonow.pl",153],["supportart.pl",153],["yoclub.pl",153],["audioforum-berlin.de",154],["salonydenon.cz",154],["sj.se",155]]);

const entitiesMap = new Map([["www.google",0],["lidl",20],["just-eat",[87,88,89]],["lieferando",[87,88,89]]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetCookie(
    name = '',
    value = '',
    offsetExpiresSec = '',
    path = ''
) {
    if ( name === '' ) { return; }

    const time = new Date();

    if ( value === '$now$' ) {
        value = Date.now();
    } else if ( value === '$currentDate$' ) {
        value = time.toUTCString();
    }

    let expires = '';
    if ( offsetExpiresSec !== '' ) {
        if ( offsetExpiresSec === '1day' ) {
            time.setDate(time.getDate() + 1);
        } else if ( offsetExpiresSec === '1year' ) {
            time.setFullYear(time.getFullYear() + 1);
        } else {
            if ( /^\d+$/.test(offsetExpiresSec) === false ) { return; }
            time.setSeconds(time.getSeconds() + parseInt(offsetExpiresSec, 10));
        }
        expires = time.toUTCString();
    }

    setCookieFn(
        true,
        name,
        value,
        expires,
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 4)
    );
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function setCookieFn(
    trusted = false,
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const getCookieValue = name => {
        for ( const s of document.cookie.split(/\s*;\s*/) ) {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { continue; }
            if ( s.slice(0, pos) !== name ) { continue; }
            return s.slice(pos+1);
        }
    };

    const cookieBefore = getCookieValue(name);
    if ( cookieBefore !== undefined && options.dontOverwrite ) { return; }
    if ( cookieBefore === value && options.reload ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }

    if ( trusted ) {
        if ( options.domain ) {
            cookieParts.push(`; domain=${options.domain}`);
        }
        cookieParts.push('; Secure');
    }

    try {
        document.cookie = cookieParts.join('');
    } catch(_) {
    }

    if ( options.reload && getCookieValue(name) === value ) {
        window.location.reload();
    }
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { trustedSetCookie(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedSetCookie();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedSetCookie = cloneInto([
            [ '(', uBOL_trustedSetCookie.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedSetCookie);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_trustedSetCookie;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
