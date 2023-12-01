/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

'use strict';

// ruleset: isr-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[href*=\"channel22.co.il\"]","*",".ad",".Banner,\ndiv[style=\"height: 78px; overflow: hidden; width: 510px;\"],\ndiv[style=\"height: 78px; padding-right: 10px; margin-bottom: 20px;\"]",".adsbygoogle",".desk_mode.adsgoogle","a[target=\"_blank\"][href*=\"/urvd/4-\"]","#popupContainer,\n.widget-area.sidebar-primary.sidebar,\ndiv[style$=\"display: block; overflow: auto;\"]",".zad",".adcontainer","#connect,\na[href*=\"campaigns.layer.co.il/\"]","#backgroundPopup,\n#popupContact,\ndiv[style=\"position: absolute; left: 40px; top: 200px; z-index: 0;\"],\ndiv[style=\"position: absolute; right: 40px; top: 200px; z-index: 0; width:154px;\"]","a[href*=\"://rmkz.themarker.com/\"]","#paywall-promotion-banner,\n.footer-ruler,\n.footer-ruler--containter,\n.js-modal,\n.js-subscription-popups,\n[data-back=\"promotional-content\"],\n[id*=\"div-gpt-ad\"],\na[href*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\na[href*=\"gampad/clk\"],\na[onmousedown*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\niframe[data-origin]","#top_banners","[href*=\"PromotedContent\"],\n[href^=\"https://supermarker.themarker.com/\"],\n[href^=\"https://www.haaretz.co.il/labels/\"],\n[href^=\"https://www.themarker.com/labels/\"]","#header_banner_wrapper","#sideban","td[background^=\"/images/commercials\"]",".sidebannerads",".show.youMightAlsoLike,\n.taboola-wrapper,\n[class^=\"TimeLinestyles__StyledAdWrap\"],\ndiv.dxZevu.frjHsE.NewsFlahesPagestyles__NewsFlashSpecialWidget-sc-1zhe9e-9.NewsFlahesPagestyles__NewsFlashItem-sc-1zhe9e-8",".tbl-feed-container,\n.trc_rbox_container",".TopBanner",".centerParnasa",".advertizement",".arti-banners",".banner","[class*=\"banner\"]",".bigbnr","img[src^=\"VIRARTICLES/shadv/\"]",".WidgetHidden.article-aside,\n.WidgetHidden_false.article-aside","#lg-atf-300-250,\n#lg-bottom-300-250,\n.ad-300-250,\n.ad-700-156,\n.ad-970-250,\n.dynAds,\n.sticky-ad","#Plasma_1,\n#divBanner_Plazma,\n#sdera.width100pc,\n#top_banner_ph,\n.centered.padt10 > .clear","#AdvertisementSystemTakeOver,\n#divBanner_BigPlazma,\n#divBanner_RegularPlazma,\n#divPlazma,\n#dolphinContainer,\n#flashBtnX,\n#floatDownBar,\n#test.f-right,\n.banner.clear,\n.fade,\n.floaterin.floaterout,\n.response[style=\"background-color:#F4F2F0\"],\n.title14pxblue,\n[style=\"position: relative; display: inline-block; vertical-align: text-bottom; text-align: justify; height: 20px; width: 111px;\"],\niframe[src^=\"http://ads.bhol.co.il/\"],\ntd[style=\"padding-bottom:4px; padding-top:7px\"]","#LeftBanner,\n.HotBannerDiv,\n.TopBannerDiv",".adv-article-left-kubia","#ads\\.top","a[href*=\"goodluckblockingthis.com\"],\na[onmousedown*=\"goodluckblockingthis.com\"]","#ArticleBanner,\n#ads\\.premium,\n#carouselAdLi,\n#old_Arts_Ad,\n#relevanti_area,\n.SetArtWidth[style=\"margin-top:7px;\"] > table[width=\"478\"][height=\"174\"],\n.banner.new > .no-print,\n.banner.new.layoutItem,\n[height=\"7\"] + [valign=\"top\"] + tr[height=\"7\"],\n[src=\"http://partner.googleadservices.com/gpt/pubads_impl_86.js\"] + *,\n[valign=\"top\"] + [valign=\"top\"] + tr[height=\"7\"]",".c-article__ad","#closeMobileBanner,\n#top-banner,\n.article-content-banner,\n.bannerWrap,\n.bannerWrapMobile,\n.bannerWrapMobileBottom,\n.middle-banner","#arti-banner-popup,\n#stSegmentFrame,\n.contento_Container,\n.rt-banners",".sticky-banner.banner-con","#bottom-ad-stick-container,\n#towerBanner.left-banner,\n#towerBanner.right-banner,\n.gpt-ad-container",".adbox",".OUTBRAIN","#adfxp","#taboola-left-rail-thumbnails,\n.desktop-ad-720-90,\n.gadgety-ad-wrapper,\n.vertical-ad","#Globes_Displays,\n#jumbo_container.nocontent.topBanner,\n.Banner_in_Content,\n.bannerCenter.gr,\n.kidum","a[href*=\"theadblockerproject.org\"]","[src$=\"/Images/Advertising/advertising1337_08102023163027.jpg\"]","#__next > div[id] + div[class*=\" \"] > div[class*=\" \"]:nth-of-type(2),\n#ad-block-wrapper","div[onclick*=\"countAdClick\"]",".home-banner-3.margin-top-30.row",".container-fluid.styles_commentWrapper__Ggo7W,\n.container-fluid.styles_mainWrapper__kR3CG,\n.styles_nativeFeed__I_3Qr,\n[class^=\"styles_bannerWrapper\"]",".banner-placeholder-hashulchan,\n.show.sticky_footer-container","#board_middle_advert,\n#plasma_container,\n.boardfooter_tr,\n.plasma,\ndiv[style=\"clear:both; float:none; height:40px;\"],\ndiv[style=\"width:641px; height:129px; clear:both; float:none;\"],\ntd[style=\"width:200px; text-align:left; vertical-align:top;\"],\nth[colspan=\"20\"]","#black-studio-tinymce-43,\n.header_banner,\na img[width=\"300\"][height=\"250\"]",".clearfix.block-da-post_before_content.block-da.block-da-1 > .div-hwad-300x250,\n.clearfix.da-style-2.block-da-post_middle_content.block-da.block-da-1,\n.clearfix.tipi-flex-right.block-da-header.block-da.block-da-1,\n.div-hwad-970x250,\n[id^=\"div-hwad-300x\"]","#ads\\.strip\\.1","#banner-sticky,\n#intext-1.sideInf,\n#intext-2.sideInf,\n#intext-3.sideInf,\n.article-taboola,\n.banner-BTF_LB.banner,\n.banner-BTF_MPU.banner,\n.banner-BTF_MPU_1.banner,\n.banner-story.banner,\n.banner-top,\n.taboola,\n[id^=\"banner_\"]","[href=\"https://www.bankhapoalim.co.il/he/loans/postpone-loan\"]",".adunit.ih-adunit,\n.ih-marketing-info-container,\n.ih-marketing-item-container,\n.link-list-item-commercial,\n.marketing-article,\n.marketing_section,\n.pane-ih-marketing-bxslider,\n.pane-ih-marketing-nice-to-know,\n.single-post-inner-aside__col.col,\n.top-adunit-section","#weekFlashes","#bannerDiv,\n#leftBanner,\n#rightBanner",".plasma_banner,\ndiv[id^=\"banner\"]","#exposeMask,\n#maavaron_overlay,\n.cnoHcopedbackground,\n.logo,\n.sponsoredbackground,\n[id^=\"takeover\"]","#innerMoodaa2,\n#mekodam,\n.Ozen300,\n.mood.hidden-sm.hidden-md.hidden-xs,\n.mood1240-100,\n.sargelWarp,\n[href^=\"https://moodaot.kipa.co.il/gomodaa.php\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_3\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_4\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x250_1\"],\ndiv.textim > div > .mood > .moodiframe.oneMood,\ndiv.textim > div > .mood > .moodiframe.oneMood > div","#ad_Footer,\n.post_ad_box",".textlinks_wide.textlinks",".w-full.bg-grey-100.header-banner-wrapper","a[target=\"_blank\"]","#link_banner,\n.banner_300x224,\n.banner_main",".HorizontalCategoryArticleAndBannerFloor,\n.TwoBannersFloor,\n.article-5-outbrain-script,\n.article-9-outbrain-script,\n.article-bottom-banner,\n.article-box-banner-wrap,\n.article-details-banner,\n.article-left-side-banner,\n.article-left-side-outbrain,\n.article-top-banner,\n.banner-left-home,\n.box-banner-wrap,\n.horizontal-banner-wrap,\n.news-feed-banner,\n.right-side-outbrain,\n.xl-banner-wrap","#a_sticky_test,\n.banner-div-gpt-250,\n.king-banner",".header-div-banner",".tmi-banner-container","#CloseshellAds",".leftBanner,\n.midBanner,\n.rightBanner","#ZA_CAMP_BG,\n#ZA_CAMP_CONTAINER,\n#ZA_CAMP_SLIDEIN_CONTAINER,\n#hp_bottom_strip,\n#mysupermarketcontainer,\n#neoTopStrip,\n.bannerClose,\n.mako_main_portlet_container > a[target=\"_blank\"] > img,\n.pzm_banners,\n.sidebar_pic,\n[href^=\"https://adclick.g.doubleclick.net/\"],\n[src=\"https://img.mako.co.il/2023/03/12/rosh.gif\"],\ndiv[class*=\"mainRoot\"] > div:nth-child(4) > div[class*=\"ordering\"] > div:nth-child(6),\ndiv[id^=\"top-strip\"]","iframe[src*=\"javascript:document.write('\"]",".adv","#playerAdArea",".clearer.scale_image.mako_feed_neo.ver2.part2,\n[box-title=\"Xtra Secret\"],\n[box-title=\"Xtra בריאות \"],\n[data-items=\"holidayFinderOrdering\"],\n[href^=\"/health-special/xtra_atopic_dermatitis/\"],\n[href^=\"https://abbvie.mako.co.il/?\"],\n[href^=\"https://www.holidayfinder.co.il/\"][href*=\"?utm_source=mako&utm_medium=affiliate&utm_campaign=component\"],\n[style=\"background-image:url('https://img.mako.co.il/2022/07/10/skinholidayfinder.png')\"]","#bLColumnText.small,\n#bRColumnText.small,\n.spacer.leftBox:nth-of-type(2),\n.tallBanner.spacer",".google-ad-links-wrapper,\n.top-firsomet",".adv160_600,\n.adv300_250,\n.adv300_600,\n.banner-wrapper,\n.pirsumba,\n.pirsumbaTop",".mai-aec-header-after.mai-aec",".TopLeftRadvertisement_translation,\n.result_adv,\n.top_line_ad,\n.top_line_ad_translation",".with-bg.sponsor,\n[box-title=\"חוק ומשפט\"],\n[href=\"https://www.mako.co.il/news-law_guide\"],\n[href^=\"/news-law_guide/\"],\n[src^=\"https://www.duns100.co.il/frame/hp3?\"]","#MEDIUM_BANNER",".banner.b160x600","#PlazmaDiv,\n#TopBanner,\n#UcInsideRight_1_1_tblWidth,\n#divBanner,\n#divBannerRight,\ntable[bgcolor=\"#eeeeee\"][height=\"150\"],\ntable[width=\"100%\"][border=\"0\"][bgcolor=\"#EEEEEE\"][height=\"160\"],\ntd[width=\"237\"][style=\"background-color: #EEEEEE;\"]",".text-center.adv_mevzakim.adv.callout,\n.text-center.adv_posts_top.adv.callout",".trc_related_container.tbl-feed-card","#content3d > [href^=\"http://pubads.g.doubleclick.net/gampad/clk\"],\na[class*=\"one-article-strip\"]","#cj_taboola_widget-2,\n.bottom-50.cj_above_team_banner_desktop,\n.cj_new_widget_banners_left_long,\n.cj_taboola,\n.persumi-text","#bnrTop",".ad-100-300,\n.ad-300-600,\n.ad-flat.ad",".ad-container-row,\n.adv-placeholder,\n.adv.anchor,\n.is-only-desktop.ad-container,\n.station-middle-ad","#jumbobannercontainer","[href^=\"https://tld.walla.co.il/item/\"]",".noprint-hidden.wide,\n.section-text-more-box,\n.with-margin-bottom.only-desktop.wide.css-13oxhn3.css-1oyf7dk.slot,\n.with-margin-bottom.only-desktop.wide.css-13oxhn3.css-uzosdz.slot",".desktop-display > .maavaron","[class^=\"banner\"]",".viv","#BannerHeader,\n#InnerPagePirsumBox,\n#PubBoxArticles,\ndiv[style=\"display: inline;float: right;height:10px;width: 100%;margin-bottom:10px; border-bottom: 1px solid #D05A00;\"]",".article-list-alt2.article-list-alt > .article-holder-homepage > .row:nth-of-type(6) > .alt,\n.banner-list,\n.makoitemLeft,\n.post.post-alt,\n.skin-header,\n[href=\"http://www.mako.co.il\"],\n[href=\"https://www.mako.co.il\"],\n[href^=\"https://www.mako.co.il/\"][href$=\"&utm_source=sport5&utm_medium=RSS\"],\n[onclick*=\"hpClickEvent('mako');\"],\n[src^=\"https://meitavads-\"]",".gapunit,\n.srugim_top_slider","[class^=\"Banner_Wrap\"]",".banner_forums_160x600_right,\n.banner_forums_tree_300x250,\ndiv[style=\"width:990px;height:150px;margin:2px auto 4px auto\"]","#topbanner",".mainUpperBanner",".rs",".td-adspot-title-320","#PublichVoiceChat",".bgbanner","#firstGoogleAd","#adPlayer,\n#adPlayerSecondary,\n#careerSection,\n#closure2014Section,\n#lawSection,\n#tldSection,\n#videoOverlay,\n#we\\ show,\n#zoomSection,\n.ads-spaces-shdera-hp,\n.commercial-items.mixed-sequence.sequence,\n.css-k0dd80,\n.homepage-desktop-top-ad,\n.href-winner,\n.marketing.desktop-regular,\n.more-in-walla-aside.side-article.fc,\n.no-desktop.homepage-mobile-top-ad,\n.no-mobile.shdera > ul,\n.no-title.shatapim.sequence,\n.ob-taste-left,\n.only-desktop.tld-event,\n.positioned,\n.slot-top-margin + .static-spaces-rectangle-buzzer.no-tablet.no-mobile,\n.tld-side-recommendation.editor-selections.three-section-articles.sequence,\n.top_banner_outer.relative,\n.vertical-232.tld.type-2.vertical-editable.common-hp-articles.sequence,\n.walla-shops,\n[alt=\"adImg\"],\n[data-adid],\n[data-advertiser-id],\n[name=\"adIframe\"],\na[href*=\"jor-el.net\"] + img[src^=\"blob\"],\na[href*=\"jor-el.net\"] img[src^=\"blob\"],\na[href][onmousedown] img[src^=\"blob\"],\na[href^=\"javascript:\"] img[src^=\"blob\"],\ndiv[class^=\"ads-spaces\"],\ndiv[id^=\"Fusion_holder\"],\ndiv[style=\"width:468px;margin:0 auto;\"],\niframe[id*=\"AMAdIframe\"],\nli.ad,\nli.marketing,\nvideo[poster^=\"data:image/gif;base64,\"]","[href^=\"https://dtv.walla.co.il\"],\n[href^=\"https://unionhorizon.walla.co.il\"],\n[href^=\"https://www.democratv.org\"]",".game-item > .pre-game","#ad1,\n#ads-mail-cube,\n.ads-mail-cube,\ndiv[data-ads-params],\ndiv[data-ads-space]",".banner-tower,\n.master-popup-banner","#toolbarLink,\n.daily_container,\n.walTopBannerInside","li.outbrain",".css-jmqqm5",".type-2.common-hp-articles.sequence,\n[src=\"/public/assets/sport/winner_logo.webp\"]","#topBanner","#W2D_728x90_1.show-on-desktop",".wenBanner",".mid1Banner","#desktop-top-banners,\n#martef,\n.dfp,\n.dfp-desktop-tv-wrapper,\n.dfp-slot-container,\n.dfp_v2,\n.inactive.top_boxes_row,\n.iosLoad.mobile_strip_top,\n.iosLoad.mobile_top_dfp_placeholder_bill,\n.magazine-frame,\n.magazine_per_category,\n.sticky_magazine","#ads\\.newspaper,\n#ads\\.top\\.2,\n#taboola-video-reel-mid-article,\n.ArticleBannerComponenta,\n.CAATVcompAdvertiseTv,\n.MultiArticleTaboola.layoutItem,\n.StripMarketingComponenta1280,\n.Taboola.layoutItem,\n.art_tkb_talkback_advert,\n.banner.layoutItem,\n.extended-banner.layoutItem,\n.pplus_hdr_ad,\n.promolightboxmvc,\n[class*=\"MarketingCarousel\"],\n[class*=\"PromoLightbox\"]","#XnetAdSenceThinkAdAD-300,\n#ads\\.250x250\\.top,\n#ads\\.300x250\\.1,\n#ads\\.blog\\.250x250,\n#ads\\.top\\.1,\n.ContentLink.banner.High,\n.ContentLink.banner.Low,\n.ad.hdn","#unit1,\n#unit2",".BannerBoxNew,\n.Martef,\n.leftSideBanner",".adpro","#video-blocker","#divBranzaRightBanner,\n#divMainBanner,\n#divMekomiRightBanner,\n#divMivzakimAd,\n#divRightButtonsAds,\n#divRightVideoAd,\n#divTopBanner","#flow",".bookingaff","#wrapper > literal > div,\ndiv[style=\"clear: both;border-bottom:3px solid #ededed;padding:4px;height: 120px;\"]",".ad-label,\n.g-ad-label","#RoterHePromo,\n#taboola-forum_atf,\n.forum-side-responsive1,\n[style=\"border: 0px solid red; width: 160px; table-layout: fixed;\"],\ntd[style=\"border:0px solid red; width:160px; table-layout:fixed;\"],\ntd[style=\"width:120px;border:0px solid red;\"]",".panel-row-upper,\n.remove-ad",".inrpggoogle",".advertisment-wrapper"];

