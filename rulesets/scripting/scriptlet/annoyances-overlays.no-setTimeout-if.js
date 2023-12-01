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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["SMOKESCREEN"],["mdp-deblocker"],[".first().height()"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["blockerDetected"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["o.customPassLogin()"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["/nltrShow30minFlag|js_primetargeting_popup/"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["modal"],["check"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"]];

const hostnamesMap = new Map([["e.mail.ru",0],["octavius.mail.ru",0],["wpnull7.com",1],["xdarom.com",1],["elitepvpers.com",[2,142]],["online2pdf.com",3],["myfxbook.com",[4,78]],["printablecreative.com",5],["strategium.ru",6],["bitcompiler.com",6],["penize.cz",6],["tvfeed.in",6],["libgen.rocks",7],["thecrimson.com",8],["tumblr.com",[9,157]],["ghxi.com",10],["andrialive.it",11],["lavocedimanduria.it",11],["gioialive.it",11],["terlizzilive.it",11],["as.com",12],["foxnews.com",12],["foxbusiness.com",12],["babycenter.com",13],["cnbeta.com",14],["daz3d.ru",15],["dragcave.net",[16,74]],["dumpert.nl",17],["erfahrungen.com",18],["howjsay.com",[18,89]],["reviewmeta.com",[18,91]],["testserver.pro",18],["fnbrjp.com",19],["imtranslator.net",20],["psychic.de",20],["keybr.com",[21,107]],["libgen.lc",22],["maidenhead-advertiser.co.uk",23],["mainpost.de",24],["mapa-turystyczna.pl",25],["mc-at.org",26],["motoroids.com",27],["ogznet.com",28],["postimees.ee",29],["salidzini.lv",30],["seomagnifier.com",31],["whatfontis.com",32],["online-fix.me",33],["tieba.baidu.com",34],["latestdeals.co.uk",35],["workspacetips.io",36],["haokan.baidu.com",37],["geeksforgeeks.org",[38,143,144]],["pianistmagazine.com",39],["forvo.com",40],["perfecthealthclinic.com",41],["linkneverdie.net",42],["desktopnexus.com",43],["themoscowtimes.com",44],["bilety24.uk",45],["oneesports.vn",46],["koronawirusunas.pl",47],["webukatu.com",48],["1000.menu",49],["arcserve.com",50],["cdotrends.com",51],["mondaq.com",52],["princetonreview.com",53],["medsurgeindia.com",54],["vegasslotsonline.com",55],["doorofperception.com",56],["economictimes.indiatimes.com",57],["edutopia.org",58],["plugin-alliance.com",59],["arbeitsrecht.org",60],["villeroy-boch.de",61],["downloadfreecourse.com",62],["indiamart.com",63],["afitness.ru",64],["dreamstime.com",65],["rzetelnafirma.pl",66],["tiki.vn",67],["g-school.co.kr",68],["zumub.com",69],["aritzia.com",70],["goal.com",71],["letpub.com.cn",72],["mecze.com",73],["relyonhorror.com",75],["evworld.com",76],["columbiaspectator.com",76],["99bitcoins.com",77],["hqq.tv",79],["mediafire.com",80],["webcodegeeks.com",81],["books-world.net",82],["pc3mag.com",82],["opedge.com",83],["bronze-bravery.com",83],["ultimate-bravery.net",83],["htmlreference.io",83],["short-story.net",83],["sbenny.com",83],["fabricjs.com",84],["wildstarlogs.com",85],["boerse-express.com",85],["bucketpages.com",86],["steptalk.org",87],["numberempire.com",88],["cagesideseats.com",89],["vpnmentor.com",90],["tomshw.it",90],["wizcase.com",90],["portableapps.com",91],["heroesneverdie.com",92],["curbed.com",92],["eater.com",92],["funnyordie.com",92],["mmafighting.com",92],["mmamania.com",92],["polygon.com",92],["racked.com",92],["riftherald.com",92],["sbnation.com",92],["theverge.com",92],["vox.com",92],["twinkietown.com",92],["addons.opera.com",93],["ruwix.com",94],["zulily.com",95],["rp5.by",96],["turbolab.it",97],["9xbuddy.com",18],["zerogpt.net",18],["lookmovie.ag",98],["lifo.gr",99],["xe.gr",100],["typing-speed.net",101],["liverpool.no",102],["fotor.com",102],["playbill.com",102],["xxxonlinegames.com",102],["olarila.com",102],["fairyabc.com",6],["mobilarena.hu",103],["aniwave.to",[103,158]],["bflix.io",103],["f2movies.ru",103],["movies2watch.ru",103],["putlockernew.vc",103],["swatchseries.ru",103],["vidplay.site",[103,158]],["vidstream.pro",103],["mcloud.to",103],["gamepod.hu",104],["itcafe.hu",104],["prohardver.hu",104],["minecraftforge.net",105],["theherald-news.com",106],["searchenginejournal.com",108],["mocospace.com",109],["karamellstore.com.br",110],["mdlinx.com",111],["infoplease.com",111],["htforum.net",111],["raenonx.cc",111],["underconsideration.com",112],["foreignaffairs.com",113],["dxmaps.com",114],["photoshop-online.biz",115],["ukworkshop.co.uk",115],["endorfinese.com.br",115],["segnidalcielo.it",115],["2iptv.com",115],["deezer.com",116],["handball-world.news",117],["mobiflip.de",117],["titanic-magazin.de",117],["mimikama.org",117],["langweiledich.net",117],["der-postillon.com",117],["perlentaucher.de",117],["lwlies.com",117],["serieslyawesome.tv",117],["critic.de",117],["mediotejo.net",117],["nahrungsmittel-intoleranz.com",117],["madeinbocholt.de",117],["zwei-euro.com",117],["affiliate.fc2.com",118],["4x4earth.com",119],["diffchecker.com",120],["malekal.com",121],["audiostereo.pl",121],["guides4gamers.com",122],["polyflore.net",123],["icy-veins.com",124],["cpuid.com",125],["webcamtaxi.com",126],["megapixl.com",127],["cissamagazine.com.br",128],["utour.me",129],["fosspost.org",130],["2embed.ru",131],["theepochtimes.com",132],["xtv.cz",133],["drawasaurus.org",134],["katholisches.info",135],["hollywoodmask.com",135],["streaminglearningcenter.com",136],["prepostseo.com",137],["tiermaker.com",138],["hqq.to",139],["zefoy.com",139],["shopomo.co.uk",140],["techus.website",140],["criticalthinking.org",141],["moviepl.xyz",145],["leekduck.com",146],["aberdeennews.com",147],["alamogordonews.com",147],["amarillo.com",147],["amestrib.com",147],["app.com",147],["argusleader.com",147],["augustachronicle.com",147],["azcentral.com",147],["battlecreekenquirer.com",147],["beaconjournal.com",147],["blueridgenow.com",147],["buckscountycouriertimes.com",147],["bucyrustelegraphforum.com",147],["burlingtoncountytimes.com",147],["burlingtonfreepress.com",147],["caller.com",147],["cantondailyledger.com",147],["cantonrep.com",147],["capecodtimes.com",147],["cheboygannews.com",147],["chieftain.com",147],["chillicothegazette.com",147],["cincinnati.com",147],["citizen-times.com",147],["cjonline.com",147],["clarionledger.com",147],["coloradoan.com",147],["columbiadailyherald.com",147],["columbiatribune.com",147],["commercialappeal.com",147],["coshoctontribune.com",147],["courier-journal.com",147],["courier-tribune.com",147],["courierpostonline.com",147],["courierpress.com",147],["currentargus.com",147],["daily-jeff.com",147],["daily-times.com",147],["dailyamerican.com",147],["dailycomet.com",147],["dailycommercial.com",147],["dailyrecord.com",147],["dailyworld.com",147],["delawareonline.com",147],["delmarvanow.com",147],["demingheadlight.com",147],["democratandchronicle.com",147],["desertsun.com",147],["desmoinesregister.com",147],["devilslakejournal.com",147],["dispatch.com",147],["dnj.com",147],["ellwoodcityledger.com",147],["elpasotimes.com",147],["enterprisenews.com",147],["eveningsun.com",147],["eveningtribune.com",147],["examiner-enterprise.com",147],["fayobserver.com",147],["fdlreporter.com",147],["floridatoday.com",147],["fosters.com",147],["freep.com",147],["gadsdentimes.com",147],["gainesville.com",147],["galesburg.com",147],["gastongazette.com",147],["goerie.com",147],["gosanangelo.com",147],["goupstate.com",147],["greatfallstribune.com",147],["greenbaypressgazette.com",147],["greenvilleonline.com",147],["hattiesburgamerican.com",147],["heraldmailmedia.com",147],["heraldnews.com",147],["heraldtribune.com",147],["hillsdale.net",147],["hollandsentinel.com",147],["hoosiertimes.com",147],["houmatoday.com",147],["htrnews.com",147],["hutchnews.com",147],["indeonline.com",147],["independentmail.com",147],["indystar.com",147],["ithacajournal.com",147],["jacksonsun.com",147],["jacksonville.com",147],["jconline.com",147],["jdnews.com",147],["journalstandard.com",147],["jsonline.com",147],["kinston.com",147],["kitsapsun.com",147],["knoxnews.com",147],["lancastereaglegazette.com",147],["lansingstatejournal.com",147],["lcsun-news.com",147],["ldnews.com",147],["lenconnect.com",147],["lincolncourier.com",147],["livingstondaily.com",147],["lohud.com",147],["lubbockonline.com",147],["mansfieldnewsjournal.com",147],["marionstar.com",147],["marshfieldnewsherald.com",147],["mcdonoughvoice.com",147],["metrowestdailynews.com",147],["milforddailynews.com",147],["monroenews.com",147],["montgomeryadvertiser.com",147],["mpnnow.com",147],["mycentraljersey.com",147],["naplesnews.com",147],["newarkadvocate.com",147],["newbernsj.com",147],["newportri.com",147],["news-journalonline.com",147],["news-leader.com",147],["news-press.com",147],["newschief.com",147],["newsherald.com",147],["newsleader.com",147],["njherald.com",147],["northjersey.com",147],["norwichbulletin.com",147],["nwfdailynews.com",147],["oakridger.com",147],["ocala.com",147],["oklahoman.com",147],["onlineathens.com",147],["pal-item.com",147],["palmbeachdailynews.com",147],["palmbeachpost.com",147],["patriotledger.com",147],["pekintimes.com",147],["petoskeynews.com",147],["pjstar.com",147],["pnj.com",147],["poconorecord.com",147],["pontiacdailyleader.com",147],["portclintonnewsherald.com",147],["postcrescent.com",147],["poughkeepsiejournal.com",147],["press-citizen.com",147],["pressconnects.com",147],["progress-index.com",147],["providencejournal.com",147],["publicopiniononline.com",147],["record-courier.com",147],["recordnet.com",147],["recordonline.com",147],["redding.com",147],["registerguard.com",147],["reporter-times.com",147],["reporternews.com",147],["rgj.com",147],["rrstar.com",147],["ruidosonews.com",147],["salina.com",147],["savannahnow.com",147],["scsun-news.com",147],["sctimes.com",147],["seacoastonline.com",147],["sheboyganpress.com",147],["shelbystar.com",147],["shreveporttimes.com",147],["sj-r.com",147],["sooeveningnews.com",147],["southbendtribune.com",147],["southcoasttoday.com",147],["starcourier.com",147],["stargazette.com",147],["starnewsonline.com",147],["statesman.com",147],["statesmanjournal.com",147],["staugustine.com",147],["stevenspointjournal.com",147],["sturgisjournal.com",147],["swtimes.com",147],["tallahassee.com",147],["tauntongazette.com",147],["tcpalm.com",147],["telegram.com",147],["tennessean.com",147],["the-daily-record.com",147],["the-dispatch.com",147],["the-leader.com",147],["the-review.com",147],["theadvertiser.com",147],["thecalifornian.com",147],["thedailyjournal.com",147],["thedailyreporter.com",147],["thegardnernews.com",147],["thegleaner.com",147],["thehawkeye.com",147],["theintell.com",147],["theleafchronicle.com",147],["theledger.com",147],["thenews-messenger.com",147],["thenewsstar.com",147],["thenorthwestern.com",147],["thepublicopinion.com",147],["therecordherald.com",147],["thespectrum.com",147],["thestarpress.com",147],["thetimesherald.com",147],["thetimesnews.com",147],["thetowntalk.com",147],["times-gazette.com",147],["timesonline.com",147],["timesrecordnews.com",147],["timesreporter.com",147],["timestelegram.com",147],["tmnews.com",147],["tricountyindependent.com",147],["tuscaloosanews.com",147],["usatoday.com",147],["uticaod.com",147],["vcstar.com",147],["visaliatimesdelta.com",147],["vvdailypress.com",147],["wausaudailyherald.com",147],["wisconsinrapidstribune.com",147],["ydr.com",147],["zanesvilletimesrecorder.com",147],["craftpip.github.io",148],["pixwox.com",149],["sflix.to",150],["thizissam.in",151],["jsfiddle.net",152],["ikorektor.pl",153],["telenovelas-turcas.com.es",154],["goldenstateofmind.com",155],["neoseeker.com",156],["galinos.gr",159],["bluesnews.com",160]]);

const entitiesMap = new Map([["flixhq",[103,158]],["fmovies",103],["fmoviesz",103],["libgen",28],["123movies",131]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = safe.patternToRegex(needle);
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setTimeout("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
            }
            return Reflect.apply(target, thisArg, args);
        },
        get(target, prop, receiver) {
            if ( prop === 'toString' ) {
                return target.toString.bind(target);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
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
    try { noSetTimeoutIf(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noSetTimeoutIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noSetTimeoutIf = cloneInto([
            [ '(', uBOL_noSetTimeoutIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noSetTimeoutIf);
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
    delete page.uBOL_noSetTimeoutIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
