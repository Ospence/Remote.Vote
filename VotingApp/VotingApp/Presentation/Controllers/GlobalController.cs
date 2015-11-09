using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VotingApp.Services;
using VotingApp.Services.Models;

namespace VotingApp.Presentation.Controllers
{
    public class GlobalController : ApiController
    {

        private GlobalService _service;

        public GlobalController(GlobalService service) {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Global/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Global
        public HttpResponseMessage Post(GlobalAdminDTO global)
        {
            if (ModelState.IsValid) {
                global = _service.AddOrUpdate(global);
                return Request.CreateResponse(HttpStatusCode.Created, global);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        // PUT: api/Global/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Global/5
        public void Delete(int id)
        {
        }
    }
}
