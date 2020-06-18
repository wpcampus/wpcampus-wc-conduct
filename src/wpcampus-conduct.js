import { WPCampusHTMLElement } from "@wpcampus/wpcampus-wc-default";
import "./wpcampus-conduct.css";

const conductURL = "https://www.wpcampus.org/about/guidelines/conduct/";

const template = `<div class="wpc-conduct__graphic__wrapper">
	<div class="wpc-conduct__graphic" role="img" aria-label="eduwapuu"></div>
</div>
<div class="wpc-conduct__main__wrapper">
	<div class="wpc-conduct__main">
		<h2 class="wpc-conduct__heading">WPCampus Code of Conduct</h2>
		<div class="wpc-conduct__message">
			<p>WPCampus seeks to provide a safe and welcoming environment where participants can engage in constructive dialogue and share and learn in an atmosphere of mutual respect.</p>
		</div>
		<div class="wpc-conduct__button">
			<a class="wpc-button" href="${conductURL}" aria-label="The WPCampus Code of Conduct">Our Code of Conduct</a>
		</div>
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
		this.innerHTML = this.wrapTemplate(template, false);
	}
}
customElements.define("wpcampus-conduct", WPCampusConduct);

export default WPCampusConduct;