const hostnamesMap = new Map([["hasdarot.cc",1],["hasdarot.club",1],["hasdarot.co",1],["kurtgeigers.co",1],["bobuzz.com",1],["gubuzz.com",1],["hasdarot.com",1],["vodxil.com",1],["zegvid.com",1],["lead.foxweb.co.il",1],["freeoffers.co.il",1],["lp.infopage.co.il",1],["lp.playsmart.co.il",1],["kelocote.prpl.co.il",1],["shaardollar.co.il",1],["view-movies.co.il",1],["vodmovies.co.il",1],["vodx.co.il",1],["balimon.info",1],["hasdarot.info",1],["lauyn.info",1],["lools.info",1],["losittooday.info",1],["madlik.info",1],["magnivim.info",1],["metador.info",1],["mklrty.info",1],["movitop.info",1],["mporli.info",1],["sirtoonim.info",1],["stomi.info",1],["tukid.info",1],["yosle.info",1],["youlim.info",1],["hasdarot.life",1],["fringantlarn8.live",1],["hasdarot.live",1],["seret.live",1],["hasdarot.me",1],["myvod.me",1],["dubim.net",1],["gbuzz.net",1],["gefun.net",1],["hasdarot.net",1],["iastrology.net",1],["ilbuzz.net",1],["israfun.net",1],["jobuzz.net",1],["lyfun.net",1],["lyplay.net",1],["pinukim.net",1],["topfliightss.net",1],["ugbuzz.net",1],["usbuzz.net",1],["vebuzz.net",1],["vefun.net",1],["viral4buzz.net",1],["worldhotnews.net",1],["zegvid.net",1],["hasdarot.pro",1],["asface.pw",1],["bitys.pw",1],["dealclick.pw",1],["dealsclubspecial.pw",1],["hasdarot.space",1],["sdarotil.top",1],["hasdarot.tv",1],["faceu.us",1],["hasdarot.vip",1],["hasdarot.xyz",1],["podcasts.center",2],["baba-mail.co.il",[2,31]],["mako.co.il",[2,79,80]],["pcmagazine.co.il",2],["m.sport5.co.il",2],["ashdodnet.com",3],["bigbroil.com",[4,5]],["shmua.com",4],["isramedia.net",[4,45,141]],["chodal24.com",6],["israrights.com",7],["0-15.co.il",7],["2b-bari.co.il",7],["50plus.co.il",7],["acnecenter.co.il",7],["add-syndrome.co.il",7],["alzheimer.co.il",7],["blood.co.il",7],["candidafree.co.il",7],["cold.co.il",7],["committee.co.il",7],["degeneration.co.il",7],["dementia.co.il",7],["dermatology.co.il",7],["east-west.co.il",7],["epilepsy.co.il",7],["feeling.co.il",7],["genes.co.il",7],["human.co.il",7],["iaawh.co.il",7],["ifeel.co.il",7],["le-la.co.il",7],["maane.co.il",7],["matnachim.co.il",7],["medicalcannabis.co.il",7],["mifrakim.co.il",7],["myeyes.co.il",7],["myhealth.co.il",7],["myheart.co.il",7],["myrights.co.il",7],["nashy.co.il",7],["pediatrics.co.il",7],["pigur.co.il",7],["stdinfo.co.il",7],["sukarti.co.il",7],["takana.co.il",7],["tevalife.co.il",7],["urinary.co.il",7],["voices.co.il",7],["womenonly.co.il",7],["abortion.org.il",7],["allergy.org.il",7],["asthma.org.il",7],["autism.org.il",7],["bariatric.org.il",7],["blinds.org.il",7],["burn.org.il",7],["cfs.org.il",7],["cholesterol.org.il",7],["colon.org.il",7],["commitment.org.il",7],["dialysis.org.il",7],["ear.org.il",7],["emun.org.il",7],["ent.org.il",7],["fms.org.il",7],["gastro-israel.org.il",7],["hyperhidrosis.org.il",7],["ibd.org.il",7],["ilsi.org.il",7],["immunology.org.il",7],["implants.org.il",7],["ioh.org.il",7],["isala.org.il",7],["linshom.org.il",7],["liver.org.il",7],["lung.org.il",7],["lupus.org.il",7],["matnachim.org.il",7],["multiplesclerosis.org.il",7],["my-rights.org.il",7],["neurology.org.il",7],["noga.org.il",7],["obesity.org.il",7],["oncology.org.il",7],["pain.org.il",7],["parkinsons.org.il",7],["pso.org.il",7],["psychiatrist.org.il",7],["psychiatry.org.il",7],["stroke.org.il",7],["urine.org.il",7],["il.pcmag.com",8],["pitria.com",9],["rateonclick.com",10],["s-maof.com",11],["themarker.com",[12,13,14]],["haaretz.co.il",[12,13,14,51]],["mouse.co.il",12],["homeprices.yad2.co.il",14],["pricelist.yad2.co.il",14],["pro.yad2.co.il",14],["www.themarker.com",15],["www.haaretz.co.il",15],["tiuli.com",16],["yeshanews.com",17],["lib.cet.ac.il",18],["0404.co.il",19],["13news.co.il",[20,21]],["13tv.co.il",[20,21]],["sport5.co.il",[21,107]],["2net.co.il",[22,23]],["auto.co.il",[22,30]],["calendar.2net.co.il",24],["93fm.co.il",25],["ch10.co.il",[25,41]],["a.co.il",26],["forum.lametayel.co.il",[26,69]],["maariv.co.il",[26,45,73]],["aiwa.co.il",[27,28]],["bladna.co.il",27],["karmelna.net",27],["almadar.co.il",29],["marmar.co.il",29],["bhol.co.il",[32,33]],["bhol-forums.co.il",32],["bipbip.co.il",34],["bizportal.co.il",35],["calcalist.co.il",[36,37,38]],["frogi.co.il",[36,44]],["mynet.co.il",36],["ynet.co.il",[36,37,132]],["m.calcalist.co.il",39],["camoni.co.il",40],["foodik.co.il",42],["foodsdictionary.co.il",43],["fxp.co.il",[45,46]],["gadgety.co.il",[45,47]],["ice.co.il",45],["globes.co.il",[48,49]],["israelhayom.co.il",[49,62]],["rotter.name",[49,140]],["rotter.net",[49,140,143]],["gly.co.il",50],["haipo.co.il",52],["hakolhayehudi.co.il",53],["hamal.co.il",54],["hashulchan.co.il",55],["homeless.co.il",56],["hon.co.il",57],["hwzone.co.il",58],["ilimudim.co.il",59],["inn.co.il",60],["isport.co.il",61],["israelweather.co.il",63],["jobmaster.co.il",64],["junkyard.co.il",65],["kikar.co.il",66],["kipa.co.il",67],["kolhair.co.il",68],["www.lametayel.co.il",70],["linicom.co.il",71],["link4u.co.il",72],["m.maariv.co.il",74],["sport1.maariv.co.il",75],["tmi.maariv.co.il",76],["madas.co.il",77],["maka.co.il",78],["walla.co.il",[80,102,118]],["mobile.mako.co.il",81],["shironet.mako.co.il",82],["www.mako.co.il",83],["makorrishon.co.il",84],["masa.co.il",85],["mavir.co.il",86],["metukimil.co.il",87],["morfix.co.il",88],["n12.co.il",89],["m.n12.co.il",90],["netex.co.il",91],["news1.co.il",92],["newsnow.co.il",93],["now14.co.il",94],["one.co.il",95],["onlife.co.il",96],["psakdin.co.il",97],["radio-head.co.il",98],["rlive.co.il",99],["seret.co.il",100],["sheee.co.il",[101,102]],["sheva7.co.il",103],["shoofoo.co.il",104],["solitaire.co.il",105],["sponser.co.il",106],["srugim.co.il",108],["mobile.srugim.co.il",109],["starmed.co.il",110],["start.co.il",111],["takdin.co.il",112],["tatus.co.il",113],["tgspot.co.il",114],["totalchat.co.il",115],["upf.co.il",116],["uzit.co.il",117],["animals.walla.co.il",119],["astrology.walla.co.il",119],["b.walla.co.il",119],["buzzit.walla.co.il",119],["cars.walla.co.il",119],["celebs.walla.co.il",119],["e.walla.co.il",119],["elections.walla.co.il",119],["euro.walla.co.il",119],["fashion.walla.co.il",119],["finance.walla.co.il",119],["food.walla.co.il",119],["healthy.walla.co.il",119],["home.walla.co.il",119],["judaism.walla.co.il",119],["kids.walla.co.il",119],["mag.walla.co.il",119],["movies.walla.co.il",119],["mundial.walla.co.il",119],["nadlan.walla.co.il",119],["news.walla.co.il",[119,124,125]],["nick.walla.co.il",119],["olympics.walla.co.il",119],["sports.walla.co.il",[119,125,126]],["tags.walla.co.il",119],["tech.walla.co.il",119],["travel.walla.co.il",119],["tv-guide.walla.co.il",119],["usaelections.walla.co.il",119],["viva.walla.co.il",119],["vod.walla.co.il",119],["weather.walla.co.il",119],["www.walla.co.il",119],["fun.walla.co.il",120],["mail.walla.co.il",121],["mazaltov.walla.co.il",122],["newmail.walla.co.il",123],["wallashops.co.il",127],["weather2day.co.il",128],["wen.co.il",129],["wisebuy.co.il",130],["yad2.co.il",131],["xnet.ynet.co.il",133],["yo-yoo.co.il",134],["zap.co.il",135],["chabad.info",136],["hagdolim.info",137],["wacdfrt.info",137],["ladaat.info",138],["cellebrate.mobi",139],["m.isramedia.net",142],["hidabroot.org",144],["safa-ivrit.org",145],["sratim.tv",146],["sratim.video",146]]);

const entitiesMap = new Map([["sdarot",0]]);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/