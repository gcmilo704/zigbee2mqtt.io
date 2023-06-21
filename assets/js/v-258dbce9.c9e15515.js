"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81188],{655042:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-258dbce9","path":"/devices/MCCGQ14LM.html","title":"Xiaomi MCCGQ14LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi MCCGQ14LM control via MQTT","description":"Integrate your Xiaomi MCCGQ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687368041000},"filePathRelative":"devices/MCCGQ14LM.md"}')},82079:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var i=a(166252);const r=(0,i._)("h1",{id:"xiaomi-mccgq14lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#xiaomi-mccgq14lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Xiaomi MCCGQ14LM")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"MCCGQ14LM")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Aqara E1 door & window contact sensor")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"contact, battery, battery_low, voltage, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MCCGQ14LM.jpg",alt:"Xiaomi MCCGQ14LM"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,i.Uk)(" Adapter firmware")],-1),p=(0,i._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),m={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},b=(0,i._)("code",null,"20211115",-1),f={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},_=(0,i._)("code",null,"20211114",-1),k={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},y=(0,i._)("code",null,"20211222",-1),g={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},v=(0,i._)("code",null,"0x26720700",-1),w=(0,i._)("p",null,[(0,i._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),C=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),x=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),q={},M=(0,a(983744).Z)(q,[["render",function(e,t){const a=(0,i.up)("RouterLink"),q=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),r,(0,i._)("table",null,[o,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=Xiaomi"},{default:(0,i.w5)((()=>[(0,i.Uk)("Xiaomi")])),_:1})])]),d,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("CC2530/CC2531: "),(0,i._)("a",m,[b,(0,i.Wm)(q)])]),(0,i._)("li",null,[(0,i.Uk)("CC1352/CC2652: "),(0,i._)("a",f,[_,(0,i.Wm)(q)])]),(0,i._)("li",null,[(0,i.Uk)("CC2538: "),(0,i._)("a",k,[y,(0,i.Wm)(q)])]),(0,i._)("li",null,[(0,i.Uk)("Conbee II: "),(0,i._)("a",g,[v,(0,i.Wm)(q)])])]),w,(0,i.kq)(" Notes END: Do not edit below this line "),C,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),x])}]])}}]);