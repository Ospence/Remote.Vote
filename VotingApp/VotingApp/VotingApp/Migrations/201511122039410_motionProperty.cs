namespace VotingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class motionProperty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Motions", "AllowSecond", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Motions", "AllowSecond");
        }
    }
}
