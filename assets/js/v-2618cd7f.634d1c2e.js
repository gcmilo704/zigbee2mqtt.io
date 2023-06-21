"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8318],{223349:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-2618cd7f","path":"/devices/DIYRuZ_Geiger.html","title":"DIYRuZ DIYRuZ_Geiger control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ DIYRuZ_Geiger control via MQTT","description":"Integrate your DIYRuZ DIYRuZ_Geiger via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Radioactive_events_per_minute (numeric)","slug":"radioactive-events-per-minute-numeric","link":"#radioactive-events-per-minute-numeric","children":[]},{"level":3,"title":"Radiation_dose_per_hour (numeric)","slug":"radiation-dose-per-hour-numeric","link":"#radiation-dose-per-hour-numeric","children":[]},{"level":3,"title":"Led_feedback (binary)","slug":"led-feedback-binary","link":"#led-feedback-binary","children":[]},{"level":3,"title":"Buzzer_feedback (binary)","slug":"buzzer-feedback-binary","link":"#buzzer-feedback-binary","children":[]},{"level":3,"title":"Alert_threshold (numeric)","slug":"alert-threshold-numeric","link":"#alert-threshold-numeric","children":[]},{"level":3,"title":"Sensors_type (enum)","slug":"sensors-type-enum","link":"#sensors-type-enum","children":[]},{"level":3,"title":"Sensors_count (numeric)","slug":"sensors-count-numeric","link":"#sensors-count-numeric","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687368041000},"filePathRelative":"devices/DIYRuZ_Geiger.md"}')},117355:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(166252);const d=(0,i._)("h1",{id:"diyruz-diyruz-geiger",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#diyruz-diyruz-geiger","aria-hidden":"true"},"#"),(0,i.Uk)(" DIYRuZ DIYRuZ_Geiger")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DIYRuZ_Geiger")],-1),r=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("td",null,"Description",-1),s={href:"https://modkam.ru/?p=1591",target:"_blank",rel:"noopener noreferrer"},u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, radioactive_events_per_minute, radiation_dose_per_hour, led_feedback, buzzer_feedback, alert_threshold, sensors_type, sensors_count, sensitivity, linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Geiger.jpg",alt:"DIYRuZ DIYRuZ_Geiger"})])],-1),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="radioactive-events-per-minute-numeric" tabindex="-1"><a class="header-anchor" href="#radioactive-events-per-minute-numeric" aria-hidden="true">#</a> Radioactive_events_per_minute (numeric)</h3><p>Current count radioactive pulses per minute. Value can be found in the published state on the <code>radioactive_events_per_minute</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>rpm</code>.</p><h3 id="radiation-dose-per-hour-numeric" tabindex="-1"><a class="header-anchor" href="#radiation-dose-per-hour-numeric" aria-hidden="true">#</a> Radiation_dose_per_hour (numeric)</h3><p>Current radiation level. Value can be found in the published state on the <code>radiation_dose_per_hour</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>μR/h</code>.</p><h3 id="led-feedback-binary" tabindex="-1"><a class="header-anchor" href="#led-feedback-binary" aria-hidden="true">#</a> Led_feedback (binary)</h3><p>Enable LED feedback. Value can be found in the published state on the <code>led_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_feedback is ON, if <code>OFF</code> OFF.</p><h3 id="buzzer-feedback-binary" tabindex="-1"><a class="header-anchor" href="#buzzer-feedback-binary" aria-hidden="true">#</a> Buzzer_feedback (binary)</h3><p>Enable buzzer feedback. Value can be found in the published state on the <code>buzzer_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;buzzer_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;buzzer_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> buzzer_feedback is ON, if <code>OFF</code> OFF.</p><h3 id="alert-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#alert-threshold-numeric" aria-hidden="true">#</a> Alert_threshold (numeric)</h3><p>Critical radiation level. Value can be found in the published state on the <code>alert_threshold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alert_threshold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alert_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>. The unit of this value is <code>μR/h</code>.</p><h3 id="sensors-type-enum" tabindex="-1"><a class="header-anchor" href="#sensors-type-enum" aria-hidden="true">#</a> Sensors_type (enum)</h3><p>Type of installed tubes. Value can be found in the published state on the <code>sensors_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensors_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensors_type&quot;: NEW_VALUE}</code>. The possible values are: <code>СБМ-20/СТС-5/BOI-33</code>, <code>СБМ-19/СТС-6</code>, <code>Others</code>.</p><h3 id="sensors-count-numeric" tabindex="-1"><a class="header-anchor" href="#sensors-count-numeric" aria-hidden="true">#</a> Sensors_count (numeric)</h3><p>Count of installed tubes. Value can be found in the published state on the <code>sensors_count</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensors_count&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensors_count&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50</code>.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric" aria-hidden="true">#</a> Sensitivity (numeric)</h3><p>This is applicable if tubes type is set to other. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),p={},b=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink"),p=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,i.w5)((()=>[(0,i.Uk)("DIYRuZ")])),_:1})])]),(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i._)("a",s,[(0,i.Uk)("DiY Geiger counter"),(0,i.Wm)(p)])])]),u,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);