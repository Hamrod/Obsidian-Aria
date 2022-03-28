import { MarkdownRenderChild } from "obsidian";

export class CharacterSheetRenderer extends MarkdownRenderChild {
	characterSheetE1: HTMLDivElement;

	constructor(containerE1: HTMLElement, private params: any) {
		super(containerE1);

		this.characterSheetE1 = this.containerEl.createDiv({
			cls: "charactersheet-aria",
		});

		const divider = this.characterSheetE1.createDiv({
			cls: "divider",
		});

		divider.createDiv({
			cls: "hr",
		});

		const test = new Image();
		test.src =
			"https://raw.githubusercontent.com/Hamrod/Obsidian-Aria/master/images/logoAria%20V2.webp";

		divider.appendChild(test);

		divider.createDiv({
			cls: "hr",
		});

		const upDiv = this.characterSheetE1.createDiv({ cls: "row" });

		const upLeftDiv = upDiv.createDiv();

		const aventurierDiv = upLeftDiv.createDiv({
			cls: "title",
			text: "Aventurier",
		});

		aventurierDiv.createDiv({
			text: `${params.metier}`,
		});

		aventurierDiv.createDiv({
			text: `Nom : ${params.nom}`,
		});

		aventurierDiv.createDiv({
			text: `Âge : ${params.age}`,
		});

		const caracteristiqueDiv = upLeftDiv.createDiv({
			cls: "title",
			text: "Caractéristiques",
		});

		caracteristiqueDiv.createDiv({
			text: `Force : ${params.for}`,
		});

		caracteristiqueDiv.createDiv({
			text: `Dextérité : ${params.dex}`,
		});

		caracteristiqueDiv.createDiv({
			text: `Endurance : ${params.end}`,
		});

		caracteristiqueDiv.createDiv({
			text: `Intelligence : ${params.int}`,
		});

		caracteristiqueDiv.createDiv({
			text: `Charisme : ${params.cha}`,
		});

		const vivreSurvivreDiv = upDiv.createDiv({
			cls: "title",
			text: "Vivre ou Survivre",
		});

		const armeDiv = vivreSurvivreDiv.createDiv({ cls: "weapon" });

		armeDiv.createDiv({
			text: `Arme`,
		});

		armeDiv.createDiv({
			text: `Dégâts`,
		});

		for (let index = 0; index < params.armes.length; index++) {
			const arme = params.armes[index];
			this.weapon(arme.nom, arme.degats, vivreSurvivreDiv);
		}

		const upRightDiv = upDiv.createDiv();

		this.circleOnText(
			"Points de vie",
			params.end > 14 ? 14 : params.end,
			upRightDiv
		);
		this.circleOnText("Blessure", params.blessures ?? 0, upRightDiv);
		this.circleOnText("Protection", params.protection ?? 0, upRightDiv);
	}

	private weapon(nom: string, degats: string, container: HTMLElement) {
		const div = container.createDiv({
			cls: "weapon",
		});

		div.createDiv({
			text: `${nom}`,
		});

		div.createDiv({
			cls: "circle",
			text: `${degats}`,
		});
	}

	private circleOnText(name: string, value: string, container: HTMLElement) {
		const div = container.createDiv({
			cls: "column",
		});

		div.createDiv({
			cls: "circle",
			text: `${value}`,
		});

		div.createDiv({
			text: `${name}`,
		});
	}
}
