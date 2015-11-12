namespace VotingApp.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Domain.Models;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Microsoft.AspNet.Identity;

    internal sealed class Configuration : DbMigrationsConfiguration<VotingApp.Infrastructure.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(VotingApp.Infrastructure.ApplicationDbContext context)
        {

            var roleStore = new RoleStore<Role>(context);

            var roleManager = new RoleManager<Role>(roleStore);
            if (!roleManager.RoleExists("Admin")) {
                roleManager.Create(new Role { Name = "Admin" });
            }
            if (!roleManager.RoleExists("Staff")) {
                roleManager.Create(new Role { Name = "Staff" });
            }
            if (!roleManager.RoleExists("Chairmen")) {
                roleManager.Create(new Role { Name = "Chairmen" });
            }
            if (!roleManager.RoleExists("Director")) {
                roleManager.Create(new Role { Name = "Director" });
            }
            if (!roleManager.RoleExists("Active")) {
                roleManager.Create(new Role { Name = "Active" });
            }
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //


        }
    }
}
