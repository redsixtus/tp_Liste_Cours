var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./home/home.module#HomePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"courses","loadChildren":"./courses/courses.module#CoursesPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/courses/courses-routing.module.ts","module":"CoursesPageRoutingModule","children":[{"path":"","component":"CoursesPage"}],"kind":"module"}],"module":"CoursesPageModule"}]},{"path":"saisie-cours","loadChildren":"./saisie-cours/saisie-cours.module#SaisieCoursPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/saisie-cours/saisie-cours-routing.module.ts","module":"SaisieCoursPageRoutingModule","children":[{"path":"","component":"SaisieCoursPage"}],"kind":"module"}],"module":"SaisieCoursPageModule"}]},{"path":"liste-cours","loadChildren":"./liste-cours/liste-cours.module#ListeCoursPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/liste-cours/liste-cours-routing.module.ts","module":"ListeCoursPageRoutingModule","children":[{"path":"","component":"ListeCoursPage"}],"kind":"module"}],"module":"ListeCoursPageModule"}]},{"path":"rechercher-cours","loadChildren":"./rechercher-cours/rechercher-cours.module#RechercherCoursPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/rechercher-cours/rechercher-cours-routing.module.ts","module":"RechercherCoursPageRoutingModule","children":[{"path":"","component":"RechercherCoursPage"}],"kind":"module"}],"module":"RechercherCoursPageModule"}]}],"kind":"module"}]}