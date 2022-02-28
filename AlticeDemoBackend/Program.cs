using AlticeDemoBackend.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddCors(c =>
//{
//    c.AddDefaultPolicy(options => options.AllowAnyOrigin().AllowAnyMethod()
//     .AllowAnyHeader());
//});

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<SurveyContext>(opt =>
    opt.UseSqlServer((builder.Configuration.GetConnectionString("SQLConnection"))));

builder.Services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
                .Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
                = new DefaultContractResolver());

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
