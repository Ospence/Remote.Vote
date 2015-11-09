using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VotingApp.Presentation.Controllers
{
    // add a controller of each user type
    public class StaffController : ApiController
    {
        private StaffService _service;

        public StaffController(StaffService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<StaffDTO> Get()
        {
            return (_service.List());
        }

        // POST: api/Global
        public HttpResponseMessage Post(StaffDTO global)
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
