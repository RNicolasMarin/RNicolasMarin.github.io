var skills = new Map();

skills.set("Lenguajes", ["Java", "Kotlin", "Javascript"]);
skills.set("Android", ["Fragments", "Styles", "Service", "BroadcastReceiver", "RecyclerView", "Notification", "AlarmManager", "Room", "Retrofit", "Glide"]);
skills.set("VCS", ["Git (GitLab)", "Git (GitHub)"]);
skills.set("Metodologías, comunicación y trabajo en equipo", ["Scrum", "Zoom", "Meet", "Trello", "Jira"]);
skills.set("DBMS", ["PostgreSQL", "MySQL", "MongoDB"]);
skills.set("S.O", ["Windows", "Linux", "Android"]);
skills.set("IDE", ["Eclipse", "Android Studio"]);
skills.set("Editores", ["Visual Studio Code", "Sublime Text"]);
skills.set("Otros", ["HTML", "JSON", "XML", "JUnit", "Hibernate", "POO", "Sql", "Linea de Comandos", "Maven", "Gradle", "Jsoup", "Swing", "WindowBuilder", "Consumo de Api-rest"]);


var projects = [
    { 
		name: 'Updates Notifier', 
		description: 'Aplicacion Android que te avisa si algun contenido de una Pagina Web ha cambiado.', 
		link: 'https://gitlab.com/NicolasMarin/updates-notifier',
		image: 'project_image_1.png',
	},
	{ 
		name: 'MyPokedex', 
		description: 'Aplicacion Android que recrea un Pokedex del anime de Pokemon, consumiendo la Api-Rest PokéAPI.', 
		link: 'https://gitlab.com/NicolasMarin/mypokedex',
		image: 'project_image_2.png',
	},
	{ 
		name: 'Rename Files', 
		description: 'Aplicacion de linea de comandos para renombrar todos los archivos de un directorio con el mismo patron.', 
		link: 'https://gitlab.com/NicolasMarin/rename-files',
	},
	{ 
		name: 'ImagesToPdf', 
		description: 'Programa Java para convertir los archivos de imágenes en un directorio en un archivo PDF.', 
		link: 'https://gitlab.com/NicolasMarin/images-to-pdf',
	}
];

function drawProjectsTable(){
	var columnMax = window.outerWidth > 1685 ? 2 : (window.outerWidth > 865 ? 1 : 0);

	var htmlToInsertProjects = "";
	projects.forEach(function (element, index) {
		if(index % columnMax == 0){
			htmlToInsertProjects += "<tr>";
		}

		var classAcordingImage = (columnMax == 0 || (element.image != undefined && element.image != null)) ?
			"project-item-info" : "project-item-info-full-width";
		var projectClass = (columnMax == 0) ? 'project-item-middle-width' : 'project-item';

		htmlToInsertProjects += 
			`<th>\n
				<div class="${projectClass}">\n
					<div class="${classAcordingImage}">\n
						<div class="project-item-title-description-div">\n
							<h3 class="project-title">${element.name}</h3>\n
							<p class="project-description">${element.description}</p>\n
						</div>\n
	
						<div class="project-button-div">\n
							<a class="project-button-link" href="${element.link}">\n
								<span class="button-repo">\n
									<i id="button-repo-icon" class="fas fa-code"></i>\n
									Repositorio\n
								</span>\n
							</a>\n
						</div>\n
					</div>\n`;

		if(columnMax != 0 && element.image != undefined && element.image != null){
			htmlToInsertProjects += 
					`<div class="project-item-image-div">\n
						<img src="./image/${element.image}" class="project-item-image"/>\n
					</div>\n`;
		}

		htmlToInsertProjects += 
				`</div>\n
			</th>`;

		if(index % columnMax != 0){
			htmlToInsertProjects += "</tr>";
		}
	});
	document.getElementById("project-section-div").innerHTML = htmlToInsertProjects;
}

function loadContent() {
	var htmlToInsertSkills = "";
	
	skills.forEach((value, key) => {
		htmlToInsertSkills += `<h4 class='skill-title'>${key}</h4>`;
		skills.get(key).forEach(element => {
			htmlToInsertSkills += `<span class="button">${element}</span>`;
		});
	});
	document.getElementById("skills-section-div").innerHTML = htmlToInsertSkills;

	drawProjectsTable();
}

function menuIconAction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function onMouseOver(id){
	var buttonId = "";
	switch(id){
		case 'aboutMe-section': {
			buttonId = "button-aboutMe";
			break;
		}
		case 'skills-section': {
			buttonId = "button-skills";
			break;
		}
		case 'projects-section': {
			buttonId = "button-projects";
			break;
		}
		case 'contact-section': {
			buttonId = "button-contact";
			break;
		}
	}

	var x = document.getElementById(buttonId);
	if (x.className === "not-pressed") {
		x.className = "pressed";
	} else {
		x.className = "not-pressed";
	}
}