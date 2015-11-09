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

        public GlobalController(GlobalService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<GlobalAdminDTO> Get()
        {
            return (_service.List());
        }

        // POST: api/Global
        public HttpResponseMessage Post(GlobalAdminDTO global)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdate(global);

                return Request.CreateResponse(HttpStatusCode.Created, global);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
