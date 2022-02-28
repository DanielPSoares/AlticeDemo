#nullable disable
using AlticeDemoBackend.Data;
using AlticeDemoBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AlticeDemoBackend.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : ControllerBase
    {
        private readonly SurveyContext _context;

        public SurveyController(SurveyContext context)
        {
            _context = context;
        }

        // GET: /Survey
        [HttpGet]
        public JsonResult GetSurveys()
        {
            return new JsonResult(_context.Surveys.Include(s => s.BasicInfo).ToList());
        }

        // GET: /Survey/5
        [HttpGet("{id}")]
        public JsonResult GetSurvey(int id)
        {
            var survey = _context.Surveys.Find(id);

            if (survey == null)
            {
                return new JsonResult("Survey not found.");
            }

            return new JsonResult(survey);
        }

        // PUT: /Survey/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public JsonResult PutSurvey(int id, Survey survey)
        {
            if (id != survey.ID)
            {
                return new JsonResult("Bad request.");
            }

            _context.Entry(survey).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SurveyExists(id))
                {
                    return new JsonResult("Not found.");
                }
                else
                {
                    throw;
                }
            }

            return new JsonResult("Updated Successfully."); ;
        }

        // POST: /Survey/New
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("New")]
        public JsonResult PostSurvey(Survey survey)
        {
            _context.Surveys.Add(survey);
            _context.SaveChanges();

            return new JsonResult("Survey sucessfully saved.");
        }

        // DELETE: /Survey/5
        [HttpDelete("{id}")]
        public JsonResult DeleteSurvey(int id)
        {
            var survey = _context.Surveys.Find(id);
            if (survey == null)
            {
                return new JsonResult("Survey not found.");
            }

            _context.Surveys.Remove(survey);
            _context.SaveChanges();

            return new JsonResult("Survey sucessfully deleted.");
        }

        private bool SurveyExists(int id)
        {
            return _context.Surveys.Any(e => e.ID == id);
        }
    }
}
