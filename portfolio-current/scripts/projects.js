'use strict';

var projects = [
  {
    name: "Project 1",
    description: "Learning some new Awesome Platform"
  },
  {
    name: "Project 2",
    description: "Cool Algorithms"
  },
  {
    name: "Project 3",
    description: "Coding some amazing App"
  }
];


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


projects.forEach(function(projectObject) {
  listOfProjects.push(new Project(projectObject));
});

listOfProjects.forEach(function(project) {
    $('#portfolio-projects-display').append(project.toHtml());
});