namespace VotingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class user_ids_in_motion : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Motions", "CreatedById", c => c.String());
            AlterColumn("dbo.Motions", "SecondedById", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Motions", "SecondedById", c => c.Int(nullable: false));
            AlterColumn("dbo.Motions", "CreatedById", c => c.Int(nullable: false));
        }
    }
}
