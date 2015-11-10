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
    public class AdminController : ApiController
    {

        private UserService _service;

        public AdminController(UserService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<AdminDTO> Get()
        {
            return (_service.ListAdmin());
        }

        // POST: api/Global
        public HttpResponseMessage Post(AdminDTO admin)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdate(admin);

                return Request.CreateResponse(HttpStatusCode.Created, admin);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
