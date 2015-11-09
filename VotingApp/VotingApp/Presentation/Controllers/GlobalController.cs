using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VotingApp.Presentation.Controllers
{
    public class GlobalController : ApiController
    {
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
        public void Post([FromBody]string value)
        {
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
