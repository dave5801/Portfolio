'use strict';


var app = app || {};

(function(module){

  //var projects = [];
  var listOfProjects = [];

  //CONSTRUCTOR for projects
  function Project(project){
    Object.assign(this, project);
  }

  Project.prototype.toHtml = function(){

    var projectTemplateScript = $("#projects-helpers-template").html();
    var projectTemplate = Handlebars.compile(projectTemplateScript);
    var compiledProjectHtml = projectTemplate(this);

    return compiledProjectHtml;

  };

  Project.loadProjects = function(){
    $.getJSON("scripts/projects.json", function(result){

      listOfProjects = result.map(function(projectObj){
        return new Project(projectObj);
      });

      listOfProjects.forEach(function(project) {
        $('#portfolio-projects-display').append(project.toHtml());
      });

    });
  }
  module.Project = Project;
})(app);
