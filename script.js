function drawProjectsTable(){
	var windowWidth = window.innerWidth
	var columnMax = windowWidth > 1685 ? 2 : (windowWidth > 865 ? 1 : 0);
	var projects = JSON.parse(projectsData);

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
	var skills = JSON.parse(skillsData);
	
	for (index in skills) {
		htmlToInsertSkills += `<h4 class='skill-title'>${skills[index]["key"]}</h4>`;
		skills[index]["values"].forEach(element => {
			htmlToInsertSkills += `<span class="button">${element}</span>`;
		});
	}
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