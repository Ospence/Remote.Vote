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
    // add a controller of each user type
    public class StaffController : ApiController
    {
        private UserService _service;

        public StaffController(UserService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<StaffDTO> Get()
        {
            return (_service.ListStaff());
        }

        // POST: api/Global
        public HttpResponseMessage Post(StaffDTO staff)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdateStaff(staff);

                return Request.CreateResponse(HttpStatusCode.Created, staff);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
