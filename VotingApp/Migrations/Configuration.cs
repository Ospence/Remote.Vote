namespace VotingApp.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Domain.Models;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Microsoft.AspNet.Identity;
    using Services;

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
            if (!roleManager.RoleExists("Chairman")) {
                roleManager.Create(new Role { Name = "Chairman" });
            }
            if (!roleManager.RoleExists("Director")) {
                roleManager.Create(new Role { Name = "Director" });
            }
            if (!roleManager.RoleExists("Active")) {
                roleManager.Create(new Role { Name = "Active" });
            }

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            var user = userManager.FindByName("Test@test.com");
            if (user == null)
            {
                user = new ApplicationUser
                {
                    FirstName = "John",
                    LastName = "Lacey",
                    PhoneNumber = "111-111-1111",
                    UserName = "Test@test.com",
                    Email = "Test@test.com"
                };
                userManager.Create(user, "Qwerty1!");
            }
            userManager.AddToRole(user.Id, "Staff");

            var user2 = userManager.FindByName("West@West.com");
            if (user2 == null)
            {
                user2 = new ApplicationUser
                {
                    FirstName = "Schuyler",
                    LastName = "Evans",
                    PhoneNumber = "222-222-2222",
                    UserName = "West@West.com",
                    Email = "West@West.com"
                };
                userManager.Create(user2, "Qwerty2!");
            }
            userManager.AddToRole(user2.Id, "Chairman");

            var user3 = userManager.FindByName("Rest@Rest.com");
            if (user3 == null)
            {
                user3 = new ApplicationUser
                {
                    FirstName = "Sarah ",
                    LastName = "Smith",
                    PhoneNumber = "333-333-3333",
                    UserName = "Rest@Rest.com",
                    Email = "Rest@Rest.com"
                };
                userManager.Create(user3, "Qwerty3!");
            }
            userManager.AddToRole(user3.Id, "Director");

            var user4 = userManager.FindByName("Fest@Fest.com");
            if (user4 == null)
            {
                user4 = new ApplicationUser
                {
                    FirstName = "Nick",
                    LastName = "Scarfield",
                    PhoneNumber = "444-444-4444",
                    UserName = "Fest@Fest.com",
                    Email = "Fest@Fest.com"
                };
                userManager.Create(user4, "Qwerty4!");
            }
            userManager.AddToRole(user4.Id, "Director");

            var user5 = userManager.FindByName("Jest@Jest.com");
            if (user5 == null)
            {
                user5 = new ApplicationUser
                {
                    FirstName = "Megan",
                    LastName = "Brothers",
                    PhoneNumber = "555-555-5555",
                    UserName = "Jest@Jest.com",
                    Email = "Jest@Jest.com"
                };
                userManager.Create(user5, "Qwerty5!");
            }
            userManager.AddToRole(user5.Id, "Director");

            var user6 = userManager.FindByName("Best@Best.com");
            if (user6 == null)
            {
                user6 = new ApplicationUser
                {
                    FirstName = "Joe",
                    LastName = "Shmo",
                    PhoneNumber = "666-666-6666",
                    UserName = "Best@Best.com",
                    Email = "Best@Best.com"
                };
                userManager.Create(user6, "Qwerty6!");
            }
            userManager.AddToRole(user6.Id, "Director");


            context.Motions.AddOrUpdate(
                new Motion
                {
                    Title = "Test Motion",
                    Description = "Seeded motion to test listing",
                    CreatedById = user.Id,
                    SecondedById = null,

                    Active = true,
                    Seconded = false,
                    Passed = false,
                    WasEdited = false,
                    AllowSecond = false,

                    DateCreated = DateTime.Now
                }
            );         

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
