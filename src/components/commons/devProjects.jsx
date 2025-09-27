import Icons from "./Icons";
import ExternalButton from "./ExternalButton";

export const developmentData = [
	{
		imgSrc: '/images/dev/001.webp',
		title: '8 Ball',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon HTML"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon CSS"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon JS"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon Tailwindcss"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'La 8 Ball, vous lui posez une question, et une réponse aléatoire apparait. Réalisé dans le cadre de ma formation. Disponible sur navigateur.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://8ball.plumedours.fr/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/tiktakline.webp',
		title: 'TikTakLine',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon HTML"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon CSS"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-react"
					alt="Icon react"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon Tailwindcss"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Inspiré du jeu de société Timeline, ce jeu qui mettra vos connaissances historiques à l\'épreuve !',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://tiktakline.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/004.webp',
		title: 'AquaFish',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-bootstrap"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Site fictif d\'une association d\'aquariophilie dans le cadre d\'une formation. Développé avec HTML, CSS et Bootstrap.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://aquafish.plumedours.fr/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/eval1"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	{
		imgSrc: '/images/dev/006.webp',
		title: 'Le pendu',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon HTML"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon CSS"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon JS"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Le jeu du pendu, développé en JavaScript, HTML et CSS. Se joue directement sur navigateur.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://pendu.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/penduV2"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/007.webp',
		title: 'Crack The Code',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon html"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon tailwindcss"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon js"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Une sorte de Mastermind en chiffre et bien plus dur... (car un code aléatoire entre 1000 et 9999 est généré...) Réalisé en JavaScript et Tailwindcss.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://crackthecode.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/crackthecode"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/008.webp',
		title: 'CHIFOUMI',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon html"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon css"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon js"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un petit jeu développé en JavaScript, le Chifoumi. Jouez contre l\'ordinateur. Se joue directement sur navigateur.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://chifoumi.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/chifoumi"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/010.webp',
		title: 'Crack The Code',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un jeu de réflexion dans l\'esprit du MasterMind, où il faut deviner une combinaison de chiffre. Développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.plumedours.crackthecode"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux Android',
	},
	{
		imgSrc: '/images/dev/011.webp',
		title: 'Dice Battle',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon html"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon tailwindcss"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon js"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un jeu de dé réalisé dans le cadre de ma formation, se joue sur navigateur.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://dicebattle.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/eval2"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/012.webp',
		title: 'DT Bâti-Paysage',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-react"
					alt="Icon react"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon tailwind"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Création d\'un site web pour une société de maçonnerie / paysagiste. Réalisé ReactJS et en utilisant le framework TailwindCSS. Un site vitrine pour présenter la société ainsi que ses prestations. Une galerie photo est également disponible.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://www.dtbatipaysage.plumedours.fr/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon view"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/new-dtbatipaysage"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	{
		imgSrc: '/images/dev/033.webp',
		title: 'Ça Des Boîtes',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-wordpress"
					alt="Icon wordpress"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Création d\'un site web pour une société d\'ostéopathie en entreprise, réalisé avec Wordpress. Toutes les informations et propositions pour améliorer la qualité de vie au travail avec l\'ostéopathie en entreprise.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://www.cadesboites.com/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon view"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	{
		imgSrc: '/images/dev/013.webp',
		title: 'Flying Mario',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un jeu type FlappyBird sur le thème Super Mario, réalisé avec Gdevelop, un logiciel de création de jeux vidéos. Se joue depuis un navigateur web. Une version Android est également disponible.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://flyingmario.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://plumedours.fr/divers/jeux/flyingmario/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer V2"
						/>
					}
				/>
				<ExternalButton
					src="https://plumedours.fr/divers/apk/flyingmario.apk"
					text={
						<Icons
							src="#icon-download"
							alt="Icon download"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="APK V2"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/015.webp',
		title: 'InfinityCube Calculator',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Cette application vous permet de calculer les dimensions d\'un cube infini, que vous pouvez visualiser en 3D dans la section « modélisation 3D ». Développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=infinitycubecalculator.plumedours"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/016.webp',
		title: 'MeMoPoKé',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-game"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un jeu memory sur le thème Pokémon, réalisé avec Gdevelop, un logiciel de création de jeux vidéos. Se joue depuis un navigateur web. Une version Android est également disponible.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://memopoke.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
				<ExternalButton
					src="https://plumedours.fr/divers/apk/memopoke.apk"
					text={
						<Icons
							src="#icon-download"
							alt="Icon download"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="APK"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/017.webp',
		title: 'MultiConverter',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Application permettant de convertir des unités de mesure et devises. Développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=plumedours.multiconverter"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/018.webp',
		title: 'Le pendu',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Le jeu du pendu version application Android, développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=pendu.plumedours"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux Android',
	},
	{
		imgSrc: '/images/dev/019.webp',
		title: 'PushPush',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Un jeu type Sokoban, réalisé avec RPG Maker, un logiciel de création de jeux vidéos. Se joue depuis un navigateur web.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://pushpush.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/020.webp',
		title: 'QuizDepartements',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'QuizDepartement est un jeu pour smartphone Android, développé avec Kodular, un site AppBuilder no code. Le jeu est disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.plumedours.quizdepartements"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux Android',
	},
	{
		imgSrc: '/images/dev/021.webp',
		title: 'QwirkleScoe',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Application permettant de tenir les scores d\'une partie de Qwirkle, un jeu de société type réflexion. Développé avec Kodular, un site AppBuilder no-code.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.plumedours.qwirklescore"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/022.webp',
		title: 'ScoreSheet',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Application permettant de tenir les scores de vos parties de jeux. Développé avec Kodular, un site AppBuilder no-code.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.plumedours.scoresheet"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/024.webp',
		title: 'Snake',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-pc"
					alt="Icon pc"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Le jeu du Snake réalisé avec Gdevelop, un logiciel de création de jeux vidéos. Se joue depuis un navigateur web.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://snake.plumedours.fr/"
					text={
						<Icons
							src="#icon-game"
							alt="Icon game"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Jouer"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux par navigateur',
	},
	{
		imgSrc: '/images/dev/025.webp',
		title: 'SuiteSoundMemory',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Le célèbre jeu Simon, où il faut répéter la suite de donnée par l\'ordinateur. Le jeu est développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlaySotre.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.plumedours.suitesoundmemory"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux Android',
	},
	{
		imgSrc: '/images/dev/026.webp',
		title: 'XO Tic Tac Toe',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-game"
					alt="Icon game"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Le jeu du morpion, développé avec Kodular, un site AppBuilder no-code. Disponible sur le Play Sotre.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=com.xotictactoe.plumedours"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Jeux Android',
	},
	{
		imgSrc: '/images/dev/027.webp',
		title: 'Traducteur',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Applications Android, un traducteur multi-langue. Développé avec Kodular, un site AppBuilder no-code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=plumedours.traducteur"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/029.webp',
		title: 'YamScore',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-android"
					alt="Icon android"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-phone"
					alt="Icon phone"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'YamScore est une application Android permettant de noté les score lors d\'une partie de Yams. Ce n\'est pas un jeu, mais une feuille de score. Réalisé avec Kodular, un site AppBuilder no code. Disponible sur le PlayStore.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://play.google.com/store/apps/details?id=plumedours.yamscore"
					text={
						<Icons
							src="#icon-playstore"
							alt="Icon playstore"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="PlayStore"
						/>
					}
				/>
			</div>
		),
		category: 'Applications Android',
	},
	{
		imgSrc: '/images/dev/030.webp',
		title: 'LiloLaRue Création',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-wordpress"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-woocommerce"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Boutique en ligne d\'objet d\'art, d\'articles de décoration, d\'art de la table, de cadeaux personnalisés et bien d\'autre,. Réalisé avec Wordpress et Woocommerce.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="#"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Site hors ligne"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	{
		imgSrc: '/images/dev/031.webp',
		title: 'InfosCommune',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-react"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-tailwind"
					alt="Icon View"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'L\'application InfosCommune permet d\'obtenir des informations sur les communes de France, par le biais de l\'API data-gouv. Développé avec React et TailwindCSS.',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://infoscommunes.plumedours.fr/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/infoscommunes"
					text={
						<Icons
							src="#icon-github"
							alt="Icon Github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	{
		imgSrc: '/images/dev/032.webp',
		title: 'Kaamekott',

		icons: (
			<div className="flex flex-row gap-1 my-1">
				<Icons
					src="#icon-html"
					alt="Icon html"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-css"
					alt="Icon css"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
				<Icons
					src="#icon-js"
					alt="Icon js"
					className="w-6 h-6 text-neutral-100 opacity-50 group-hover:opacity-100"
				/>
			</div>
		),
		desc: 'Simple générateur de citations de la série Kaamelott, réalisée par Alexandre Astier. Le fichier json à été pris sur l\'api de sin0light (que j\'ai modifié pour rajouté des éléments) : https://github.com/sin0light/api-kaamelott',
		btns: (
			<div className="flex flex-row gap-2 my-1">
				<ExternalButton
					src="https://kaamekott.plumedours.fr/"
					text={
						<Icons
							src="#icon-eye"
							alt="Icon View"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir le site"
						/>
					}
				/>
				<ExternalButton
					src="https://github.com/plumedours/kaamekott"
					text={
						<Icons
							src="#icon-github"
							alt="Icon github"
							className="w-6 h-6 text-neutral-900 opacity-50 group-hover:opacity-100"
							text="Voir sur Github"
						/>
					}
				/>
			</div>
		),
		category: 'Applications web',
	},
	// Ajoutez d'autres projets ici
];
