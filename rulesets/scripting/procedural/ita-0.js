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

'use strict';

// ruleset: ita-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".container-fluid.py-3.bg-white-color.pl-5.pr-5\",\"tasks\":[[\"has\",{\"selector\":\".text-black.weight-400.mb-0\",\"tasks\":[[\"has-text\",\"I Nostri Partners\"]]}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".td-block-title-wrap\",\"tasks\":[[\"has-text\",\"Banner\"]]}]]}"],["{\"selector\":\".ruby-block-wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"SPONSORED\"]]}]]}"],["{\"selector\":\".post.type-post.consigliato\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Sponsorizzato\"]]}]]}"],["{\"selector\":\".article-blog-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"CONTENUTO SPONSORIZZATO\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".agi-article-card\",\"tasks\":[[\"has\",{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"BRANDED CONTENT\"]]}]]}"],["{\"selector\":\".m-relases__result\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Contenuto pubblicitario\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".cl-amp-important-information\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}","{\"selector\":\".custom-html\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Sponsorizzata\"]]}]]}"],["{\"selector\":\".bx\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"CONTENUTO SPONSORIZZATO\"]]}]]}"],["{\"selector\":\".right.es.large\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"contenuto sponsorizzato\"]]}]]}"],["{\"selector\":\".search-itm\",\"tasks\":[[\"has\",{\"selector\":\".search-itm__label\",\"tasks\":[[\"has-text\",\"annuncio\"]]}]]}"],["{\"selector\":\".similar-post-holder\",\"tasks\":[[\"has\",{\"selector\":\".categoria\",\"tasks\":[[\"has-text\",\"Post sponsorizzato\"]]}]]}"],["{\"selector\":\".feat-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"INFORMAZIONE REDAZIONALE\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Esponi i tuoi banner sul forum\"]]}]]}"],["{\"selector\":\"article[id^=\\\"post-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Adv\"]]}]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"contenuto sponsorizzato\"]]}]]}"]];

const hostnamesMap = new Map([["investire.biz",0],["cronacadiverona.com",1],["innaturale.com",2],["lavocedinovara.com",3],["lospiffero.com",4],["meccanicanews.com",5],["logisticanews.it",5],["agi.it",6],["borsaitaliana.it",7],["ilprogettistaindustriale.it",8],["laleggepertutti.it",9],["lasicilia.it",10],["iene.mediaset.it",11],["tgcom24.mediaset.it",12],["paginegialle.it",13],["pharmacyscanner.it",14],["radioluna.it",15],["technofashion.it",16],["guadagna.net",17],["tuttoandroid.net",18],["aleteia.org",19]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
