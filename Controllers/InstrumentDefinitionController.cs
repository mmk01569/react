﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InstrumentDefinitionController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<InstrumentDefinitionController> _logger;

        public InstrumentDefinitionController(ILogger<InstrumentDefinitionController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<InstrumentDefinition> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new InstrumentDefinition
            {
                Name = "Instrument" + index.ToString(),
                Location = "Enterprise"
            })
            .ToArray();
        }
    }
}
