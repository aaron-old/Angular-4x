namespace Angular_4x
{
    using System.Web.Mvc;
    using System.Web.Routing;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                      name: "default",
                      url: "{*url}",
                      defaults: new { controller = "App", action = "Index" } // The view that bootstraps Angular 2 app
                  );
        }
    }
}
