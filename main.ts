import { CharacterSheetRenderer } from "character_sheet";
import { MarkdownPostProcessorContext, parseYaml, Plugin } from "obsidian";

export default class AriaPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor(
			"aria",
			this.processMarkdown.bind(this)
		);
	}

	async processMarkdown(
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext
	): Promise<void> {
		const yaml = parseYaml(source);

		ctx.addChild(new CharacterSheetRenderer(el, yaml));
	}

	onunload() {}
}
