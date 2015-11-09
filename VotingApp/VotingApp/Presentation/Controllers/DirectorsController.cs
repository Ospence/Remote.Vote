using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VotingApp.Presentation.Controllers
{
    // add a controller of each user type
    public class DirectorsController : ApiController
    {
        private DirectorsService _service;

        public DirectorsController(DirectorsService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<DirectorsDTO> Get()
        {
            return (_service.List());
        }

        // POST: api/Global
        public HttpResponseMessage Post(DirectorsDTO global)
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
