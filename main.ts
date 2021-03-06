import { Plugin } from "obsidian";

export default class SelectedSearchHighlight extends Plugin {
	async onload() {
		this.registerDomEvent(document, "click", (e: MouseEvent) => {
			if (
				!app.workspace.getActiveFile() ||
				document.querySelectorAll(
					".search-results-children .search-result"
				).length === 0
			) {
				return;
			}

			document
				.querySelectorAll(".search-results-children .search-result")
				.forEach((el) => {
					el.classList.remove("osadasami-search-result-active");

					if (
						el.querySelector(".tree-item-inner").textContent ===
						app.workspace.getActiveFile().basename
					) {
						el.classList.add("osadasami-search-result-active");
					}
				});
		});
	}

	onunload() {}
}
