using AlticeDemoBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace AlticeDemoBackend.Data
{
    public class SurveyContext : DbContext
    {
        public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
        {
        }

        public DbSet<Survey> Surveys { get; set; }
        public DbSet<BasicInfo> BasicInfo { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Survey>().ToTable("Survey");
        //    modelBuilder.Entity<BasicInfo>().ToTable("BasicInfo");
        //}
    }
}
