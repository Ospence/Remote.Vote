namespace VotingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class made_dates_nullable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Motions", "DateCreated", c => c.DateTime());
            AlterColumn("dbo.Motions", "DateSeconded", c => c.DateTime());
            AlterColumn("dbo.Motions", "DateResult", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Motions", "DateResult", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Motions", "DateSeconded", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Motions", "DateCreated", c => c.DateTime(nullable: false));
        }
    }
}
