var projectContext = {
  projects:[
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
    },

  ]
};


$(function () {

  Handlebars.registerHelper('projectDisplay', function(str){
   	return str || '';
  });

  var projectTemplateScript = $("#projects-helpers-template").html();

  var projectTemplate = Handlebars.compile(projectTemplateScript);

/*
  var projectContext = {
    projects:[
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
      },

    ]
  };*/

  var compiledProjectHtml = projectTemplate(projectContext);

  $('.projects-placeholder').html(compiledProjectHtml);

});
