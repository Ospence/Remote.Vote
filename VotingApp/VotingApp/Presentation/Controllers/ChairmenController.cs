using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VotingApp.Presentation.Controllers
{
    // add a controller of each user type
    public class ChairmenController : ApiController
    {
        private ChairmenService _service;

        public ChairmenController(ChairmenService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<ChairmenDTO> Get()
        {
            return (_service.List());
        }

        // POST: api/Global
        public HttpResponseMessage Post(ChairmenDTO global)
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
