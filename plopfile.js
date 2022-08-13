module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Creating new react component",
    prompts: [
      {
        type: "input",
        name: "name",
      },
    ],
    actions: () => [
      {
        type: "add",
        templateFile: "plop-templates/component/index.hbs",
        path: "components/{{pascalCase name}}/index.js",
      },
      {
        type: "add",
        templateFile: "plop-templates/component/component.hbs",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.jsx",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Creating new page",
    prompts: [
      {
        type: "input",
        name: "name",
      },
    ],
    actions: () => [
      {
        type: "add",
        templateFile: "plop-templates/page/index.hbs",
        path: "pages/{{name}}/index.jsx",
      },
      {
        type: "add",
        path: "pages/{{name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });
};
