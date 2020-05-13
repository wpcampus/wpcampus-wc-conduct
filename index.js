const { WPCampusHTMLElement } = require("@wpcampus/wpcampus-wc-default");
require("./index.css");

const conductURL = "https://www.wpcampus.org/about/guidelines/conduct/";

// wpc-area is the grid system used by WPCampus themes.
const template = `<div class="wpc-area wpc-conduct__area">
	<div class="wpc-conduct__graphic">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 235" style="enable-background:new 0 0 200 235;" xml:space="preserve">
			<title>Eduwapuu</title>
			<style type="text/css">
				.wpc-eduwapuu--0{opacity:0.8;fill:#FFFFFF;}
				.wpc-eduwapuu--1{opacity:0.35;fill:#FFFFFF;}
				.wpc-eduwapuu--2{fill:#3C3C3C;}
				.wpc-eduwapuu--3{fill:#FFFFFF;}
				.wpc-eduwapuu--4{opacity:0.8;}
				.wpc-eduwapuu--5{opacity:0.35;}
			</style>
			<g>
				<path d="M200,57.1c0-2.6-1.9-4.7-4.5-5c-2.9-0.3-6.1-0.4-9.9-0.4c-2.9,0-5.7,0.1-8.5,0.2c-1,0-2,0.1-3.1,0.1
					c-2.9-7.2-5.6-13.4-7.8-18c-0.6-1.2-1.3-2.4-2.1-3.7c-1-1.7-2.3-3.8-2.5-5c0-0.2-0.9-4.6-2.3-9.1c-1.9-6-4.5-12-10-12
					c-0.6,0-1.5,0.1-2.4,0.5c-0.8-1.4-1.6-2.7-2.2-3.7c-0.3-0.5-0.9-0.8-1.4-0.8c-0.1,0-0.3,0-0.4,0L40.3,24.4c-0.5,0.1-0.9,0.5-1.1,1
					c-0.5,1.1-0.7,3.5,1.5,5.5C42.6,32.6,69,53.1,70.1,54c0.1,0.1,0.3,0.2,0.5,0.3c0,1.3,0,2.5,0.3,3.5c0.2,1.1,0.8,2,1.5,2.7
					c-2.5,2.6-4.7,5.3-6.6,8.3c-0.5,0.8-0.9,2.2-1.3,2.2c0,0-0.1,0-0.1,0c-1,0-2,0.4-2.8,1C57.3,75,53.3,77,52,77.3
					c-1,0.2-1.9,0.7-2.6,1.4c-1.5,1.4-1.9,3.6-1.1,5.5c0.2,0.6,0.5,1.1,0.9,1.5c0.4,0.4,0.8,0.8,1.4,1.2c0.9,0.6,2.4,1.3,4.7,1.5
					c-1.2,0.8-2.2,1.8-3.2,2.9c-0.1,0.1-0.3,0.3-0.4,0.5c-13.1-9.3-28.2-14.5-28.9-14.7l-11.2-3.8c-0.2-0.1-0.4-0.1-0.5-0.1
					c-0.5,0-1.1,0.3-1.4,0.7c-0.4,0.6-0.4,1.4,0.1,2l1.1,1.3c-1.2-0.1-2-0.2-2.2-0.2c0,0-5.4-0.1-5.4-0.1c-0.6,0-1.1,0.3-1.4,0.8
					c-0.3,0.5-0.4,1.1-0.1,1.6l1.2,2.6l-0.8-0.2c-0.1,0-0.3-0.1-0.4-0.1c-0.5,0-0.9,0.2-1.3,0.6c-0.4,0.5-0.5,1.2-0.3,1.8l28.4,62.7
					c-2.5,3.1-3.3,7.3-2.4,11.8c2,9.6,17.2,26.3,28.6,29c1.1,0.3,2.1,0.4,3.1,0.4c2.8,0,5.1-1.2,6.5-3.3c0.5-0.7,0.8-1.5,1.1-2.4
					c9.2,6.6,20.2,10.5,31.4,11.2c0.4,0.9,0.8,1.6,1.3,2.3c2.1,2.8,5.2,4.4,8.7,4.4c4.9,0,9.7-3,12.4-6.2l1.5-0.1
					c1.7-0.1,7.1-0.4,12-1.3c0.1,0.2,0.1,0.5,0.2,0.7c-10.3,12.7-26.2,21.3-39.9,21.5c-0.2,0-0.3,0-0.5,0c-7.5,0-13-2.7-16-7.7
					c-5.2-8.8-12.8-11.9-18.1-11.9c-1.1,0-2.3,0.1-3.3,0.4c-5.2,1.3-8.4,5.7-8.6,11.7c-0.2,4.9,3.4,10.7,9.6,15.8
					c7.1,5.8,19.5,12,33.2,12c3.3,0,6.6-0.4,9.7-1.1c21.1-5,41-19.3,51.9-37.3l1.2-1.9c17.6-3.8,34.6-13.1,39.4-15.9
					c1.5-0.9,2.4-2.4,2.5-4.1c0.1-4,0-8.3-0.6-13.6c-0.5-4.6-1.2-9.6-2.1-15.3c-0.8-4.9-1.8-10-3.1-15.6c-1-4.6-2.1-9.3-3.3-14.4
					c-0.5-2.2-1.1-4.3-1.6-6.5c0,0-1.1-4.6-1.3-5.5c0.4-0.2,0.9-0.5,1.3-0.8c0,0,0.3-0.2,0.3-0.2c3.5-2.5,5.9-5,4.2-11.9
					c-1-3.8-2.7-9.4-5.1-16.1c2.5-0.7,4.9-1.7,7-2.9C196.3,68.2,200,63,200,57.1z M151.4,51.3c-0.7,0-1.3,0-2,0c-0.4-0.8-1-1.4-1.8-1.9
					c-0.7-0.5-1.5-0.9-2.3-1.3c0.1-0.3,0.3-0.6,0.4-0.9c0.9-2.7,0.1-5.9-2.7-10.6c1.8-0.5,3.5-1,5.1-1.5l0.1,0.5
					c1.3,5.5,2.5,10.8,3.8,15.7C151.9,51.3,151.6,51.3,151.4,51.3z"/>
				<path class="wpc-eduwapuu--0" d="M95.4,87.8c-1.9,1.6-3.1,3.2-3.9,4.6c-6.5,1.9-11.9,4-16.3,6.1c-0.5-3.2-1.4-5.6-2.5-7.4
					c4.7-0.7,14-4.5,18.4-10.5c3.4,1.8,7.1,2.7,11.2,2.8c-0.1,0-0.2,0.1-0.2,0.1c0.1,0,0.1-0.1,0.2-0.1C99.6,84.6,97.3,86.1,95.4,87.8z
					"/>
				<path class="wpc-eduwapuu--0" d="M83.8,180.1l-1.2-1.6c-2.4-3.2-4.9-5.3-6.7-5.5c-0.1,0-0.3,0-0.4,0c-0.4,0-0.8,0.1-1.2,0.3l-1.7,1.1l-13-7.9
					c1.5,2.8,2.6,5.2,3.2,6.5c0.1,0.3,0.3,0.7,0.4,1.1c9.1,8.4,21,13.8,34.2,14.5c-0.1-2,0-3.9,0.1-5.7c0.1-0.8,0.1-1.6,0.1-2.2
					c0-0.9,0-1.7,0-2.5L83.8,180.1z"/>
				<path class="wpc-eduwapuu--1" d="M138.1,194.7c-10.9,14.4-29,24.7-45,25c-9.5,0.2-16.9-3.4-20.9-10.2c-4.5-7.6-11.4-10.3-15.8-9.2
					c-3,0.8-4.7,3.3-4.8,7c-0.1,3.3,2.8,7.7,7.8,11.8c9,7.3,24.4,13.2,38.6,9.9c20.2-4.8,38.8-18.5,48.8-35
					C143.8,194.4,141,194.7,138.1,194.7z"/>
				<path id="Fill-6_2_" class="wpc-eduwapuu--0" d="M119,166.7c-1.6-6.1-11.7-25.8-19.6-16.4c-4.1,4.8-0.7,13.4,0.5,18.6c0.8,3.9,1.2,7.6,1.1,11.6
					c0,3.3-1,9.2,1.2,12.1c3.7,4.9,11.3,1,14-3C120.5,183.3,120.8,173.8,119,166.7"/>
				<path id="Fill-8_2_" class="wpc-eduwapuu--0" d="M32.5,149.6c-1.6,2-2.1,4.7-1.5,7.8c1.6,7.8,15.5,22.9,24.9,25.2c0.7,0.2,1.4,0.3,1.9,0.3
					c1.5,0,2-0.6,2.3-1c1.1-1.8,0.5-5.6-0.4-7.6c-2.6-5.9-10.9-21.5-15-24.7c-2.1-1.6-4.4-2.5-6.5-2.5C35.9,147,33.9,147.9,32.5,149.6"
					/>
				<path class="wpc-eduwapuu--2" d="M178,107.9c-4,3.7-17,15.6-22.4,20.1c-5.8,5.2-11.2,8.4-16,10.4c-1.5,23.9-1.9,46-1.9,53c0.1,0,0.1,0,0.2,0
					c20.5,0,45.1-13.3,51.2-16.9C189.7,157.5,183.4,128.9,178,107.9z"/>
				<path class="wpc-eduwapuu--0" d="M121.2,162.9c0.5,1.2,0.8,2.3,1,3c1.5,6.2,1.8,15.5-1.8,22.9c4-0.2,9.7-0.7,13.8-1.7c0.1-7.5,0.4-21.3,1.2-37
					C130.8,151.8,124.8,156.2,121.2,162.9z"/>
				<path class="wpc-eduwapuu--3" d="M90.7,98.6c-0.2-0.7-0.4-1.5-0.3-2.4c-18.7,5.9-27.7,13.3-27.7,13.3C51.5,92.1,21.2,81.8,21.2,81.8l4.5,5.4
					C17.7,82.2,8.5,82,8.5,82l1.7,3.6c9.6,2.9,27.1,10.3,47.2,29.2l4.3-3.2l6.1,5.3c4.9-2.9,15.2-8.5,28-13.1
					C93.2,102.6,91.4,100.8,90.7,98.6z"/>
				<path class="wpc-eduwapuu--0" d="M105,87.7l-1.2-1.5c-2.3,1.1-4.5,2.5-6.3,4.1c-3,2.7-4.4,5.3-3.7,7.3c0.7,2.1,3.4,3.7,6.7,4
					c2.5,0.3,6.4-0.6,10.4-1.5c0.3-0.1,0.6-0.1,0.9-0.2C108.7,92.2,105.1,87.8,105,87.7z"/>
				<path class="wpc-eduwapuu--2" d="M176.9,104.3c0,0-5.1-24.6-11-28.4c-9.3-6-21.8,8.3-21.8,8.3s-7.4-2.6-18.3-2c-8.6,0.5-18.6,2.7-18.6,2.7
					s17.5,21,11.6,52.2c0,0,14.7,6.2,34.6-11.8C159.7,120.2,176.9,104.3,176.9,104.3z"/>
				<path id="Fill-7_2_" class="wpc-eduwapuu--1" d="M169,57c-7.3,0-15-1.1-22.2-0.5c4.5,7.4,16.5,13.6,24.8,14.7c7.5,1,23.4-4.4,23.4-14
					C186.5,56.3,177.6,57,169,57"/>
				<path id="Fill-11_2_" class="wpc-eduwapuu--1" d="M53.1,82.2c-0.1,0-0.2,0.1-0.2,0.1c0,0,0.1,0.2,0.5,0.4c0.6,0.4,3.3,1.7,10.4-0.2
					c-0.2-1.6-0.1-3.7,0.6-6.1C60.2,79.2,55.5,81.7,53.1,82.2"/>
				<path class="wpc-eduwapuu--0" d="M60.5,101.5c1-0.4,1.9-1.1,2.8-1.9c1.8-1.8,2.6-4.1,2.1-6.3c-0.3-1.3-1-2.4-2-2.7c-0.2-0.1-0.4-0.1-0.6-0.1
					c-1.7,0-4.8,1.5-6.9,4c-0.4,0.4-0.8,1-1.1,1.8C56.8,97.9,58.8,99.6,60.5,101.5z"/>
				<path class="wpc-eduwapuu--2" d="M67.1,89.3c0.8,0.9,1.3,2.1,1.6,3.4c0.7,3.3-0.5,6.7-3,9.3c-0.9,0.8-1.8,1.6-2.8,2.2c0.2,0.3,0.4,0.5,0.6,0.8
					c1.9-1.3,4.8-3,8.6-5C71.3,93.3,68.4,90.3,67.1,89.3z"/>
				<path class="wpc-eduwapuu--1" d="M125.5,142C125.5,142,125.5,142,125.5,142c-4.8,0-7.7-1.4-8-1.5c-0.4-0.2-0.7-0.5-1-0.8c0,0,0,0,0,0
					c-6.2-6-10.5-27.2-11.9-34.9c-0.6,0.1-1.2,0.1-1.8,0.2c-16.8,5.2-30.2,13-33.2,14.7L87,176.2l10.4-1.6c-0.2-1.7-0.4-3.3-0.8-5
					c-0.2-0.9-0.4-1.9-0.7-2.9c-1.5-5.6-3.5-13.3,1-18.6c2.6-3,5.3-3.7,7.1-3.7c6.7,0,12.3,8.1,15.5,14.6c4.2-7.1,10.3-10.5,14.9-12.1
					l1.3-0.5c0.1-2.2,0.2-4.3,0.4-6.6C131.9,141.4,128.4,142,125.5,142z"/>
				<path class="wpc-eduwapuu--3" d="M93,130.5c1.2,4.2,4.7,7,8.7,7.7L92.7,126C92.5,127.5,92.6,129,93,130.5z"/>
				<path class="wpc-eduwapuu--3" d="M104.7,121.6c0,0-0.6,0.2-1.2,0.5l7.1,10.2l0-3.2c-0.8-2.3-1.6-4.7-2.3-7.1c-0.6-0.6-1.2-1.1-1.4-1.9
					c-0.2-0.7,0-1.4,0.4-1.9c-0.1-0.3-0.2-0.7-0.3-1c-2.1-0.7-4.4-0.9-6.7-0.2c-3.7,1.1-6.4,3.9-7.4,7.3c0.2-0.1,0.5-0.1,0.7-0.2
					c1.1-0.3,2.8-1,2.8-1c0.6-0.2,0.9,0.6,0.3,0.8c0,0-0.6,0.2-1.2,0.5l7.2,10.3l0.3-7.6l-3-4c-0.6,0.1-1.1,0.2-1.1,0.2
					c-0.6,0.1-0.8-0.8-0.2-0.9c0,0,1.8-0.4,2.8-0.7c1.1-0.3,2.8-1,2.8-1C105,120.6,105.3,121.4,104.7,121.6z"/>
				<path class="wpc-eduwapuu--3" d="M104,128.3l-0.4,10.1c1,0,2.1-0.1,3.1-0.4c1.2-0.4,2.3-0.9,3.3-1.6c0,0-0.1-0.1-0.1-0.1L104,128.3z"/>
				<path class="wpc-eduwapuu--3" d="M107.2,139.7c2.6-0.8,4.7-2.3,6.3-4.2c-0.1-0.2-0.2-0.4-0.3-0.6c-1.5,2-3.6,3.5-6.2,4.2
					c-6.5,1.9-13.3-1.8-15.2-8.2c-1.9-6.4,1.8-13.2,8.2-15.1c2.3-0.7,4.6-0.6,6.7,0c-0.1-0.2-0.1-0.4-0.2-0.6c-2.2-0.5-4.5-0.5-6.8,0.1
					c-6.8,2-10.6,9.1-8.6,15.9C93.3,137.8,100.4,141.7,107.2,139.7z"/>
				<path class="wpc-eduwapuu--2" d="M92.3,54.5c2.4-0.1,33-14.1,48.3-8.3c0,0,4.3-1-11-19.7c0,0-26.4-6.7-44.3,4.8c0,0-11.3,16.7-9.6,25.6
					C83.6,50.2,89.9,54.6,92.3,54.5z"/>
				<path class="wpc-eduwapuu--0" d="M182.9,92.2c-1.1-4.3-3.2-10.7-5.7-17.8c-1.3,0.2-2.5,0.3-3.7,0.3h0c-0.8,0-1.6,0-2.3-0.1
					c-0.7-0.1-1.5-0.2-2.3-0.4c2,1.8,4.7,5.9,7.9,16.5c1,3.4,1.9,6.7,2.5,9.1c0.4-0.2,0.7-0.4,1.1-0.7C183.1,97,184,96.5,182.9,92.2z"
					/>
				<path d="M164.2,41.4c-0.8-1.9-1.7-3.7-2.4-5.3c-0.6-1.3-1.6-2.9-2.6-4.5c-3-0.6-5.2,1.3-6.1,2.3c0.4,1.8,1.3,5.5,2.4,10.3
					C158.9,40.9,162.7,41.1,164.2,41.4z"/>
				<g class="wpc-eduwapuu--4">
					<path class="wpc-eduwapuu--3" d="M152.9,33.1c0,0.2,0.1,0.5,0.2,0.9c1-1.1,3.1-2.9,6.1-2.3c-1.1-1.8-2.1-3.7-2.4-5.4c0,0-4-20.5-8.6-16.6
						c0,0,5.7,8.7,6,15.8C154.2,25.4,151.8,28.7,152.9,33.1z"/>
					<path class="wpc-eduwapuu--3" d="M164.2,41.4c-1.5-0.3-5.3-0.5-8.7,2.9c0.7,2.7,1.4,5.7,2.2,8.9c0.9,0,1.9,0.1,2.8,0.2c3,0.2,5.8,0.3,8.5,0.3
						c0.1,0,0.2,0,0.4,0C167.6,49.3,165.8,45.1,164.2,41.4z"/>
				</g>
				<g class="wpc-eduwapuu--5">
					<path class="wpc-eduwapuu--3" d="M54.5,116.5C33.8,97.4,16,90.6,7.6,88.3l25.6,56.5c1.5-0.8,3.2-1.2,5-1.2c2.9,0,5.9,1.1,8.6,3.2
						c2.8,2.1,6.5,8,9.8,13.7l13.5,8.3L54.5,116.5z"/>
					<path class="wpc-eduwapuu--3" d="M66,119.7l-4.5-3.9l-3.1,2.4l15.4,51.7c0.8-0.3,1.7-0.3,2.6-0.2c2.3,0.3,4.5,2,6.2,3.8L66,119.7z"/>
				</g>
				<path class="wpc-eduwapuu--3" d="M111.7,131.6l-0.2,3.4c0.4-0.4,0.7-0.9,1.1-1.3C112.3,133,112,132.3,111.7,131.6z"/>
				<path class="wpc-eduwapuu--0" d="M144,58.2c-0.6-1-0.7-2.2-0.1-3.2c0.3-0.5,0.7-1,1.2-1.3c-4.1-2.5-8.5-4.4-13.2-5.6c-0.1,0-0.1,0-0.2,0
					c-11.3,0-26.2,5.3-33.3,7.8c-3.8,1.4-4.9,1.7-5.9,1.7h-0.1c-1,0-1.9,0.4-3,0.1c-1.3-0.4-2.7-0.1-4.3-0.1c0,0,0,0,0,0
					c-6,2.5-11.1,8.5-14.9,14.6c-1,1.6-1.8,2.9-2.3,4.4c0,0.3,0,0.5-0.1,0.8c-0.5,1.7-0.7,3.2-0.5,4.7c0,0.3,0,0.5,0,0.8
					c0,0.2,0.1,0.3,0.1,0.5c0.7,2.3,2.3,3.8,3.5,4.3c2,0.9,14.7-3.5,18.4-10.2c0.2-0.4,0.6-0.7,1-0.8c0.4-0.1,0.9,0,1.2,0.2
					c8.7,5.3,18.4,2.9,26.9,0.2c0.8-0.3,1.7,0.2,2,1c0.1,0.4,0.1,0.9-0.2,1.3c0.4,0,0.9,0,1.3,0c1.4-0.2,2.8-0.3,4.2-0.4
					c1.1-0.1,2.3-0.1,3.4-0.1c6.4,0,11.3,1,14,1.6c3-3,9.9-9,17.2-9.3C153.7,68.3,147.3,63.7,144,58.2z M77.1,73.6
					c-1.8,0-3.2-1.4-3.2-3.2c0-1.7,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2C80.3,72.2,78.9,73.6,77.1,73.6z M94.4,72.2
					c-2.6,1.9-2.8,1.8-5.6,1.4c-2.8-0.4-3.6-2.7-1.1-4.6c1.4-1.1,3.5-1.8,6.7-2.1C97.6,66.6,97.2,70.1,94.4,72.2z M113.8,64.8
					c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2S115.5,64.8,113.8,64.8z"/>
			</g>
		</svg>
	</div>
	<div class="wpc-conduct__main">
		<h2 class="wpc-conduct__heading">Our Code of Conduct</h2>
		<p class="wpc-conduct__message">WPCampus seeks to provide a friendly, safe, and welcoming environment. All participants should be able to engage in constructive dialogue. They should share and learn with each other in an atmosphere of mutual respect. We require all participants adhere to the <a class="wpc-conduct__link" href="${conductURL}">WPCampus Code of Conduct</a>. This applies to all community interaction and events.</p>
	</div>
</div>`;

class WPCampusConduct extends WPCampusHTMLElement {
	constructor() {
		super({ componentID: "conduct" });
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("role", "complementary");
		this.setAttribute("aria-label", "WPCampus Code of Conduct");
		this.innerHTML = this.wrapTemplate(template, true);
	}
}
customElements.define("wpcampus-conduct", WPCampusConduct);

module.exports = WPCampusConduct;
