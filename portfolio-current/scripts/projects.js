'use strict';

var projects = [];

$.getJSON("scripts/projects.json", function(result){
            $.each(result, function(i, field){
                projects.push(field);
            });
            console.log(projects);
            projects.forEach(function(projectObject) {
              listOfProjects.push(new Project(projectObject));
            });

            listOfProjects.forEach(function(project) {
                $('#portfolio-projects-display').append(project.toHtml());
            });

});

var listOfProjects = [];


//CONSTRUCTOR for projects
function Project(project){
    Object.assign(this, project);
}


Project.prototype.toHtml = function(){

  var projectTemplateScript = $("#projects-helpers-template").html();
  console.log(projectTemplateScript);

  var projectTemplate = Handlebars.compile(projectTemplateScript);

  var compiledProjectHtml = projectTemplate(this);

  return compiledProjectHtml;

};




console.log(listOfProjects);